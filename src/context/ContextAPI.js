import { createContext, useState } from 'react';
import axios from 'axios';
import jwtDecode from 'jwt-decode';
export const Context = createContext();

export function ContextProvider(props) {
  const [userData, setUsrData] = useState(null);
  const [adminData, setadminData] = useState(null);
  const [loginErr, setaLoginErr] = useState(null);
  const [signUpErr, setSignUpErr] = useState(null);

  function saveUserData() {
    let userlogintoken = localStorage.getItem('UserToken');
    if (userlogintoken) {
      let decodedToken = jwtDecode(userlogintoken);
      setUsrData(decodedToken.name);
    }
  }

  function saveAdminData() {
    let adminlogintoken = localStorage.getItem('AdminToken');
    if (adminlogintoken) {
      let decodedToken = jwtDecode(adminlogintoken);
      setadminData(decodedToken.name);
    }
  }

  async function handleSigningUp(values) {
    const data =await axios
      .post(`${process.env.REACT_APP_BASE_URL}/auth/signup`, values)
      .catch((err) => setSignUpErr(err));
    return data;
  }

  async function handleLogingIn(values) {
    const data = await axios
      .post(`${process.env.REACT_APP_BASE_URL}/auth/login`, values)
      .catch((err) => setaLoginErr(err));
    return data;
  }

  return (
    <Context.Provider
      value={{
        handleSigningUp,
        handleLogingIn,
        saveUserData,
        saveAdminData,
        userData,
        adminData,
        loginErr,
        signUpErr,
      }}
    >
      {props.children}
    </Context.Provider>
  );
}
