
import './App.css';

import { BrowserRouter as Router,Redirect,Switch,Route} from "react-router-dom"
import Navbar from './components/Navbar/Navbar';
import Home from './pages/home/Home';
import Login from "./pages/auth/Login"
import Register from "./pages/auth/Register"
import Cart from './pages/cart/Cart';
import ProductList from './pages/ProductsPage/ProductList';
import NewsLetter from './components/NewsLetter/NewsLetter';
import SingleProduct from './pages/ProductsPage/SingleProduct';
import Footer from './components/Footer/Footer';
import {useSelector,useDispatch} from "react-redux";
import {useEffect} from "react"
import { publicRequest } from './components/axios';
import {setUser} from "./redux_setup/reducers/userRedux"

import { getCartItems } from './redux_setup/reducers/cartApiCalls';
import PleaseRegister from './pages/PleaseRegister';
import New404page from './pages/New404page';
function App() {
const dispatch=useDispatch()
const user = useSelector(state=>state.user.userInfo)
  useEffect(()=>{
    const verifyUser=async()=>{
      const getuser=await publicRequest.get("/auth/verify",{withCredentials:true})
      dispatch(setUser({user:getuser.data}))
      getCartItems(dispatch,getuser.data)
      
    }
  verifyUser()
  },[dispatch])


  
 
  return (

    <div className="App ">

    <Router>
      <Navbar/>
      <Switch>
        <Route exact path="/"><Home/></Route>
        <Route exact path="/login">{user?<Redirect to="/"/>:<Login/>}</Route>
        <Route exact path="/register">{user?<Redirect to="/"/>:<Register/>}</Route>
        <Route exact path="/cart">{user?<Cart/>:<New404page/>}</Route>
        <Route exact path="/products/:category"><ProductList/></Route>
        <Route exact path="/product/:id">{user?<SingleProduct/>:<PleaseRegister/>}</Route>
      </Switch>
      <div className="red-section">
      <NewsLetter/>
      </div>
      
    <Footer/>
    </Router>

     
    </div>
  );
}

export default App;
