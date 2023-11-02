import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import UserCheckoutAddAddress from './UserCheckoutِAddAddress'
import FormAddressUser from './FormAddressUser'

function HomeAddAddress() {
  return (
    <Container style={{minHeight:'500px'}} dir='ltr'>
    <Row dir='rtl'>
        <h3 className='mt-4'>
             عنوان الشحن
        </h3>
    </Row>
        <Row className='d-flex justify-content-center' dir=''>

            <Col xs='12' md='4' dir='ltr'>
                <UserCheckoutAddAddress/>
            </Col>

            <Col xs='12' md='8' dir='rtl'>
                <FormAddressUser/>
            </Col>
        </Row>

</Container>
  )
}

export default HomeAddAddress