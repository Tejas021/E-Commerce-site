import React from 'react'
import "./Products.css"
const SingleProduct = () => {
    return (
        <div className='container'>
            <div className='row p-3'>
                <div className='col-md-6 text-center'>
                    <img src="https://source.unsplash.com/random" alt=".." className='product-image'></img>
                </div>
                <div className='col-md-6'>
        <h1 className='my-4'>NAME OF THE PRODUCT</h1>
        <p className='my-4'>Lorem Lorem Lorem LoremLorem Lorem Lorem Lorem Lorem Loremv Lorem LoremLorem LoremLorem LoremLorem LoremLorem LoremLorem Lorem</p>

            <h3 className='my-4'>$ 2500</h3>
            <div className='row my-4'>
                <div className='col-md-6 col-6'> <select className="form-select" aria-label="Default select example">
  <option selected>Size</option>
  <option value="1">XL</option>
  <option value="2">L</option>
  <option value="3">M</option>
</select></div>
                <div className='col-md-6 col-6' >
                <select className="form-select" aria-label="Default select example">
 
 <option value="1" selected>Newest</option>
 <option value="2">Price(asc)</option>
 <option value="3">Price(dsc)</option>
</select>
                </div>
                
            </div>
            <div className='row'>
            <button className='btn btn-outline-light col-md-2 col-4'>-</button>
            <div className='col-md-2 text-center col-4'>1</div>
            <button className='btn btn-outline-light col-md-2 col-4'>+</button>
            <div className='col-md-6 px-2 text-center'><button className='btn btn-light red-section square-button '>BUY NOW</button></div>
            
            </div>
          
            
                </div>
            </div>
        </div>
    )
}

export default SingleProduct
