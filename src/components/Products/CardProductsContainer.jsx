import React from 'react'
import { Container, Row } from 'react-bootstrap'
import ProductsCard from './ProductsCard'

function CardProductsContainer() {
  return (
    <Container>
    <Row className='my-2 d-flex justify-content-between' >
        <ProductsCard/>
        <ProductsCard />
        <ProductsCard />
        <ProductsCard />
        <ProductsCard/>
        <ProductsCard />
        <ProductsCard />
        <ProductsCard />
    </Row>
</Container>
  )
}

export default CardProductsContainer