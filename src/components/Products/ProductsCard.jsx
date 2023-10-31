import React, { useState } from 'react'
import { Card, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import cat1 from '../../Assets/cat1.jpg'
import rate from '../../Assets/rate.png'
import favoff from '../../Assets/fav-off.png'
import favon from '../../Assets/fav-on.png'

function ProductsCard() {
    const [isFavOn, setIsFavOn] = useState(false);

  const switchImage = () => {
    setIsFavOn((prevState) => !prevState);
  };
  return (
    <Col xs="12" sm="6" md="4" lg="3" className="d-flex">

            <div className="card my-1" style={{width: "18rem"}}>
                    <Link to="/detalis/:id">
                        <Card.Img className="card-img-top" src={cat1} alt="Card image cap"/>
                    </Link>
                <div className="card-body">
                    <h5 className="card-title">لابتوب</h5>
                    <p className="card-text">Some quick example text to build on the card title</p>
                </div>
                <div className="d-flex justify-content-around m-2">
                    <div className="d-flex">
                        <img
                            className=""
                            src={rate}
                            alt=""
                            height="16px"
                            width="16px"
                        />
                        <div className="card-rate mx-2">4</div>
                    </div>
                    <div className="d-flex ">
                        <img
                        src={isFavOn ? favon : favoff}
                        alt={isFavOn ? "Favorited" : "Not favorited"}
                        onClick={switchImage}
                            className="text-center"
                            style={{
                                height: "24px",
                                width: "26px",
                                cursor: 'pointer'
                            }}
                        />
                </div>
                    <div className="d-flex">
                        <div className="card-price">50</div>
                        <div className="card-currency mx-1">جنيه</div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </Col>
  )
}

export default ProductsCard