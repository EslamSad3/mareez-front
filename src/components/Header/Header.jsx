import React from 'react';
import styles from './Header.module.css';
import NavBar from './NavBar/NavBar';
import { Col, Container, Row } from 'react-bootstrap';
function Header() {
  return (
    <>
      <Container
        fluid
        className="shadow-sm m-0 p-0  w-100 position-sticky  top-0"
        style={{ zIndex: '999' }}
      >
        <NavBar />
        <Row className="m-auto text-center " style={{backgroundColor:'#eee'}}>
          <Col className="cursor-pointer">
            <div>الأثاث</div>
          </Col>
          <Col className="cursor-pointer">
            <div>الأثاث</div>
          </Col>
          <Col className="cursor-pointer">
            <div>الأثاث</div>
          </Col>
          <Col className="cursor-pointer">
            <div>الأثاث</div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Header;
