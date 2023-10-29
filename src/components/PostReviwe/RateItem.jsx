import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { ToastContainer } from 'react-toastify'
import rate from '../../Assets/rate.png'
import deleteicon from '../../Assets/delete.png'
import editicon from '../../Assets/edit.png'

function RateItem() {
  return (
    <div>

    <Row className="mt-3">
        <Col className="d-flex me-5">
            <div className="rate-name  d-inline ms-2">أحمد جمال</div>
            <img className="" src={rate} alt="" height="16px" width="16px" />
            <div className="cat-rate  d-inline  p-1 pt-2">4.8</div>
        </Col>
    </Row>
    <Row className="border-bottom mx-2">
        <Col className="d-flex me-4 pb-2">
            <div className="rate-description  d-inline ms-2">
                منتج مناسب و موثق جدا فى امكانياته و جودته
            </div>
                <div className='d-inline d-flex justify-content-end'>
                    
                    <img src={deleteicon} width="20px" height="20px" style={{ cursor: "pointer" }} alt="delete" />

                    <img src={editicon}  width="20px" height="20px" style={{ cursor: "pointer" }} alt="delete" />

                </div>
        </Col>
    </Row>
    <ToastContainer />
    </div>
  )
}

export default RateItem