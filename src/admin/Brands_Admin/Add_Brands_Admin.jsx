import React from 'react'
import { Col, Row } from 'react-bootstrap'
import vatar from '../../Assets/avatar.png'

function AddBrandsAdmin() {
  return (
    <div>
         <Row className="justify-content-start ">
        <div className="admin-content-text pb-4">اضف ماركه جديده</div>
        <Col sm="8">
            <div className="text-form pb-2">صوره الماركه</div>
            <div>
                <label for="upload-photo">
                    <img
                        src={vatar}
                        alt="fzx"
                        height="100px"
                        width="120px"
                        style={{ cursor: "pointer" }}
                    />
                </label>
                <div>
                    <input
                        type="file"
                        name="photo"
                        id="upload-photo"
                    />
                </div>
            </div>
            <input
                type="text"
                className="input-form d-block mt-3 px-3"
                placeholder="اسم الماركه"
            />
        </Col>
    </Row>
    <Row>
        <Col sm="8" className="d-flex justify-content-end ">
            <button  className="btn-save d-inline mt-2 ">حفظ التعديلات</button>
        </Col>
    </Row>
    </div>
  )
}

export default AddBrandsAdmin