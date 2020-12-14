import React from 'react';
import './App.css';
import {BrowserRouter,Route,Switch} from 'react-router-dom';

import Header from './Components/Header/Header';
import Nav from './Components/Nav/Nav';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import SideBar from './Components/Sidebar/sidebar';

function App() {
  const [width, setWidth] = React.useState(window.innerWidth);
  const breakpoint = 620;

  React.useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);

  return (
    <div className="App" id="App">
        <BrowserRouter>
            {
              width < breakpoint ? <SideBar className="mobileHeader" /> : <Header />
            }
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
