import React from 'react'

const OrderSuccess = props=> {
    console.log(props)
    const {stripeData } =
    (props.location && props.location.state) || {};
    return (


        <div>
         
        
         <h1 className="text-center h-100 p-5">PayMent SucessFul</h1>   
         <h1>    {JSON.stringify(stripeData)}</h1>
        </div>
    )
}

export default OrderSuccess
