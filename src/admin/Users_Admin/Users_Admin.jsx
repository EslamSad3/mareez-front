import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
function UsersAdmin() {
  return <>
      <Container>
      <br />
        <h2 className='text-center'> كل المستخدمين</h2>
        <Row>
          <Col lg='4' md='6' sm='6' xs='12' className='my-2'>
            <div className="card">
              <div className="card-body">
                <div className=" d-flex flex-row justify-content-between">
                  <h5 className="">أحمد سالم</h5>
                  <div>
                    <div className="d-inline pt-2 cat-text mx-3"> حذف</div>
                    <div className="d-inline pt-2 cat-text mx-3">تعديل</div>
                  </div>
                </div>
                <div className='text-center'>
                  <p className="card-text"> user@gmail.com</p>
                  <p class="card-text"> الهاتف</p>
                  <p className="card-text"> العنوان</p>
                  <p className="card-text">مستخدم</p>
                </div>
              </div>
            </div>
          </Col>
          <Col lg='4' md='6' sm='6' xs='12' className='my-2'>
            <div class="card">
              <div class="card-body">
              <div className=" d-flex flex-row justify-content-between">
                  <h5 className="">أحمد سالم</h5>
                  <div>
                    <div className="d-inline pt-2 cat-text mx-3"> حذف</div>
                    <div className="d-inline pt-2 cat-text mx-3">تعديل</div>
                  </div>
                </div>
                <div className='text-center'>
                  <p class="card-text"> user@gmail.com</p>
                  <p class="card-text"> الهاتف</p>
                  <p className="card-text"> العنوان</p>
                  <p className="card-text">مستخدم</p>
                </div>
              </div>
            </div>
          </Col>
          <Col lg='4' md='6' sm='6' xs='12' className='my-2'>
            <div class="card">
              <div class="card-body">
              <div className=" d-flex flex-row justify-content-between">
                  <h5 className="">أحمد سالم</h5>
                  <div>
                    <div className="d-inline pt-2 cat-text mx-3"> حذف</div>
                    <div className="d-inline pt-2 cat-text mx-3">تعديل</div>
                  </div>
                </div>
                <div className='text-center'>
                  <p class="card-text"> user@gmail.com</p>
                  <p class="card-text"> الهاتف</p>
                  <p className="card-text"> العنوان</p>
                  <p className="card-text">مستخدم</p>
                </div>
              </div>
            </div>
          </Col>
          <Col lg='4' md='6' sm='6' xs='12' className='my-2'>
            <div class="card">
              <div class="card-body">
              <div className=" d-flex flex-row justify-content-between">
                  <h5 className="">أحمد سالم</h5>
                  <div>
                    <div className="d-inline pt-2 cat-text mx-3"> حذف</div>
                    <div className="d-inline pt-2 cat-text mx-3">تعديل</div>
                  </div>
                </div>
                <div className='text-center'>
                  <p class="card-text"> user@gmail.com</p>
                  <p class="card-text"> الهاتف</p>
                  <p className="card-text"> العنوان</p>
                  <p className="card-text">مستخدم</p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  
}

export default UsersAdmin;
