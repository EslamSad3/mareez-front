import React from 'react'
import { Container, Row } from 'react-bootstrap'
import CategoryCard from './CategoryCard'
import item1 from '../../Assets/item1.jpg'

function CategoryContainer() {
  return (
    <Container>
    <div className="admin-content-text mt-2 ">كل التصنيفات</div>
    <Row className='my-2 d-flex justify-content-between'>
        <CategoryCard title="سرير" img={item1} background="#F4DBA4" />
        <CategoryCard title="سرير" img={item1} background="#F4DBA4" />
        <CategoryCard title="سرير" img={item1} background="#F4DBA4" />
        <CategoryCard title="سرير" img={item1} background="#F4DBA4" />
        <CategoryCard title="سرير" img={item1} background="#F4DBA4" />
        <CategoryCard title="سرير" img={item1} background="#F4DBA4" />
        <CategoryCard title="سرير" img={item1} background="#F4DBA4" />
        <CategoryCard title="سرير" img={item1} background="#F4DBA4" />
        <CategoryCard title="سرير" img={item1} background="#F4DBA4" />
        <CategoryCard title="سرير" img={item1} background="#F4DBA4" />
        <CategoryCard title="سرير" img={item1} background="#F4DBA4" />
        <CategoryCard title="سرير" img={item1} background="#F4DBA4" />
    </Row>
</Container>
  )
}

export default CategoryContainer