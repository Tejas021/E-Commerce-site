import React from 'react'
import Category from './Categories/Category'
import NewsLetter from '../../components/NewsLetter/NewsLetter';

import Footer from '../../components/Footer/Footer';
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
            <div className="red-section">
      <NewsLetter/>
      </div>
      
    <Footer/>
            
           
          
        </div>
    )
}

 export default Home
