import React from 'react';
// import styles from './ProductDetails.module.css'
import { Col, Row } from 'react-bootstrap';
import ProductGallery from './ProductGallery';
import ProductText from './ProductText';
import RateContiner from '../PostReviwe/RateContiner';
import Offers from '../Offers/Offers'
function ProductDetails() {
  return <>
        <Row className='p-3'style={{minHeight:'670px'}}>
            <Col lg='6' xs='12' >
                <ProductGallery/>
            </Col>
            <Col lg='6' xs='12' >
                <ProductText/>
            </Col>
            {/* Rate */}
                <RateContiner/>
                <Offers/>
        </Row>
    </>
  
}

export default ProductDetails;
