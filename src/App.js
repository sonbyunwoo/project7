import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom"
import ProductAll from './pakage/ProductAll';
import ProductDetail from './pakage/ProductDetail';
import Login from './pakage/Login';
import { Container } from 'react-bootstrap';
import Navbar from "./Component/Navbar";
import { useState, useEffect } from "react";
import PrivateRoute from './Route/PrivateRoute';

function App() {
  //false는 로그인 안된상태, true는 로그인한 상태
    const [authenticate, setAuthenticate] = useState(false);

  useEffect(() => {
    console.log("로그인 상태 확인", authenticate);
  }, [authenticate])
  return (
    <>
      <Navbar authenticate={authenticate} setAuthenticate={setAuthenticate} />
      <Routes>
        <Route path="/" element={<ProductAll />} />
        <Route path="/ProductDetail" element={<ProductDetail />} />
        <Route path="/Login" element={<Login setAuthenticate = {setAuthenticate}/>} />
        <Route path="/product/:id" element={<PrivateRoute authenticate = {authenticate}/>} />
      </Routes>
    </>
  );
}

export default App;
