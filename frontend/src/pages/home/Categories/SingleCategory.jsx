import React from 'react'
import { Link } from 'react-router-dom'
import "../Home.css"
const SingleCategory = ({category}) => {
    return (
        <div className='col-md-4 p-1 '>
        <Link to={`/products/${category.cat}`} style={{"textDecoration":"none"}}>
         
            <div className='bg-dark'>
            <div className="card bg-dark category-card" style={{backgroundImage:`url(${category.img})`,backgroundRepeat:"no-repeat",backgroundSize:"cover"}}>
  
  <div className=" my-auto">
  <h4 className="text-center text-light">{category.title}</h4>
  <div className=' text-center '><button className='btn btn-outline-light square-button'>SHOW NOW</button></div>
  
  </div>


  

</div>
            </div>
            </Link>
        </div>
        
       
    )
}

export default SingleCategory
