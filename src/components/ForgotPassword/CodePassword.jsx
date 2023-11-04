import React from 'react'
import { Context } from '../../context/ContextAPI';

import { useContext } from 'react';
import { Col, Container, Row, Spinner } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom';

function CodePassword() {
    const navigate = useNavigate();
  const { isLoading} = useContext(Context);
  return (
    <Container style={{ minHeight: "690px" }}>
    <div className="StyleLogin">

            <Row className="m-0 d-flex flex-column gap-2  text-center">
              <Col >
                <img
                className='cursor-pointer'
                  src="logo.png"
                  alt="logo"
                  style={{ width: '40%', marginTop: '1rem' }}
                  onClick={() => navigate('/')}
                />
              </Col>
            </Row>
      <Row className="py-5 d-flex justify-content-center">
          <h3 className='text-center'>   ادخل الكود</h3> 
      <form >
        <Col sm="12" className="d-flex flex-column">
          <label htmlFor="text" className="mx-auto title-login"></label>
          <div className='mx-3 text-center'>
              <input
                placeholder="الكود..."
                type="text"
                name="text"
                id="text"
                className="form-control user-input my-2 text-center mx-auto"
              />
          </div>

            <Col lg='12' xs='12' className="d-flex justify-content-center">

                {isLoading ? (
                        <button  className="btn-login mx-2 mt-4">
                          <Spinner animation="border" variant="white" />
                        </button>
                      ) : (
              <button
              className="btn-login mx-2 mt-4"
              > ارسال </button>
              )}
           
            </Col>
            <Link to={'/new-Password'} style={{ display: "flex", justifyContent: "center" }}>
                <span className='text-danger'>New Password</span>
            </Link>

        </Col>
      </form> 
      </Row>
    </div>
</Container>
  )
}

export default CodePassword