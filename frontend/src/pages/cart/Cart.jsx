import React,{useState,useEffect} from 'react'
import CartProduct from './CartProduct'
import "./Cart.css"
import {useHistory} from "react-router-dom"
import { useSelector,useDispatch } from 'react-redux'
import StripeCheckout from "react-stripe-checkout";
import {userRequest} from "../../components/axios"
import { clearCart } from '../../redux_setup/reducers/cartApiCalls'
import NewsLetter from '../../components/NewsLetter/NewsLetter';

import Footer from '../../components/Footer/Footer';
// import {initializeCart} from "../../redux_setup/reducers/cartRedux"
const Cart = () => {
  const dispatch = useDispatch()
    const cart = useSelector(state=>state.cart)
    const user = useSelector(state=>state.user.userInfo)
   


    // {
    //   userId:"",products:[],amount:0,address:"",status:"pending"

    // }

 const KEY= "pk_test_51JtvykSJAlTDVo3t11qzgOuHpkm0u8vG1sdztNYIKsoHNrO2Dt0fpmd58d4zpEkaOPTN3jq0n8JHl68qwKD7c5w600m26hnVl0"

    const [stripeToken, setStripeToken] = useState(null);
  const history = useHistory();

  const onToken = (token) => {
    setStripeToken(token);
    
  };


  useEffect(()=>{
    const makeRequest = async () => {
     
      console.log("called")
      try{
        await userRequest.post("/checkout/payment", {
          tokenId: stripeToken.id,
          amount:cart.total*100
        }).then(res=>res.data).then(async res=>{
          let body={userId:user._id,products:cart.products,amount:cart.total,status:"pending",address:res.source.country}
          await userRequest.post(`/orders/${user._id}`,body,{withCredentials:true})
       
        clearCart(dispatch,user)

        }
        )
        

         
        history.push({
          pathname:"/success",
        });
      }
      catch(err){

      }
        
     
    };
    
  stripeToken&&makeRequest()
  },[cart,history,dispatch,user,stripeToken])
    


 

  
    return (
      <div >
         <div className='container p-md-5 p-4'>
            <h1 className='text-center '>YOUR BAG</h1>
            <div className=' text-center mb-md-5 mb-2'>
                    Shopping Cart({cart.quantity})  Wishlist(3)
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
                    {cart.products.map(c=><CartProduct c={c} key={c._id}/>)}
                   
      
   
                </div>
                <div className='col-md-4 '>
                    <div className='border border-danger p-2 my-2' >
                    <h3 className='text-red text-center'>ORDER SUMMARY</h3>
                    <h5>SubTotal <span className='price' >${cart.total}</span></h5>
                    <h5>Estimated Shipping <span className=' price' >$100</span></h5>
                    <h5 >Discount <span className=' price' >$100</span></h5>
                    <h5>Total <span className=' price' >${cart.total}</span></h5>


                    <StripeCheckout
              name="STORIFY"
              image="/Online-Shopping.svg"
              billingAddress
              shippingAddress
              description={`Your total is $  ${cart.total}`}
              amount={cart.total * 100}
              token={onToken}
              stripeKey={KEY}
              
            >

                    <button className='btn btn-dark red-section square-button w-100' >CHECK OUT</button>
                    </StripeCheckout>
                    
                    </div>
                 
                </div>
    
                </div>
                
           
                

            
        </div>
        <div className="red-section">
      <NewsLetter/>
      </div>
      
    <Footer/>
      </div>
       
    )
}

export default Cart
