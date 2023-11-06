import React, { useContext, useEffect, useState } from 'react';
import { Card, Col, Container, Row, Spinner } from 'react-bootstrap';
import './CartItem.css';
import deleteicon from '../../Assets/delete.png';
import { BiSolidShoppingBags } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { Context } from '../../context/ContextAPI';

function CartItem() {
  const { loggedUsercart, deleteItemFromCart, isLoading } = useContext(Context);
  const [userCartItems, setuserCartItems] = useState([]);
  console.log(userCartItems);

  const [count, setCount] = useState(1);
  // ++++++
  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };
  // --------
  const decrement = () => {
    if (count === 1) {
      setCount(1);
      return;
    } else {
      setCount((prevCount) => prevCount - 1);
    }
  };

  async function handleDeleteItemFromCart(id) {
    await deleteItemFromCart(id);
  }
  useEffect(() => {
    setuserCartItems(loggedUsercart.data.cartItems);
  }, [loggedUsercart]);

  return (
    <div>
      <Container>
        <Row>
          {userCartItems &&
            userCartItems.map((item) => {
              return (
                <Card key={item._id} className="my-3 ItemCard">
                  <Col lg="12">
                    <div className="CartShop">
                      <Container>
                        <Row>
                          <Col lg="3" xs="12">
                            <div>
                              <Link to={`/details/${item.product.id}`}>
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
                                <p className=""> الكمية {item.cartQuantity}</p>
                                <Col lg="3" xs="4" className="mx-2">
                                  <div className="countersButton d-flex justify-content-center">
                                    <span
                                      className="mx-3"
                                      onClick={increment}
                                      style={{ fontSize: '30px' }}
                                    >
                                      +
                                    </span>
                                    <span className="mx-2">{count}</span>

                                    <span
                                      className="mx-3"
                                      style={{ fontSize: '30px' }}
                                      onClick={decrement}
                                    >
                                      -
                                    </span>
                                  </div>
                                </Col>
                                {isLoading ? (
                                  <Spinner variant="danger" />
                                ) : (
                                  <img
                                    src={deleteicon}
                                    className="DeleteIcon cursor-pointer"
                                    alt=""
                                    onClick={() =>
                                      handleDeleteItemFromCart(item._id)
                                    }
                                  />
                                )}
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
