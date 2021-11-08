import React from 'react'
import Products from '../home/Products/Products'

const ProductList = () => {
    return (
        <div className='container'>
            <h1 className='my-5 text-center'>DRESSES</h1>
            <div className='row'>
                <div className='col-md-6'>
<div className='row'>
    <div className='col-md-6'><h5>Filter Products</h5></div>
    <div className='col-md-3'> <select className="form-select" aria-label="Default select example">
  <option selected>Size</option>
  <option value="1">XL</option>
  <option value="2">L</option>
  <option value="3">M</option>
</select></div>
    <div className='col-md-3'>
    <select className="form-select" aria-label="Default select example">
  <option selected>Colour</option>
  <option value="1">Red</option>
  <option value="2">Blue</option>
  <option value="3">Yellow</option>
</select>
    </div>
</div>
                    
                
               


                </div>
                <div className='col-md-6'>
                <div className='row'>
                    <div className='col-md-6 text-center'><h5>Sort</h5></div>
                    <div className='col-md-6'>
                    <select className="form-select" aria-label="Default select example">
 
  <option value="1" selected>Newest</option>
  <option value="2">Price(asc)</option>
  <option value="3">Price(dsc)</option>
</select>
                    </div>
                </div>
                </div>
            
    
            </div>
        
            <Products/>
        </div>
    )
}

export default ProductList
