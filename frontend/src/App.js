
import './App.css';
import axios from "./components/axios"
import { BrowserRouter as Router,Switch,Route} from "react-router-dom"
import Navbar from './utilities/Navbar/Navbar';
import Home from './pages/home/Home';

function App() {


  axios.get("/").then(res=>console.log(res.data))
  return (

    <div className="App ">

    <Router>
      <Navbar/>
      <Switch>
        <Route exact path="/"><Home/></Route>
      </Switch>
    </Router>

      <header className="App-header">
     
      </header>
    </div>
  );
}

export default App;
