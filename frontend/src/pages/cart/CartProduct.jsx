import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { userRequest } from '../../components/axios'
import { deleteProducts } from '../../redux_setup/reducers/cartRedux'
import "../ProductsPage/Products.css"
const CartProduct = ({ c }) => {
const dispatch=useDispatch()
    const userId=useSelector(state=>state.user.userInfo._id)
    const onDelete=async(e)=>{
        
        await userRequest.post(`/cart/delete/${userId}`,{cartID:c._id},{withCredentials:true})
        dispatch(deleteProducts({id:c._id,price:c.price,quantity:c.quantity}))
    }
    return (
        <div className='row border border-danger my-2 '>
            <div className="col-md-5 p-0">
                <img src={c.img} className='w-100' style={{"height":"250px"}} alt="product"></img>
            </div>
            <div className='col-md-4 p-3'>
                <h4>{c.name}</h4>
                <p>{c.desc}</p>
                <p>{c.size}</p>
                <div><div className='filter-circle' style={{backgroundColor:c.color}} ></div></div>

            </div>
            <div className='col-md-3 text-center p-3'>
                <button className='btn red-section p-2 mb-2' onClick={()=>onDelete()}>Delete</button>
                <div className='row mx-auto'>
                    <button className='btn btn-outline-light col-md-4 col-4'>-</button>
                    <div className='col-md-4 text-center col-4'>{c.quantity}</div>
                    <button className='btn btn-outline-light col-md-4 col-4'>+</button>
                </div>
                <h2 className='mt-3'>${c.price*c.quantity}</h2>
            </div>

        </div>
    )
}

export default CartProduct
