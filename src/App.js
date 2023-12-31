import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import LayOut from './components/LayOut/LayOut';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import CartPage from './components/Cart/CartPage';
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
import ProtectedRouteAdmin from './admin/ProtectedRoute_admin/ProtectedRoute_admin';
import HomeAdmin from './admin/Home_Admin/Home_Admin';
import UsersAdmin from './admin/Users_Admin/Users_Admin';
import AddProduct from './admin/Actions/AddProduct/AddProduct';
import AddBrandsAdmin from './admin/Brands_Admin/Add_Brands_Admin';
import AllBrandAdmin from './admin/Brands_Admin/All_Brand_Admin';
import UpdateProduct from './admin/Actions/UpdateProduct/UpdateProduct';
import AddCategoryAdmin from './admin/Categories_Admin/AddCategoryAdmin';
import AddSubCategoryAddmin from './admin/SubCategories_Admin/AddSubCategoryAddmin';
import ProductDetails from './components/ProductDetails/ProductDetails';
import OrderDetailsAdmin from './admin/Orders_Admin/Order_Details/OrderDetailsAdmin';
import HomeAddAddress from './components/AddressUser/HomeAddAddress';
import UserAddress from './components/AddressUser/UserAddress';
import HomePayment from './components/Payment/HomePayment';
import ProductsByCategory from './components/ProductsBy/ProductsByCategory/ProductsByCategory';
import CodePassword from './components/ForgotPassword/CodePassword';
import NewPassword from './components/ForgotPassword/NewPassword';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<LayOut />}>
          <Route path="/" element={<Home />} />
          <Route path="/details/:id" element={<ProductDetails />} />
          <Route path="/cart/addAddress" element={<HomeAddAddress />} />
          <Route path="/cart/userAddress" element={<UserAddress />} />
          <Route path="/checkouts/payment" element={<HomePayment />} />

          {/* Products By */}

          <Route
            path="/category/:id/products"
            element={<ProductsByCategory />}
          />

          <Route
            path="/cart"
            element={
              <ProtectedRoute>
                <CartPage />
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
        <Route path="/enter-Code" element={<CodePassword />} />
        <Route path="/new-Password" element={<NewPassword />} />
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
            path="addproducts"
            element={
              <ProtectedRouteAdmin>
                <AddProduct />
              </ProtectedRouteAdmin>
            }
          />
          <Route
            path="allProducts/update/:id"
            element={
              <ProtectedRouteAdmin>
                <UpdateProduct />
              </ProtectedRouteAdmin>
            }
          />
          <Route
            path="addbrands"
            element={
              <ProtectedRouteAdmin>
                <AddBrandsAdmin />
              </ProtectedRouteAdmin>
            }
          />
          <Route
            path="addcategory"
            element={
              <ProtectedRouteAdmin>
                <AddCategoryAdmin />
              </ProtectedRouteAdmin>
            }
          />
          <Route
            path="addsubcategory"
            element={
              <ProtectedRouteAdmin>
                <AddSubCategoryAddmin />
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
            path="orders/:id"
            element={
              <ProtectedRouteAdmin>
                <OrderDetailsAdmin />
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
