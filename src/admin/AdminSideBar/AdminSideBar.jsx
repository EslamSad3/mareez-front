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
      <Link className="text-dark" to={'/admin/addcategories'}>
        <p className='border-bottom w-100 '>اضافه تصنيف</p>
      </Link>
      <Link className="text-dark" to={'/admin/addsubctegories'}>
        <p className='border-bottom w-100 '>اضافه تصنيف فرعي</p>
      </Link>
      <Link className="text-dark" to={'/admin/addproducts'}>
        <p className='border-bottom w-100 '>اضافه منتج</p>
      </Link>
    </Container>


/////////////////////////////////
    // <div className="sidebar">
    // <div className="d-flex flex-column">

        // {/* <Link to={'/admin/orders'} style={{ textDecoration: 'none' }}>
        //     <div className="admin-side-text mt-3 border-bottom p-2 mx-auto text-center">
        //         اداره الطلبات
        //     </div>
        // </Link>

        // <Link to={'/admin/allProducts'} style={{ textDecoration: 'none' }}>
        //     <div className="admin-side-text my-1 border-bottom p-2 mx-auto text-center">
        //         اداره المنتجات
        //     </div>
        // </Link>

        // <Link to={'/admin/categories'} style={{ textDecoration: 'none' }}>
        //     <div className="admin-side-text mt-3 border-bottom p-2 mx-auto text-center">
        //         اداره التصنيفات
        //     </div>
        // </Link>

        // <Link to={'/admin/subcategories'} style={{ textDecoration: 'none' }}>
        //     <div className="admin-side-text my-1 border-bottom p-2 mx-auto text-center">
        //         اداره التصنيفات الفرعيه
        //     </div>
        // </Link>

        // <Link to={'/admin/brands'} style={{ textDecoration: 'none' }}>
        //     <div className="admin-side-text my-1 border-bottom p-2 mx-auto text-center">
        //         اداره  الماركات
        //     </div>
        // </Link>

        // <Link to={'/admin/users'} style={{ textDecoration: 'none' }}>
        //     <div className="admin-side-text mt-3 border-bottom p-2 mx-auto text-center">
        //         كل المستخدميين
        //     </div>
        // </Link> */}

        // {/* <Link to={'/admin/brands'} style={{ textDecoration: 'none' }}>
        //     <div className="admin-side-text my-1 border-bottom p-2 mx-auto text-center">
        //         اضف ماركه
        //     </div>
        // </Link> */}

        // {/* <Link to="/admin/addcategory" style={{ textDecoration: 'none' }}>
        //     <div className="admin-side-text my-1 border-bottom p-2 mx-auto text-center">
        //         اضف تصنيف
        //     </div>
        // </Link>

        // <Link to="/admin/addsubcategory" style={{ textDecoration: 'none' }}>
        //     <div className="admin-side-text my-1 border-bottom p-2 mx-auto text-center">
        //         اضف تصنيف فرعي
        //     </div>
        // </Link>

        // <Link to="/admin/addproducts" style={{ textDecoration: 'none' }}>
        //     <div className="admin-side-text my-1 border-bottom p-2 mx-auto text-center">
        //         اضف منتج
        //     </div>
        // </Link> */}

//     </div>
// </div>
  );
}

export default AdminSideBar;
