import React from 'react';
import { Col, Row, Spinner } from 'react-bootstrap';
import { ToastContainer } from 'react-toastify';
import ReactStars from 'react-rating-stars-component';
import { useContext } from 'react';
import { Context } from '../../context/ContextAPI';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router';

function RatePost() {
  const { userData, addReview,isLoading} = useContext(Context);
  const [user, setuser] = useState('');
  const [reviewContent, setreviewContent] = useState('');
  const [reviewRate, setreviewRate] = useState(1);
  const { id } = useParams();


  async function handleAddReview() {
    await addReview(id, user._id, reviewContent, reviewRate);
  }



  const setting = {
    size: 20,
    count: 5,
    color: '#979797',
    activeColor: '#ffc107',
    value: 7.5,
    a11y: true,
    isHalf: true,
    emptyIcon: <i className="far fa-star" />,
    halfIcon: <i className="fa fa-star-half-alt" />,
    filledIcon: <i className="fa fa-star" />,
    onChange: (newValue) => {
      setreviewRate(newValue);
    },
  };

  useEffect(() => {
    if (userData) {
      setuser(userData.payload);
    }
  }, [userData]);

  return (
    <div>
      <Row className="mt-3 ">
        <Col className="me-5 d-flex">
          <div className="rate-name  d-inline ms-3 mt-1 ">
            {userData ? user.name : ''}
          </div>
          <ReactStars {...setting} />
        </Col>
      </Row>
      <Row className="border-bottom mx-2">
        <Col className="d-felx me-4 pb-2">
          <textarea
            className="input-form-area p-2 mt-3"
            rows="2"
            cols="20"
            placeholder="اكتب تعليقك...."
            onChange={(e) => setreviewContent(e.target.value)}
          />
          <div className=" d-flex justify-content-end al">
            {isLoading ? <Spinner animation="border" variant="success" />:  <div
              className="product-cart-add px-3  py-2 text-center d-inline"
              onClick={() => handleAddReview()}
            >
              اضف تعليق
            </div>}
           
          </div>
        </Col>
      </Row>
      <ToastContainer />
    </div>
  );
}

export default RatePost;
