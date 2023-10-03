import React, { useContext } from 'react';
// import styles from './SignUp.module.css';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Context } from '../../context/ContextAPI';

function SignUp() {
  const { handleSigningUp } = useContext(Context);

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .required('الاسم مطلوب')
      .min(2, 'الاسم غير صحيح')
      .max(20, 'الاسم غير صحيح'),
    email: Yup.string()
      .email('البريد غير صحيح')
      .matches(/^[\w-.]+@([\w-]+.)+[\w-]{2,4}$/gi, 'البريد غير صحيح')
      .required('البريد مطلوب'),
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

  const handleSignUp =  (values) => {
    handleSigningUp(values);
    
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

              <label htmlFor="confirmPassword">تأكيد كلمة المرور</label>
              <input
                onBlur={formik.handleBlur}
                className="form-control mb-2"
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
                <Button
                  disabled={!(formik.isValid && formik.dirty)}
                  type="submit"
                >
                  اشترك الان
                </Button>
              </Row>
            </form>
          </Row>
        </div>
      </Container>
    </>
  );
}

export default SignUp;
