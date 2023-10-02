import React from 'react';
import styles from './NavBar.module.css';
import { Container, Dropdown, Form, Nav, Navbar } from 'react-bootstrap';
function NavBar() {
  return (
    <Navbar expand="lg" className={styles.nav_bg_color}>
      <Container className="text-white m-0 ">
        <Navbar.Brand href="#">
          {' '}
          <img src="logo.png" alt="logo" className={styles.logo} />{' '}
        </Navbar.Brand>

        <div className="px-2 rounded-1 bg-white d-flex mx-5 w-50 justify-content-center align-items-center text-canter">
          <Form className="d-flex justify-content-center align-items-center w-100">
            <Form.Control
              type="search"
              placeholder="ابحث ..."
              className="me-2 border-0 bg-transparent shadow-none"
              aria-label="Search"
            />
            <i className="text-dark fa fa-search"></i>
          </Form>
        </div>
        <Navbar.Toggle
          aria-controls="navbarScroll"
          className="text-white bg-white"
        />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 text-white"
            navbarScroll
          >
            <Nav.Link
              className="text-white cart position-relative d-flex ustify-content-center align-items-center"
              href="#action1"
            >
              <i class="fa-solid fa-cart-shopping fs-3"></i>
              <h6 className="mx-2 fs-6 fw-normal">العربه</h6>
              <span class="position-absolute top-1 start-100 translate-middle badge  rounded-circle bg-danger">
                4
              </span>
            </Nav.Link>
            <Nav.Link
              className="text-white d-flex ustify-content-center align-items-center"
              href="#action1"
            >
              <i class="fa-solid fa-user fs-3"></i>{' '}
              <Dropdown>
                <Dropdown.Toggle
                  variant=""
                  className="text-white border-0 d-flex justify-content-center align-items-center"
                  id="dropdown-basic"
                >
                  <h6 className="mx-2"> مرحبا : احمد</h6>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">الحساب</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">الطلبات</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">المفضله</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">نسجيل الخروج</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
