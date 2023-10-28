import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import img1 from '../../Assets/cat1.jpg'
function OrdersAdmin() {
  return <>
    <Container>
            <br />
        <h2 className='text-center'> كل الطلبات</h2>
        <Row>

            <Col sm="12" className='mt-2'>
                <Link
                    to="/admin/orders"
                    className="cart-item-body my-2 px-1 d-flex"
                    style={{ textDecoration: "none" }}>
                        <img width="50%" height="197px" src={img1} alt="" style={{borderRadius:'10px'}}/>
                        <div className="w-100 m-2">
                            <Row className="justify-content-between">
                                <Col sm="12" className=" d-flex flex-row justify-content-between">
                                    <div className="d-inline pt-2 cat-text">طلب رقم #2321</div>
                                    <div className="d-inline pt-2 cat-text">ازاله</div>
                                </Col>
                            </Row>
                            <Row className="justify-content-center mt-2">
                                <Col sm="12" className=" d-flex flex-row justify-content-start">
                                    <div className="d-inline pt-2 cat-title">
                                        آيفون XR بذاكرة سعة 128 جيجابايت ويدعم تقنية 4G LTE مع تطبيق فيس
                                        تايم (برودكت) أحمر
                                    </div>
                                    <div className="d-inline pt-2 cat-rate me-2">4.5</div>
                                </Col>
                            </Row>
                            <Row>
                                <Col sm="12" className=" d-flex">
                                    <div className="mt-2  cat-text d-inline">الماركة :</div>
                                    <div className="mt-1 barnd-text d-inline mx-1">ابل </div>
                                </Col>
                            </Row>

                            <Row className="justify-content-between">
                                <Col sm="12" className=" d-flex flex-row justify-content-between">
                                    <div className="d-inline pt-2 d-flex">
                                        <div className="cat-text pt-1 d-inline">الكميه</div>
                                        <input
                                            className="mx-2 mt-1"
                                            type="number"
                                            style={{ width: "40px", height: "25px" }}
                                        />
                                    </div>
                                    <div className="d-inline pt-2 barnd-text">٣٠٠٠ ريال</div>
                                </Col>
                            </Row>
                        </div>
                </Link>
            </Col>
        </Row>
    </Container>
    </>
  
}

export default OrdersAdmin;
