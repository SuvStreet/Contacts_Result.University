import { memo, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { ContactCard } from 'src/components/ContactCard'
import { FilterForm, FilterFormValues } from 'src/components/FilterForm'
import { ContactDto } from 'src/types/dto/ContactDto'
import { useAppSelector } from 'src/redux/Hooks'

export const ContactListPage = memo(() => {
  const contacts = useAppSelector((state) => state.contacts)
  const groupContacts = useAppSelector((state) => state.groupContacts)
  const [filteredContacts, setFilteredContacts] =
    useState<ContactDto[]>(contacts)

  const onSubmit = (fv: Partial<FilterFormValues>) => {
    let findContacts: ContactDto[] = contacts

    if (fv.name) {
      const fvName = fv.name.toLowerCase()
      findContacts = findContacts.filter(
        ({ name }) => name.toLowerCase().indexOf(fvName) > -1
      )
    }

    if (fv.groupId) {
      const groupContact = groupContacts.find(({ id }) => id === fv.groupId)

      if (groupContact) {
        findContacts = findContacts.filter(({ id }) =>
          groupContact.contactIds.includes(id)
        )
      }
    }

    setFilteredContacts(findContacts)
  }

  return (
    <Row xxl={1}>
      <Col className="mb-3">
        <FilterForm
          groupContactsList={groupContacts}
          initialValues={{}}
          onSubmit={onSubmit}
        />
      </Col>
      <Col>
        <Row xxl={4} className="g-4">
          {filteredContacts.map((contact) => (
            <Col key={contact.id}>
              <ContactCard contact={contact} withLink />
            </Col>
          ))}
        </Row>
      </Col>
    </Row>
  )
})
