import React, { useContext, useState } from 'react';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { Context } from '../../../context/ContextAPI';
import axios from 'axios';
import { Spinner } from 'react-bootstrap';
function AddProduct() {
  const {
    addNewProduct,
    categories,
    brands,
    isLoading,
    handleOnChange,
    subcategories,
  } = useContext(Context);

  const [file, setfile] = useState([]);
  const [files, setfiles] = useState([]);
  const [colors, setColors] = useState([]);
  const [sizes, setSizes] = useState([]);


  const handelAdd = async function (values) {
    console.log(values);
    const fd = new FormData();
    if (files) {
      for (let i = 0; i < files.length; i++) {
        fd.append('images', files[i]);
      }
    }

    if (file) {
      fd.append('imageCover', file);
    }

    fd.append('title', values.title);
    fd.append('quantity', values.quantity);
    fd.append('price', values.price);
    fd.append('description', values.description);
    fd.append('priceAfterDisc', values.priceAfterDisc);
    fd.append('category', values.category);
    fd.append('brand', values.brand);
    fd.append('subcategory', values.subcategory);
    fd.append('sizes', sizes);
    fd.append('colors', colors);
    // fd.append('dimensions', dimensions);
    console.log(values);
    await addNewProduct(fd);
  };

  let formik = useFormik({
    initialValues: {
      title: '',
      quantity: '',
      price: '',
      description: '',
      priceAfterDisc: '',
      category: '',
      subcategory: '',
      brand: '',
      sizes: '',
      colors: '',
      // dimensions: '',
    },

    onSubmit: handelAdd,
  });

  const handleChange = async (event) => {
    await handleOnChange(event);
  };

  return (
    <div className="row d-flex justify-content-between">
      <div>
        <div className="w-75 mx-auto py-4">
          <h3>إضافة منتج جديد</h3>
          <form onSubmit={formik.handleSubmit} onChange={handleChange}>
            {/* Title */}
            <label htmlFor="title">اسم المنتج:</label>
            <input
              className="form-control mb-2"
              value={formik.values.title}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              type="text"
              name="title"
              id="title"
            />

            {/* Quantity */}
            <label htmlFor="quantity">الكميه:</label>
            <input
              className="form-control mb-2"
              value={formik.values.quantity}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              type="number"
              name="quantity"
              id="quantity"
            />

            {/* Price */}
            <label htmlFor="price">السعر قبل الخصم:</label>
            <input
              className="form-control mb-2"
              value={formik.values.price}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              type="number"
              name="price"
              id="price"
            />

            {/* Price after discount */}
            <label htmlFor="priceAfterDiscount">السعر بعد الخصم:</label>
            <input
              className="form-control mb-2"
              value={formik.values.priceAfterDisc}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              type="number"
              name="priceAfterDisc"
              id="priceAfterDisc"
            />

            {/* Colors */}
            <div className="d-flex justify-content-between align-items-center my-3">
              <label className="me-3" htmlFor="colors">
                الوان المنتج:
              </label>
              <select
                multiple
                name="colors"
                id="colors"
                value={colors}
                onChange={(e) => {
                  setColors(
                    Array.from(
                      e.target.selectedOptions,
                      (option) => option.value
                    )
                  );
                }}
                className="form-select"
                style={{ width: '200px' }}
              >
                <option value="white">ابيض</option>
                <option value="brown">بني</option>
                <option value="red">احمر</option>
                {/* Add more options as needed */}
              </select>
            </div>

            {/* Sizes */}
            <div className="d-flex justify-content-between align-items-center my-3">
              <label className="me-3" htmlFor="sizes">
                احجام المنتج:
              </label>
              <select
                multiple
                name="sizes"
                id="sizes"
                value={sizes}
                onChange={(e) => {
                  setSizes(
                    Array.from(
                      e.target.selectedOptions,
                      (option) => option.value
                    )
                  );
                }}
                className="form-select"
                style={{ width: '200px' }}
              >
                <option value="MD">ميديوم</option>
                <option value="LG">لارج</option>
                <option value="XL">اكسترا لارج</option>
                <option value="XXL">اكسترا لارج 2</option>
                <option value="XXXL">3 اكسترا لارج </option>
                 
              </select>
            </div>

            <br />
            <label htmlFor="description">وصف المنتج:</label>
            <input
              className="form-control mb-2"
              value={formik.values.description}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              type="text"
              name="description"
              id="description"
            />
            {/* <div className="d-flex justify-content-between w-50">
              <label htmlFor="colors">الوان المنتج:</label>
              <select
                name="colors"
                id="colors"
                onChange={(e) => (formik.values.colors = e.target.value)}
              >
                <option value="white">ابيض</option>
                <option value="brown">بني</option>
                <option value="res">احمر</option>
              </select>
            </div> */}
            <br />
            <label htmlFor="category">التصنيف:</label>
            <select
              onChange={formik.handleChange}
              value={formik.values.category}
              id="category"
              className="form-control my-1"
            >
              <option value="">اختر تصنيف للمنتج</option>
              {categories.map((category) => (
                <option key={category._id} value={category._id}>
                  {category.name}
                </option>
              ))}
            </select>
            <label htmlFor="subcategory">التصنيف الفرعي:</label>
            <select
              onChange={formik.handleChange}
              value={formik.values.subcategory}
              id="subcategory"
              className="form-control my-1"
            >
              <option value="">اختر تصنيف فرعي للمنتج</option>
              {subcategories.map((subcategory) => (
                <option key={subcategory._id} value={subcategory._id}>
                  {subcategory.name}
                </option>
              ))}
            </select>
            <label htmlFor="brand">الماركه:</label>
            <select
              onChange={formik.handleChange}
              value={formik.values.brand}
              id="brand"
              className="form-control my-1"
            >
              <option value="">اختر ماركة المنتج</option>
              {brands.map((brand) => (
                <option key={brand._id} value={brand._id}>
                  {brand.name}
                </option>
              ))}
            </select>
            <label htmlFor="imageCover">صورة غلاف للمنتج:</label>
            <input
              className="form-control mb-2"
              value={formik.values.imageCover}
              onChange={(e) => {
                setfile(e.target.files[0]);
              }}
              onBlur={formik.handleBlur}
              type="file"
              name="imageCover"
              id="imageCover"
            />
            <label htmlFor="images">صور المنتج:</label>
            <input
              className="form-control mb-2"
              multiple
              value={formik.values.images}
              onChange={(e) => {
                setfiles(e.target.files);
              }}
              onBlur={formik.handleBlur}
              type="file"
              name="images"
              id="images"
            />
            {isLoading ? (
              <Spinner animation="border" />
            ) : (
              <button
                type="submit"
                disabled={!(formik.isValid && formik.dirty)}
                className="btn-save d-inline mt-2 "
              >
                إضافة منتج
              </button>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddProduct;
