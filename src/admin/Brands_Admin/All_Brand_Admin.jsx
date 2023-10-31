import React from 'react';
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
import { useContext } from 'react';
import { Context } from '../../context/ContextAPI';
import { useState } from 'react';

function AllBrandAdmin() {
  const { brands, deleteBrand, isLoading } = useContext(Context);
  const [show, setShow] = useState(false);
  const [selectedBrand, setSelectedBrand] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = (BrandID) => {
    setShow(true);
    setSelectedBrand(BrandID);
  };

  async function handleDeleteBrand() {
    if (selectedBrand) {
      await deleteBrand(selectedBrand);
      handleClose();
    }
  }
  return (
    <>
      <Container>
        <br />
        <h2 className="text-center"> كل الماركات</h2>
        <Row>
          {brands &&
            brands.map((brand) => {
              return (
                <>
                  <Col
                    key={brand._id}
                    xs="11"
                    sm="5"
                    md="5"
                    lg="3"
                    className="d-flex gap-1"
                  >
                    <Card
                      className="my-1 p-2"
                      style={{
                        width: '100%',
                        Maxheight: '150px',

                        
                        // backgroundColor: '#FFFFFF',
                      }}
                    >
                      <Row className="d-flex justify-content-center">
                        <Col className=" d-flex justify-content-between ">
                          <div
                            className="d-inline item-delete-edit text-dark"
                            variant="danger"
                            onClick={() => handleShow(brand._id)}
                          >
                            ازاله
                          </div>
                          <Link
                            to={`/admin/allBrands/${brand._id}`}
                            style={{ textDecoration: 'none' }}
                          >
                            <div
                              variant="success"
                              className="d-inline item-delete-edit text-dark"
                            >
                              تعديل
                            </div>
                          </Link>
                        </Col>
                      </Row>

                      <Card.Body className='p-0'>
                        <div className="card-title text-center">
                          <h4 className='m-0'>{brand.name} </h4>
                        </div>
                      </Card.Body>
                      <Card.Img
                        style={{ height: '50%', width: '100%' }}
                        src={brand.image}
                      />
                    </Card>
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
              <Button variant="danger" onClick={() => handleDeleteBrand()}>
                إزاله
              </Button>
            )}
          </Modal.Footer>
        </Modal>
      </Container>
    </>
  );
}

export default AllBrandAdmin;
