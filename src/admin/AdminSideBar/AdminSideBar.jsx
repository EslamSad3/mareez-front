import React from 'react';
import {  Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
function AdminSideBar() {
  return (
    <Container className='h-100'>
      <Link className="text-dark d-flex" to={'/admin/allProducts'}>
        <p className='border-bottom w-100 '>كل المنتجات</p>

      </Link>
      <Link className="text-dark border-bottom" to={'/admin/categories'}>
        <p className='border-bottom w-100 '>كل التصنيفات</p>
      </Link>
      <Link className="text-dark" to={'/admin/subcategories'}>
        <p className='border-bottom w-100 '>كل التصنيفات الفرعيه</p>
      </Link>
      <Link className="text-dark" to={'/admin/allBrands'}>
        <p className='border-bottom w-100 '>كل الماركات</p>
      </Link>
      <Link className="text-dark" to={'/admin/users'}>
        <p className='border-bottom w-100 '>كل المستخدمين</p>
      </Link>
      <Link className="text-dark" to={'/admin/orders'}>
        <p className='border-bottom w-100 '>كل الطلبات</p>
      </Link>
      <Link className="text-dark" to={'/admin/addbrands'}>
        <p className='border-bottom w-100 '>اضافه ماركه</p>
      </Link>
      <Link className="text-dark" to={'/admin/addcategory'}>
        <p className='border-bottom w-100 '>اضافه تصنيف</p>
      </Link>
      <Link className="text-dark" to={'/admin/addsubcategory'}>
        <p className='border-bottom w-100 '>اضافه تصنيف فرعي</p>
      </Link>
      <Link className="text-dark" to={'/admin/addproducts'}>
        <p className='border-bottom w-100 '>اضافه منتج</p>
      </Link>
    </Container>
  );
}

export default AdminSideBar;
