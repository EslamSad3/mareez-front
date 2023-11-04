import React from 'react'
import { Context } from '../../context/ContextAPI';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useContext } from 'react';
import { Col, Container, Row, Spinner } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom';


function NewPassword() {
    const navigate = useNavigate();
  const { isLoading} = useContext(Context);
  const validationSchema = Yup.object().shape({
    name: Yup.string(),
    password: Yup.string()
      .required('كلمة المرور مطلوبه')
      .min(6, 'كلمة المرور  قصيره')
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{6,}$/,
        'كلمة المرور غير صالحه'
      ),
    confirmPassword: Yup.string()
      .required('تأكيد كلمة المرور مطلوبه')
      .oneOf([Yup.ref('password')], 'كلمة المرور غير متطابقه'),
  });
  const formik = useFormik({
    initialValues: {
      password: '',
      confirmPassword: '',
    },
    validationSchema
  });
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
          <h3 className='text-center'> أنشئ كامة سر جديدة</h3> 
      <form >
        <Col sm="12" className="d-flex flex-column">
          <label htmlFor="text" className="mx-auto title-login"></label>
          {/* كلمه السر */}
          <div className='mx-3 text-center'>
                  <input
                   onBlur={formik.handleBlur}
                   onChange={formik.handleChange}
                   value={formik.values.password}
                   type="password"
                   name="password"
                   id="password"
                   placeholder="كلمة المرور"
                    className="form-control user-input my-2 text-center mx-auto"
                  />
                  {formik.errors.password && formik.touched.password ? (
                  <small className="text-danger text-center my-2">
                    {formik.errors.password}
                  </small>
              ) : null}
              </div>

                      {/*   تاكيد كلمه السر*/}
                <div className='mx-3 text-center'>
                  <input
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values.confirmPassword}
                    type="password"
                    name="confirmPassword"
                    id="confirmPassword"
                    placeholder="تأكيد كلمة المرور"
                    className="user-input text-center mx-auto form-control my-2"
                  />
                   {formik.errors.confirmPassword &&
              formik.touched.confirmPassword ? (
                  <small className="text-danger text-center my-2">
                    {formik.errors.confirmPassword}
                  </small>
              ) : null}
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

        </Col>
      </form> 
      </Row>
    </div>
</Container>
  )
}

export default NewPassword