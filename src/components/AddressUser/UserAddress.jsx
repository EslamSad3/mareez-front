import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import {RiDeleteBin5Fill} from 'react-icons/ri'
import {AiFillEdit} from 'react-icons/ai'
import './UserAddress.css'
import { Link } from 'react-router-dom'
import CheckoutUserAddress from './CheckoutUserAddress'

function UserAddress() {
  return (
    <Container style={{minHeight:'500px'}} dir='ltr'>
    <Row dir='rtl'>
        <h3 className='mt-4'>
             عنوان الشحن
        </h3>
    </Row>
        <Row className='d-flex justify-content-center' dir=''>

            <Col xs='12' md='4' dir='ltr'>
                <div>
                <CheckoutUserAddress/>
                </div>
            </Col>


            <Col xs='12' md='8' dir='rtl'>
                <Container>


                    <Row>
                        <Card  className='ItemCard my-3'>
                                <div className='TitelAddress'>
                                    <Row>
                                            <Col lg='6' xs='8' className='my-3'>
                                                <div className='d-flex justify-content-start'>
                                                        <div className="form-check ">
                                                        <input type="radio" id="html" name="fav_language"  checked/>
                                                         <label for="html" className='AddressCity'>الرياض  ,  الملك فهد </label>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col lg='6' xs='4'  className='my-3'>
                                                <div className='d-flex justify-content-end'>
                                                <RiDeleteBin5Fill  style={{fontSize:'30px' , color:'red'}}/>
                                                <Link  to='/cart/addAddress'>
                                                    <AiFillEdit  className='mx-3' style={{fontSize:'30px', color:'black'}}/>
                                                </Link>
                                                </div>
                                            </Col>
                                    </Row>
                                    <hr />
                                </div>

                                <Row>
                                    <p>الرياض, الملك فهد , الرياض</p>
                                    <p>شقة B12 , طابق الدور الثالث</p>
                                    <p>555555555</p>
                                    <p>الرمز البريدى : 25025</p>
                                </Row>

                               



                        </Card>
                    </Row>



            <Row>
                <Card  className='ItemCard my-3'>
                        <div className='TitelAddress'>
                            <Row>
                                    <Col lg='6' xs='8' className='my-3'>
                                        <div className='d-flex justify-content-start'>
                                                <div className="form-check ">
                                                <input type="radio" id="html" name="fav_language"  checked/>
                                                 <label for="html" className='AddressCity'>الرياض  ,  الملك فهد </label>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg='6' xs='4'  className='my-3'>
                                        <div className='d-flex justify-content-end'>
                                        <RiDeleteBin5Fill  style={{fontSize:'30px' , color:'red'}}/>
                                        <Link  to='/cart/addAddress'>
                                            <AiFillEdit  className='mx-3' style={{fontSize:'30px', color:'black'}}/>
                                        </Link>
                                        </div>
                                    </Col>
                            </Row>
                            <hr />
                        </div>

                        <Row>
                            <p>الرياض, الملك فهد , الرياض</p>
                            <p>شقة B12 , طابق الدور الثالث</p>
                            <p>555555555</p>
                            <p>الرمز البريدى : 25025</p>
                        </Row>

                </Card>
                
                {/* button        اضافه عنوان جديد*/}
                        <Row className="mx-2 my-3">
                            <Link
                             to='/cart/addAddress'
                             target='_blank'
                              className="product-cart-add  d-inline my-3"
                               >
                                <button
                                    type="submit"
                                    className="product-cart-add w-100 px-2"
                                >
                                    اضافه عنوان جديد 
                                </button>
                            </Link>
                        </Row>
            </Row>

                </Container>
            </Col>


        </Row>
</Container>
  )
}

export default UserAddress