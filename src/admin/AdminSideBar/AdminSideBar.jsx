import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
function AdminSideBar() {
  return (
    <Container className='h-100'>
      <Link className="text-dark d-flex" to={'/admin/allProducts'}>
        <h3>كل المنتجات</h3>

      </Link>
      <Link className="text-dark" to={'/admin/categories'}>
        <h3>كل التصنيفات</h3>
      </Link>
      <Link className="text-dark" to={'/admin/subcategories'}>
        <h3>كل التصنيفات الفرعيه</h3>
      </Link>
      <Link className="text-dark" to={'/admin/brands'}>
        <h3>كل الماركات</h3>
      </Link>
      <Link className="text-dark" to={'/admin/users'}>
        <h3>كل المستخدمين</h3>
      </Link>
      <Link className="text-dark" to={'/admin/orders'}>
        <h3>كل الطلبات</h3>
      </Link>
    </Container>
  );
}

export default AdminSideBar;
