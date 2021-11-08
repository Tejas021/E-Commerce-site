import React from 'react'
import Product from './Product'

const Products = () => {
    return (
        <div className='container p-md-5'>
           <h2>Products</h2>
           <div className='row'>
               
           {[{title:"First",_id:1},{title:"Second",_id:2},{title:"Third",_id:3},{title:"First",_id:4},{title:"Second",_id:5},{title:"Third",_id:6}].map(item=><Product item={item} key={item._id}/>)}

           </div>
        </div>
    )
}

export default Products
