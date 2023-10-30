import React from 'react';
// import styles from './Home.module.css';
import PaySection from '../PaySection/PaySection';
import SwipperJs from '../SwipperJs/SwipperJs';
import ShopByCategory from '../ShopByCategory/ShopByCategory';
import { Container } from 'react-bootstrap';
import Offers from '../Offers/Offers';
import FootHero from '../FootHero/FootHero';
import HomeCategories from '../Categories/HomeCategories';
// import Footer from '../Footer/Footer';

function Home() {
  const data = [
    {
      title:'1',
      btntitle:'املذيد',
      pathText:''
    },
    {
      title:'2',
      btntitle:'املذيد',
      pathText:''
    },
    {
      title:'3',
      btntitle:'املذيد',
      pathText:''
    }
  ]
  return (
    <>
      <Container className="my-3">
        <PaySection />
        <SwipperJs />
        <HomeCategories/>
        <ShopByCategory />
        <Offers data={data}/>
        <FootHero/>
      </Container>
    </>
  );
}

export default Home;
