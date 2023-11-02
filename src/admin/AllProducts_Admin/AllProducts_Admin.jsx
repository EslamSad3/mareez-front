import React, { useContext, useEffect, useState } from 'react';
import { Button, Card, Col, Container, Row, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';

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
                  <Col
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
                          <Card.Text className='m-2'>
                            <div className="d-flex justify-content-between">
                              <div className="card-rate">{item.rates}</div>
                              <div className="d-flex">
                                <div className="card-currency mx-1">ر.س</div>
                                <div className="card-price">{item.price}</div>
                              </div>
                            </div>
                          </Card.Text>
                          <Card.Title>
                            <p className="card-title">{item.description}</p>
                          </Card.Title>
                        </Card.Body>
                      </Link>
                    </Card>
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
