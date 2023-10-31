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
import cat1 from '../../Assets/cat1.jpg';
import { useContext } from 'react';
import { Context } from '../../context/ContextAPI';

function AllBrandAdmin() {
  const { brands } = useContext(Context);

  return (
    <div>
      <Container>
        <br />
        <h2 className="text-center"> كل الماركات</h2>
        <Row>
          {brands &&
            brands.map((brand) => {
              return (
                <>
                  <Col key={brand._id} xs="12" sm="6" md="6" lg="4" className="d-flex">
                    <Card
                      className="my-2"
                      style={{
                        width: '100%',
                        height: '300px',
                        borderRadius: '8px',
                        border: 'none',
                        backgroundColor: '#FFFFFF',
                      }}
                    >
                      <Row className="d-flex justify-content-center px-2">
                        <Col className=" d-flex justify-content-between">
                          <div className="d-inline item-delete-edit">ازاله</div>
                          <Link style={{ textDecoration: 'none' }}>
                            <div className="d-inline item-delete-edit">
                              تعديل
                            </div>
                          </Link>
                        </Col>
                      </Row>

                      <Card.Img
                        style={{ height: '228px', width: '100%' }}
                        src={brand.image}
                      />
                      <Card.Body>
                        <div className="card-title text-center">
                        {brand.name} 
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                </>
              );
            })}
        </Row>
        <Modal>
          <Modal.Header closeButton>
            <Modal.Title>إزالة منتج</Modal.Title>
          </Modal.Header>
          <Modal.Body>هل انت متأكد انك تريد ازالة هذا المنتج</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary">رجوع</Button>
            <Spinner animation="border" /> :{' '}
            <Button variant="danger">إزاله</Button>
          </Modal.Footer>
        </Modal>
      </Container>
    </div>
  );
}

export default AllBrandAdmin;
