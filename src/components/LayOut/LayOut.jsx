import React, { Children } from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import { Container } from 'react-bootstrap';
function LayOut() {
  return (
    <>
      <Header />
      <Container >
        <Outlet>{Children}</Outlet>
      </Container>
      <Footer/>
    </>
  );
}

export default LayOut;
