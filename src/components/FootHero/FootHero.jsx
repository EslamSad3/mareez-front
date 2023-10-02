import React from 'react';
import styles from './FootHero.module.css';
import { Container, Row, Col } from 'react-bootstrap';
function FootHero() {
  const cat = [
    'cat1.jpg',
    'cat2.jpg',
    'cat3.jpg',
    'cat4.jpg',
    'cat1.jpg',
    'cat2.jpg',
    'cat3.jpg',
    'cat4.jpg',
  ];
  return (
    <Container>
      <Row>
        <Col>
          <img
            src="FootHero1.jpg"
            alt=""
            style={{ width: '100%', height: '100%', borderRadius: '12px' }}
          />
        </Col>
        <Col className="d-flex justify-content-center flex-column gap-2">
          <Col>
            <img
              src="FootHero1.jpg"
              alt=""
              style={{ width: '100%', borderRadius: '12px' }}
            />
          </Col>
          <Col>
            <img
              src="FootHero1.jpg"
              alt=""
              style={{ width: '100%', borderRadius: '12px' }}
            />
          </Col>
        </Col>
      </Row>
      <Row className="my-5">
        {cat.map((item) => {
          return (
            <Col md={3} sm={6}>
              <img
                src={item}
                style={{ width: '90%', borderRadius: '12px', margin: '10px' }}
              alt=""/>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}

export default FootHero;
