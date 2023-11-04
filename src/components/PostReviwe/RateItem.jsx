import React,{ useState ,useEffect,useContext} from 'react';
import { Col, Row } from 'react-bootstrap';
import { ToastContainer } from 'react-toastify';
import rate from '../../Assets/rate.png';
import deleteicon from '../../Assets/delete.png';
import { Context } from '../../context/ContextAPI';


function RateItem() {
  const { productDetails } = useContext(Context);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    if (productDetails) {
      setReviews(productDetails.reviews);
    }
  }, [productDetails]);

  return (
    <>
      {reviews &&
        reviews.map((review) => {
          return (
            <>
              <div key={review._id}>
                <Row className="mt-3">
                  <Col className="d-flex me-5">
                    <div className="rate-name  d-inline ms-2">
                      {review && review.user && review.user.name}
                    </div>
                    <img
                      className=""
                      src={rate}
                      alt=""
                      height="16px"
                      width="16px"
                    />
                    <div className="cat-rate d-inline mx-1">
                      {review ? review.rating : ''}
                    </div>
                  </Col>
                </Row>
                <Row className="border-bottom mx-2">
                  <Col className="d-flex m-4 pb-2">
                    <div className="rate-description  d-inline ms-2">
                      {review ? review.name : ''}
                    </div>
                    <div className="d-inline d-flex justify-content-end">
                      <img
                        src={deleteicon}
                        width="20px"
                        height="20px"
                        style={{ cursor: 'pointer' }}
                        alt="delete"
                      />
                    </div>
                  </Col>
                </Row>
                <ToastContainer />
              </div>
            </>
          );
        })}
    </>
  );
}

export default RateItem;
