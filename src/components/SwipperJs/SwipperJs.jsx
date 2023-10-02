import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from 'swiper/modules';
import { Container } from 'react-bootstrap';

export default function App() {
  return (
    <Container className='my-3'>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        cssMode={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        mousewheel={true}
        keyboard={true}
        modules={[Autoplay,Navigation, Pagination, Mousewheel, Keyboard]}
        className="swiper"
      >
        <SwiperSlide className="swiper-slide">
          <img src="KSA-Small_Banner-AR.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <img src="KSA-Small_Banner-AR.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <img src="KSA-Small_Banner-AR.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <img src="KSA-Small_Banner-AR.jpg" alt="" />
        </SwiperSlide>
      </Swiper>
    </Container>
  );
}
