import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
  Autoplay,
} from 'swiper/modules';
import { Container } from 'react-bootstrap';
import { useContext } from 'react';
import { Context } from '../../../context/ContextAPI';

function ImagesSwipper() {
  const { productDetails } = useContext(Context);

  const [images, setImages] = useState([]);
  
    useEffect(() => {
      if (productDetails) {
        setImages(productDetails.images);
      }
    }, [productDetails]);
    
  return (
    <Container className="my-3">
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
        modules={[Autoplay, Navigation, Pagination, Mousewheel, Keyboard]}
        className="swiper"
      >
        {images &&
          images.map((item, i) => {
            return (
              <>
                <SwiperSlide key={i} className="swiper-slide">
                  <img src={item} alt="" />
                </SwiperSlide>
              </>
            );
          })}
      </Swiper>
    </Container>
  );
}

export default ImagesSwipper;
