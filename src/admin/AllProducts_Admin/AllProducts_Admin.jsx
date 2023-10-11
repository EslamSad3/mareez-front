import React, { useContext, useEffect } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Context } from '../../context/ContextAPI';
function AllProductsAdmin() {
  const { products } = useContext(Context);
  console.log(products)
  useEffect(()=>{},[products])
  return (
    <Container>
      <Link to={'/admin/allProducts/add'}>
        <Button>اضافة منتج</Button>
      </Link>{' '}
      <br />
      <h2>كل المنتجات</h2>
      <Row>
        <Col sm="8" xs="9" md="9">
        {products.map((item)=>{
          return <Card key={item._id} >
            <Card.Img variant="top" src={item.imageCover} />
            <Card.Header>Header</Card.Header>
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Subtitle>Card Subtitle</Card.Subtitle>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
          })}
          </Col>
      </Row>
    </Container>
  );
}

export default AllProductsAdmin;
