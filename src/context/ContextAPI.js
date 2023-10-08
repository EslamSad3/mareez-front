import { createContext, useEffect, useState } from 'react';
import axios from 'axios';
import jwtDecode from 'jwt-decode';
import { toast } from 'react-toastify';

export const Context = createContext();
export function ContextProvider(props) {
  const [userData, setUserData] = useState(null);
  const [adminData, setAdminData] = useState(null);

  const [loginErr, setaLoginErr] = useState(null);
  const [signUpErr, setSignUpErr] = useState(null);
  const [loginRes, setloginRes] = useState(null);
  const [signUpRes, setSignUpRes] = useState(null);
  const [isLoading, setIsLsLoading] = useState(false);

  let adminHeaders = {
    token: `Bearer ${localStorage.getItem('AdminToken')}`,
  };
  let userHeaders = {
    token: `Bearer ${localStorage.getItem('UserToken')}`,
  };

  function saveUserData() {
    let userlogintoken = localStorage.getItem('UserToken');
    if (userlogintoken) {
      let decodedToken = jwtDecode(userlogintoken);
      setUserData(decodedToken);
    }
  }
  function saveAdminData() {
    let userlogintoken = localStorage.getItem('AdminToken');
    if (userlogintoken) {
      let decodedToken = jwtDecode(userlogintoken);
      setAdminData(decodedToken);
    }
  }

  async function handleSigningUp(values) {
    setIsLsLoading(true);
    const res = await axios
      .post(`${process.env.REACT_APP_BASE_URL}/auth/signup`, values)
      .catch((err) => {
        setIsLsLoading(false);
        if (err) {
          setSignUpErr(err);
        } else {
          setSignUpErr(null);
        }
      });
    if (res) {
      setSignUpRes(res);
      if (res.status === 201) {
        setIsLsLoading(false);
        toast.success('تم التسجيل بنجاح');
      }
    } else if (
      signUpErr.response.data.errors[0].msg === 'Email Already Exists'
    ) {
      toast.error(' البريد مستخدم من قبل');
      setIsLsLoading(false);
    } else if (
      signUpErr.response.data.errors[0].msg === 'phone Already Exists'
    ) {
      setIsLsLoading(false);
      toast.error(' الهاتف مستخدم من قبل');
    } else if (signUpErr.response.status !== 201) {
      setIsLsLoading(false);
      toast.error(' خطأ في البيانات ');
    }
    return res;
  }

  async function handleLogingIn(values) {
    setIsLsLoading(true);
    const res = await axios
      .post(`${process.env.REACT_APP_BASE_URL}/auth/login`, values)
      .catch((err) => {
        setIsLsLoading(false);
        if (err) {
          setaLoginErr(err);
          console.log(loginErr);
        } else {
          setaLoginErr(null);
        }
      });
    console.log(res);
    if (res) {
      if (res.status === 200 && res.data.data.role === 'user') {
        setIsLsLoading(false);
        toast.success('تم التسجيل بنجاح');
        localStorage.setItem('UserToken', res.data.token);
        saveUserData();
      }
      else if (res.status === 200 && res.data.data.role === 'admin') {
       console.log('admin logged in');
       setIsLsLoading(false);
       localStorage.setItem('AdminToken', res.data.token);
       saveAdminData();
       toast.success('تم التسجيل بنجاح');
     }
    }
     else if (loginErr.response.status !== 200) {
      setIsLsLoading(false);
      toast.error(' خطأ في البيانات ');
    }
    setloginRes(res);
    return loginRes;
  }

  useEffect(() => {
    saveUserData();
    saveAdminData();
  }, []);

  return (
    <Context.Provider
      value={{
        handleSigningUp,
        handleLogingIn,
        userData,
        adminData,
        loginErr,
        signUpErr,
        loginRes,
        signUpRes,
        isLoading,
      }}
    >
      {props.children}
    </Context.Provider>
  );
}
