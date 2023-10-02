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
import SignOut from './components/SignOut/SignOut';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<LayOut />}>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/my-details" element={<MyAccount />} />
            <Route path="/my-orders" element={<UserOrders />} />
            <Route path="/my-favlist" element={<UserFavlist />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/signout" element={<SignOut />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
