import React, { useContext } from 'react';
import { Container, Row } from 'react-bootstrap';
import CategoryCard from './CategoryCard';
import item1 from '../../Assets/item1.jpg';
import SubTiltle from '../SubTitle/SubTiltle';
import { Context } from '../../context/ContextAPI';
import { Link } from 'react-router-dom';

function HomeCategories() {
  const { categories } = useContext(Context);
  return (
    <>
      <Container>
        <Row className="my-2 d-flex justify-content-between">
          <SubTiltle title="تسوق حسب المجموعه" />
          {categories &&
            categories.map((category) => {
              return (
             
                  <Link to={`/category/${category._id}/products`} key={category._id}>
                    <CategoryCard
                      title={category.name}
                      img={category.image}
                      background="#F4DBA4"
                    />
                  </Link>
               
              );
            })}
        </Row>
      </Container>
    </>
  );
}

export default HomeCategories;
