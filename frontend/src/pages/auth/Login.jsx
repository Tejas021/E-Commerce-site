import { useState } from "react";
import styled from "styled-components";
import { publicRequest } from "../../components/axios";
import { mobile } from "../../responsive";
import {useDispatch} from "react-redux";
import {setUser} from "../../redux_setup/reducers/userRedux"
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.3),
      rgba(0, 0, 0, 0.3)
    ),
    url("https://cdn.pixabay.com/photo/2017/01/28/02/24/japan-2014618_960_720.jpg")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: black;
  ${mobile({ width: "90%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: #ba1200;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
`;

const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

const Login = () => {
  const [loginDetails,setLoginDetails]=useState({username:"",password:""})
  const dispatch = useDispatch()
  const handleLogin=async(e)=>{
    e.preventDefault();
  
    try{
      const user=await publicRequest.post("/auth/login",loginDetails,{withCredentials:true})
      console.log(user.data)
      localStorage.setItem("token",user.data.accessToken)
      dispatch(  setUser({user:user.data}))
    }
    catch(err){
      console.log(err)
    }

    
  }

  const setDetails=(e)=>{
    setLoginDetails({...loginDetails,[e.target.name]:e.target.value})
  }
  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input placeholder="username" name="username" onChange={e=>setDetails(e)}/>
          <Input placeholder="password" name="password" onChange={e=>setDetails(e)}/>
          <Button onClick={e=>handleLogin(e)}>LOGIN</Button>
          <Link>DO NOT YOU REMEMBER THE PASSWORD?</Link>
          <Link>CREATE A NEW ACCOUNT</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;