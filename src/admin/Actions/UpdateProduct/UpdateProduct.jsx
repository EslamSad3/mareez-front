import React, { useContext, useEffect, useState } from "react";
import {  useParams,useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import axios from "axios";
import { Context } from "../../../context/ContextAPI";
import { toast } from "react-toastify";


function UpdateProduct() {
const {categories,subcategories,isLoading,adminHeaders,handleOnChange,brands} = useContext(Context)
  const navigate = useNavigate();
  const [file, setfile] = useState(null);
  const [files, setfiles] = useState([]);
  const [res, setRes] = useState(null);
  const { id } = useParams();

  async function getOneProduct() {
    return await axios
      .get(`${process.env.REACT_APP_BASE_URL}/products/${id}`, {
        headers:adminHeaders
      })
      .then((res) => {
        setRes(res);

        formik.initialValues.title = res.data.data.title;
        formik.initialValues.category = res.data.data.category;
        formik.initialValues.subcategory = res.data.data.subcategory;
        formik.initialValues.brand = res.data.data.brand;
        formik.initialValues.price = res.data.data.price;
        formik.initialValues.quantity = res.data.data.quantity;
        formik.initialValues.priceAfterDisc = res.data.data.priceAfterDisc;
        formik.initialValues.description = res.data.data.description;
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    getOneProduct();
  }, []);


  const updateProduct = async (fd) => {
    return await axios
      .put(
        `${process.env.REACT_APP_BASE_URL}/products/${id}`,
        fd,
        {
          headers: adminHeaders
        }
      )

      .then((res) => {
        if (res.status === 200) {
          toast.success(`${res.data.data.title} Updated successfully`, {
            position: "top-center",
            duration: 2000,
          });
        }
        navigate("/admin/allProducts");
      })
      .catch((err) => console.log(err));
  };

  async function handelUpdate(values) {
    const fd = new FormData();

    if (files.length > 0) {
      for (let i = 0; i < files.length; i++) {
        fd.append('images', files[i]);
      }
    }
  
    if (file) {
      fd.append('imageCover', file);
    }
  
    if (values.title !== formik.initialValues.title) {
      fd.append('title', values.title);
    }
  
    if (values.quantity !== formik.initialValues.quantity) {
      fd.append('quantity', values.quantity);
    }
  
    if (values.price !== formik.initialValues.price) {
      fd.append('price', values.price);
    }
  
    if (values.priceAfterDisc !== formik.initialValues.priceAfterDisc) {
      fd.append('priceAfterDisc', values.priceAfterDisc);
    }
  
    if (values.description !== formik.initialValues.description) {
      fd.append('description', values.description);
    }
  
    if (values.category !== formik.initialValues.category) {
      fd.append('category', values.category);
    }
  
    if (values.brand !== formik.initialValues.brand) {
      fd.append('brand', values.brand);
    }
  
    if (values.subcategory !== formik.initialValues.subcategory) {
      fd.append('subcategory', values.subcategory);
    }


    await updateProduct(fd);
  }

  let formik = useFormik({
    initialValues: {
      title: "",
      quantity: "",
      price: "",
      description: "",
      priceAfterDisc: "",
      category: "",
      subcategory: "",
      brand: "",
    },

    onSubmit: handelUpdate,
  });

  const handleOfChange = async (event) => {
   await handleOnChange(event)
  };
  return (
    <>
    <div className="container">
      <div className="row m-0 d-flex justify-content-between">

          <div className="w-75 mx-auto py-4">
            <h3>تحديث المنتج</h3>
            <form onSubmit={formik.handleSubmit} onChange={handleOfChange}>
              <label htmlFor="title">الأسم : </label>
              <input
                className="form-control mb-2"
                value={formik.values.title}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                type="text"
                name="title"
                id="title"
              />

              <label htmlFor="quantity">الكميه :</label>
              <input
                className="form-control mb-2"
                value={formik.values.quantity}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                type="number"
                name="quantity"
                id="quantity"
              />

              <label htmlFor="price">السعر :</label>
              <input
                className="form-control mb-2"
                value={formik.values.price}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                type="number"
                name="price"
                id="price"
              />

              <label htmlFor="priceAfterDisc">السعر بعد الخصم:</label>
              <input
                className="form-control mb-2"
                value={formik.values.priceAfterDisc}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                type="number"
                name="priceAfterDisc"
                id="priceAfterDisc"
              />

              <label htmlFor="description">الوصف :</label>
              <input
                className="form-control mb-2"
                value={formik.values.description}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                type="text"
                name="description"
                id="description"
              />

              <label htmlFor="category">التصنيف :</label>
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

              <label htmlFor="subcategory">التصنيف الفرعي :</label>
              <select
                onChange={formik.handleChange}
                value={formik.values.subcategory}
                id="subcategory"
                className="form-control my-1"
              >
                <option value="">Select a subcategory</option>
                {subcategories.map((subcategory) => (
                  <option key={subcategory._id} value={subcategory._id}>
                    {subcategory.name}
                  </option>
                ))}
              </select>

              <label htmlFor="brand">الماركه :</label>
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

              <label htmlFor="imageCover">صورة الغلاف :</label>
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
              <label htmlFor="images">الصور :</label>
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
                تحديث المنتج
              </button>
            </form>
          </div>
        </div>
    </div>
  </>
  );
}
export default UpdateProduct;