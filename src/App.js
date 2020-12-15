import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Login from "./components/login.component";
import SignUp from "./components/signup.component";
import Navbar from "./components/navbar"


function App() {
  return (<Router>
  <Navbar/>
    <div className="App">
     

      <div className="auth-wrapper">
        <div className="auth-inner">
          <Switch>
            <Route exact path='/' component={Login} />
            <Route path="/sign-in" component={Login} />
            <Route path="/sign-up" component={SignUp} />
            <Route path="/navbar" component={Navbar} />
        
          </Switch>
        </div>
      </div>
    </div></Router>
  );
}

export default App;