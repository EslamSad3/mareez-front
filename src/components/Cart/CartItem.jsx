import React from 'react'
import {  Card, Col, Container, Row } from 'react-bootstrap'
import './CartItem.css'
import cat1 from '../../Assets/cat1.jpg'
import deleteicon from '../../Assets/delete.png'
import {BiSolidShoppingBags} from'react-icons/bi'
import { Link } from 'react-router-dom'

function CartItem({data}) {
  return (
    <div>
        <Container>
            <Row>
                {
                        data.map((item , index) => {
                            return(
                                <Card key={index} className='my-3'>
                                    <Col lg='12' >
                                        <div className='CartShop'>
                                            <Container>
                                                <Row>
                                                    <Col lg='3' xs='12'>
                                                        <div >
                                                        <Link target='_blank' to={"/detalis/:id"}>

                                                            <img src={cat1} alt="" className='ImageCartShop' />
                                                        </Link>
                                                        </div>
                                                    </Col>
                                                    <Col  lg='9'>
                                                        <div>
                                                            <p className='CartShopDecs'>
                                                            {item.title}
                                                            </p>
                                                            <p>قرص تخزين اس اسْ دي مقاس 2.5 بوصة بسعة 120 جيجابايت ومنفذ ساتا 3.0 من هيكفيجن، رقم المنتج: HS-SSD-C100/120G</p>
                                                            <Row>
                                                                <div>
                                                                    <BiSolidShoppingBags style={{fontSize:'30px'}} className='mx-2'/>
                                                                البائع :Modern Mattress
                                                                </div>
                                                            </Row>
                                                            <p className='CartShopPrice'>1400 ريال</p>
                                                            <div className='d-flex justify-content-between'>
                                                                <p className=''> الكمية 1</p>
                                                                <img src={deleteicon} className='DeleteIcon' alt="" />
                                                            </div>

                                                        </div>
                                                    </Col>
                                                </Row>
                                            </Container>

                                        </div>
                                    </Col>
                                </Card>

                            )
                        })

                }
            </Row>
        </Container>

    </div>
  )
}

export default CartItem