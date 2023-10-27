import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import AddBrandsAdmin from './Add_Brands_Admin';
function BrandsAdmin() {
  console.log('brands')
  return(
    <Container style={{minHeight:'610px'}}>
    <Row className='py-3'>
        <Col   sm='12' xs='12' >
          <AddBrandsAdmin/>
        </Col>
    </Row>
</Container>
  )
  
}

export default BrandsAdmin;
