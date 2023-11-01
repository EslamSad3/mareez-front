import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import { useContext } from 'react';
import { Context } from '../../../context/ContextAPI';
import { useEffect } from 'react';
import { useState } from 'react';
function OrderDetailsAdmin() {
  const { id } = useParams();
  const [Orderstate, setOrderStatus] = useState('');
  const { order, getOneOrder, changeOrderStatus } = useContext(Context);
  async function getOrder() {
    await getOneOrder(id);
  }

  async function handleChangeOrderStatus(){
    await changeOrderStatus(id,Orderstate)
  }
  console.log(Orderstate);
  useEffect(() => {
    getOrder();
  }, []);
  return (
    <>
      {order && order.cartItems ? (
        <>
          <Row className="justify-content-center mt-2">
            {order.cartItems.map((item) => (
              <Col
                key={item._id}
                sm="12"
                className=" d-flex flex-row justify-content-between"
              >
                <>
                  <div className="d-inline pt-2 cat-title">
                    <p> اسم المنتج : {item.product.title}</p>

                    <div className="d-inline pt-2 cat-rate me-2">
                      السعر : {item.product.price || '0'}
                    </div>
                    <div className="d-inline pt-2 cat-rate me-2">
                      الكمية : {item.quantity || '0'}
                    </div>
                  </div>
                  <div>
                    <img
                      src={item.product.imageCover}
                      style={{ width: '85px' }}
                      alt=""
                    />
                  </div>
                </>
              </Col>
            ))}
          </Row>
          <Row className="mt-3">
            <h6>بيانات العميل</h6>
            <div>
              <h6>العنوان</h6>
              <p> اسم العميل : {order.user.name}</p>
              <p> المدينه : {order.shippingAddress.city}</p>
              <p> تفاصيل : {order.shippingAddress.details}</p>
              <p> رقم الهاتف : {order.shippingAddress.phone}</p>
              <p> الرقم البريدي : {order.shippingAddress.postalCode}</p>
              <p>طريقة الدفع :{order.paymentMethod}</p>
              <p>تم الدفع : {order.isPaid ? 'نعم' : 'لا'}</p>
              <p></p>
            </div>
            <div className=" pt-2 text-dark">
              الإجمالي : {order.totalOrderPrice}
            </div>
              <p>حالة الطلب : {order.status}</p>
              
              <br />
            <div className="d-flex justify-content-around border border-1 p-1 w-50 ">
              <select name="" id="" className="w-100"
              onChange={(e)=> setOrderStatus(e.target.value.toString())}
              >
                <option value="under review">قيد المراجعه</option>
                <option value="shipping">جاري الشحن</option>
                <option value="delivered">تم التوصيل</option>
              </select>
              <button  onClick={handleChangeOrderStatus}>تغيير الحاله</button>
            </div>
          </Row>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}

export default OrderDetailsAdmin;
