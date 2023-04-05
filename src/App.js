import "./App.css";
import Navbar from "./components/Navbar";
//import Footer from "./components/Footer";
import Home from "./pages/Home";
import Availabilities from "./pages/Availabilities";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./logins/login";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Password from "./logins/Password";
import Signup from "./logins/Signup";
//import LogBar from "./logins/LogNav";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/menu" exact component={Availabilities} />
          <Route path="/about" exact component={About} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/login" exact component={Login} />
          <Route path="/signup" exact component={Signup} />
          <Route path="/password" exact component={Password} />
          
          
        </Switch>
       
      </Router>
    </div>
  );
}

export default App;
