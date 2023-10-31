import React from 'react'
import { Row } from 'react-bootstrap'
import './SideFilture.css'

function SideFilture() {
  return (
    <div className="mt-3 FilterStyle">
    <Row>
      <div className="d-flex flex-column mt-2">
        <div className="filter-Title">الفئة</div>
        <div className="d-flex mt-3">
          <input type="checkbox" value="0" />
          <div className="filter-sub me-2 ">الكل</div>
        </div>
       
              <div className="d-flex mt-3">
                <input  type="checkbox"  />
                <div className="filter-sub me-2 ">اجهزه منزليه</div>
              </div>

              <div className="d-flex mt-3">
                <input  type="checkbox"  />
                <div className="filter-sub me-2 ">اجهزه كهربائيه</div>
              </div>

              <div className="d-flex mt-3">
                <input  type="checkbox"  />
                <div className="filter-sub me-2 ">كنب </div>
              </div>
      </div>

      <div className="d-flex flex-column mt-2">
        <div className="filter-title mt-3">الماركة</div>
        <div className="d-flex mt-3">
          <input  type="checkbox" value="0" />
          <div className="filter-sub me-2 ">الكل</div>
        </div>

        
              <div  className="d-flex mt-3">
                <input  type="checkbox"  />
                <div className="filter-sub me-2 ">بنجو</div>
              </div>

              <div  className="d-flex mt-3">
                <input  type="checkbox"  />
                <div className="filter-sub me-2 ">حشيش</div>
              </div>
      </div>

      <div className="filter-title my-3">السعر</div>
      <div className="d-flex">
        <p className="filter-sub my-2">من:</p>
        <input
          
          className="m-2 text-center"
          type="number"
          style={{ width: "50px", height: "25px" }}
        />
      </div>
      <div className="d-flex">
        <p className="filter-sub my-2">الي:</p>
        <input
          
          className="m-2 text-center"
          type="number"
          style={{ width: "50px", height: "25px" }}
        />
      </div>
    </Row >
  </div >
  )
}

export default SideFilture