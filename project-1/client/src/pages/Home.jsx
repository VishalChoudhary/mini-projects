import React from 'react';
import styled from 'styled-components';
import {useDispatch, useSelector} from 'react-redux';
import { logout } from '../redux/userRedux';
import { Link } from 'react-router-dom';

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
    font-family: 'Belleza', sans-serif;
    font-size: 30px;
    font-weight: 2000;
    margin-bottom: 40px;
`;

const Button = styled.button`
    width: 100%;
    border: none;
    padding: 15px 20px;
    margin-top: 40px;
    font-size: 15px;
    background: linear-gradient(to right, #60d4e6, #d66efd);
    border-radius: 25px;
    color: white;
    cursor: pointer;
    font-weight: bold;
    transition: all 0.3s ease;

    &:hover{
        background-color: #5aacc8;
    }
`;

const StyledLink = styled(Link)`
  width: 100px;
  text-align: center;
  padding: 15px 20px;
  margin: 10px 0;
  font-size: 15px;
  background: linear-gradient(to right, #60d4e6, #d66efd);
  border-radius: 25px;
  color: white;
  font-weight: bold;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    background-color: #5aacc8;
  }
`;


const Home = () => {

  const dispatch = useDispatch();
  const currentUser = useSelector(state=>state.user.currentUser);
  const isFetching = useSelector(state=>state.user.isFetching);

  const handleLogout = () =>{
    dispatch(logout());
  };

  return (
    <Container>
      <Wrapper>
        {currentUser?
          (
            <>
              <Title>Welcome {currentUser.username}</Title>
              <Button onClick={handleLogout} disabled={isFetching}>Logout</Button>
            </>
          ):
          <>
            <Title>HomePage!!</Title>
            <StyledLink to="/login">Login</StyledLink>
            <StyledLink to="/register">Regsiter</StyledLink>
          </>
        }
      </Wrapper>
    </Container>
  )
}

export default Home;
