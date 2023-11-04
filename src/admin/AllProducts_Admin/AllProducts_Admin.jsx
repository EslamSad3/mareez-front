import React, { useContext, useEffect, useState } from 'react';
import { Button, Card, Col, Container, Row, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import cat1 from '../../Assets/cat1.jpg'
import deleteicon from '../../Assets/delete.png'
import edit from '../../Assets/edit.png'

import { Context } from '../../context/ContextAPI';

function AllProductsAdmin() {
  const { products, deleteProduct, isLoading } = useContext(Context);
  const [selectedProduct, setSelectedProduct] = useState(null);
  
  const handleClose = () => setShow(false);
  const [show, setShow] = useState(false);

  const handleShow = (productId) => {
    setShow(true);
    setSelectedProduct(productId);
  };
  async function handleDeleteProduct() {
    if (selectedProduct) {
      await deleteProduct(selectedProduct);
      handleClose();
    }
  }
  
  return (
    <>
      {isLoading ? (
        <Spinner animation="grow" />
      ) : (
        <Container>
          <br />
          <h2 className="text-center"> كل المنتجات</h2>
          <Row>
            {products.map((item) => {
              return (
                <>
                  {/* <Col
                    key={item._id}
                    xs="12"
                    sm="6"
                    md="6"
                    lg="4"
                    className="d-flex"
                  >
                    
                    <Card
                      className="my-2"
                      style={{
                        width: '100%',
                        height: '350px',
                        borderRadius: '8px',
                        border: 'none',
                        backgroundColor: '#FFFFFF',
                      }}
                    >
                      <Row>

                        <Row className="d-flex justify-content-center px-2">
                          <Col className=" d-flex justify-content-between">
                            <div
                              className="d-inline item-delete-edit"
                              onClick={()=>handleShow(item._id)}
                            >
                              ازاله
                            </div>
                            <Link
                              to={`/admin/allProducts/update/${item._id}`}
                              style={{ textDecoration: 'none' }}
                            >
                              <div className="d-inline item-delete-edit">
                                تعديل
                              </div>
                            </Link>
                          </Col>
                        </Row>

                        <Link
                          to={`/admin/allProducts/${item._id}`}
                          style={{ textDecoration: 'none' }}
                        >
                          <Card.Img
                            style={{ height: '228px', width: '100%' }}
                            src={item.imageCover}
                          />
                          <Card.Body>
                            <Card.Title>
                              <div className="card-title">{item.title}</div>
                            </Card.Title>
                            <Card.Title>
                              <p className="card-title">{item.description}</p>
                            </Card.Title>
                            <Card.Text >
                              <div className="d-flex justify-content-between ">
                                <div className="card-rate">4.5</div>
                                <div className="d-flex">
                                  <div className="card-currency mx-1">جنيه</div>
                                  <div className="card-price">5000</div>
                                </div>
                              </div>
                            </Card.Text>
                          </Card.Body>
                        </Link>
                      </Row>
                    </Card>
                  </Col> */}


                  <Col xs='12' md='4'>

                      <Container>
                        <Row>
                        <Card className='my-3 ItemCard' key={item._id}>
                            <Col lg='12' >
                                <div className='CartShop'>
                                    <Container>
                                        <Row>
                                            <Col lg='12' xs='12'>
                                                <div >
                                                <Link target='_blank' to={"/detalis/:id"}>

                                                    <img src={item.imageCover} alt="" className='ImageCartShop' />
                                                </Link>
                                                </div>
                                            </Col>
                                            <Col  lg='9'>
                                                <div>
                                                    <p className='CartShopDecs'>
                                                    {item.title}
                                                    </p>
                                                    <p className='CartShopDecs'>{item.description}</p>
                                                    <Row>
                                                        <div>
                                                            
                                                        البائع :Modern Mattress
                                                        </div>
                                                    <p className='CartShopPrice'>1400 ريال</p>
                                                    </Row>
                                                      <Row>
                                                      <div className='d-flex justify-content-around my-2'>
                                                          <div  onClick={()=>handleShow(item._id)}>
                                                            <img src={deleteicon} className='DeleteIcon ' alt="" />
                                                          </div>
                                                          <div >
                                                          <Link
                                                          to={`/admin/allProducts/update/${item._id}`}
                                                          style={{ textDecoration: 'none' }}
                                                        >
                                                            <img src={edit} className='DeleteIcon ' alt="" />
                                                        </Link>
                                                          </div>
                                                      </div>
                                                      </Row>

                                                </div>
                                            </Col>
                                        </Row>
                                    </Container>
                                </div>
                            </Col>
                        </Card>
                        </Row>
                      </Container>
                    </Col>
                </>
              );
            })}
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>إزالة منتج</Modal.Title>
          </Modal.Header>
          <Modal.Body>هل انت متأكد انك تريد ازالة هذا المنتج</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              رجوع
            </Button>
            {isLoading ? (
              <Spinner animation="border" />
            ) : (
              <Button variant="danger" onClick={() => handleDeleteProduct()}>
                إزاله
              </Button>
            )}
          </Modal.Footer>
        </Modal>
          </Row>
        </Container>
      )}
    </>
  )
}
export default AllProductsAdmin;
