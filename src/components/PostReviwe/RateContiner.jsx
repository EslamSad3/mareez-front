import React, { useContext, useEffect, useState } from 'react'
import RateItem from './RateItem'
import RatePost from './RatePost'
import { Col, Container, Row } from 'react-bootstrap'
import rate from '../../Assets/rate.png'
import { Context } from '../../context/ContextAPI'

function RateContiner() {
  const {productDetails} = useContext(Context)

  const [reviews,setReviews] = useState([])

  useEffect(() => {
  if(productDetails){
    setReviews(productDetails.reviews)
  }
  }, [productDetails])
  
  return (
    <Container className='rate-container'>
    <Row>
    <Col className="d-flex">
                <div className="sub-tile d-inline p-1 ">التقيمات</div>
                <img className="mt-2" src={rate} alt="" height="16px" width="16px" />
                <div className="cat-rate  d-inline  p-1 pt-2">{productDetails? productDetails.rating :'0'}</div>
                <div className="rate-count d-inline p-1 pt-2">({`${productDetails?productDetails.rates : '0'}  تقيم`})</div>
    </Col>
    </Row>
    
    <RatePost/>

    <RateItem reviews={reviews}/>
</Container>
  )
}

export default RateContiner