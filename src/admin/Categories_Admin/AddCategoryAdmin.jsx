import React, { useContext, useState } from 'react';
import { useFormik } from 'formik';
import { Context } from '../../context/ContextAPI';
import { Spinner } from 'react-bootstrap';

function AddCategoryAdmin() {
  const { addCategory, isLoading } = useContext(Context);
  const [file, setfile] = useState([]);

  const handelAdd = async function (values) {
    const fd = new FormData();

    if (file) {
      fd.append('image', file);
    }

    fd.append('name', values.name);

    await addCategory(fd);
  };

  let formik = useFormik({
    initialValues: {
      name: '',
    },

    onSubmit: handelAdd,
  });

  return (
    <div className="row d-flex justify-content-between">
      <div>
        <div className="w-75 mx-auto py-4">
          <h3>إضافة تصنيف جديد</h3>
          <form onSubmit={formik.handleSubmit}>
            <label htmlFor="name">اسم تصنيف:</label>
            <input
              className="form-control mb-2"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              type="text"
              name="name"
              id="name"
            />

            <label htmlFor="image">صورة  تصنيف:</label>
            <input
              className="form-control mb-2"
              value={formik.values.image}
              onChange={(e) => {
                setfile(e.target.files[0]);
              }}
              onBlur={formik.handleBlur}
              type="file"
              name="image"
              id="image"
            />

            {isLoading ? (
              <Spinner animation="border" />
            ) : (
              <button
                type="submit"
                disabled={!(formik.isValid && formik.dirty)}
                className="btn-save d-inline mt-2 "
              >
                إضافة تصنيف
              </button>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddCategoryAdmin;