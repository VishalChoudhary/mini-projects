import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: linear-gradient(rgba(255, 255, 255, 0.205),rgba(255, 255, 255, 0.271)),
    url("/images/signupbg.jpg");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Wrapper = styled.div`
    width: 25%;
    height: 80%;
    padding: 20px;
    background-color: white;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Title = styled.h1`
    font-family: 'Belleza', sans-serif;
    font-size: 24px;
    font-size: 2000;
    margin-bottom: 40px;
`;

const Form = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Input = styled.input`
    flex: 1;
    height: 40%;
    width: 100%;
    margin-top: 1px;
    padding: 8px 0px;
    border-radius: 1px solid #cccc;
    border: none;
    border-bottom: 1px solid gray;
    outline: none;
`;

const Box = styled.div`
    width: 70%;
    display: flex;
    flex-direction: column;
    margin-bottom: 15px;
`;

const PlaceholderText = styled.span`
    font-size: 10px;
    color: #383535;
`;

const Button = styled.button`
    width: 50%;
    border: none;
    padding: 15px 20px;
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

const Link = styled.a`
    text-decoration: underline;
    cursor: pointer;
`;

const FooterBox = styled.span`
    margin-top: 10px;
    font-size: 12px;
    color: #383535;
`;

const Register = () => {
  return (
    <Container>
        <Wrapper>
            <Title>Create An Account</Title>
            <Form>
                <Box>
                    <PlaceholderText>UserName</PlaceholderText>
                    <Input />
                </Box>
                <Box>
                    <PlaceholderText>Email</PlaceholderText>
                    <Input />
                </Box>
                <Box>
                    <PlaceholderText>Password</PlaceholderText>
                    <Input />
                </Box>
                <Box>
                    <PlaceholderText>Confirm Password</PlaceholderText>
                    <Input />
                </Box>
                <Button>Register</Button>
            </Form>
            <FooterBox>
                Already have an account? <Link>Login</Link>
            </FooterBox>
        </Wrapper>
    </Container>
  )
}

export default Register;
