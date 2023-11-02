import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

function PaymentCheckout() {
  return (
    <div>
        <Row className="my-3 d-flex justify-content-center cart-checkout pt-3 ItemCard">
            <Col xs="12" className="d-flex  flex-column  ">
                <Row>   
                    <div className='d-flex justify-content-around my-2'>
                    <h5>0 ريال </h5>
                    <p>  : اجمالى  سعر المنتج </p>
                    </div>
                </Row>
                <Row>   
                    <div className='d-flex justify-content-around'>
                    <h5>0 ريال </h5>
                    <p>  : اجمالى رسوم الشحن </p>
                    </div>
                </Row>
                <hr />
                <Row>   
                    <div className='d-flex justify-content-around'>
                    <h5>0 ريال </h5>
                    <p>  :  المجموع الكلي  </p>
                    </div>
                </Row>
                <Link
                    
                    style={{ textDecoration: "none" }}
                    className="product-cart-add  d-inline my-3">

                    <button className="product-cart-add w-100 px-2"> اتمام   الشراء</button>
                </Link>
            </Col>
            <ToastContainer />
        </Row>
</div>
  )
}

export default PaymentCheckout