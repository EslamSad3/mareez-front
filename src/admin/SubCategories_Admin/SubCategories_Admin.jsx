import React from 'react';
import { useContext } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Context } from '../../context/ContextAPI';
function SubCategoriesAdmin() {
  const {subcategories} = useContext(Context)
  console.log(subcategories)
  return <>
      <Container>
      <br />
        <h2 className='text-center'> كل التصنيفات الفرعيه</h2>
        <Row>
          {subcategories && subcategories.map((sub)=>{

            return <>
         
          <Col lg='4' md='6' sm='6' xs='12' className='my-2'>
            <div className="card">
              <div className="card-body">
                <div className=" d-flex flex-row justify-content-between">
                    <div className="d-inline pt-2 cat-text "> حذف</div>
                    <div className="d-inline pt-2 cat-text ">تعديل</div>
                </div>
                <div className='text-center my-3'>
                  <p className="card-text"> {sub.name}</p>
                  <p className="card-text"> {sub.category.name ? sub.category.name : ''}</p>
                </div>
              </div>
            </div>
          </Col>
          </>
          })}
        </Row>
      </Container>
    </>
  
}

export default SubCategoriesAdmin;
