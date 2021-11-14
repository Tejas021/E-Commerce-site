import React, { useState,useEffect } from 'react'
import Product from './Product'
import {publicRequest} from "../../../components/axios"

const Products = ({cat,sort,filters}) => {
    
    const [products, setProducts] = useState([])
    const [filteredProducts, setFilteredProducts] = useState([])
    
useEffect(() => {
    const getProducts=async()=>{
     
        try{
            const pro =await publicRequest.get(cat?`/products?category=${cat}`:`/products?new=true`)
            setProducts(pro.data)
           
        }
        catch(err){
            console.log(err)
        }
       
    }
    getProducts()

}, [cat])
useEffect(() => {
    
    const getFilteredProducts=()=>{
      
       cat&& setFilteredProducts(
       products
       .filter(item=>Object.entries(filters).every(([key,value])=>{
           return item[key].includes(value)
       })
       )
       
        )}
getFilteredProducts()
}, [products,filters,cat])


useEffect(() => {
    const sortProducts=()=>{
        if(sort==="dsc"){
            setFilteredProducts(prev=>
                [...prev].sort((a,b)=>b.price-a.price)
                )
        }
        else if(sort==="asc"){
            setFilteredProducts(prev=>
                [...prev].sort((a,b)=>a.price-b.price)
                )
        }
        else{
            setFilteredProducts(prev=>
                [...prev].sort((a,b)=>a.createdAt-b.createdAt)
                )
        }
        

    }
    sortProducts()
}, [sort])


    return (
        <div className='container p-md-5'>
          
           <h2>Products</h2>
           <div className='row'>
            
           {cat?filteredProducts.map(item=><Product item={item} key={item._id}/>):products.map(item=><Product item={item} key={item._id}/>)}

           </div>
        </div>
    )
}

export default Products
