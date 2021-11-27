import React, { useState, useEffect } from 'react'
import { userRequest } from '../../components/axios'
import { useSelector } from 'react-redux'
import SingleOrder from './SingleOrder'
import NewsLetter from '../../components/NewsLetter/NewsLetter';

import Footer from '../../components/Footer/Footer';
const Orders = () => {

    const user = useSelector(state => state.user.userInfo)
    
    const [orders,setOrders]=useState()
    useEffect(() => {
        const getOrders = async () => {
            const res = await userRequest.get(`/orders/find/${user._id}`, { withCredentials: true })
            setOrders(res.data)

     
                  setOrders(prev=>prev.reverse())
            
        }
        user && getOrders()
    }, [user])


 
    return (
        <div>
        <div className='container'>
     
            
            {!orders?<h1 className='text-light text-center p-5'>Loading Order History...</h1>:orders.map(order=><SingleOrder  order={order}/>)}
           
  
            <video width="320" height="240" controls>
  <source src="https://www.youtube.com/embed/ZqW8JT1gt4U" type="video/mp4"/>

</video>
        </div>
        <div className="red-section">
      <NewsLetter/>
      </div>
      
          <Footer/></div>
    )
}

export default Orders
