import React from 'react'
import { Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

function OffersItem() {
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
  return (
    <Row>
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
                <Link to={"/details:id"}>
                  <Card.Img
                    variant="top"
                    src="item1.jpg"
                    className="border border-0"
                  />
               </Link>
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
  )
}

export default OffersItem