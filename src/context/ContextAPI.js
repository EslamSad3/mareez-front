import { createContext, useEffect, useState } from 'react';
import axios from 'axios';
import jwtDecode from 'jwt-decode';
import { toast } from 'react-toastify';
import { Navigate } from 'react-router-dom';

export const Context = createContext();
export function ContextProvider(props) {
  const [userData, setUserData] = useState(null);
  const [adminData, setAdminData] = useState(null);

  const [categories, setCategories] = useState([]);
  const [subcategories, setSubCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [brands, setBrands] = useState([]);
  const [users, setUsers] = useState([]);
  const [orders, setOrders] = useState([]);
  const [order, setOrder] = useState([]);

  const [loginErr, setaLoginErr] = useState(null);
  const [signUpErr, setSignUpErr] = useState(null);
  const [loginRes, setloginRes] = useState(null);
  const [signUpRes, setSignUpRes] = useState(null);
  const [isLoading, setIsLsLoading] = useState(false);
  const [deliverLoading, setdeliverLoading] = useState(false);
  const [payLoading, setpayLoading] = useState(false);

  let adminHeaders = {
    Authorization: `Bearer ${localStorage.getItem('AdminToken')}`
  };


  let userHeaders = {
    Authorization: `Bearer ${localStorage.getItem('UserToken')}`
  };

  async function saveUserData() {
    let userlogintoken = localStorage.getItem('UserToken');
    if (userlogintoken) {
      let decodedToken = await jwtDecode(userlogintoken);
      setUserData(decodedToken);
    }
  }
  async function saveAdminData() {
    let adminlogintoken = localStorage.getItem('AdminToken');
    if (adminlogintoken) {
      let decodedToken = await jwtDecode(adminlogintoken);
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
      setIsLsLoading(true);
      const res = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/categories`
      );
      setCategories(res.data.data);
      setIsLsLoading(false);
    } catch (error) {
      setIsLsLoading(false);
      console.log(error);
    }
  }
  // delete Categories
  async function deleteCategory(category_id) {
    console.log(category_id);
    try {
      await axios.delete(
        `${process.env.REACT_APP_BASE_URL}/categories/${category_id}`,
        {
          headers: adminHeaders,
        }
      );
      toast.success(` تم الحذف بنجاح`, {
        position: 'top-center',
        duration: 2000,
      });
    } catch (error) {
      console.log(error);
    }
  }

  // add Categories
  async function addCategory(fd) {
    try {
      setIsLsLoading(true);
      const response = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/categories`,
        fd,
        {
          headers: adminHeaders,
        }
      );
      if (response.status === 201) {
        setIsLsLoading(false);
        <Navigate to={'/admin/categories'} />;
        toast.success(`${response.data.data.name} تم الاضافة بنجاح`, {
          position: 'top-center',
          duration: 2000,
        });
      }
    } catch (error) {
      console.log(error);
      setIsLsLoading(false);
      toast.error('2خطأ');
    } finally {
      setIsLsLoading(false);
    }
  }

  // Get All SubCategories
  async function getAllSubCategories() {
    try {
      setIsLsLoading(true);
      const res = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/subcategories`
      );
      setSubCategories(res.data.data);
      setIsLsLoading(false);
    } catch (error) {
      setIsLsLoading(false);
      console.log(error);
    }
  }

  // add subCatrgory

  async function addSubCatrgory(mainCategoryID, value) {
    console.log(mainCategoryID, 'mainCategoryID');
    console.log(value, 'value context');

    try {
      setIsLsLoading(true);
      const response = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/categories/${mainCategoryID}/subcategories`,
        { name: value, category: mainCategoryID },
        {
          headers: adminHeaders,
        }
      );
      console.log(response);
      if (response.status === 201) {
        setIsLsLoading(false);
        <Navigate to={'/admin/subcategories'} />;
        toast.success(`${response.data.data.name} added successfully`, {
          position: 'top-center',
          duration: 2000,
        });
      }
    } catch (error) {
      console.log(error);
      setIsLsLoading(false);
      toast.error('2خطأ');
    } finally {
      setIsLsLoading(false);
    }
  }

  // delete Categories
  async function deleteSub(sub_id) {
    console.log(sub_id);
    try {
      await axios.delete(
        `${process.env.REACT_APP_BASE_URL}/subcategories/${sub_id}`,
        {
          headers: adminHeaders,
        }
      );
      toast.success(` تم الحذف بنجاح`, {
        position: 'top-center',
        duration: 2000,
      });
    } catch (error) {
      console.log(error);
    }
  }

  // Get All Brands
  async function getAllBrands() {
    try {
      setIsLsLoading(true);
      const res = await axios.get(`${process.env.REACT_APP_BASE_URL}/brands`);
      setBrands(res.data.data);
      setIsLsLoading(false);
    } catch (error) {
      setIsLsLoading(false);
      console.log(error);
    }
  }
  // add Brands
  async function addBrand(fd) {
    try {
      setIsLsLoading(true);
      const response = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/brands`,
        fd,
        {
          headers: adminHeaders,
        }
      );
      console.log(response);
      setIsLsLoading(false);
      if (response.status === 201) {
        <Navigate to={'/admin/allBrands'} />;
        toast.success(`${response.data.data.name} added successfully`, {
          position: 'top-center',
          duration: 2000,
        });
      }
    } catch (error) {
      console.log(error);
      setIsLsLoading(false);
      toast.error('2خطأ');
    } finally {
      setIsLsLoading(false);
    }
  }

  // delete brand
  async function deleteBrand(Brand_id) {
    console.log(Brand_id);
    try {
      await axios.delete(
        `${process.env.REACT_APP_BASE_URL}/brands/${Brand_id}`,
        {
          headers: adminHeaders,
        }
      );
      toast.success(` تم الحذف بنجاح`, {
        position: 'top-center',
        duration: 2000,
      });
    } catch (error) {
      console.log(error);
    }
  }

  // Get All Product
  async function getAllProducts() {
    try {
      setIsLsLoading(true);
      const res = await axios.get(`${process.env.REACT_APP_BASE_URL}/products`);
      setProducts(res.data.data);
      setIsLsLoading(false);
    } catch (error) {
      setIsLsLoading(false);
      console.log(error);
    }
  }

  // Add product
  async function addNewProduct(fd) {
    try {
      setIsLsLoading(true);
      const response = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/products`,
        fd,
        {
          headers: adminHeaders,
        }
      );
      setIsLsLoading(false);
      if (response.status === 201) {
        <Navigate to={'/admin/allProducts'} />;
        toast.success(`${response.data.data.title} added successfully`, {
          position: 'top-center',
          duration: 2000,
        });
      }
    } catch (error) {
      setIsLsLoading(false);
      toast.error('2خطأ');
    } finally {
      setIsLsLoading(false);
    }
  }

  // update Product

  async function updateProduct(fd, id) {
    console.log(id);

    setIsLsLoading(true);
    return await axios
      .put(`${process.env.REACT_APP_BASE_URL}/products/${id}`, fd, {
        headers: adminHeaders,
      })
      .then((res) => {
        if (res.status === 200) {
          setIsLsLoading(false);
          toast.success(`${res.data.data.title} Updated successfully`, {
            position: 'top-center',
            duration: 2000,
          });
        }
      })
      .catch((err) => {
        setIsLsLoading(false);
        console.log(err);
      });
  }

  // update Product

  async function deleteProduct(id) {
    setIsLsLoading(true);
    return await axios
      .delete(`${process.env.REACT_APP_BASE_URL}/products/${id}`, {
        headers: adminHeaders,
      })

      .then((res) => {
        if (res.status === 204) {
          setIsLsLoading(false);
          toast.success(`Deleted successfully`, {
            position: 'top-center',
            duration: 1000,
          });
        }
      })
      .catch((err) => {
        setIsLsLoading(false);
        console.log(err);
      });
  }

  // get All Users
  async function getAllUsers() {
    try {
      await axios
        .get(`${process.env.REACT_APP_BASE_URL}/users`, {
          headers: adminHeaders,
        })
        .then((res) => {
          setUsers(res.data.data);
        });
    } catch (error) {
      console.log(error);
    }
  }

  // delete User

  async function deleteUser(selectedUser) {
    setIsLsLoading(true);
    return await axios
      .delete(`${process.env.REACT_APP_BASE_URL}/users/${selectedUser}`, {
        headers: adminHeaders,
      })

      .then((res) => {
        if (res.status === 204) {
          setIsLsLoading(false);
          toast.success(`Deleted successfully`, {
            position: 'top-center',
            duration: 1000,
          });
        }
      })
      .catch((err) => {
        setIsLsLoading(false);
        toast.error(`Deleted failed`, {
          position: 'top-center',
          duration: 1000,
        });
        console.log(err);
      });
  }

  // get one order

  async function getOneOrder(id) {
    console.log(id);
    try {
      setIsLsLoading(true);
      const response = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/orders/${id}`,
        { headers: adminHeaders }
      );
      setIsLsLoading(false);
      setOrder(response.data.data);
    } catch (error) {
      setIsLsLoading(false);
      console.log(error);
    }
  }

  // get all orders
  async function getAllOrders() {
    try {
      setIsLsLoading(true);
      const response = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/orders`,
        { headers: adminHeaders }
      );
      setIsLsLoading(false);
      setOrders(response.data.data);
    } catch (error) {
      setIsLsLoading(false);
      console.log(error);
    }
  }

  async function changeOrderStatus(id, Orderstate) {
    console.log(Orderstate,'Orderstate from context')
    try {
      setdeliverLoading(true)
      const response = await axios.put(
        `${process.env.REACT_APP_BASE_URL}/orders/${id}/${Orderstate}`,
        {},
        {
          headers: adminHeaders,
        }
      );
      setdeliverLoading(false)
      toast.success(` تم تحديث حالة الطلب`, {
        position: 'top-center',
        duration: 1000,
      });
      console.log(response)
      return response.data; // you might want to return some data here
    } catch (error) {
      setdeliverLoading(false)
      toast.error(` خطأ في تحديث حالة الطلب`, {
        position: 'top-center',
        duration: 1000,
      });
      setdeliverLoading(false)
      console.log(error);
      // handle error appropriately
    }
  }
  
  async function changeOrderPatmentStatus(id, Paymentstatus) {
    console.log(Paymentstatus,'Paymentstatus from context')

    try {
      setpayLoading(true)
      const response = await axios.patch(
        `${process.env.REACT_APP_BASE_URL}/orders/${id}/${Paymentstatus}`,
        {},
        {
          headers: adminHeaders,
        }
      );
      setpayLoading(false)
      toast.success(` تم تحديث حالة الدفع`, {
        position: 'top-center',
        duration: 1000,
      });
      console.log(response)
      return response.data; // you might want to return some data here
    } catch (error) {
      setpayLoading(false)
      toast.error(` خطأ في تحديث حالة الدفع`, {
        position: 'top-center',
        duration: 1000,
      });
      setpayLoading(false)
      console.log(error);
      // handle error appropriately
    }
  }
  

  async function handleOnChange(event) {
    if (event.target.id === 'category') {
      console.log('Form::onChange', event.target.value);

      try {
        const res = await axios.get(
          `${process.env.REACT_APP_BASE_URL}/categories/${event.target.value}/subcategories`
        );
        setSubCategories(res.data.data);
      } catch (error) {
        console.log(error);
      }
    }
  }

  useEffect(() => {
    saveUserData();
    saveAdminData();
    getAllCategories();
    getAllBrands();
    getAllProducts();
    getAllSubCategories();
    getAllUsers();
    getAllOrders();
    getOneOrder();
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
        addCategory,
        deleteCategory,
        getAllSubCategories,
        addSubCatrgory,
        deleteSub,
        updateProduct,
        deleteProduct,
        handleOnChange,
        getAllBrands,
        getOneOrder,
        changeOrderStatus,
        changeOrderPatmentStatus,
        addBrand,
        deleteBrand,
        deleteUser,
        userData,
        adminData,
        loginErr,
        signUpErr,
        loginRes,
        signUpRes,
        isLoading,
        deliverLoading,
        payLoading,
        products,
        categories,
        subcategories,
        brands,
        adminHeaders,
        users,
        orders,
        order,
      }}
    >
      {props.children}
    </Context.Provider>
  );
}
