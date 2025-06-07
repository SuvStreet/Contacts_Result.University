import { memo, useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'

import { ContactCard } from 'src/components/ContactCard'
import { FilterForm, FilterFormValues } from 'src/components/FilterForm'
import { ContactDto } from 'src/types/dto/ContactDto'
import { useGetContactsQuery } from 'src/redux/contact'
import { useGetGroupContactsQuery } from 'src/redux/group'

export const ContactListPage = memo(() => {
  const { data: contacts } = useGetContactsQuery()
  const { data: groupContacts } = useGetGroupContactsQuery()

  const [filteredContacts, setFilteredContacts] = useState<ContactDto[]>(
    contacts || []
  )

  useEffect(() => {
    if (!contacts) return

    setFilteredContacts(contacts)
  }, [contacts])

  if (!contacts || !groupContacts) {
    return <div>Loading...</div>
  }

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
