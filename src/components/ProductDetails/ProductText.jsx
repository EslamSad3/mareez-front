import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { ToastContainer } from 'react-toastify'
import './ProductText.css'
import {BiSolidShoppingBags} from'react-icons/bi'
import { AiOutlineShoppingCart} from'react-icons/ai'
import favoff from '../../Assets/fav-off.png'
import favon from '../../Assets/fav-on.png'

function ProductText() {
  //  heart 
  const [isFavOn, setIsFavOn] = useState(false);

  const switchImage = () => {
    setIsFavOn((prevState) => !prevState);
  };
  ///// count
  const [count, setCount] = useState(1);
  // ++++++
  const increment = () => {
      setCount((prevCount) => prevCount + 1);
  };
  // --------
  const decrement = () => {
     if (count < 1) {
      setCount(0);
    } else {
      setCount((prevCount) => prevCount - 1);
    }
  };
   
  return (
    <div>
      {/* 1 */}
    <Row className="mt-2">
      <h3 className="titleDetails"> طاولة مدخل 110×45×90 سم - بني وأبيض - ADESI-10100</h3>
      <div className='d-flex justify-content-start m-2'>
        <div className='mx-2 textDes'>ينتج عند الطلب</div>
        <div className='mx-2 textDesc'>يتم التوصيل فى خلال 10-14 ايام</div>
      </div>
    </Row>
      {/* 2 */}
    <Row className="mt-2">
      <h4 ><strong>1,499</strong>.00 ريال</h4>
      <div className='d-flex justify-content-start m-2'>
        <p ><del>1,750.00 ريال</del></p>
        <p className="priceDescound">خصم 14%</p>
      </div>
        <div className='mx-3 priceDesc'> *السعر يشمل ضريبه القيمه المضافه</div>
    </Row>
    <hr />
      {/* 3 */}
    <Row>
      <div>
        <BiSolidShoppingBags style={{fontSize:'30px'}} className='mx-2'/>
       البائع :Modern Mattress
      </div>
    </Row>
    <hr />
     {/* 4 */}
    <Row>
      <div className='d-flex justify-content-around'>
        <Col lg='3' xs='4' className='mx-2'>
          <div className='countersButton d-flex justify-content-center'>
            <span className='mx-3' onClick={increment} style={{fontSize: '30px'}}>+</span>
            <span className='mx-2'>{count}</span>
            <span className='mx-3' style={{fontSize: '30px'}} onClick={decrement}>-</span>
          </div>
        </Col>
        <Col lg='7' xs='6' className='mx-2'>
          
            <button type="button" className="  buttonCart" style={{width:'100%'}}>
              <span className="glyphicon glyphicon-plus"></span> 
               إضافة إلى 
              <AiOutlineShoppingCart className='mx-2'/>
            </button>
          
        </Col>
        <Col lg='2' xs='2' className='mx-2'>
          <img
            src={isFavOn ? favon : favoff}
            alt={isFavOn ? "Favorited" : "Not favorited"}
            onClick={switchImage}
            className="text-center HeartIcon"
            />
        </Col>
      </div>
    </Row>
    <hr />
      {/* 5 */}
    <Row className="mt-2">
      <h2 className='m-2'>الوصف</h2>
      <ul>
        <li>العلامة التجارية: فنون التصميم</li>
        <li>اللون: بني وأبيض</li>
        <li>لطول (سم): 110</li>
        <li>العرض (سم): 45</li>
        <li>لإرتفاع (سم): 90</li>
        <li>الخامة: خشب تايلندي وزجاج </li>
        <li>بلد المنشأ: المملكة العربية السعودية</li>
      </ul>
        <div className='mx-3 priceDesc'> *السعر يشمل ضريبه القيمه المضافه</div>
    </Row>
    <hr />
      {/* 6 */}
    <Row className="mt-2">
      <h3 className="mt-2">المواصفات  </h3>
      <table className="table table-striped">
        <tbody>
          <tr>
            <td>SKU</td>
            <td>MOD.MA.242</td>
          </tr>
          <tr>
            <td>تاجر</td>
            <td>Modern Mattress</td>
          </tr>
          <tr>
            <td>العمق (سم)</td>
            <td>140</td>
          </tr>
          <tr>
            <td>اللون</td>
            <td>رمادي</td>
          </tr>
        </tbody>
      </table>
      
    </Row>
      {/* 7 */}
    <ToastContainer />
    </div>
  )
}

export default ProductText