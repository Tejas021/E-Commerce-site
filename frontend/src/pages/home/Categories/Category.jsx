import React from 'react'
import SingleCategory from './SingleCategory'
import {Categories} from "./AllCategories"
const Category = () => {
    return (
        <div className='container '>
             <div className='row p-md-5 pt-3 p-1' >
                        <h2 className='mb-5'>Categories</h2>
            {Categories.map(c=> <SingleCategory key={c.id} category={c}/>  )}
                 
        </div>
        </div>
       
    )
}

export default Category
