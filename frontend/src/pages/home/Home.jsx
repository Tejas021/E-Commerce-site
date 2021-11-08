import React from 'react'
import Category from './Categories/Category'

import "./Home.css"

import Products from './Products/Products'
import Slider from './Slider'
 const Home = () => {
    return (
        <div>
            <Slider/>
            
            <div className='red-section'>
            <Category/>
            </div>
            <Products/>
           
            
           
          
        </div>
    )
}

 export default Home
