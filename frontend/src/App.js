
import './App.css';

import { BrowserRouter as Router,Redirect,Switch,Route} from "react-router-dom"
import Navbar from './components/Navbar/Navbar';
import Home from './pages/home/Home';
import Login from "./pages/auth/Login"
import Register from "./pages/auth/Register"
import Cart from './pages/cart/Cart';
import ProductList from './pages/ProductsPage/ProductList';
import SingleProduct from './pages/ProductsPage/SingleProduct';

import {useSelector,useDispatch} from "react-redux";
import {useEffect} from "react"
import { publicRequest } from './components/axios';
import {setUser} from "./redux_setup/reducers/userRedux"

import { getCartItems } from './redux_setup/reducers/cartApiCalls';
import PleaseRegister from './pages/PleaseRegister';
import New404page from './pages/New404page';
import OrderSuccess from './pages/OrderSuccess';

import Orders from './pages/Orders/Orders';
function App() {
const dispatch=useDispatch()
const user = useSelector(state=>state.user.userInfo)
  useEffect(()=>{
    const verifyUser=async()=>{
      const TOKEN=localStorage.getItem("token")
      const getuser=await publicRequest.get("/auth/verify",{headers: {"x-auth-token":`Bearer ${TOKEN}`}})
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
        <Router path="/success"><OrderSuccess/></Router>
        <Router path="/orders"><Orders user={user}/></Router>
      </Switch>
      
    </Router>

     
    </div>
  );
}

export default App;
