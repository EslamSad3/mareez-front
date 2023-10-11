import React from 'react';
import styles from './Footer.module.css';
import { Col, Row } from 'react-bootstrap';
function Footer() {
  return (
    <footer className="p-3 w-100">
      <Row className="m-0">
        <Col>
          <h6>الشركه</h6>
          <div className="d-flex flex-column">
            <a href="#">معلومات عنا</a>
            <a href="#">تواصل معنا</a>
            <a href="#">وظائف</a>
          </div>
        </Col>
        <Col>
          <h6>روابط مهمه</h6>
          <div className="d-flex flex-column">
            <a href="#">سياسات الاسترجاع</a>
            <a href="#">سياسات الخصوصيه</a>
            <a href="#">الشروط والاحكام</a>
          </div>
        </Col>
        <Col>
          <h6>تريد مساعده؟</h6>
          <a href="mailto:help@mareez-sa.com">help@mareez-sa.com</a>
        </Col>
        <Col>
          <h6>الموقع </h6>
          <p>
            <i className="fa-solid fa-location-dot"></i>
          </p>
        </Col>
      </Row>
      <Row className="my-5 mx-0">
        <Col>
          <h6>نحن نقبل : </h6>
          <div className="d-flex flex-wrap">
            <svg
              width="50"
              height="26"
              viewBox="0 0 50 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              data-v-29344206=""
            >
              <g clipPath="url(#clip0_65_1749)">
                <rect
                  x="0.974104"
                  y="0.321516"
                  width="48.0413"
                  height="24.9803"
                  rx="2.25061"
                  fill="#F3F3F3"
                  stroke="#F3F3F3"
                  strokeWidth="0.643033"
                ></rect>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M16.789 17.8498H13.8641L11.6707 9.23606C11.5666 8.83983 11.3456 8.48954 11.0204 8.32444C10.209 7.90954 9.31484 7.57935 8.3394 7.41282V7.08119H13.0512C13.7015 7.08119 14.1892 7.57935 14.2705 8.15791L15.4085 14.3713L18.332 7.08119H21.1756L16.789 17.8498ZM22.8013 17.8498H20.039L22.3136 7.08119H25.0759L22.8013 17.8498ZM28.6497 10.0645C28.7309 9.48449 29.2187 9.15286 29.7877 9.15286C30.6818 9.06959 31.6558 9.23612 32.4687 9.64958L32.9564 7.33105C32.1436 6.99942 31.2494 6.83289 30.438 6.83289C27.7569 6.83289 25.806 8.3245 25.806 10.3947C25.806 11.9696 27.1879 12.7965 28.1634 13.2946C29.2187 13.7914 29.6251 14.123 29.5438 14.6197C29.5438 15.3648 28.7309 15.6964 27.9195 15.6964C26.9441 15.6964 25.9686 15.4481 25.0759 15.0332L24.5882 17.3531C25.5636 17.7666 26.6189 17.9331 27.5943 17.9331C30.6005 18.015 32.4687 16.5248 32.4687 14.2881C32.4687 11.4714 28.6497 11.3063 28.6497 10.0645ZM42.1361 17.8498L39.9427 7.08119H37.5869C37.0991 7.08119 36.6114 7.41282 36.4488 7.90954L32.3874 17.8498H35.231L35.7985 16.2764H39.2925L39.6176 17.8498H42.1361ZM37.9935 9.98123L38.8049 14.0397H36.5303L37.9935 9.98123Z"
                  fill="#172B85"
                ></path>
              </g>
              <defs>
                <clipPath id="clip0_65_1749">
                  <rect
                    x="0.652588"
                    width="48.6843"
                    height="25.6233"
                    rx="3.41645"
                    fill="white"
                  ></rect>
                </clipPath>
              </defs>
            </svg>
            <svg
              width="50"
              height="26"
              viewBox="0 0 50 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              data-v-29344206=""
            >
              <g clipPath="url(#clip0_65_1732)">
                <rect
                  x="0.64781"
                  y="0.321516"
                  width="48.0413"
                  height="24.9803"
                  rx="2.25061"
                  fill="white"
                  stroke="white"
                  strokeWidth="0.643033"
                ></rect>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M25.3697 17.9878C24.1646 19.0036 22.6014 19.6168 20.8932 19.6168C17.0818 19.6168 13.9921 16.5638 13.9921 12.7978C13.9921 9.03174 17.0818 5.97876 20.8932 5.97876C22.6014 5.97876 24.1646 6.59198 25.3697 7.60778C26.5748 6.59199 28.138 5.97878 29.8461 5.97878C33.6575 5.97878 36.7473 9.03176 36.7473 12.7978C36.7473 16.5639 33.6575 19.6168 29.8461 19.6168C28.138 19.6168 26.5748 19.0036 25.3697 17.9878Z"
                  fill="#ED0006"
                ></path>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M25.3697 17.9879C26.8535 16.7372 27.7945 14.8761 27.7945 12.7978C27.7945 10.7196 26.8535 8.85845 25.3697 7.60771C26.5747 6.59196 28.1379 5.97878 29.846 5.97878C33.6574 5.97878 36.7472 9.03176 36.7472 12.7978C36.7472 16.5639 33.6574 19.6168 29.846 19.6168C28.1379 19.6168 26.5747 19.0037 25.3697 17.9879Z"
                  fill="#F9A000"
                ></path>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M25.3697 17.9878C26.8535 16.737 27.7943 14.876 27.7943 12.7978C27.7943 10.7195 26.8535 8.85848 25.3697 7.60774C23.8859 8.85848 22.945 10.7195 22.945 12.7978C22.945 14.876 23.8859 16.737 25.3697 17.9878Z"
                  fill="#FF5E00"
                ></path>
              </g>
              <defs>
                <clipPath id="clip0_65_1732">
                  <rect
                    x="0.326294"
                    width="48.6843"
                    height="25.6233"
                    rx="3.41645"
                    fill="white"
                  ></rect>
                </clipPath>
              </defs>
            </svg>
          </div>
        </Col>
        <Col>
          <h6>تابعنا عبر </h6>
          <div className="d-flex flex-wrap jsutify-content-between">
            <i className="fa-brands fa-facebook mx-2 fs-3"></i>
            <i className="fa-brands fa-instagram mx-2 fs-3"></i>
            <i className="fa-brands fa-twitter mx-2 fs-3"></i>
            <i className="fa-brands fa-linkedin mx-2 fs-3"></i>
          </div>
        </Col>
      </Row>
    </footer>
  );
}

export default Footer;
