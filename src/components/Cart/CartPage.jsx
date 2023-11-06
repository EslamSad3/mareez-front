import React from 'react';
import CartItem from './CartItem';
import { Col, Container, Row } from 'react-bootstrap';
import CartCheckout from './CartCheckout';
import Cart from './Cart';
import { useContext } from 'react';
import { Context } from '../../context/ContextAPI';
import { useState } from 'react';
import { useEffect } from 'react';

function CartPage() {
  const { loggedUsercart } = useContext(Context);
  const [userCartItems, setuserCartItems] = useState([])

console.log(userCartItems)
  useEffect(() => {
    if(loggedUsercart && loggedUsercart.data && loggedUsercart.data.cartItems){
        setuserCartItems(loggedUsercart.data.cartItems)
    }
  }, [loggedUsercart])
  
  return (
    <>
      {userCartItems.length >= 1 ? (
        <Container style={{ minHeight: '500px' }} dir="ltr">
          <Row>
            <div className="cart-title mt-4">عربة التسوق</div>
          </Row>
          <Row className="d-flex justify-content-center" dir="">
            <Col xs="12" md="4" dir="ltr">
              <CartCheckout/>
            </Col>

            <Col xs="12" md="8" dir="rtl">
              <CartItem/>
            </Col>
          </Row>
        </Container>
      ) : (
        <Cart />
      )}
    </>
  );
}

export default CartPage;
