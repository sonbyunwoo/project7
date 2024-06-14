import React from 'react'
import ProductDetail from '../pakage/ProductDetail';
import { Navigate } from "react-router-dom";

const PrivateRoute = ({authenticate}) => {
  console.log("PrivateRoute?", authenticate);
  return (
    authenticate === true ? <ProductDetail /> : <Navigate to="/login" />
  )
}

export default PrivateRoute