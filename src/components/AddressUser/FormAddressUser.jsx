import React from 'react'
import {  Card, Col, Container, Row } from 'react-bootstrap'

import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Context } from '../../context/ContextAPI';
import {  Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';

function FormAddressUser() {
    const navigate = useNavigate()

    const { handleSigningUp, isLoading } = useContext(Context);
  
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
    <Container>
        <Row>
            <Card className='ItemCard my-3'>
                <h4 className='m-3'>اضافه عنوان</h4>
                <Container className="my-2">
                    <Row className="m-0 ">
                        <form onSubmit={formik.handleSubmit}>
                            <Row>
                                <Col lg='6' xs='12'>
                                    <label htmlFor="name" style={{fontWeight:"600"}} className='my-2'>الاسم الأول </label>
                                    <input
                                        onBlur={formik.handleBlur}
                                        className="form-control mb-2"
                                        onChange={formik.handleChange}
                                        value={formik.values.name}
                                        type="text"
                                        name="name"
                                        id="name"
                                        placeholder="أدخل الاسم الأول "
                                    />
                                    {formik.errors.name && formik.touched.name ? (
                                        <div>
                                        <small className="text-danger">{formik.errors.name}</small>
                                        </div>
                                    ) : null}
                                </Col>
                                <Col lg='6' xs='12'>
                                    <label htmlFor="name" style={{fontWeight:"600"}}  className='my-2'>الاسم الأخير</label>
                                    <input
                                        onBlur={formik.handleBlur}
                                        className="form-control mb-2"
                                        onChange={formik.handleChange}
                                        value={formik.values.name}
                                        type="text"
                                        name="name"
                                        id="name"
                                        placeholder="أدخل الاسم الأخير "
                                    />
                                    {formik.errors.name && formik.touched.name ? (
                                        <div>
                                        <small className="text-danger">{formik.errors.name}</small>
                                        </div>
                                    ) : null}
                                </Col>
                            </Row>

                            <Row>
                                <label htmlFor="address" style={{fontWeight:"600"}} className='my-2'> العنوان </label>
                                <textarea
                                 className="form-control"
                                  id="address"
                                   name='address'
                                    rows="5"
                                    placeholder="ادخل العنوان"
                                    required
                                ></textarea>
                            </Row>

                            <Row>
                                <Col lg='6' xs='12'>
                                    <label htmlFor="Unit" style={{fontWeight:"600"}} className='my-2'>رقم الوحدة  </label>
                                    <input
                                        className="form-control mb-2"
                                        type="text"
                                        name="Unit"
                                        id="Unit"
                                        placeholder="Ex: B12 "
                                        required
                                    />
                                </Col>
                                <Col lg='6' xs='12'>
                                    <label htmlFor="Floor" style={{fontWeight:"600"}}  className='my-2'> الدور</label>
                                    <input
                                        className="form-control mb-2"
                                        type="text"
                                        name="Floor"
                                        id="Floor"
                                        placeholder="Ex: 3rd Floor   "
                                        required
                                    />
                                </Col>
                            </Row>


                        <label htmlFor="phone" style={{fontWeight:"600"}} className='my-2'>رقم الجوال</label>
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

                            <Row>
                                <Col lg='6' xs='12'>
                                    <label htmlFor="City" style={{fontWeight:"600"}} className='my-2'>المدينه  </label>
                                    <input
                                        className="form-control mb-2"
                                        type="text"
                                        name="City"
                                        id="City"
                                        placeholder="أدخل أسم مدينتك  "
                                        required
                                    />
                                </Col>
                                <Col lg='6' xs='12'>
                                    <label htmlFor="Area" style={{fontWeight:"600"}}  className='my-2'> المنطقه </label>
                                    <input
                                        className="form-control mb-2"
                                        type="text"
                                        name="Area"
                                        id="Area"
                                        placeholder=" أدخل اسم المنطقه السكنية"
                                         required
                                    />
                                </Col>
                            </Row>

                            <Row>
                                <label htmlFor="address" style={{fontWeight:"600"}} className='my-2'>الرمز البريدى </label>
                                <input
                                        className="form-control mb-2"
                                        type="text"
                                        name="Area"
                                        id="Area"
                                        placeholder=" برجاء ادخل الرمز البريدي الخاص بك"
                                        required
                                    />
                            </Row>

                        <Row className="mx-2 my-3">
                            <Link
                             to='/cart/userAddress'
                              className="product-cart-add  d-inline my-3"
                               >
                                <button
                                    // variant="success"
                                    // disabled={!(formik.isValid && formik.dirty)}
                                    type="submit"
                                    className="product-cart-add w-100 px-2"
                                >
                                    حفظ
                                </button>
                            </Link>
                        </Row>

                        <Row className="mx-2 my-3">
                            <button style={{border:'none' , backgroundColor:'White'}}>الغاء</button>
                        </Row>
                        </form>
                    </Row>
                </Container>

            </Card>
        </Row>
    </Container>
        
  )
}

export default FormAddressUser