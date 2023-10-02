import React from 'react';
import styles from './Offers.module.css';
import { Card, Col, Container, Row } from 'react-bootstrap';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Pagination } from 'swiper/modules';
function Offers() {
  const data = [
    '2,999 ر.س',
    '2,999 ر.س',
    '2,999 ر.س',
    '2,999 ر.س',
    '2,999 ر.س',
    '2,999 ر.س',
    '2,999 ر.س',
    '2,999 ر.س',
    '2,999 ر.س',
  ];
  const cat = ['cat1.jpg', 'cat2.jpg', 'cat3.jpg', 'cat4.jpg'];

  return (
    <>
      <Container className="my-3">
        <Row>
          <Col className="d-flex justify-content-between">
            <div>
              <h3>عروض غرف النوم</h3>
            </div>
            <div className="d-flex cursor-pointer justify-content-between align-items-center text-center ">
              <h3>المزيد</h3>
              <i class="fa-solid fa-arrow-left mx-3"></i>
            </div>
          </Col>
          <Col className="my-3">
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
              {data.map((item, index) => {
                return (
                  <SwiperSlide className="swiper-slide ">
                    <Card
                      style={{ maxWidth: '100%' }}
                      className="border border-0 shadow"
                    >
                      <Card.Img
                        variant="top"
                        src="item1.jpg"
                        className="border border-0"
                      />
                      <Card.Body className="text-end">
                        <Card.Text>
                          طقم غرفة نوم كينج 5 قطع من أيرلندا - 180x200 سم هوم
                          بوكس
                        </Card.Text>
                        <Card.Text className="fw-bold">{item}</Card.Text>
                      </Card.Body>
                    </Card>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </Col>
        </Row>
        <Row className="text-center my-5 d-flex flex-wrap">
          {cat.map((item) => {
            return (
        <Col xs={12} sm={6} md={3} lg={3}>
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
    </>
  );
}

export default Offers;
