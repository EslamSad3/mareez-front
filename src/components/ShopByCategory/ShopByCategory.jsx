import React from 'react';
// import styles from './ShopByCategory.module.css';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Pagination } from 'swiper/modules';
import { Col, Container, Row } from 'react-bootstrap';

function ShopByCategory() {
  const data = [
    'KSA-Small_Banner-AR.jpg',
    'KSA-Small_Banner-AR.jpg',
    'KSA-Small_Banner-AR.jpg',
    'KSA-Small_Banner-AR.jpg',
    'KSA-Small_Banner-AR.jpg',
    'KSA-Small_Banner-AR.jpg',
    'KSA-Small_Banner-AR.jpg',
  ];
  const cat = ['cat1.jpg', 'cat2.jpg', 'cat3.jpg', 'cat4.jpg'];
  return (
    <Container className="my-3">
      <div className="d-flex justify-content-between align-items-center text-center">
        <h3>تسوق حسب المجموعه</h3>
        <br />
      </div>


      <Swiper
              breakpoints={{
                325: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 50,
                },
              }}
              modules={[Pagination]}
              className="swiper my-3"
            >
          {data.map((item) => {
            return (
              <SwiperSlide className="swiper-slide ">
                <img src={item} alt="" />
              </SwiperSlide>
            );
          })}
        </Swiper>


      {/* Categories */}
      <Row className="text-center my-5 d-flex flex-wrap">
          {cat.map((item) => {
            return (
        <Col xs={12} sm={6} md={3} lg={3} style={{marginTop:"20px"}}>
              <img
                src={item}
                alt=""
                style={{

                  maxWidth: '100%',
                  borderRadius: '12px',
                  cursor: 'pointer',
                }}
              />
        </Col>
            );
          })}
      </Row>
    </Container>
  );
}

export default ShopByCategory;
