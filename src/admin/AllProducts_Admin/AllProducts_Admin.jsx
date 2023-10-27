import React, { useContext, useEffect, useState } from 'react';
import { Button, Card, Col, Container, Row, Spinner } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import { Context } from '../../context/ContextAPI';
function AllProductsAdmin() {
  const { products, deleteProduct,isLoading } = useContext(Context);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { id } = useParams();
  async function handleDeleteProduct(id) {
    await deleteProduct(id);
    handleClose();
  }
  useEffect(() => {}, [products]);
  return (
    <>
    {isLoading ? <Spinner animation="grow" /> :     <Container>
      <Link to={'/admin/allProducts/add'}>
        <Button>اضافة منتج</Button>
      </Link>{' '}
      <br />
      <h2>كل المنتجات</h2>
      <Row>
        {products.map((item) => {
          return (
            <>
              <Col key={item._id} xs="9" sm="9" md="3">
                <Card>
                  <div className="d-flex justify-content-between p-2">
                    <Button variant="danger" onClick={handleShow}>
                      إزاله
                    </Button>
                    <Link to={`/admin/allProducts/update/${item.id}`}>
                    <Button>تعديل</Button>
                    </Link>
                  </div>
                  <Link to={`/admin/allProducts/${item._id}`}>
                    <Card.Img variant="top" src={item.imageCover} />
                    <Card.Body>
                      <Card.Title className="text-dark">
                        {item.title}
                      </Card.Title>
                      <Card.Text className="text-dark">
                        {item.description}
                      </Card.Text>
                    </Card.Body>
                  </Link>
                </Card>
              </Col>
              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>إزالة منتج</Modal.Title>
                </Modal.Header>
                <Modal.Body>هل انت متأكد انك تريد ازالة هذا المنتج</Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    رجوع
                  </Button>
                  {isLoading ? <Spinner animation="border" /> : <Button
                    variant="danger"
                    onClick={() => handleDeleteProduct(item._id)}
                  >
                    إزاله
                  </Button>}
                  
                </Modal.Footer>
              </Modal>
            </>
          );
        })}
      </Row>
    </Container>}

    </>
  );
}

export default AllProductsAdmin;
