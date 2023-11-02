import React from 'react';
import { Col, Row, Spinner } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { Context } from '../../../context/ContextAPI';
import { useEffect } from 'react';
import { useState } from 'react';

function OrderDetailsAdmin() {
  const { id } = useParams();
  const [Orderstate, setOrderStatus] = useState('');
  const [PaymentStatus, setPaymentStatus] = useState('');
  const {
    order,
    getOneOrder,
    deliverLoading,
    payLoading,
    changeOrderStatus,
    changeOrderPatmentStatus,
  } = useContext(Context);

  async function getOrder() {
    await getOneOrder(id);
  }

  async function handleOrderStatus() {
    await changeOrderStatus(id, Orderstate);
    console.log(Orderstate, 'Orderstate');
  }
  
  async function handleOrderPaymentStatus() {
    await changeOrderPatmentStatus(id, PaymentStatus);
    console.log(PaymentStatus, 'PaymentStatus');
  }

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
                    <p> اسم المنتج : {item && item.product &&item.product.title}</p>

                    <div className="d-inline pt-2 cat-rate me-2">
                      السعر : {item && item.product &&item.product.price}
                    </div>
                    <div className="d-inline pt-2 cat-rate me-2">
                      الكمية : {item && item.product &&item.product.quantity}
                    </div>
                  </div>
                  <div>
                    <img
                      src={item && item.product &&item.product.imageCover}
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
              <p> اسم العميل : {order.user.name}</p>
              <h6>العنوان</h6>
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
            <div className="d-flex justify-content-around p-1 w-full ">
              <select
                name="deliver"
                id="deliver"
                className="w-50 border-1 rounded-3 p-2"
                onChange={(e) => setOrderStatus(e.target.value)}
                value={Orderstate} // Add this line
              >
                <option value="review">قيد المراجعه</option>
                <option value="shipping">جاري الشحن</option>
                <option value="delivered">تم التوصيل</option>
              </select>

              {deliverLoading ? (
                <Spinner animation="border" />
              ) : (
                <button
                  type="button"
                  className="btn-save d-inline mt-2 "
                  onClick={() => handleOrderStatus()}
                >
                  تحديث حالة الطلب
                </button>
              )}
            </div>

            <br />
          </Row>
          <p>
            حالة الدفع : {order.isPaid === 'paid' ? 'تم الدفع' : 'لم يتم الدفع'}
          </p>
          <div className="d-flex justify-content-around p-1 w-full ">
            <select
              name="pay"
              id="pay"
              className="w-50 border-1 rounded-3 p-2"
              onChange={(e) => setPaymentStatus(e.target.value)}
              value={PaymentStatus} // Add this line
            >
              <option value="paid"> تم الدفع</option>
              <option value="NotPaid"> لم يتم الدفع</option>
            </select>

            {payLoading ? (
              <Spinner animation="border" />
            ) : (
              <button
                type="button"
                className="btn-save d-inline mt-2 "
                onClick={() => handleOrderPaymentStatus()}
              >
                تحديث حالة الدفع
              </button>
            )}
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}
export default OrderDetailsAdmin;
