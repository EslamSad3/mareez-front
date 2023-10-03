import React, { useContext } from 'react';
import styles from './Login.module.css';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Context } from '../../context/ContextAPI';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function Login() {
  const navigate = useNavigate();
  const { handleLogingIn, loginErr } = useContext(Context);
  const validationSchema = Yup.object().shape({
    email: Yup.string().email('البريد غير صحيح').required('البريد مطلوب'),
    password: Yup.string().required('كلمة المرور مطلوبه'),
  });

  const handleLogin = async (values) => {
    let res = await handleLogingIn(values);
    if (res) {
      console.log(res);
      if (res.status === 200) {
        toast.success('تم التسجيل بنجاح');
        navigate('/');
      }
    }
    if (loginErr.response.status !== 200) {
      toast.error(' خطأ في البيانات ');
    }
  };
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema,
    onSubmit: handleLogin,
  });
  return (
    <>
      <Container className="my-5">
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
              <h3>الدخول الى ماريز</h3>
            </Col>
          </Row>
          <Row className="m-0 ">
            <form onSubmit={formik.handleSubmit}>
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

              <label htmlFor="password">كلمة المرور</label>
              <input
                onBlur={formik.handleBlur}
                className="form-control mb-2"
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

              <Row className="mx-2 my-3">
                <Button
                  disabled={!(formik.isValid && formik.dirty)}
                  type="submit"
                >
                  تسجيل الدخول
                </Button>
              </Row>
            </form>
          </Row>
        </div>
      </Container>
    </>
  );
}

export default Login;
