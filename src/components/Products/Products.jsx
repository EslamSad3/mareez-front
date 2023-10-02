import React, { useEffect, useState } from 'react';
import styles from './Products.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { gatAllProducts } from '../../redux/ProductsSlice';
function Products() {
  const [allProducts, setAllProducts] = useState([]);
  // let { products } = useSelector((state) => state);
  let dispatch = useDispatch();

  async function getProducts() {
    let products = await dispatch(gatAllProducts());
    console.log(products.payload);
    setAllProducts(products.payload);
  }
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      {allProducts.map((item) => {
        return <h2 key={item.id}>{item.title}</h2>;
      })}
    </>
  );
}

export default Products;
