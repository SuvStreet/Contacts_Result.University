import { observer } from 'mobx-react-lite'
import { useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'

import { GroupContactsCard } from 'src/components/GroupContactsCard'
import { groupsContactsStore } from 'src/mobX/groupsContactsStore'

export const GroupListPage = observer(() => {
  const groupContacts = groupsContactsStore.groupContacts

  useEffect(() => {
    groupsContactsStore.getAllGroupContacts()
  }, [])

  if (groupsContactsStore.status === 'pending') {
    return <div>Loading...</div>
  }

  return (
    <Row xxl={4}>
      {groupContacts.map((groupContacts) => (
        <Col key={groupContacts.id}>
          <GroupContactsCard groupContacts={groupContacts} withLink />
        </Col>
      ))}
    </Row>
  )
})
