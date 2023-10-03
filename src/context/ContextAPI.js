import { createContext, useState } from 'react';
import axios from 'axios';
import jwtDecode from 'jwt-decode';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export const Context = createContext();
export function ContextProvider(props) {
  const navigate = useNavigate();
  const [userData, setUsrData] = useState(null);
  const [adminData, setadminData] = useState(null);
  const [loginErr, setaLoginErr] = useState(null);
  const [signUpErr, setSignUpErr] = useState(null);

  let headers = {
    token: `Bearer ${localStorage.getItem('UserToken')}`,
  };

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
    const res = await axios
      .post(`${process.env.REACT_APP_BASE_URL}/auth/signup`, values)
      .catch((err) => {
        // console.log(err);
        if (err) {
          setSignUpErr(err);
        } else {
          setSignUpErr(null);
        }
      });
    if (res) {
      // console.log(res);
      if (res.status === 200) {
        toast.success('تم التسجيل بنجاح');
        navigate('/');
      }
    } else if (signUpErr.response.status !== 200) {
      toast.error(' خطأ في البيانات ');
      console.log(signUpErr);
    }
    return res;
  }

  async function handleLogingIn(values) {
    const res = await axios
      .post(`${process.env.REACT_APP_BASE_URL}/auth/login`, values)
      .catch((err) => {
        // console.log(err);
        if (err) {
          setaLoginErr(err);
        } else {
          setaLoginErr(null);
        }
      });
    if (res) {
      console.log(res);
      if (res.status === 200 && res.data.data.role === 'user') {
        localStorage.setItem('UserToken', res.data.token);
        // console.log(localStorage.getItem('UserToken'),'localStorage.getItem')
        saveUserData();
        toast.success('تم التسجيل بنجاح');
        navigate('/');
      } else if (res.status === 200 && res.data.data.role === 'admin') {
        localStorage.setItem('AdminToken', res.data.token);
        // console.log(localStorage.getItem('UserToken'),'localStorage.getItem')
        saveAdminData();
        toast.success('تم التسجيل بنجاح');
        navigate('/');
      }
    } else if (loginErr.response.status !== 200) {
      toast.error(' خطأ في البيانات ');
      console.log(loginErr);
    }
    return res;
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
