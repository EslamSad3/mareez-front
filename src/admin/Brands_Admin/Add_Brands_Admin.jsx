import React, { useContext, useState } from 'react';
import { Col, Row, Spinner } from 'react-bootstrap';
import vatar from '../../Assets/avatar.png';
import { Context } from '../../context/ContextAPI';
import { useFormik } from 'formik';

function AddBrandsAdmin() {
  const {addBrand,isLoading,handleChange} = useContext(Context);
  const [file, setfile] = useState([]);

  const handelAdd = async function (values) {
    const fd = new FormData();
    if (file) {
      fd.append('image', file);
    }

    fd.append('name', values.name);

    await addBrand(fd);
  };

  let formik = useFormik({
    initialValues: {
      name: ''
    },

    onSubmit: handelAdd,
  });
  return (
    <div>
      <Row className="justify-content-start ">
        <div className="admin-content-text pb-4">اضف ماركه جديده</div>
        <Col sm="8">
        <form onSubmit={formik.handleSubmit} onChange={handleChange}>
            <label htmlFor="name">اسم الماركه:</label>
            <input
              className="form-control mb-2"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              type="text"
              name="name"
              id="name"
            />

            
            <label htmlFor="image">صورة الماركه:</label>
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
                <button type="submit"
                disabled={!(formik.isValid && formik.dirty)} className="btn-save d-inline mt-2 ">حفظ التعديلات</button>
            )}
          </form>
        </Col>
      </Row>
      <Row>
        <Col sm="8" className="d-flex justify-content-end ">

        </Col>
      </Row>
    </div>
  );
}

export default AddBrandsAdmin;
