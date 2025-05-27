import { memo, useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import { GroupContactsCard } from 'src/components/GroupContactsCard'
import { creatorGroupContactsAction } from 'src/redux/Action'
import { useAppDispatch, useAppSelector } from 'src/redux/Hooks'

export const GroupListPage = memo(() => {
  const { isLoading, groupContacts } = useAppSelector(
    (state) => state.groupContacts
  )
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(creatorGroupContactsAction())
  }, [dispatch])

  if (isLoading) {
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
