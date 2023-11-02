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
        <Container style={{minHeight:'500px'}} dir='ltr'>
            <Row>
                <div className='cart-title mt-4'>
                    عربة التسوق
                </div>
            </Row>
                <Row className='d-flex justify-content-center' dir=''>

                    <Col xs='12' md='4' dir='ltr'>
                        <CartCheckout/>
                    </Col>

                    <Col xs='12' md='8' dir='rtl'>
                        <CartItem data={data}/>
                        <CartItem data={data}/>
                    </Col>
                </Row>

        </Container>
                ) : <Cart/>
            }
    </>
  )
}

export default CartPage