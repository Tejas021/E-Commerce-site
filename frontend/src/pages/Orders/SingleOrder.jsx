import React from 'react'
import styled from 'styled-components'

const Container=styled.div`
   
    padding:23px;
    display:flex;
    flex-wrap:wrap;
    flex-direction:row;
`
const LeftDiv=styled.div`
    padding:5%;
    width:100%;

   flex:1;
   display:flex;
   flex-direction:column;
   border:2px solid #ba1200;
`
const RightDiv=styled.div`
padding:5%;
width:100%;
background-color:#ba1200;
    flex:1;
    display:flex;
    flex-direction:column;
    
`

const SingleOrder = ({order}) => {
    


    return (
        <Container>
            <LeftDiv>
                <h4>OrderID: {order._id}</h4>
                <h5>Status: {order.status}</h5>
                <h5>Order Date : {order.createdAt}</h5>
                <h5>Arrival Date : {order.createdAt}</h5>
            </LeftDiv>
            <RightDiv>
            <h3>Amount Paid : {order.amount}</h3>
            <div>Products: {order.products.length>0&&order.products.map(item=><p >{item.name}</p>)}</div>
                
            </RightDiv>
        </Container>
    )
}

export default SingleOrder
