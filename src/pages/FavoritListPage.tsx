import { memo } from 'react'
import { Col, Row } from 'react-bootstrap'
import { ContactCard } from 'src/components/ContactCard'
import { useAppSelector } from 'src/redux/Hooks'

export const FavoritListPage = memo(() => {
  const favoriteContacts = useAppSelector((state) => state.favoriteContacts)
  const contacts = useAppSelector((state) => state.contacts)

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
