import React, { useContext, useState } from 'react';
import {
  Button,
  Card,
  Col,
  Container,
  Modal,
  Row,
  Spinner,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Context } from '../../context/ContextAPI';
function CategoriesAdmin() {
  const { categories, isLoading, deleteCategory } = useContext(Context);
  const [show, setShow] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const handleClose = () => setShow(false);
  const handleShow = (categoryId) => {
    setShow(true);
    setSelectedCategory(categoryId);
  };

  async function handleDeleteCategory() {
    if (selectedCategory) {
      await deleteCategory(selectedCategory);
      handleClose();
    }
  }

  return (
    <Container>
      <br />
      <h2 className="text-center"> كل التصنيفات</h2>
      <Row>
        {categories.map((category) => {
          return (
            <>
              <Col xs="12" sm="6" md="6" lg="4" className="d-flex gap-1">
                <Card
                  key={category._id}
                  className="my-2"
                  style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: '8px',
                    border: 'none',
                    backgroundColor: '#FFFFFF',
                  }}
                >
                  <Row className="d-flex justify-content-center px-2">
                    <Col className=" d-flex justify-content-between">
                      <div
                        className="d-inline item-delete-edit"
                        onClick={() => {
                          handleShow(category._id);
                          console.log(category._id);
                        }}
                      >
                        ازاله
                      </div>
                      <Link
                        style={{ textDecoration: 'none' }}
                        to={`/admin/categories/${category._id}`}
                      >
                        <div className="d-inline item-delete-edit">تعديل</div>
                      </Link>
                    </Col>
                  </Row>

                  <Card.Img
                    style={{ height: '228px', width: '100%' }}
                    src={category.image}
                  />
                  <Card.Body>
                    <div className="card-title text-center">
                      {category.name}
                    </div>
                  </Card.Body>
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
              <Button variant="danger" onClick={() => handleDeleteCategory()}>
                إزاله
              </Button>
            )}
          </Modal.Footer>
        </Modal>
      </Row>
    </Container>
  );
}

export default CategoriesAdmin;
