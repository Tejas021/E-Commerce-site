import React, { useState } from 'react'
import Products from '../home/Products/Products'
import {useLocation} from "react-router-dom"
const ProductList = () => {

    const cat = useLocation().pathname.split("/")[2]
const [filters, setFilter] = useState({})
const [sort, setSort] = useState("new")


const handleFilters=(e)=>{
     let value=e.target.value
     console.log(value)
    setFilter({...filters,[e.target.name]:value})
    }
    return (


        <div className='container'>
            <h1 className='my-5 text-center'>{cat}</h1>
            <div className='row'>
                <div className='col-md-6'>
<div className='row'>
    <div className='col-md-6'><h5>Filter Products</h5></div>
    <div className='col-md-3'> <select name="size" className="form-select" aria-label="Default select example" onChange={e=>handleFilters(e)}>
  <option disabled selected>Size</option>
  <option value="XL">XL</option>
  <option value="L">L</option>
  <option value="M">M</option>
  <option value="S">S</option>
  <option value="XS">XS</option>
</select></div>
    <div className='col-md-3'>
    <select className="form-select" name="color" aria-label="Default select example" onChange={e=>handleFilters(e)}>
    <option disabled selected>Color</option>
  <option value="red">Red</option>
  <option value="blue">Blue</option>
  <option value="black">Black</option>
</select>
    </div>
</div>
                    
                
               


                </div>
                <div className='col-md-6'>
                <div className='row'>
                    <div className='col-md-6 text-center'><h5>Sort</h5></div>
                    <div className='col-md-6'>
                    <select className="form-select" aria-label="Default select example" onChange={e=>setSort(e.target.value)}>
 
  <option defaultValue="new" >Newest</option>
  <option value="asc">Price(asc)</option>
  <option value="dsc">Price(dsc)</option>
</select>
                    </div>
                </div>
                </div>
            
    
            </div>
        {console.log(cat,sort,filters)}
            <Products cat={cat} filters={filters} sort={sort}/>
        </div>
    )
}

export default ProductList
