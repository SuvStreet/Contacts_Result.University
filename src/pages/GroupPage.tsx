import { memo, useMemo } from 'react'
import { Col, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { GroupContactsCard } from 'src/components/GroupContactsCard'
import { Empty } from 'src/components/Empty'
import { ContactCard } from 'src/components/ContactCard'
import { useAppSelector } from 'src/redux/Hooks'

export const GroupPage = memo(() => {
  const { groupId } = useParams<{ groupId: string }>()

  const { isLoading, contacts } = useAppSelector((state) => state.contacts)
  const groupContacts = useAppSelector((state) =>
    state.groupContacts.find(({ id }) => id === groupId)
  )

  const currentContacts = useMemo(() => {
    if (!groupContacts) return []
    return contacts.filter(({ id }) => groupContacts.contactIds.includes(id))
  }, [contacts, groupContacts])

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <Row className="g-4">
      {groupContacts ? (
        <>
          <Col xxl={12}>
            <Row xxl={3}>
              <Col className="mx-auto">
                <GroupContactsCard groupContacts={groupContacts} />
              </Col>
            </Row>
          </Col>
          <Col>
            <Row xxl={4} className="g-4">
              {currentContacts.map((contact) => (
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
