import React from 'react'
import { Link } from 'react-router-dom'
import {useSelector,useDispatch} from "react-redux"
import { deleteUser } from '../../redux_setup/reducers/userRedux'
import { publicRequest } from '../axios'
import "./Navbar.css"
const Navbar = () => {
  const dispatch = useDispatch()
 const quantity = useSelector(state => state.cart.quantity)
const user=useSelector(state=>state.user.userInfo)
    return (
   
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
        <div className="container" >
       
          <div  className='text-center side-elements' > <i type="button" className="me-auto fa fa-fw fa-search " ></i></div>
        <Link className="navbar-brand brand" to="/"><h2 className="text-red" >STORIFY</h2></Link>
          <button className="navbar-toggler"  type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse side-elements text-center"  id="navbarSupportedContent">
            <ul className="navbar-nav mb-2 text-center">
             {user?          < > <li className="nav-item ">
                <Link className="nav-link active mx-3" to="/cart"><i type="button" className="me-auto fa fa-shopping-cart " ><sup className="badge  red-section">{quantity}</sup></i></Link>
              </li>
              <li className="nav-item ">
                <Link className="nav-link active mx-3" to="/orders"><i type="button" className="me-auto fa fa-line-chart " ></i></Link>
              </li>
              <li className="nav-item " onClick={()=>{dispatch(deleteUser());publicRequest.get("/auth/logout",{withCredentials:true})}}>
               <Link className="nav-link active mx-3" to="/"> <i type="button" className="me-auto 	fa fa-power-off " ></i></Link>
              </li>
              
              </>   :<>
              <li className="nav-item">
                <Link className="nav-link active mx-3"  to="/register">REGISTER</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active mx-3 " to="/login">LOGIN</Link>
              </li></> 
              }
             

           
            
             
            </ul>
          
          </div>
        
        </div>
      </nav>
    )
}

export default Navbar
