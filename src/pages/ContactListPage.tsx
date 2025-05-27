import { memo, useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { ContactCard } from 'src/components/ContactCard'
import { FilterForm, FilterFormValues } from 'src/components/FilterForm'
import { ContactDto } from 'src/types/dto/ContactDto'
import { useAppDispatch, useAppSelector } from 'src/redux/Hooks'
import {
  creatorContactsAction,
  creatorGroupContactsAction,
} from 'src/redux/Action'

export const ContactListPage = memo(() => {
  const dispatch = useAppDispatch()
  const { isLoading, contacts } = useAppSelector((state) => state.contacts)
  const { isLoading: isLoadingGroup, groupContacts } = useAppSelector(
    (state) => state.groupContacts
  )
  const [filteredContacts, setFilteredContacts] =
    useState<ContactDto[]>(contacts)

  useEffect(() => {
    dispatch(creatorContactsAction())
    dispatch(creatorGroupContactsAction())

    setFilteredContacts(contacts)
  }, [dispatch, contacts])
  
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

  if (isLoading || isLoadingGroup) {
    return <div>Loading...</div>
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
