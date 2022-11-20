import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css'
import Nav from "./assets/compononts/Nav";
import Home from "./assets/compononts/Home/Home";
import About from "./assets/compononts/About/About";
import Services from "./assets/compononts/services/Services";
import Contact from "./assets/compononts/contact/contact";
function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
       <Switch>
        <Route path="/" exact component={ Home }/>
        <Route path="/About" component={About} />
      <Route path="/services"  component={Services}/>
     <Route path="/Contact"  component={Contact}/>
        </Switch> 
      </Router>
        
      
    </div>
  )
}

export default App
