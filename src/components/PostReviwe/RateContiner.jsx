import React from 'react'
import RateItem from './RateItem'
import RatePost from './RatePost'
import { Col, Container, Row } from 'react-bootstrap'
import rate from '../../Assets/rate.png'

function RateContiner({productDetails}) {
  return (
    <Container className='rate-container'>
    <Row>
    <Col className="d-flex">
                <div className="sub-tile d-inline p-1 ">التقيمات</div>
                <img className="mt-2" src={rate} alt="" height="16px" width="16px" />
                <div className="cat-rate  d-inline  p-1 pt-2">4.5</div>
                <div className="rate-count d-inline p-1 pt-2">({`160  تقيم`})</div>
    </Col>
    </Row>
    
    <RatePost/>

    <RateItem/>
    <RateItem/>
</Container>
  )
}

export default RateContiner