import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { Context } from '../../context/ContextAPI';
function OrdersAdmin() {
  const { orders } = useContext(Context);
  console.log(orders);
  return (
    <>
      <Container>
        <br />
        <h2 className="text-center"> كل الطلبات</h2>
        <Row>
        {orders.length > 0 ? (
          orders.map((order) => {
            return <>
              <Link key={order._id} to={`/admin/orders/${order._id}`}>
                  <Col sm="12" className="mt-2">
                    <div
                      className="cart-item-body my-2 px-1 d-flex"
                      style={{ textDecoration: 'none' }}
                    >
                      <div className="w-100 m-2">
                        <Row className="justify-content-between">
                          <Col
                            sm="12"
                            className=" d-flex flex-row justify-content-between"
                          >
                            <div className="d-inline pt-2 cat-text">
                              رقم الطلب : {order._id}
                            </div>
                            <div className="d-inline pt-2 cat-text">ازاله</div>
                          </Col>
                        </Row>
                      </div>
                    </div>
                  </Col>
              </Link>
            </>
          
          })
        ) : (
          <p>Loading</p>
        )}
        </Row>
      </Container>
    </>
  );
}

export default OrdersAdmin;
