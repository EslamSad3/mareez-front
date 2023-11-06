import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { AiFillPlusCircle } from 'react-icons/ai';
import { PiArrowArcLeftLight } from 'react-icons/pi';
import './CartItem.css';
import { useContext } from 'react';
import { Context } from '../../context/ContextAPI';

function CartCheckout() {
  const { loggedUsercart, deleteAllCart } = useContext(Context);
  async function handleDeleteCart() {
    await deleteAllCart();
  }
  return (
    <div>
      <Row className="my-3 d-flex justify-content-center cart-checkout pt-3 ItemCard">
        <Col xs="12" className="d-flex  flex-column  ">
          <div className="d-flex ">
            <button className="copon-btn d-inline ">تفعيل</button>
            <input
              className="copon-input d-inline text-center "
              placeholder="كود الخصم"
            />
          </div>
          <h1 className="product-price d-inline w-100 my-3  border">
            ريال{' '}
            {loggedUsercart && loggedUsercart.data && loggedUsercart.data.total}
          </h1>
          <hr />
          <div className="InfoAddress">
            <h6>
              <span className="mx-1" style={{ color: '#c9771a' }}>
                {' '}
                تكاليف التوصيل{' '}
              </span>{' '}
              سوف يتم حسابها بعد إضافة عنوان التوصيل
              <PiArrowArcLeftLight className="mx-3 ArrowIcon" />
            </h6>
          </div>
          <Link
            to="/cart/addAddress"
            style={{ textDecoration: 'none' }}
            className="product-cart-add  d-inline "
          >
            <button className="product-cart-add w-100 px-2">
              <AiFillPlusCircle className="PlusIcon mx-2" />
              أضف عنوان
            </button>
          </Link>
          <button
            className="product-cart-add w-100 px-2 my-1"
            onClick={() => handleDeleteCart()}
          >
            {' '}
            مسح العربة
          </button>
        </Col>
        <ToastContainer />
      </Row>
    </div>
  );
}

export default CartCheckout;
