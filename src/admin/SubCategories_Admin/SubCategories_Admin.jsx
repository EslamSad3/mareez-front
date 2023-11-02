import React, { useState } from 'react';
import { useContext } from 'react';
import { Button, Col, Container, Modal, Row, Spinner } from 'react-bootstrap';
import { Context } from '../../context/ContextAPI';
import { Link } from 'react-router-dom';
function SubCategoriesAdmin() {
  const { subcategories, deleteSub, isLoading } = useContext(Context);
  const [selectedSub, setSelectedSub] = useState(null);

  const handleClose = () => setShow(false);
  const [show, setShow] = useState(false);
  const handleShow = (subID) => {
    setShow(true);
    setSelectedSub(subID);
  };

  async function handleDeleteSub() {
    if (selectedSub) {
      await deleteSub(selectedSub);
      handleClose();
    }
  }
  console.log(subcategories);
  return (
    <>
      {subcategories&& subcategories.length > 0 ? (
        <Container>
          <br />
          <h2 className="text-center"> كل التصنيفات الفرعيه</h2>
          <Row>
            {subcategories &&
              subcategories.map((sub) => {
                return (
                  <>
                    <Col lg="4" md="6" sm="6" xs="12" className="my-2">
                      <div className="card">
                        <div className="card-body">
                          <div className=" d-flex flex-row justify-content-between">
                            <Button
                              className="d-inline pt-2 cat-text text-white "
                              variant="danger"
                              onClick={() => handleShow(sub._id)}
                            >
                              {' '}
                              حذف
                            </Button>
                            <Link to={`/admin/subcategories/${sub._id}`}>
                              <Button
                                className="d-inline pt-2 cat-text text-white "
                                variant="success"
                              >
                                {' '}
                                تعديل
                              </Button>
                            </Link>
                          </div>
                          <div className="text-center my-3">
                            <p className="card-text"> الإسم : {sub&& sub.name}</p>
                            <p className="card-text">
                              {' '}
                              إسم التصنيف الرئيسي :{' '}
                              {sub &&sub.category &&sub.category.name ? sub.category.name : ''}
                            </p>
                          </div>
                        </div>
                      </div>
                    </Col>
                  </>
                );
              })}
          </Row>
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
                <Button variant="danger" onClick={() => handleDeleteSub()}>
                  إزاله
                </Button>
              )}
            </Modal.Footer>
          </Modal>
        </Container>
      ) : (
        <h1> 'لا توجد تصنيفات فرعيه برجاء الاضافه'</h1>
      )}
    </>
  );
}

export default SubCategoriesAdmin;
