import React from 'react';
import { useContext } from 'react';
import { Col, Container, Modal, Row, Spinner,Button } from 'react-bootstrap';
import { Context } from '../../context/ContextAPI';
import { useState } from 'react';
function UsersAdmin() {
  const { users ,isLoading,deleteUser} = useContext(Context);

  const [show, setShow] = useState(false);
  const [selectedUser, setSelectedUser] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = (UserID) => {
    setShow(true);
    setSelectedUser(UserID);
  };

  async function handleDeleteUser() {
    if (selectedUser) {
      await deleteUser(selectedUser);
      handleClose();
    }
  }
  console.log(users);
  return (
    <>
      <Container>
        <br />
        <h2 className="text-center"> كل المستخدمين</h2>
        <Row>
          {users &&
            users.map((user) => {
              return (
                <>
                  <Col
                    key={user._id}
                    lg="4"
                    md="6"
                    sm="6"
                    xs="12"
                    className="my-2"
                  >
                    <div className="card">
                      <div className="card-body">
                        <div className=" d-flex flex-row justify-content-between">
                          <div className="d-inline pt-2 cat-text mx-3" onClick={()=> handleShow(user._id)}>
                            {' '}
                            حذف
                          </div>
                          <div className="d-inline pt-2 cat-text mx-3">
                            تعديل
                          </div>
                        </div>
                        <div className="text-center">
                          <h5 className="">{user.name}</h5>
                          <p className="card-text"> {user.email}</p>
                          <p class="card-text"> {user.phone}</p>
                          {user.addresses.map((address)=>{

                          <p key={address._id} className="card-text">{address.details}</p>
                          })}
                          <p className="card-text">{user.role}</p>
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
              <Button variant="danger" onClick={() => handleDeleteUser()}>
                إزاله
              </Button>
            )}
          </Modal.Footer>
        </Modal>
      </Container>
    </>
  );
}

export default UsersAdmin;
