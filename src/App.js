import React, { useEffect } from "react";
import './App.css';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from "./Components/Home/Home";
import Header from "./Components/Header/Header";

function App() {
  //BEM
  return (
    <Router>
      <div className="app">
        <Switch>
          
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
