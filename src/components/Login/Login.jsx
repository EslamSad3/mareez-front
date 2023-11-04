import React, { useContext, useEffect } from 'react';
import { Col, Container, Row, Spinner } from 'react-bootstrap';
import "./Login.css"
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Context } from '../../context/ContextAPI';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
function Login() {
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

    
  return (
    <>
      {/* <Container className="my-5">
        <div className="w-50 mx-auto my-2 shadow rounded-2">
          <Row className="m-0 d-flex flex-column gap-2  text-center">
            <Col >
              <img
              className='cursor-pointer'
                src="logo.png"
                alt="logo"
                style={{ width: '50%', marginTop: '1rem' }}
                onClick={() => navigate('/')}
              />
            </Col>
            <Col>
              <h3>الدخول الى ماريز</h3>
            </Col>
          </Row>
          <Row className="m-0 ">
            <form onSubmit={formik.handleSubmit}>
              <Col xs='12'>
                <label htmlFor="email" className='m-2'>البريد</label>
                <input
                  className="form-control mb-2"
                  onBlur={formik.handleBlur}
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
              </Col>
              
              <Col xs='12'>
                <label htmlFor="password" className='m-2' >كلمة المرور</label>
                  <input
                    onBlur={formik.handleBlur}
                    className="form-control mb-2"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                    type= 'password'
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
              </Col>

              <Row className="mx-2 my-3 d-flex">
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
                    تسجيل الدخول
                  </Button>
                )}

                <div className="d-flex mt-3">
                  <p className="mx-2"> ليس لديك حساب ؟</p>
                  <Link to="/signup">
                    <span className="text-success ">اشترك الان</span>
                  </Link>
                </div>
              <div className=" mt-1">
                <Link to="/forgotpassword">
                  <small className="text-danger"> نسيت كلمة المرور ؟</small>
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
              <h3 className='text-center'>الدخول الى ماريز</h3> 
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

                <div className='mx-3 text-center'>
                  <input
                    placeholder="كلمه السر..."
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values.password}
                    type= 'password'
                    name="password"
                    id="password"
                    className="user-input text-center mx-auto form-control"
                  />
                  {formik.errors.password && formik.touched.password ? (
                        <small className="text-danger text-center m-5">
                          {formik.errors.password}
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
                  >تسجيل الدخول</button>
                  )}
               
                </Col>


              <label className="mx-auto my-4">
                ليس لديك حساب ؟{" "}
                <Link to="/signup" style={{ textDecoration: 'none' }}>
                  <span style={{ cursor: "pointer" }} className="text-success">
                    اشترك الأن
                  </span>
                </Link>
              </label>
              <label className="mx-auto my-4">
                <Link to="/forgotpassword" style={{ textDecoration: 'none', color: 'red' }}>
                  هل نسيت كلمه السر
                </Link>
              </label>
            </Col>
          </form> 
          </Row>
        </div>
    <ToastContainer />
  </Container>

    </>
  );
}

export default Login;
