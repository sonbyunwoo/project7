import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import ProductCard from '../Component/ProductCard';
import { useSearchParams } from 'react-router-dom';

const ProductAll = () => {
  const [productList, setProductList] = useState([]);
  const [query, useQuery] = useSearchParams();
  const getProducts = async() => {
    //쿼리값이 없으면 빈스트링을 searchQuery에 넣어준다
    let searchQuery = query.get("q") || "";
    let url = `https://my-json-server.typicode.com/sonbyunwoo/project7/products?q=${searchQuery}`;
    let response = await fetch(url)
    let data = await response.json()
    console.log(data);
    setProductList(data);
  };


  // useEffect(함수, 배열)
  useEffect(()=>{
    getProducts();
  },[query])
  return (
    <>
      <Container className='mt-5'>
        <Row>
          {productList.map((menu) => (
            <Col md={6} lg={3}>
              <ProductCard item={menu}/>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  )
};

export default ProductAll