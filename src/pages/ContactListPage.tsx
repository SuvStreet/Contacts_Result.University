import { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { observer } from 'mobx-react-lite'

import { ContactCard } from 'src/components/ContactCard'
import { FilterForm, FilterFormValues } from 'src/components/FilterForm'

import { contactsStore } from 'src/mobX/contactsStore'
import { groupsContactsStore } from 'src/mobX/groupsContactsStore'

export const ContactListPage = observer(() => {
  const contacts = contactsStore.contacts
  const groupContacts = groupsContactsStore.groupContacts

  const [filteredContacts, setFilteredContacts] = useState(
    contacts || []
  )

  useEffect(() => {
    contactsStore.getAllContacts()
    groupsContactsStore.getAllGroupContacts()
  }, [])

  useEffect(() => {
    setFilteredContacts(contacts)
  }, [contacts])

  if (
    contactsStore.status === 'pending' ||
    groupsContactsStore.status === 'pending'
  ) {
    return <div>Loading...</div>
  }

  const onSubmit = (fv: Partial<FilterFormValues>) => {
    let findContacts = contacts

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
