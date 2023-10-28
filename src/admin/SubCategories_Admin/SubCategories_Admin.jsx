import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
function SubCategoriesAdmin() {
  return <>
      <Container>
      <br />
        <h2 className='text-center'> كل التصنيفات الفرعيه</h2>
        <Row>
          <Col lg='4' md='6' sm='6' xs='12' className='my-2'>
            <div className="card">
              <div className="card-body">
                <div className=" d-flex flex-row justify-content-between">
                    <div className="d-inline pt-2 cat-text "> حذف</div>
                    <div className="d-inline pt-2 cat-text ">تعديل</div>
                </div>
                <div className='text-center my-3'>
                  <p className="card-text"> التصنيف الفرعي </p>
                  <p className="card-text">التصنيف الرئيسي</p>
                </div>
              </div>
            </div>
          </Col>
          <Col lg='4' md='6' sm='6' xs='12' className='my-2'>
            <div className="card">
              <div className="card-body">
                <div className=" d-flex flex-row justify-content-between">
                    <div className="d-inline pt-2 cat-text "> حذف</div>
                    <div className="d-inline pt-2 cat-text ">تعديل</div>
                </div>
                <div className='text-center my-3'>
                  <p className="card-text"> التصنيف الفرعي </p>
                  <p className="card-text">التصنيف الرئيسي</p>
                </div>
              </div>
            </div>
          </Col>
          <Col lg='4' md='6' sm='6' xs='12' className='my-2'>
            <div className="card">
              <div className="card-body">
                <div className=" d-flex flex-row justify-content-between">
                    <div className="d-inline pt-2 cat-text "> حذف</div>
                    <div className="d-inline pt-2 cat-text ">تعديل</div>
                </div>
                <div className='text-center my-3'>
                  <p className="card-text"> التصنيف الفرعي </p>
                  <p className="card-text">التصنيف الرئيسي</p>
                </div>
              </div>
            </div>
          </Col>
          <Col lg='4' md='6' sm='6' xs='12' className='my-2'>
            <div className="card">
              <div className="card-body">
                <div className=" d-flex flex-row justify-content-between">
                    <div className="d-inline pt-2 cat-text "> حذف</div>
                    <div className="d-inline pt-2 cat-text ">تعديل</div>
                </div>
                <div className='text-center my-3'>
                  <p className="card-text"> التصنيف الفرعي </p>
                  <p className="card-text">التصنيف الرئيسي</p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  
}

export default SubCategoriesAdmin;
