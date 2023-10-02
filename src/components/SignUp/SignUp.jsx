import React from 'react';
import styles from './SignUp.module.css';
import { useSelector } from 'react-redux';
function SignUp() {
 let counter =  useSelector((state) => state.counter);
  return (
    <>
      <h2>{counter}</h2>
    </>
  );
}

export default SignUp;
