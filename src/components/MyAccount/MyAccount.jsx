import React, { useContext } from 'react';
import styles from './MyAccount.module.css'
import { Context } from '../../context/ContextAPI';
function MyAccount() {
  const {userData} = useContext(Context)
  return <>
      <h2>{userData.name}</h2>
    </>
  
}

export default MyAccount;
