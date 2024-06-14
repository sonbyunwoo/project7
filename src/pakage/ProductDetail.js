import React, { useEffect, useState } from 'react'
import { Col, Container, Row, Dropdown, Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  
  const newImg =<img src="../images/icon_02.gif" alt="신상품" />;
    const delivery = <img src="../images/icon_09.gif" alt="배송" />;
    const sale = <img src="../images/icon_11.gif" alt="sale" />;
  //id를 읽어와야 한다. useParams
  let {id} = useParams();

  //data를 저장
  const [product, setProduct] = useState(null)

  const getProductDetail = async() => {
    let url = `https://my-json-server.typicode.com/sonbyunwoo/project7/products/${id}`;
    let response = await fetch(url)
    let data = await response.json()
    console.log(data)
    setProduct(data);
  }

  useEffect(()=>{
    getProductDetail();
  },[])
  return (
    <Container className='mt-5'>
      <Row>
        <Col xs={12} md={6} className='text-end'>
        <img src={product?.img} alt="이미지" className='img-fluid' />
        </Col>
        <Col xs={12} md={6}>
        <p>
          <span>{product?.new && newImg}</span>
          <span>{product?.new && sale}</span>
          <span>{product?.new && delivery}</span>
        </p>
        <h3>{product?.title}</h3>
        <p>{product?.description}</p>
        <p>{product?.price}</p>
        <Dropdown>
      <Dropdown.Toggle variant="outline-danger" id="dropdown-basic" className=''>
        사이즈
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">S</Dropdown.Item>
        <Dropdown.Item href="#/action-2">M</Dropdown.Item>
        <Dropdown.Item href="#/action-3">L</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    <hr></hr>
    <p className='text-end'><Button variant="outline-danger">구매하기</Button></p>
        </Col>
      </Row>
      <Row>
        <hr className='mt-5'></hr>
        <h2>의류 관리 가이드</h2>
        <p>ffsfes</p>
        <ul className='ps-5 mb-5'>
          <li>걸어서 건조</li>
          <li>필요 시 비염소계 표백제만 사용 가능</li>
          <li>30도 물에서 기계세탁</li>
          <li>드라이클리닝 기능</li>
          <li>저온 다림질</li>
        </ul>
      </Row>
    </Container>
  )
}

export default ProductDetail