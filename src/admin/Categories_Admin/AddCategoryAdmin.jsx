import React from 'react'
import { Col, Row } from 'react-bootstrap'

function AddCategoryAdmin(values) {
   
  return (
    <div>
      <Row className="justify-content-start ">
        <div className="admin-content-text pb-4">اضف تصنيف جديد</div>
        <Col sm="8">
        <form >
            <label htmlFor="name">اسم التصنيف:</label>
            <input
              className="form-control mb-2"
              value=''
              type="text"
              name="name"
              id="name"
            />

            
            <label htmlFor="image">صورة التصنيف:</label>
            <input
              className="form-control mb-2"
              type="file"
              name="image"
              id="image"
            />
                <button type="submit" className="btn-save d-inline mt-2 ">حفظ التعديلات</button>
          </form>
        </Col>
      </Row>
      <Row>
        <Col sm="8" className="d-flex justify-content-end ">

        </Col>
      </Row>
    </div>

  )
}

export default AddCategoryAdmin