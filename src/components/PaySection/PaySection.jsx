import React from 'react';
// import styles from './PaySection.module.css';
import { Col, Container, Row } from 'react-bootstrap';
function PaySection() {
  const data = [
    'KSA-Small_Banner-AR.jpg',
    'KSA-Small_Banner-AR.jpg',
    'KSA-Small_Banner-AR.jpg',
    'KSA-Small_Banner-AR.jpg',
  ];
  return (
    <>
      <Container>
        <Row className="d-flex justify-content-center align-items-center flex-wrap m-0">
          {data.map((item) => {
            return (
              <Col xs={6} md={4} lg={3} style={{marginTop:'5px'}}>
                <img className="pay-img" src={item} alt="ksa" />
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
}

export default PaySection;
