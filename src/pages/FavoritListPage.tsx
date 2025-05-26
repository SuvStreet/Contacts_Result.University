import { memo, useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import { ContactCard } from 'src/components/ContactCard'
import { creatorContactsAction } from 'src/redux/Action'
import { useAppDispatch, useAppSelector } from 'src/redux/Hooks'

export const FavoritListPage = memo(() => {
  const favoriteContacts = useAppSelector((state) => state.favoriteContacts)
  const { isLoading, contacts } = useAppSelector((state) => state.contacts)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(creatorContactsAction())
  }, [dispatch])

  if (isLoading) {
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
