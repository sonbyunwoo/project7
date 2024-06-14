import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { Person, Search } from 'react-bootstrap-icons';
import OffMenu from './OffMenu';
import { useNavigate } from "react-router-dom";

const Navbar = ({ authenticate, setAuthenticate }) => {
    const menuList = ['유아', '아동', '여성', '남성', 'H&M HOME', '스포츠', 'sale', '지속가능성'];
    const navigate = useNavigate();
    const goToHome = () => {
        navigate("/");
    }
    const goToLogin =() => {
        navigate("/login");
    };

     const search = (e) => {
         e.preventDefault();
         if(e.key === "Enter" ) {
             console.log("enter를 클릭했어요", e.key);
             let keyword = e.target.value;
            console.log("keyword? : ", keyword);
             navigate(`/?q=${keyword}`);
        }
        // console.log("keyDown");
     }

    const handleKeyDown = (event) => {
        // Enter 키를 눌렀을 때만 search 함수를 호출
        if (event.key === 'Enter') {
          event.preventDefault(); // 기본 제출 동작을 막음
          search(event);
        }
      };
  return (
    <>
        <Container>
            {authenticate ? (
            <div className='d-flex justify-content-end align-items-center mt-2'>
                <Person />
                <div className='ms-2 pointer' onClick={() => {setAuthenticate(false);}}>로그아웃</div>
            </div>
            ) : (
                <div className='d-flex justify-content-end align-items-center mt-2'>
                <Person />
                <div className='ms-2 pointer' onClick={goToLogin}>로그인</div>
            </div>
            )}

            <div className='text-center mt-4 d-none d-md-block'>
                <img src="../images/h&m.png" alt="로고" width="80px" onClick={goToHome} className='pointer' />
            </div>
            <div className='d-none d-md-block'>
            <Row>
                <Col lg={2}></Col>
                <Col lg={8} className='text-center'>
                    <ul className='list-unstyled d-flex justify-content-center mt-2'>
                            {menuList.map((menu) => (
                                <li className='ms-3 fw-bold'>{menu}</li>
                                ))}
                    </ul>
                </Col>
                <Col lg={2}>
                    <form className='d-flex justify-content-end align-items-center' role="search">
                        <Search />
                        <input
                            className='form-control me-2 border-0 border-bottom' 
                            type="Search" 
                            placeholder='Search' 
                            aria-label="Search" 
                            onKeyDown={handleKeyDown}
                        />

                    </form>
                    
                </Col>
            </Row>
            </div>
            <div className='d-md-none'>
                <OffMenu />
                <img src="../images/h&m.png" alt="로고" width="50px" />
            </div>
        </Container>
    </>
  )
}

export default Navbar