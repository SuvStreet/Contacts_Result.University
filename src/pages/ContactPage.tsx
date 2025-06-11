import { observer } from 'mobx-react-lite'
import { useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'

import { ContactCard } from 'src/components/ContactCard'
import { Empty } from 'src/components/Empty'
import { contactsStore } from 'src/mobX/contactsStore'

export const ContactPage = observer(() => {
  const { contactId } = useParams<{ contactId: string }>()
  const contacts = contactsStore.contacts

  useEffect(() => {
    contactsStore.getAllContacts()
  }, [])

  if (contactsStore.status === 'pending') {
    return <div>Loading...</div>
  }

  const contact = contacts.find(({ id }) => id === contactId)

  return (
    <Row xxl={3}>
      <Col className={'mx-auto'}>
        {contact ? <ContactCard contact={contact} /> : <Empty />}
      </Col>
    </Row>
  )
})
