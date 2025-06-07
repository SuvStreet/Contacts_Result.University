import { memo } from 'react'
import { Col, Row } from 'react-bootstrap'
import { GroupContactsCard } from 'src/components/GroupContactsCard'
import { useGetGroupContactsQuery } from 'src/redux/reducers/GroupContactsReducer'

export const GroupListPage = memo(() => {
  const { data: groupContacts } = useGetGroupContactsQuery()

  if (!groupContacts) {
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
