import { useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { observer } from 'mobx-react-lite'

import { GroupContactsCard } from 'src/components/GroupContactsCard'
import { Empty } from 'src/components/Empty'
import { ContactCard } from 'src/components/ContactCard'
import { contactsStore } from 'src/mobX/contactsStore'
import { groupsContactsStore } from 'src/mobX/groupsContactsStore'

export const GroupPage = observer(() => {
  const { groupId } = useParams<{ groupId: string }>()
  const contacts = contactsStore.contacts
  const groupContacts = groupsContactsStore.groupContacts

  useEffect(() => {
    contactsStore.getAllContacts()
    groupsContactsStore.getAllGroupContacts()
  }, [])

  if (
    contactsStore.status === 'pending' ||
    groupsContactsStore.status === 'pending'
  ) {
    return <div>Loading...</div>
  }

  const selectedGroupContacts = groupContacts.find(({ id }) => id === groupId)

  if (!selectedGroupContacts) return <Empty />

  const subscribedUsers = contacts.filter(({ id }) =>
    selectedGroupContacts.contactIds.includes(id)
  )

  return (
    <Row className="g-4">
      {selectedGroupContacts ? (
        <>
          <Col xxl={12}>
            <Row xxl={3}>
              <Col className="mx-auto">
                <GroupContactsCard groupContacts={selectedGroupContacts} />
              </Col>
            </Row>
          </Col>
          <Col>
            <Row xxl={4} className="g-4">
              {subscribedUsers.map((contact) => (
                <Col key={contact.id}>
                  <ContactCard contact={contact} withLink />
                </Col>
              ))}
            </Row>
          </Col>
        </>
      ) : (
        <Empty />
      )}
    </Row>
  )
})
