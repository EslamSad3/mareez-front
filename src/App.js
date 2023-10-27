import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import LayOut from './components/LayOut/LayOut';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import Cart from './components/Cart/Cart';
import MyAccount from './components/MyAccount/MyAccount';
import UserOrders from './components/UserOrders/UserOrders';
import UserFavlist from './components/UserFavlist/UserFavlist';
import Products from './components/Products/Products';
import ForgotPassword from './components/ForgotPassword/ForgotPassword';

import { ToastContainer } from 'react-toastify';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import AllProductsAdmin from './admin/AllProducts_Admin/AllProducts_Admin';
import CategoriesAdmin from './admin/Categories_Admin/Categories_Admin';
import OrdersAdmin from './admin/Orders_Admin/Orders_Admin';
import SubCategoriesAdmin from './admin/SubCategories_Admin/SubCategories_Admin';
import BrandsAdmin from './admin/Brands_Admin/Brands_Admin';
import ProtectedRouteAdmin from './admin/ProtectedRoute_admin/ProtectedRoute_admin';
import HomeAdmin from './admin/Home_Admin/Home_Admin';
import UsersAdmin from './admin/Users_Admin/Users_Admin';
import AddProduct from './admin/Actions/AddProduct/AddProduct';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<LayOut />}>
          <Route path="/" element={<Home />} />
          <Route
            path="/cart"
            element={
              <ProtectedRoute>
                <Cart />
              </ProtectedRoute>
            }
          />
          <Route
            path="/my-details"
            element={
              <ProtectedRoute>
                <MyAccount />
              </ProtectedRoute>
            }
          />
          <Route
            path="/my-orders"
            element={
              <ProtectedRoute>
                <UserOrders />
              </ProtectedRoute>
            }
          />
          <Route
            path="/my-favlist"
            element={
              <ProtectedRoute>
                <UserFavlist />
              </ProtectedRoute>
            }
          />
          <Route path="/products" element={<Products />} />
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
      </Routes>

      {/* Admin */}
      <Routes>
        <Route
          path="/admin"
          element={
            <ProtectedRouteAdmin>
              <HomeAdmin />
            </ProtectedRouteAdmin>
          }
        >
          <Route
            path="users"
            element={
              <ProtectedRouteAdmin>
                <UsersAdmin />
              </ProtectedRouteAdmin>
            }
          />
          <Route
            path="allProducts"
            element={
              <ProtectedRouteAdmin>
                <AllProductsAdmin />
              </ProtectedRouteAdmin>
            }
          />
          <Route
            path="allProducts/add"
            element={
              <ProtectedRouteAdmin>
                < AddProduct/>
              </ProtectedRouteAdmin>
            }
          />
          <Route
            path="allProducts/update/:id"
            element={
              <ProtectedRouteAdmin>
                < UpdateProduct/>
              </ProtectedRouteAdmin>
            }
          />
          <Route
            path="brands"
            element={
              <ProtectedRouteAdmin>
                <BrandsAdmin />
              </ProtectedRouteAdmin>
            }
          />
          <Route
            path="categories"
            element={
              <ProtectedRouteAdmin>
                <CategoriesAdmin />
              </ProtectedRouteAdmin>
            }
          />
          <Route
            path="orders"
            element={
              <ProtectedRouteAdmin>
                <OrdersAdmin />
              </ProtectedRouteAdmin>
            }
          />
          <Route
            path="subcategories"
            element={
              <ProtectedRouteAdmin>
                <SubCategoriesAdmin />
              </ProtectedRouteAdmin>
            }
          />
          <Route
            path="allBrands"
            element={
              <ProtectedRouteAdmin>
                <AllBrandAdmin />
              </ProtectedRouteAdmin>
            }
          />
        </Route>
      </Routes>
      {/* Admin */}
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
