import React, { useContext, useEffect } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Context } from '../../context/ContextAPI';
function AllProductsAdmin() {
  const { products } = useContext(Context);
  console.log(products);
  useEffect(() => {}, [products]);
  return (
    <Container>
      <Link to={'/admin/allProducts/add'}>
        <Button>اضافة منتج</Button>
      </Link>{' '}
      <br />
      <h2>كل المنتجات</h2>
      <Row>
        {products.map((item) => {
          return (
            <Col key={item._id} xs="9" sm="9" md="3">
                <Link to={`/admin/allProducts/${item.slug}`}>
                <Card>
                  <Card.Img variant="top" src={item.imageCover} />
                  <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>{item.description}</Card.Text>
                  </Card.Body>
                </Card>
            </Link>
              </Col>
          );
        })}
      </Row>
    </Container>
  );
}

export default AllProductsAdmin;
