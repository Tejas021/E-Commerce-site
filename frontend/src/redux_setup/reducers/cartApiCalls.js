import { addProducts,initializeCart } from "./cartRedux";

import { userRequest } from "../../components/axios";

export const addToCart=async(data,user,dispatch)=>{
 
    const {_id,title,...others}=data

    const CartProduct= await userRequest.post(`/cart/${user._id}`,{...others,name:title},{withCredentials:true})

    dispatch(addProducts(CartProduct.data))

}


export const getCartItems=async(dispatch,user)=>{

    const cartItems=await userRequest.get(`/cart/${user._id}`,{withCredentials:true})
   
    dispatch(initializeCart({products:cartItems.data}))
}