import React, { useContext, useEffect } from 'react';
import styles from './MyAccount.module.css';
import { Context } from '../../context/ContextAPI';
import { useNavigate } from 'react-router-dom';
function MyAccount() {
  const { userData } = useContext(Context);

  return <h2>{userData.payload.name}</h2>;
}

export default MyAccount;
