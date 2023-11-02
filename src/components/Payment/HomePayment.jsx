import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import PaymentCheckout from './PaymentCheckout'
import PaymentItem from './PaymentItem'

function HomePayment() {
  return (
    <Container style={{minHeight:'500px'}} dir='ltr'>
    <Row dir='rtl'>
        <h3 className='mt-4'>
             عنوان الشحن
        </h3>
    </Row>
        <Row className='d-flex justify-content-center' dir=''>

            <Col xs='12' md='4' dir='ltr'>
                <PaymentCheckout/>
            </Col>

            <Col xs='12' md='8' dir='rtl'>
                <PaymentItem/>
            </Col>
        </Row>

</Container>
  )
}

export default HomePayment