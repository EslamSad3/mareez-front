import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { ToastContainer } from 'react-toastify'

function AddSubCategoryAddmin() {
  return (
    <div>
    <Row className="justify-content-start ">
        <div className="admin-content-text pb-4">اضافه تصنيف فرعي جديد</div>
        <Col sm="8">
            <input
                type="text"
                className="input-form d-block mt-3 px-3"
                placeholder="اسم التصنيف الفرعي"
            />
            <select name="category" id="cat" className="select mt-3 px-2 ">
                <option value="0">اختر تصنيف رئيسي</option>
                    <option >الكترونيات</option>
            </select>
        </Col>
    </Row>
    <Row>
        <Col sm="8" className="d-flex justify-content-end ">
            <button  className="btn-save d-inline mt-2 ">حفظ التعديلات</button>
        </Col>
    </Row>
    <ToastContainer />
</div>
  )
}

export default AddSubCategoryAddmin