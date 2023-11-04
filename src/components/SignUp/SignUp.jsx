import React, { useContext } from 'react';
// import  './SignUp.css';
import {  Col, Container, Row, Spinner } from 'react-bootstrap';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Context } from '../../context/ContextAPI';
import { Link, useNavigate } from 'react-router-dom';

function SignUp() {
  const navigate = useNavigate()

  const { handleSigningUp, isLoading } = useContext(Context);

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .required('الاسم مطلوب')
      .min(2, 'الاسم غير صحيح')
      .max(20, 'الاسم غير صحيح'),
    email: Yup.string()
      .email('الايميل غير صحيح')
      .matches(/^[\w-.]+@([\w-]+.)+[\w-]{2,4}$/gi, 'الايميل غير صحيح')
      .required('الايميل مطلوب'),
    phone: Yup.string()
      .required('رقم الهاتف مطلوب')
      .min(9, 'رقم الهاتف غير صحيح')
      .matches(/^(?:\+?0*?966)?0?5[0-9]{8}$/, 'رقم الهاتف غير صحيح'),
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

  const handleSignUp = async (values) => {
    await handleSigningUp(values);
    navigate('/login')
  };
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema,
    onSubmit: handleSignUp,
  });
  return (
    <>
      {/* <Container className="my-5">
        <div className="w-50 mx-auto my-2 shadow rounded-2">
          <Row className="m-0 d-flex flex-column gap-2  text-center">
            <Col>
              <img
                src="logo.png"
                alt="logo"
                style={{ width: '50%', marginTop: '1rem' }}
              />
            </Col>
            <Col>
              <h3>التسجيل في ماريز</h3>
            </Col>
          </Row>
          <Row className="m-0 ">
            <form onSubmit={formik.handleSubmit}>
              <label htmlFor="name">الاسم</label>
              <input
                onBlur={formik.handleBlur}
                className="form-control mb-2"
                onChange={formik.handleChange}
                value={formik.values.name}
                type="text"
                name="name"
                id="name"
                placeholder="الاسم"
              />
              {formik.errors.name && formik.touched.name ? (
                <div>
                  <small className="text-danger">{formik.errors.name}</small>
                </div>
              ) : null}

              <label htmlFor="email">البريد</label>
              <input
                onBlur={formik.handleBlur}
                className="form-control mb-2"
                onChange={formik.handleChange}
                value={formik.values.email}
                type="email"
                name="email"
                id="email"
                placeholder="البريد"
              />

              {formik.errors.email && formik.touched.email ? (
                <div>
                  <small className="text-danger">{formik.errors.email}</small>
                </div>
              ) : null}

              <label htmlFor="phone">رقم الهاتف</label>
              <div className="d-flex justify-content-between align-items-center">
                <input
                  onBlur={formik.handleBlur}
                  className="form-control mb-2 "
                  onChange={formik.handleChange}
                  value={formik.values.phone}
                  type="tel"
                  name="phone"
                  id="phone"
                  placeholder="5xxxxxxxx"
                  maxLength={9}
                />

                <input
                  onBlur={formik.handleBlur}
                  className="form-control mb-2 mx-2 w-25 text-center"
                  type="text"
                  name=""
                  id=""
                  disabled
                  value={'966+'}
                />
              </div>

              {formik.errors.phone && formik.touched.phone ? (
                <div>
                  <small className="text-danger">{formik.errors.phone}</small>
                </div>
              ) : null}

              <label htmlFor="password">كلمة المرور</label>
              <input
                className="form-control mb-2"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.password}
                type="password"
                name="password"
                id="password"
                placeholder="كلمة المرور"
              />

              {formik.errors.password && formik.touched.password ? (
                <div>
                  <small className="text-danger">
                    {formik.errors.password}
                  </small>
                </div>
              ) : null}

              <label htmlFor="confirmPassword">تأكيد كلمة المرور</label>
              <input
                className="form-control mb-2"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.confirmPassword}
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                placeholder="تأكيد كلمة المرور"
              />

              {formik.errors.confirmPassword &&
              formik.touched.confirmPassword ? (
                <div>
                  <small className="text-danger">
                    {formik.errors.confirmPassword}
                  </small>
                </div>
              ) : null}

              <Row className="mx-2 my-3">
                {isLoading ? (
                  <Button type="button" variant="success">
                    <Spinner animation="border" variant="white" />
                  </Button>
                ) : (
                  <Button
                    variant="success"
                    disabled={!(formik.isValid && formik.dirty)}
                    type="submit"
                  >
                    اشترك الان
                  </Button>
                )}
                <div className="d-flex mt-3">
                  <p className='mx-2'> لديك حساب ؟</p>
                  <Link to="/login">
                    <span className="text-success">سجل دخولك الان</span>
                  </Link>
                </div>
              </Row>
            </form>
          </Row>
        </div>
      </Container> */}





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
              <h3 className='text-center my-3'>التسجيل في ماريز</h3> 
          <form onSubmit={formik.handleSubmit}>
            <Col sm="12" className="d-flex flex-column">
              {/* الاسم */}
              <div className='mx-3 text-center'>
                  <input
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values.name}
                    type="text"
                    name="name"
                    id="name"
                    placeholder="الاسم ..."
                    className="form-control user-input my-2 text-center mx-auto"
                  />
                    {formik.errors.name && formik.touched.name ? (
                  <small className="text-danger text-center my-2">{formik.errors.name}</small>
                    ) : null}
              </div>
                      {/* الايميل */}
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
                    {/* الهاتف */}
                   <div className="d-flex justify-content-center align-items-center my-2">
                  <div>
                    <div className="d-flex justify-content-center">
                      <input
                        onBlur={formik.handleBlur}
                        className="form-control  mb-2"
                        style={{width:'58%'}}
                        onChange={formik.handleChange}
                        value={formik.values.phone}
                        type="tel"
                        name="phone"
                        id="phone"
                        placeholder="5xxxxxxxx"
                        maxLength={9}
                      />

                      <input
                        onBlur={formik.handleBlur}
                        className="form-control mb-2 mx-2  text-center"
                        style={{width:'23%'}}
                        type="text"
                        name=""
                        id=""
                        disabled
                        value={'966+'}
                      />
                    </div>

                    {formik.errors.phone && formik.touched.phone ? (
                      <div className="text-center">
                        <small className="text-danger">{formik.errors.phone}</small>
                      </div>
                    ) : null}
                  </div>
                </div>

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
                  disabled={!(formik.isValid && formik.dirty)}
                  > اشترك الأن</button>
                  )}
               
                </Col>


              <label className="mx-auto my-4">
                 لديك حساب ؟{" "}
                <Link to="/login" style={{ textDecoration: 'none' }}>
                  <span style={{ cursor: "pointer" }} className="text-success">
                    سجل دخولك الأن
                  </span>
                </Link>
              </label>
            </Col>
          </form> 
          </Row>
        </div>
  </Container>

    </>
  );
}

export default SignUp;
