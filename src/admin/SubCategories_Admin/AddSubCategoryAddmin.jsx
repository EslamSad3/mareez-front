import React, { useContext, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { ToastContainer } from 'react-toastify';
import { Context } from '../../context/ContextAPI';

function AddSubCategoryAddmin() {
  const [mainCategoryID, setmainCategoryID] = useState(null);
  const [value, setvalue] = useState(null);
  const { addSubCatrgory, categories } = useContext(Context);
  
  async function handleAddSubCatrgory() {
    await addSubCatrgory(mainCategoryID, value);
  }
  return (
    <div>
      <Row className="justify-content-start ">
        <div className="admin-content-text pb-4">اضافه تصنيف فرعي جديد</div>
        <Col sm="8">
          <input
            type="text"
            className="input-form d-block mt-3 px-3"
            placeholder="اسم التصنيف الفرعي"
            onChange={(e) => {
              setvalue(e.target.value);
            }}
          />
          <select
            name="category"
            id="cat"
            className="select mt-3 px-2"
            onChange={(e) => {
              setmainCategoryID(e.target.value);
              console.log(mainCategoryID);
            }}
          >
            <option>اختر تصنيف رئيسي</option>
            {categories &&
              categories.map((category) => (
                <option key={category._id} value={category._id}>
                  {category.name}
                </option>
              ))}
          </select>
        </Col>
      </Row>
      <Row>
        <Col sm="8" className="d-flex justify-content-end ">
          <button
            onClick={handleAddSubCatrgory}
            className="btn-save d-inline mt-2 "
          >
            حفظ التعديلات
          </button>
        </Col>
      </Row>
      <ToastContainer />
    </div>
  );
}

export default AddSubCategoryAddmin;
