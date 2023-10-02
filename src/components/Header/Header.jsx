import React from 'react';
import styles from './Header.module.css';
import NavBar from './NavBar/NavBar';
import { Col, Container, Row } from 'react-bootstrap';
function Header() {
  return (
    <>
      <NavBar />
      <Container fluid className='shadow-sm p-2 fsize'>
        <Row className='m-auto text-center'>
          <Col className='cursor-pointer'>
            <div>الأثاث</div>
          </Col>
          <Col className='cursor-pointer'>
            <div>الأثاث</div>
          </Col>
          <Col className='cursor-pointer'>
            <div>الأثاث</div>
          </Col>
          <Col className='cursor-pointer'>
            <div>الأثاث</div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Header;
