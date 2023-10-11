import React, { useContext, useEffect, useState } from 'react';
import { useFormik } from 'formik';
import { useNavigate, useParams } from 'react-router-dom';
import { Context } from '../../../context/ContextAPI';
import axios from 'axios';

function UpdateProduct() {
  const navigate = useNavigate();
  const { categories, brands, updateProduct,adminHeaders } = useContext(Context);
  const [subCategories, setSubCategories] = useState([]);
  const [file, setfile] = useState([]);
  const [files, setfiles] = useState([]);
  const { id } = useParams();

  async function getOneProduct() {
    return await axios
      .get(`${process.env.REACT_APP_BASE_URL}/products/${id}`, {
        headers: adminHeaders
      })
      .then((res) => {
        setRes(res);

        formik.initialValues.name = res.data.name;
        formik.initialValues.category = res.data.category;
        formik.initialValues.subcategory = res.data.subcategory;
        formik.initialValues.brand = res.data.brand;
        formik.initialValues.price = res.data.price;
        formik.initialValues.quantity = res.data.quantity;
        formik.initialValues.priceAfterDiscount = res.data.priceAfterDiscount;
        formik.initialValues.description = res.data.description;
      })
      .catch((err) => console.log(err));
  }

  async function handelUpdate(values) {
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

    await updateProduct(fd);
  }

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

    onSubmit: handelUpdate,
  });

  const handleOnChange = async (event) => {
    if (event.target.id === 'category') {
      console.log('Form::onChange', event.target.value);

      try {
        const res = await axios.get(
          `${process.env.REACT_APP_BASE_URL}/categories/${event.target.value}/subcategories`
        );
        setSubCategories(res.data.data);
      } catch (error) {
        console.log(error);
      }
    }
  };
  useEffect(() => {
    getOneProduct();
  }, []);
  return (
    <>
      <div className="container">
        <div className="row m-0 d-flex justify-content-between">

            <div className="w-75 mx-auto py-4">
              <h3>Update Product</h3>
              <form onSubmit={formik.handleSubmit} onChange={handleOnChange}>
                <label htmlFor="title">title:</label>
                <input
                  className="form-control mb-2"
                  value={formik.values.title}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  type="text"
                  name="title"
                  id="title"
                />

                <label htmlFor="quantity">quantity:</label>
                <input
                  className="form-control mb-2"
                  value={formik.values.quantity}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  type="number"
                  name="quantity"
                  id="quantity"
                />

                <label htmlFor="price">price:</label>
                <input
                  className="form-control mb-2"
                  value={formik.values.price}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  type="number"
                  name="price"
                  id="price"
                />

                <label htmlFor="priceAfterDisc">priceAfterDiscount:</label>
                <input
                  className="form-control mb-2"
                  value={formik.values.priceAfterDisc}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  type="number"
                  name="priceAfterDisc"
                  id="priceAfterDisc"
                />

                <label htmlFor="description">description:</label>
                <input
                  className="form-control mb-2"
                  value={formik.values.description}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  type="text"
                  name="description"
                  id="description"
                />

                <label htmlFor="category">category:</label>
                <select
                  onChange={formik.handleChange}
                  value={formik.values.category}
                  id="category"
                  className="form-control my-1"
                >
                  <option value="">Select a category</option>
                  {categories.map((category) => (
                    <option key={category._id} value={category._id}>
                      {category.name}
                    </option>
                  ))}
                </select>

                <label htmlFor="subcategory">subcategory:</label>
                <select
                  onChange={formik.handleChange}
                  value={formik.values.subcategory}
                  id="subcategory"
                  className="form-control my-1"
                >
                  <option value="">Select a subcategory</option>
                  {subCategories.map((subcategory) => (
                    <option key={subcategory._id} value={subcategory._id}>
                      {subcategory.name}
                    </option>
                  ))}
                </select>

                <label htmlFor="brand">brand:</label>
                <select
                  onChange={formik.handleChange}
                  value={formik.values.brand}
                  id="brand"
                  className="form-control my-1"
                >
                  <option value="">Select a brand</option>
                  {brands.map((brand) => (
                    <option key={brand._id} value={brand._id}>
                      {brand.name}
                    </option>
                  ))}
                </select>

                <label htmlFor="imageCover">imageCover:</label>
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
                <label htmlFor="images">images:</label>
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

                <button
                  type="submit"
                  className="btn btn-primary text-light my-3 p-2"
                >
                  update product
                </button>
              </form>
            </div>
          </div>
      </div>
    </>
  );
}

export default UpdateProduct;
