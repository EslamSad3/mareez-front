import React from 'react';
// import styles from './Offers.module.css';
import {  Col, Container, Row } from 'react-bootstrap';
// Import Swiper React components
// import required modules
import SubTiltle from '../SubTitle/SubTiltle';
import OffersItem from './OffersItem';
function Offers({data}) {
  
  const cat = ['cat1.jpg', 'cat2.jpg', 'cat3.jpg', 'cat4.jpg'];

  return (
    <>
      <Container className="my-3">

          <SubTiltle title='الاسره' btntitle=" المزيد" pathText=""/>
          <OffersItem/>
       
        <Row className="text-center my-5 d-flex flex-wrap">
          {cat.map((item) => {
            return (
              <Col xs={12} sm={6} md={3} lg={3} style={{marginTop:"20px"}}>
              <img
                src={item}
                alt=""
                style={{
                  
                  maxWidth: '100%',
                  borderRadius: '12px',
                  cursor: 'pointer',
                }}
                />
        </Col>
            );
          })}
      </Row>
      </Container>
    </>
  );
}

export default Offers;
