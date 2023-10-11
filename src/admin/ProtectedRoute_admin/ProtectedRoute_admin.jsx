import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
function ProtectedRouteAdmin(props) {
  if (localStorage.getItem('AdminToken') == null) {
    return <Navigate to={'/'} />;
  } else {
    return props.children;
  }
}

export default ProtectedRouteAdmin;
