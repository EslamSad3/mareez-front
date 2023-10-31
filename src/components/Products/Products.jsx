import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import SearchDropDown from '../Utils/SearchDropDown';
import SideFilture from '../Utils/SideFilture';
import CardProductsContainer from './CardProductsContainer';
import Pagination from '../Utils/Pagination';
function Products() {



  return (
    <>
      <div style={{minHeight:'670px'}}>
            <Container>
                <SearchDropDown title='400 منتج متاح .........'/>
                <Row className='d-flex flex-row'>
                    <Col sm='2' xs='4' md='2' className='d-flex'>
                        <SideFilture/>
                    </Col>
                    <Col  sm='10' xs='8' md='10'>
                        <CardProductsContainer/>
                    </Col>
                </Row>
            </Container>
            <Pagination/>
      </div>
   
    </>
  );
}

export default Products;
