import React from 'react'
import "../Home.css"
const SingleCategory = ({category}) => {
    return (
        <div className='col-md-4 p-1 '>
            <div className='bg-dark'>
            <div className="card bg-dark category-card" style={{backgroundImage:`url(${category.img})`}}>
  
  <div className=" my-auto">
  <h4 className="text-center">{category.title}</h4>
  <div className=' text-center '><button className='btn btn-outline-light square-button'>SHOW NOW</button></div>
  
  </div>


  

</div>
            </div>
         
        </div>
    )
}

export default SingleCategory
