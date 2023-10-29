import React from 'react';
// import styles from './Header.module.css';
// import NavBar from './NavBar/NavBar';
import {  Col, Container, Row} from 'react-bootstrap';
import { Link } from 'react-router-dom';
function Header() {
  return (
    <>
      {/* <Container
        fluid
        className="shadow-sm m-0 p-0  w-100 position-sticky  top-0"
        style={{ zIndex: '999' }}
      >
        <NavBar /> */}
        {/* <Row className="m-auto text-center " style={{backgroundColor:'#eee'}}>
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
        </Row> */}

{/* ------------------------------------------------------------------------------------------ */}
         <div className="cat-header">
            <Container>
              <Row>
                <Col className="d-flex justify-content-center py-2 flex-wrap">
                  <div className="cat-text-header ">الكل</div>
                  <div className="cat-text-header">الأثاث</div>
                  <div className="cat-text-header">الكنب</div>
                  <div className="cat-text-header"> الأسره</div>
                  <div className="cat-text-header">النجف</div>
                  <div className="cat-text-header">الكراسي</div>
                  <div className="cat-text-header">المزيد</div>
                </Col>
              </Row>
            </Container>
          </div>

    {/* ------------------------------------------------------------------------------------- */}

{/* <nav class="cat-header navbar navbar-expand-sm  ">
  <div class="container">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="mynavbar">
      <ul class="navbar-nav mx-auto">
        <li class="nav-item">
        <div className="cat-text-header ">الكل</div>
        </li>
        <li class="nav-item">
        <div className="cat-text-header">الأثاث</div>
        </li>
        <li class="nav-item">
        <div className="cat-text-header">الكنب</div>
        </li>
        <li class="nav-item">
        <div className="cat-text-header"> الأسره</div>
        </li>
        <li class="nav-item">
        <div className="cat-text-header">الكراسي</div>
        </li>
        <li class="nav-item">
        <div className="cat-text-header">المزيد</div>
        </li>
      </ul>
    </div>
  </div>
</nav> */}
   
      {/* </Container> */}
      
    </>
  );
}

export default Header;
