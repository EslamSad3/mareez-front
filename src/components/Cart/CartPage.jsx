import React from 'react'
import CartItem from './CartItem'
import { Col, Container, Row } from 'react-bootstrap'
import CartCheckout from './CartCheckout'
import Cart from './Cart'

function CartPage() {
    const data =[
        {
            title:'كرسي مكتب '
        }
        ,
        {
            title:'كنبه تركي'
        }
    ]
  return (
    <>
            {
                data.length >=1 ? (
        <Container style={{minHeight:'500px'}}>
            <Row>
                <div className='cart-title mt-4'>
                    عربة التسوق
                </div>
            </Row>
                <Row className='d-flex justify-content-center'>
                    <Col xs='12' md='9'>
                        <CartItem data={data}/>
                        <CartItem data={data}/>
                    </Col>

                    <Col xs='6' md='3'>
                        <CartCheckout/>
                    </Col>
                </Row>

        </Container>
                ) : <Cart/>
            }
    </>
  )
}

export default CartPage