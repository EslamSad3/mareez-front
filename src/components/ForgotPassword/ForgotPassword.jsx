import React, { useContext, useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Context } from '../../context/ContextAPI';
import {  Link, useNavigate } from 'react-router-dom';
// import styles from './ForgotPassword.module.css'
import { Col, Container, Row, Spinner } from 'react-bootstrap';
function ForgotPassword() {
  const navigate = useNavigate();
  const { handleLogingIn, isLoading, userData ,adminData} = useContext(Context);
  const validationSchema = Yup.object().shape({
    email: Yup.string().email('الايميل غير صحيح').required('الايميل مطلوب'),
    password: Yup.string().required('كلمة السر مطلوبه'),
  });
  const handleLogin = async (values) => {
    await handleLogingIn(values);
  };
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema,
    onSubmit: handleLogin,
  });
  useEffect(() => {
    if (userData) {
      navigate('/');
    }
    if (adminData) {
      navigate('/admin');
    }
  }, [userData,adminData]);
  return <>
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
              <h3 className='text-center'> لاعاده التسجيل ادخل الايميل المسجل به لارسال الكود</h3> 
          <form onSubmit={formik.handleSubmit}>
            <Col sm="12" className="d-flex flex-column">
              <label htmlFor="email" className="mx-auto title-login"></label>
              <div className='mx-3 text-center'>
                  <input
                    placeholder="الايميل..."
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    type="email"
                    name="email"
                    id="email"
                    className="form-control user-input my-2 text-center mx-auto"
                  />
                  {formik.errors.email && formik.touched.email ? (
                        <small className="text-danger text-center my-2">{formik.errors.email}</small>
                    ) : null}
              </div>
              <Col lg='12' xs='12' className="d-flex justify-content-center">
                <div className='d-flex justify-content-center w-100'>
                      {isLoading ? (
                        <button className="btn-login mx-2 mt-4">
                          <Spinner animation="border" variant="white" />
                        </button>
                      ) : (
                        <button
                          className="btn-login mx-2 mt-4"
                          disabled={!(formik.isValid && formik.dirty)}
                        >
                          ارسال
                        </button>
                      )}
                </div>
              </Col>
                        <Link to={'/enter-Code'} style={{ display: "flex", justifyContent: "center" }}>
                          <span className='text-danger'>Code</span>
                      </Link>
              
               

            </Col>
          </form> 
          </Row>
        </div>
  </Container>

    </>
  
}

export default ForgotPassword;
