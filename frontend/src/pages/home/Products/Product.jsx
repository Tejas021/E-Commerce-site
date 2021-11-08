import React from 'react'

const Product = ({item}) => {
    return (
        <div className='col-md-4 mx-auto mb-2'>
              <div className="card bg-dark border border-danger"  >
  <img src="https://source.unsplash.com/user/erondu/300x300" className="card-img-top" alt="..."/>
  <div className="card-body text-center">
   <h4>Title</h4>
   <h5>$250</h5>
   <div>
       <span><button className='btn btn-outline-danger mx-1'><i className="fa fa-heart"></i></button></span>
       <span><button className='btn btn-outline-danger mx-1'><i className="fa fa-fw fa-search"></i></button></span>
       <span><button className='btn btn-outline-danger mx-1'><i className="fa fa-shopping-cart"></i></button></span>
   </div>
  </div>
</div>
        </div>
      
    )
}

export default Product
