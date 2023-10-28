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
    {isLoading ? <Spinner animation="grow" /> : 
        <Container>
    
      <br />
      <h2 className='text-center'> كل المنتجات</h2>
      <Row>
        {products.map((item) => {
          return (
            <>
              {/* <Col key={item._id} xs="9" sm="9" md="3">
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
              </Modal> */}





<Col key={item._id} xs="12" sm="6" md="6" lg="4" className="d-flex">
            <Card
                className="my-2"
                style={{
                    width: "100%",
                    height: "350px",
                    borderRadius: "8px",
                    border: "none",
                    backgroundColor: "#FFFFFF",
                }}>
                <Row className="d-flex justify-content-center px-2">
                    <Col className=" d-flex justify-content-between">
                        <div className="d-inline item-delete-edit" onClick={handleShow}>ازاله</div>
                        <Link to={`/admin/allProducts/update/${item.id}`} style={{ textDecoration: "none" }}>
                            <div className="d-inline item-delete-edit">تعديل</div>
                        </Link>
                    </Col>
                </Row>

                <Link to={`/admin/allProducts/${item._id}`} style={{ textDecoration: "none" }}>
                    <Card.Img style={{ height: "228px", width: "100%" }} src={item.imageCover} />
                    <Card.Body>
                        <Card.Title>
                            <div className="card-title">
                            {item.title}
                            </div>
                        </Card.Title>
                        <Card.Title>
                            <p className="card-title">
                                {item.description}
                            </p>
                        </Card.Title>
                        <Card.Text>
                            <div className="d-flex justify-content-between">
                                <div className="card-rate">4.5</div>
                                <div className="d-flex">
                                    <div className="card-currency mx-1">جنيه</div>
                                    <div className="card-price">5000</div>
                                </div>
                            </div>
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
    

      
            // <Col xs="12" sm="6" md="5" lg="4" className="d-flex">
            // <Card
            //     className="my-2"
            //     style={{
            //         width: "100%",
            //         height: "350px",
            //         borderRadius: "8px",
            //         border: "none",
            //         backgroundColor: "#FFFFFF",
            //     }}>
            //     <Row className="d-flex justify-content-center px-2">
            //         <Col className=" d-flex justify-content-between">
            //             <div className="d-inline item-delete-edit">ازاله</div>
            //             <Link to='/products/:id' style={{ textDecoration: "none" }}>
            //                 <div className="d-inline item-delete-edit">تعديل</div>
            //             </Link>
            //         </Col>
            //     </Row>
            //     <Link to='/products/:id' style={{ textDecoration: "none" }}>
            //         <Card.Img style={{ height: "228px", width: "100%" }} src='' />
            //         <Card.Body>
            //             <Card.Title>
            //                 <div className="card-title">
            //                     لابتوب
            //                 </div>
            //             </Card.Title>
            //             <Card.Text>
            //                 <div className="d-flex justify-content-between">
            //                     <div className="card-rate">4.5</div>
            //                     <div className="d-flex">
            //                         <div className="card-currency mx-1">جنيه</div>
            //                         <div className="card-price">5000</div>
            //                     </div>
            //                 </div>
            //             </Card.Text>
            //         </Card.Body>
            //     </Link>
            // </Card>
            // </Col>
    );
}

export default AllProductsAdmin;
