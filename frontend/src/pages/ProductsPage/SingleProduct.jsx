import React,{useState,useEffect} from 'react'
import {useLocation} from "react-router-dom"
import "./Products.css"
import { publicRequest } from '../../components/axios'
import { useDispatch ,useSelector} from 'react-redux'

import { addToCart } from '../../redux_setup/reducers/cartApiCalls'
const SingleProduct = () => {
    const [product, setProduct] = useState({})
    const [quantity, setQuantity] = useState(1)
    const [size, setSize] = useState("")
    const [color, setColor] = useState("")
    const location = useLocation()
    const id=location.pathname.split("/")[2]
 
  
const user = useSelector(state=>state.user.userInfo)
const dispatch=useDispatch()
    console.log(id)

    useEffect(()=>{

        const getProduct=async()=>{
            try{
               const res= await publicRequest.get(`/products/find/${id}`)
               
               setProduct(res.data)
           }
            catch(err){
                console.log(err)
            }
        }
getProduct()

        
    },[id])


    const handleAddProduct=async(e)=>{
        e.preventDefault()
        // dispatch(addProducts({...product,size,color,quantity}))
        addToCart({...product,size,color,quantity},user,dispatch)
        
    }

    return (
        <div className='container' >
            <div className='row p-3' style={{"height":"570px"}}>
                <div className='col-md-6 text-center'>
                    <img src={product.img} alt=".." className='product-image '></img>
                </div>
                <div className='col-md-6'>
        <h1 className='my-4'>{product.title}</h1>
        <p className='my-4'>{product.desc}</p>

            <h3 className='my-4'>$ {product.price}</h3>
            <div className='row my-4'>
                <div className='col-md-6 col-6'> <select className="form-select" aria-label="Default select example" onChange={e=>setSize(e.target.value)}>
  <option disabled selected>Size</option>
  {product.size?product.size.map(s=> <option key={s} value={s}>{s}</option>):<></>}
 
</select></div>
                <div className='col-md-6 col-6' style={{display:"flex"}} >
                
{product.color?product.color.map(c=><div className='filter-circle' key={c} style={{backgroundColor:c}} onClick={()=>setColor(c)}></div>):<></>}
                </div>
                
            </div>
            <div className='row my-4 p-3'>
            <button className='btn btn-outline-light col-md-2 col-4' onClick={e=>{if(quantity>1)setQuantity(quantity-1)}}>-</button>
            <div className='col-md-2 text-center col-4'>{quantity}</div>
            <button className='btn btn-outline-light col-md-2 col-4' onClick={e=>{setQuantity(quantity+1)}}>+</button>
  
            </div>
            <div className='col-md-6 px-2 text-center'><button className='btn btn-light red-section  ' onClick={e=>handleAddProduct(e)}>ADD TO CART</button></div>
            
            {console.log(size,color)}
                </div>
            </div>
        </div>
    )
}

export default SingleProduct
