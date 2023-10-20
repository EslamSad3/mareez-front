import React from 'react';
import { Button, Container } from 'react-bootstrap';
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
      <Link className="text-dark" to={'/admin/brands'}>
        <p className='border-bottom w-100 '>كل الماركات</p>
      </Link>
      <Link className="text-dark" to={'/admin/users'}>
        <p className='border-bottom w-100 '>كل المستخدمين</p>
      </Link>
      <Link className="text-dark" to={'/admin/orders'}>
        <p className='border-bottom w-100 '>كل الطلبات</p>
      </Link>
    </Container>
  );
}

export default AdminSideBar;
