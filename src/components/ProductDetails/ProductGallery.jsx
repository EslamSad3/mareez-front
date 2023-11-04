import React, { useState } from 'react';
import { Carousel, Col, Row } from 'react-bootstrap';
import 'react-image-gallery/styles/css/image-gallery.css';
import { Swiper, SwiperSlide } from 'swiper/react';

import { useEffect } from 'react';

function ProductGallery({ productDetails }) {
  const [index, setIndex] = useState(0);
  const [images, setImages] = useState([]);

  console.log(images);
  useEffect(() => {
    if (productDetails) {
      setImages(productDetails.images);
    }
  }, [productDetails]);
  return (
    <>
      {/* ------------------------------------------------------------------------- */}

      <Row>
        <Col xs="12">
          {images &&
            images.map((item, i) => {
              return (
                <>
                  <Carousel
                    key={i}
                    activeIndex={i}
                  >
                    <Carousel.Item>
                      <img
                        src={item}
                        alt=""
                        style={{ width: '100%', borderRadius: '10px' }}
                      />
                    </Carousel.Item>
                  </Carousel>
                </>
              );
            })}
        </Col>
        {/* <Row className="d-flex justify-content-center">
          {images &&
            images.map((item, i) => {
              return (
                <>
                  <Col xs="3" key={i}>
                    <img
                      src={item}
                      alt=""
                      style={{ width: '100%', borderRadius: '10px' }}
                      className="m-1"
                    />
                  </Col>
                </>
              );
            })}
        </Row> */}
      </Row>
    </>
  );
}

export default ProductGallery;
