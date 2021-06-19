import logo from './logo.svg';
import './App.css';
import Home from "./pages/home";
import Contact from "./pages/contact";
import About from "./pages/about";
import NavBar from './Navbar'
import {Route,Link} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <NavBar/>
      <Route exact path ='/' component={Home}/>
      <Route exact path ='/contact' component={Contact}/>
      <Route exact path ='/about' component={About}/>

    </div>
  );
}

export default App;
