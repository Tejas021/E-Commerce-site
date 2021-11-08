import React from 'react'
import styled from "styled-components"

const Container=styled.div`
  display:flex;
  flex-direction:column;
    justify-content:center;
    height:60vh;
    align-items:center;
    text-align:center;

`
const Title=styled.h1`{
    font-size:50px;
    margin-bottom:20px
    
}`
const InputContainer=styled.div`{
    margin-top:10px;
    width:50%;
    display:flex;
    height:40px;
    justify-content:space-between;
    border:1px solid black;
    
}`
const Input=styled.input`{
    border:none;
    flex:8;
    padding-left:20px
    
}`

const Button=styled.button`{
    flex:2;
    border:none;
    color:white;
    background-color:black;
}`

const Desc=styled.div`{
    font-size:24px;
    font-weight:300;
    margin-botton:20px;
}`

const NewsLetter = () => {



    return (
        <Container>
            <Title>News Letter </Title>
            <Desc>Get Timely update about latest deals and products</Desc>
            <InputContainer>
            <Input placeholder="your email"/>
            <Button>Send</Button>
            </InputContainer>
            
        </Container>
    )
}

export default NewsLetter
