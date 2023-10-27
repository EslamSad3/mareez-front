import { Container, Row, Col } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import AdminSideBar from '../AdminSideBar/AdminSideBar';
import NavBar from '../../components/Header/NavBar/NavBar';

function HomeAdmin(props) {
  return (
    <>
    <NavBar/>
    <Container fluid style={{backgroundColor:'#eee',minHeight:'670px'}}>
      <Row className="m-0 gap-1">
        <Col sm="3" xs="12" md="2" className='border rounded-1 mt-5 p-3'>
          <AdminSideBar />
        </Col>
        <Col sm="8" xs="12" md="9" className='border rounded-1 mt-5 p-3'>
          <Outlet>{props.children}</Outlet>
        </Col>
      </Row>
    </Container>
    </>
  );
}

export default HomeAdmin;
