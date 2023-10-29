import React from 'react';
// import styles from './Home.module.css';
import PaySection from '../PaySection/PaySection';
import SwipperJs from '../SwipperJs/SwipperJs';
import ShopByCategory from '../ShopByCategory/ShopByCategory';
import { Container } from 'react-bootstrap';
import Offers from '../Offers/Offers';
import FootHero from '../FootHero/FootHero';
// import Footer from '../Footer/Footer';

function Home() {
  return (
    <>
      <Container className="my-3">
        <PaySection />
        <SwipperJs />
        <ShopByCategory />
        {/* <Offers/>
        <Offers/>
        <Offers/>
        <Offers/>
        <Offers/> */}
        <Offers/>
        <FootHero/>
      </Container>
    </>
  );
}

export default Home;
