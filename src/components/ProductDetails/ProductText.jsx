import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { ToastContainer } from 'react-toastify';
import './ProductText.css';
import { BiSolidShoppingBags } from 'react-icons/bi';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import favoff from '../../Assets/fav-off.png';
import favon from '../../Assets/fav-on.png';
import { useContext } from 'react';
import { Context } from '../../context/ContextAPI';
import { useParams } from 'react-router';
import { useEffect } from 'react';

function ProductText() {
  const {
    productDetails,
    addToCart,
    userData,
    loggedUsercart,
    addToWishList,
    deleteFromWishList,
  } = useContext(Context);
  const [user, setuser] = useState('');
  const { id } = useParams();

  //  heart
  const [isFavOn, setIsFavOn] = useState(false);
  console.log(isFavOn);
  
  async function switchImage(){
    setIsFavOn((prevState) => !prevState);
    if (isFavOn === true) {
      await addToWishList(id);
    }
  };

  console.log(user);

  async function handleAddToCart() {
    await addToCart(id);
  }

  useEffect(() => {
    if (userData) {
      setuser(userData.payload);
      userData.payload.wishlist.forEach((element) => {
        if (element === id) {
          setIsFavOn(true);
        } else setIsFavOn(false);
      });
    }
  }, [userData]);

  return (
    <div>
      {/* 1 */}
      <Row className="mt-2">
        <h3 className="titleDetails">
          {' '}
          {productDetails ? productDetails.title : ''}
        </h3>
        <div className="d-flex justify-content-start m-2">
          <div className="mx-2 textDes">ينتج عند الطلب</div>
          <div className="mx-2 textDesc">يتم التوصيل فى خلال 10-14 ايام</div>
        </div>
      </Row>
      {/* 2 */}
      <Row className="mt-2">
        <h4>
          <strong>{productDetails ? productDetails.priceAfterDisc : ''}</strong>
          ريال
        </h4>
        <div className="d-flex justify-content-start m-2">
          <p>
            <del>{productDetails.price} ريال</del>
          </p>
          {productDetails &&
            productDetails.price &&
            productDetails.priceAfterDisc && (
              <p className="priceDescound">
                خصم{' '}
                {Math.round(
                  ((productDetails.price - productDetails.priceAfterDisc) /
                    productDetails.price) *
                    100
                )}
                %
              </p>
            )}
        </div>
        <div className="mx-3 priceDesc"> *السعر يشمل ضريبه القيمه المضافه</div>
      </Row>
      <hr />
      {/* 3 */}
      <Row>
        <div>
          <BiSolidShoppingBags style={{ fontSize: '30px' }} className="mx-2" />
          البائع :
          {productDetails
            ? productDetails.brand
              ? productDetails.brand.name
              : ''
            : ''}
        </div>
      </Row>
      <hr />
      {/* 4 */}
      <Row>
        <div className="d-flex justify-content-around">
          <Col lg="7" xs="6" className="mx-2">
            <button
              type="button"
              className="  buttonCart"
              style={{ width: '100%' }}
              onClick={() => handleAddToCart()}
            >
              <span className="glyphicon glyphicon-plus"></span>
              إضافة إلى
              <AiOutlineShoppingCart className="mx-2" />
            </button>
          </Col>
          <Col lg="2" xs="2" className="mx-2">
            <img
              src={isFavOn ? favon : favoff}
              alt={isFavOn ? 'Favorited' : 'Not favorited'}
              onClick={() => switchImage()}
              className="text-center HeartIcon"
            />
          </Col>
        </div>
      </Row>
      <hr />
      {/* 5 */}
      <Row className="mt-2">
        <h2 className="m-2">الوصف</h2>
        <p>{productDetails ? productDetails.description : ''}</p>
        <div className="mx-3 priceDesc"> *السعر يشمل ضريبه القيمه المضافه</div>
      </Row>
      <hr />
      {/* 6 */}
      <Row className="mt-2">
        <h3 className="mt-2">المواصفات </h3>
        <table className="table table-striped">
          <tbody>
            <tr>
              <td>SKU</td>
              <td>
                {productDetails
                  ? productDetails.brand
                    ? productDetails.brand.name
                    : ''
                  : ''}
              </td>
            </tr>
            <tr>
              <td>تاجر</td>
              <td>
                {productDetails
                  ? productDetails.brand
                    ? productDetails.brand.name
                    : ''
                  : ''}
              </td>
            </tr>
            <tr>
              <td>العمق (سم)</td>
              <td>140</td>
            </tr>
            <tr>
              <td>الالون</td>
              {productDetails &&
                productDetails.colors &&
                productDetails.colors.map((color) => {
                  return (
                    <>
                      <td>{color}</td>
                    </>
                  );
                })}
            </tr>
          </tbody>
        </table>
      </Row>
      {/* 7 */}
      <ToastContainer />
    </div>
  );
}

export default ProductText;
