import React from 'react'
import { Link } from 'react-router-dom'

const Product = ({item}) => {
    return (
        <div className='col-md-4 mx-auto mb-2'>
              <div className="card bg-dark border border-danger"  >
  <img src={item.img} className="card-img-top " style={{height:"300px"}} alt="..."/>
  <div className="card-body text-center">
   <h4>{item.title}</h4>
   <h5>${item.price}</h5>
   <div>
      
       <span><button className='btn btn-outline-danger mx-1'><i className="fa fa-heart"></i></button></span>
       <Link to={`/product/${item._id}`}><span><button className='btn btn-outline-danger mx-1'><i className="fa fa-fw fa-search"></i></button></span></Link>
       <span><button className='btn btn-outline-danger mx-1'><i className="fa fa-shopping-cart"></i></button></span>
   </div>
  </div>
</div>
        </div>
      
    )
}

export default Product
