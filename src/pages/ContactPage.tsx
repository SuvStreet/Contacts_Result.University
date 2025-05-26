import { Col, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { ContactCard } from 'src/components/ContactCard'
import { Empty } from 'src/components/Empty'
import { useAppSelector } from 'src/redux/Hooks'

export const ContactPage = () => {
  const { contactId } = useParams<{ contactId: string }>()
  const { isLoading, contacts } = useAppSelector((state) => state.contacts)

  const contact = contacts.find(({ id }) => id === contactId)

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <Row xxl={3}>
      <Col className={'mx-auto'}>
        {contact ? <ContactCard contact={contact} /> : <Empty />}
      </Col>
    </Row>
  )
}
