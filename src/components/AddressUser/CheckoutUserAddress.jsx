import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

function CheckoutUserAddress() {
  return (
    <div>
    <Row className="my-3 d-flex justify-content-center cart-checkout pt-3 ItemCard">
<Col xs="12" className="d-flex  flex-column  ">
    <div className="d-flex " >
        <button  className="copon-btn d-inline "  >تفعيل</button>
        <input
            className="copon-input d-inline text-center "
            placeholder="كود الخصم"
        />
    </div>
    <div className="product-price d-inline w-100 my-3  border">ريال  3000 </div>
    <hr />
    <Row>   
        <div className='d-flex justify-content-around'>
        <h5>0 ريال </h5>
        <p>  : اجمالى رسوم الشحن </p>
        </div>
    </Row>
    <Link
        to="/checkouts/payment"
        style={{ textDecoration: "none" }}
        className="product-cart-add  d-inline my-3">

        <button className="product-cart-add w-100 px-2"> اتمام  عمليع الدفع</button>
    </Link>
</Col>
<ToastContainer />
</Row>
</div>
  )
}

export default CheckoutUserAddress