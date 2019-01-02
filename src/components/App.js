import React, { Component } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import logo from './../assets/img/ku-anim.gif';
import tag from './../assets/img/mstrkuku-alt.PNG';
import '../App.sass';

import Nav from './Nav';
import Routing from "./Routing";
import Footer from "./Footer";



class App extends Component {
  render() {
    return (
      <div className="App">
        <section className="main-view">
          <Router>
            <div className={"main-view-container"}>
              <Nav/>
              <Routing/>
            </div>
          </Router>
          <img src={tag} className="App-tag" alt="logo" />
          <img src={logo} className="App-logo" alt="logo" />
          <code> mstrkuku.com </code>
          <p>Coming Soon...</p>
          <Footer/>
        </section>
      </div>
    );
  }
}

export default App;
