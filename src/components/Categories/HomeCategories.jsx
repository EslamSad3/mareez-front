import React from 'react';
import { Container, Row } from 'react-bootstrap';
import CategoryCard from './CategoryCard';
import item1 from '../../Assets/item1.jpg'
import SubTiltle from '../SubTitle/SubTiltle';

function HomeCategories() {
  return <>
       <Container>
        <Row className='my-2 d-flex justify-content-between'>
            <SubTiltle title="تسوق حسب المجموعه"  />
            <CategoryCard title="سرير" img={item1} background="#F4DBA4" />
            <CategoryCard title="سرير" img={item1} background="#F4DBA4" />
            <CategoryCard title="سرير" img={item1} background="#F4DBA4" />
            <CategoryCard title="سرير" img={item1} background="#F4DBA4" />
            <CategoryCard title="سرير" img={item1} background="#F4DBA4" />
            <CategoryCard title="سرير" img={item1} background="#F4DBA4" />
        </Row>
    </Container>
    </>
  
}

export default HomeCategories;
