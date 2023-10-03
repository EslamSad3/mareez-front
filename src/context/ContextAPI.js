import { createContext, useState } from 'react';
import axios from 'axios';
import jwtDecode from 'jwt-decode';
export const Context = createContext();
export function ContextProvider(props) {
  const [userData, setUsrData] = useState(null);
  const [adminData, setadminData] = useState(null);

  function saveUserData() {
    let userlogintoken = localStorage.getItem('UserToken');
    if (userlogintoken) {
      let decodedToken = jwtDecode(userlogintoken);
      setUsrData(decodedToken.name);
      // console.log(decodedToken);
    }
  }

  function saveAdminData() {
    let adminlogintoken = localStorage.getItem('AdminToken');
    if (adminlogintoken) {
      let decodedToken = jwtDecode(adminlogintoken);
      setadminData(decodedToken.name);
      // console.log(decodedToken);
    }
  }

  async function handleSignUp(values) {
    const data = await axios.post(
      `${process.env.REACT_APP_BASE_URL}/auth/signup`,
      values
    );
    return data;
  }
  async function handleLogin(values) {
    const data = await axios.post(
      `${process.env.REACT_APP_BASE_URL}/authhandleLlogin`,
      values
    );
    return data;
  }

  return (
    <Context.Provider
      value={{ handleSignUp, handleLogin, saveUserData, saveAdminData }}
    >
      {props.children}
    </Context.Provider>
  );
}
