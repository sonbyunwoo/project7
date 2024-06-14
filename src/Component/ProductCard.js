import React from 'react'
import { useNavigate } from 'react-router-dom';

const ProductCard = ({item}) => {
    const newImg =<img src="../images/icon_02.gif" alt="신상품" />;
    const delivery = <img src="../images/icon_09.gif" alt="배송" />;
    const sale = <img src="../images/icon_11.gif" alt="sale" />;

    const navigate = useNavigate();
    const showDetail = () => {
      navigate(`/product/${item.id}`)
    }
  return (
    <>
        <div onClick={showDetail}>
            <img src={item?.img} alt="옷0" width="100%"></img>
        </div>
        <div className='my-3'>
            <span>{item?.new && newImg}</span>
            <span>{item?.sale && sale}</span>
            <span>{item?.delivery && delivery}</span>
            <h5 className='fw-bold'>{item?.title}</h5>
            <div>{item?.price}</div>
        </div>
    </>
  )
}

export default ProductCard