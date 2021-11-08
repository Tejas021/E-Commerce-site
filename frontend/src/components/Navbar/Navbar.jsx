import React from 'react'
import { Link } from 'react-router-dom'

import "./Navbar.css"
const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
        <div className="container" >
          <div  className='text-center side-elements' > <i type="button" className="me-auto fa fa-fw fa-search " ></i></div>
        <Link className="navbar-brand brand" to="/"><h2 className="text-red" >STORIFY</h2></Link>
          <button className="navbar-toggler"  type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse side-elements"  id="navbarSupportedContent">
            <ul className="navbar-nav mb-2 text-center">
              <li className="nav-item">
                <Link className="nav-link active mx-3"  to="/register">REGISTER</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active mx-3" to="/login">LOGIN</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active mx-3" to="/cart"><i type="button" className="me-auto fa fa-shopping-cart " ></i></Link>
              </li>
           
            
             
            </ul>
          
          </div>
        
        </div>
      </nav>
    )
}

export default Navbar
