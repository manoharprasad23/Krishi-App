import React from 'react';
import './App.css';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";
import {BrowserRouter,Route,Switch} from 'react-router-dom';

import Header from './Components/Header/Header';
import Nav from './Components/Nav/Nav';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <header className="App-header">
            <div className="logo">
                <img src="https://pacinst.org/wp-content/uploads/2018/08/logo-copy.png" alt="logo" />
            </div>
            <Nav/>
            </header>
            <div className="content">
                <Switch>
                  <Route exact path="/" component={Home}/>
                  <Route path="/about" component={About}/>
                  <Route path="/contact" component={Contact}/>
                </Switch>
            </div>
        </BrowserRouter>
    </div>
  );
}

export default App;
