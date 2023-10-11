import React from 'react';
import { Navigate } from 'react-router-dom';
function ProtectedRoute(props) {
  if (localStorage.getItem('UserToken') == null) {
    return <Navigate to={'/login'} />;
  } else {
    return props.children;
  }
}

export default ProtectedRoute;
