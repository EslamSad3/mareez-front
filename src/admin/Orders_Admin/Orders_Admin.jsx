import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { Context } from '../../context/ContextAPI';
function OrdersAdmin() {
  const { orders,deleteOrder } = useContext(Context);

  async function handledeleteorder(id){
    await deleteOrder(id)
  }
  return (
    <>
      <Container>
        <br />
        <h2 className="text-center"> كل الطلبات</h2>
        <Row>
          {orders&& orders.length > 0 ? (
            orders.map((order) => {
              return (
                <>
                  <div key={order._id}>
                    <Col sm="12" className="mt-2">
                      <div
                        className=" bg-dark-subtle my-2 p-2 rounded-1  d-flex"
                        style={{ textDecoration: 'none' }}
                      >
                        <div className="w-100">
                          <Row className="justify-content-between">
                            <Col
                              sm="12"
                              className=" d-flex flex-row justify-content-around align-items-center text-center"
                            >
                              <Link to={`/admin/orders/${order._id}`}>
                                <div className="d-inline pt-2 cat-text">
                                  رقم الطلب : {order._id}
                                </div>
                              </Link>

                            

                                <Button
                                  className="d-inline text-dark"
                                  variant="danger"
                                  onClick={()=>handledeleteorder(order._id)}
                                >
                                  ازاله
                                </Button>
                            </Col>
                          </Row>
                        </div>
                      </div>
                    </Col>
                  </div>
                </>
              );
            })
          ) : (
            <p>No Orders Yet</p>
          )}
        </Row>
      </Container>
    </>
  );
}

export default OrdersAdmin;
