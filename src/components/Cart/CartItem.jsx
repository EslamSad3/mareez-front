import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import './CartItem.css';
import deleteicon from '../../Assets/delete.png';
import { BiSolidShoppingBags } from 'react-icons/bi';
import { Link } from 'react-router-dom';

function CartItem({ userCartItems }) {
  return (
    <div>
      <Container>
        <Row>
          {userCartItems &&
            userCartItems.map((item) => {
              return (
                <Card key={item && item._id} className="my-3 ItemCard">
                  <Col lg="12">
                    <div className="CartShop">
                      <Container>
                        <Row>
                          <Col lg="3" xs="12">
                            <div>
                              <Link target="_blank" to={'/detalis/:id'}>
                                <img
                                  src={
                                    item &&
                                    item.product &&
                                    item.product.imageCover
                                  }
                                  alt=""
                                  className="ImageCartShop"
                                />
                              </Link>
                            </div>
                          </Col>
                          <Col lg="9">
                            <div>
                              <p className="CartShopDecs">
                                {item && item.product && item.product.title}
                              </p>
                              <p className="CartShopDecs">
                                {item &&
                                  item.product &&
                                  item.product.description}
                              </p>
                              <Row>
                                <div>
                                  <BiSolidShoppingBags
                                    style={{ fontSize: '30px' }}
                                    className="mx-2"
                                  />
                                  البائع :{' '}
                                  {item &&
                                    item.product &&
                                    item.product.brand &&
                                    item.product.brand.name}
                                </div>
                              </Row>
                              <p className="CartShopPrice">
                                {item &&
                                  item.product &&
                                  item.product.priceAfterDisc}{' '}
                                ريال
                              </p>
                              <div className="d-flex justify-content-between">
                                <p className=""> الكمية {item.quantity}</p>
                                <img
                                  src={deleteicon}
                                  className="DeleteIcon"
                                  alt=""
                                />
                              </div>
                            </div>
                          </Col>
                        </Row>
                      </Container>
                    </div>
                  </Col>
                </Card>
              );
            })}
        </Row>
      </Container>
    </div>
  );
}

export default CartItem;
