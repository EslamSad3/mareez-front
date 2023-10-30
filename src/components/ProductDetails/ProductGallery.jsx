import React, { useState } from 'react'
import { Carousel, Col, Row } from 'react-bootstrap';
import "react-image-gallery/styles/css/image-gallery.css";
// import ImageGallery from "react-image-gallery";
import cat1 from '../../Assets/cat1.jpg'
import cat2 from '../../Assets/cat2.jpg'
import cat3 from '../../Assets/cat3.jpg'
import cat4 from '../../Assets/cat4.jpg'

function ProductGallery() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  }


  return (
  
<>
{/* ------------------------------------------------------------------------- */}

  <Row>
    <Col xs='12'  >
        <Carousel activeIndex={index} onSelect={handleSelect} >
            <Carousel.Item>
              <img src={cat1} alt="" style={{width:"100%",borderRadius:"10px"}}/>
            </Carousel.Item>
            <Carousel.Item>
            <img src={cat2} alt="" style={{width:"100%", borderRadius:"10px"}}/>
            </Carousel.Item>
            <Carousel.Item>
            <img src={cat3} alt="" style={{width:"100%" ,borderRadius:"10px"}}/>
            </Carousel.Item>
            <Carousel.Item>
            <img src={cat4} alt="" style={{width:"100%" ,borderRadius:"10px"}}/>
            </Carousel.Item>
          </Carousel>
    </Col >
        <Row className='d-flex justify-content-center'>
          <Col xs='3'>
            <img src={cat1} alt="" style={{width:"100%",borderRadius:"10px"}} className='m-1'/>
          </Col>
          <Col xs='3'>
            <img src={cat2} alt="" style={{width:"100%",borderRadius:"10px"}} className='m-1'/>
          </Col>
          <Col xs='3'>
            <img src={cat3} alt="" style={{width:"100%",borderRadius:"10px"}} className='m-1'/>
          </Col>
          <Col xs='3'>
            <img src={cat4} alt="" style={{width:"100%",borderRadius:"10px"}} className='m-1'/>
          </Col>
        </Row>
  </Row>
</>
  
  )
}

export default ProductGallery