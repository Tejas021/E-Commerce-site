import React from 'react'
import CartProduct from './CartProduct'
import "./Cart.css"

const Cart = () => {
    return (
        <div className='container p-md-5 p-4'>
            <h1 className='text-center '>YOUR BAG</h1>
            <div className=' text-center mb-md-5 mb-2'>
                    Shopping Cart(4)  Wishlist(3)
                </div>
            <div className='row'>
                <div className='col-md-6 col-6'>
                    <button className='btn btn-dark square-button w-100' >CONTINUE SHOPPING</button>
                </div>
               
                <div className='col-md-6 col-6 text-md-end '>
                    <button className='square-button btn btn-light w-100 h-100'  > CHECKOUT NOW</button>
                </div>
                </div>
                <div className='row mt-5'>
                <div className='col-md-8'>
                    <CartProduct/>
                    <CartProduct/>
                    <CartProduct/>
                </div>
                <div className='col-md-4 '>
                    <div className='border border-danger p-2 my-2' >
                    <h3 className='text-red text-center'>ORDER SUMMARY</h3>
                    <h5>SubTotal <span className='price' >$100</span></h5>
                    <h5>Estimated Shipping <span className=' price' >$100</span></h5>
                    <h5 >Discount <span className=' price' >$100</span></h5>
                    <h5>Total <span className=' price' >$100</span></h5>
                    <button className='btn btn-dark red-section square-button w-100' >CHECK OUT</button>
                    </div>
                 
                </div>
                </div>
                
           


            
        </div>
    )
}

export default Cart
