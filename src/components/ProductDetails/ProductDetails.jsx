import React from 'react';
// import styles from './ProductDetails.module.css'
import { Col, Row } from 'react-bootstrap';
import ImagesSwipper from './ImagesSwipper/ImagesSwipper';
import ProductText from './ProductText';
import RateContiner from '../PostReviwe/RateContiner';
import Offers from '../Offers/Offers';
import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { Context } from '../../context/ContextAPI';
import { useEffect } from 'react';
function ProductDetails() {
  const { getProductDetails, productDetails } = useContext(Context);
  const { id } = useParams();
  async function getDetails() {
    await getProductDetails(id);
  }
  useEffect(() => {
    getDetails();
  }, []);
  return (
    <>
      <Row className="p-3" style={{ minHeight: '670px' }}>
        <Col lg="6" xs="12">
          <ImagesSwipper productDetails={productDetails} />
        </Col>
        <Col lg="6" xs="12">
          <ProductText productDetails={productDetails} />
        </Col>
        {/* Rate */}
        <RateContiner productDetails={productDetails} />
        <Offers />
      </Row>
    </>
  );
}

export default ProductDetails;
