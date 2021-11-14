import React,{useState} from 'react'
import {publicRequest} from "../../components/axios"
import styled from "styled-components"
import { mobile } from '../../responsive';
import {useDispatch} from "react-redux";
import {setUser} from "../../redux_setup/reducers/userRedux"

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(
        rgba(255, 255, 255, 0.3),
        rgba(255, 255, 255, 0.3)
      ),
      url("https://cdn.pixabay.com/photo/2017/01/28/02/24/japan-2014619_960_720.jpg")
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
    flex-wrap: wrap;
  `;
  
  const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 20px 10px 0px 0px;
    padding: 10px;
  `;
  
  const Agreement = styled.span`
    font-size: 12px;
    margin: 20px 0px;
  `;
  
  const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: #ba1200;
    color: white;
    cursor: pointer;
  `;
  
const Register = () => {
  const dispatch = useDispatch()
const [signUpDetails, setSignUpDetails] = useState({username:"",password:"",email:""})

const handleSignUp=async(e)=>{
  e.preventDefault()
  console.log("hi")
  try{
    const user=await publicRequest.post("/auth/register",signUpDetails,{withCredentials: true})
    console.log(user.data)
    dispatch(  setUser({user:user.data}))
  }
  catch(err){
console.log(err)
  }

}
    
const setDetails=(e)=>{
  setSignUpDetails({...signUpDetails,[e.target.name]:e.target.value})
}
    return (
      <Container>
        <Wrapper>
          <Title>CREATE AN ACCOUNT</Title>
          <Form>
            <Input placeholder="name" />
            <Input placeholder="last name" />
            <Input placeholder="username" value={setSignUpDetails.username} name="username" onChange={e=>setDetails(e)} />
            <Input placeholder="email" name="email" type="email"  onChange={e=>setDetails(e)} />
            <Input placeholder="password" name="password" type="password"  onChange={e=>setDetails(e)} />
            <Input placeholder="confirm password" />
            <Agreement>
              By creating an account, I consent to the processing of my personal
              data in accordance with the <b>PRIVACY POLICY</b>
            </Agreement>
            <Button onClick={e=>handleSignUp(e)}>CREATE</Button>
          </Form>
        </Wrapper>
      </Container>
    );
  };
  
  export default Register;