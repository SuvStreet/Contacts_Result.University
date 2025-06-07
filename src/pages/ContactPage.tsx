import { Col, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { ContactCard } from 'src/components/ContactCard'
import { Empty } from 'src/components/Empty'
import { useGetContactsQuery } from 'src/redux/reducers/ContactsReducer'

export const ContactPage = () => {
  const { contactId } = useParams<{ contactId: string }>()
  const {data: contacts } = useGetContactsQuery()

  if (!contacts) {
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
}
