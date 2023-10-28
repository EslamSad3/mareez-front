import React, { useContext, useState } from 'react';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { Context } from '../../../context/ContextAPI';
import axios from 'axios';
import { Spinner } from 'react-bootstrap';
function AddProduct() {
  const { addNewProduct, categories, brands, isLoading ,handleOnChange,subcategories} = useContext(Context);
console.log(subcategories)
  const [file, setfile] = useState([]);
  const [files, setfiles] = useState([]);

  const handelAdd = async function (values) {
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
    },

    onSubmit: handelAdd,
  });

  const handleChange = async (event) => {
    handleOnChange(event)
  };

  return (
    <div className="row d-flex justify-content-between">
      <div>
        <div className="w-75 mx-auto py-4">
          <h3>إضافة منتج جديد</h3>
          <form onSubmit={formik.handleSubmit} onChange={handleChange}>
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
