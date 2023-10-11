import { createContext, useEffect, useState } from 'react';
import axios from 'axios';
import jwtDecode from 'jwt-decode';
import { toast } from 'react-toastify';
import { Navigate, useParams } from 'react-router-dom';

export const Context = createContext();
export function ContextProvider(props) {
  const [userData, setUserData] = useState(null);
  const [adminData, setAdminData] = useState(null);

  const [categories, setCategories] = useState([]);
  const [subcategories, setSubCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [brands, setBrands] = useState([]);

  const [loginErr, setaLoginErr] = useState(null);
  const [signUpErr, setSignUpErr] = useState(null);
  const [loginRes, setloginRes] = useState(null);
  const [signUpRes, setSignUpRes] = useState(null);
  const [isLoading, setIsLsLoading] = useState(false);
  const { id } = useParams();

  let adminHeaders = {
    Authorization: `Bearer ${localStorage.getItem('AdminToken')}`,
  };
  let userHeaders = {
    Authorization: `Bearer ${localStorage.getItem('UserToken')}`,
  };

  function saveUserData() {
    let userlogintoken = localStorage.getItem('UserToken');
    if (userlogintoken) {
      let decodedToken = jwtDecode(userlogintoken);
      setUserData(decodedToken);
    }
  }
  function saveAdminData() {
    let adminlogintoken = localStorage.getItem('AdminToken');
    if (adminlogintoken) {
      let decodedToken = jwtDecode(adminlogintoken);
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
        } else {
          setaLoginErr(null);
        }
      });
    if (res) {
      if (res.status === 200 && res.data.data.role === 'user') {
        setIsLsLoading(false);
        toast.success('تم التسجيل بنجاح');
        localStorage.setItem('UserToken', res.data.token);
        saveUserData();
      } else if (res.status === 200 && res.data.data.role === 'admin') {
        setIsLsLoading(false);
        toast.success('تم التسجيل بنجاح');
        localStorage.setItem('AdminToken', res.data.token);
        saveAdminData();
      }
    } else {
      setIsLsLoading(false);
      toast.error(' خطأ في البيانات ');
    }

    setloginRes(res);
    return loginRes;
  }

  // Get All Categories
  async function getAllCategories() {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/categories`
      );
      setCategories(res.data.data);
    } catch (error) {
      console.log(error);
    }
  }

  // Get All SubCategories
  async function getAllSubCategories() {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/subcategories`
      );
      setSubCategories(res.data.data);
    } catch (error) {
      console.log(error);
    }
  }

  // Get All Brands
  async function getAllBrands() {
    try {
      const res = await axios.get(`${process.env.REACT_APP_BASE_URL}/brands`);
      setBrands(res.data.data);
    } catch (error) {
      console.log(error);
    }
  }

  // Get All Product
  async function getAllProducts() {
    try {
      const res = await axios.get(`${process.env.REACT_APP_BASE_URL}/products`);
      setProducts(res.data.data);
    } catch (error) {
      console.log(error);
    }
  }

  // Add product
  const addNewProduct = async (fd) => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/products`,
        fd,
        {
          headers: adminHeaders,
        }
      );
      if (response.status === 201) {
        console.log(response);
        <Navigate to={'/admin/allProducts'}/>
        toast.success(`${response.data.data.title} added successfully`, {
          position: 'top-center',
          duration: 2000,
        });
      }
    } catch (error) {
      console.log(error);
      toast.error('2خطأ')
    }
  };

  // update Product

  const updateProduct = async (fd) => {
    return await axios
      .patch(`${process.env.REACT_APP_BASE_URL}/products/${id}`, fd, {
        headers: adminHeaders,
      })

      .then((res) => {
        if (res.status === 200) {
          toast.success(`${res.data.data.title} Updated successfully`, {
            position: 'top-center',
            duration: 2000,
          });
        }
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    saveUserData();
    saveAdminData();
    getAllCategories();
    getAllBrands();
    getAllProducts()
  }, []);
  return (
    <Context.Provider
      value={{
        handleSigningUp,
        handleLogingIn,
        setUserData,
        setAdminData,
        addNewProduct,
        getAllCategories,
        updateProduct,
        userData,
        adminData,
        loginErr,
        signUpErr,
        loginRes,
        signUpRes,
        isLoading,
        products,
        categories,
        brands,
        adminHeaders
      }}
    >
      {props.children}
    </Context.Provider>
  );
}
