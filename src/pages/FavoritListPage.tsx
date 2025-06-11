import { observer } from 'mobx-react-lite'
import { useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'

import { ContactCard } from 'src/components/ContactCard'
import { contactsStore } from 'src/mobX/contactsStore'

export const FavoritListPage = observer(() => {
  const favoriteContacts = contactsStore.favoritContacts
  const contacts = contactsStore.contacts

  useEffect(() => {
    contactsStore.getAllContacts()
  }, [])

  if (contactsStore.status === 'pending') {
    return <div>Loading...</div>
  }

  return (
    <Row xxl={4} className="g-4">
      {contacts
        .filter(({ id }) => favoriteContacts.includes(id))
        .map((contact) => (
          <Col key={contact.id}>
            <ContactCard contact={contact} withLink />
          </Col>
        ))}
    </Row>
  )
})
