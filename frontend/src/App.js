
import './App.css';
import axios from "./components/axios"
import { BrowserRouter as Router,Switch,Route} from "react-router-dom"
import Navbar from './components/Navbar/Navbar';
import Home from './pages/home/Home';
import Login from "./pages/auth/Login"
import Register from "./pages/auth/Register"
import Cart from './pages/cart/Cart';
import ProductList from './pages/ProductsPage/ProductList';
import NewsLetter from './components/NewsLetter/NewsLetter';
import SingleProduct from './pages/ProductsPage/SingleProduct';
import Footer from './components/Footer/Footer';

function App() {


  axios.get("/").then(res=>console.log(res.data))
  return (

    <div className="App ">

    <Router>
      <Navbar/>
      <Switch>
        <Route exact path="/"><Home/></Route>
        <Route exact path="/login"><Login/></Route>
        <Route exact path="/register"><Register/></Route>
        <Route exact path="/cart"><Cart/></Route>
        <Route exact path="/products"><ProductList/></Route>
        <Route exact path="/product"><SingleProduct/></Route>
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
