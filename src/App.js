import React from 'react';
import './App.scss';
import Header from './Header';
import Main from './Main'
import {BrowserRouter as Router } from 'react-router-dom'



function App() {
  
 
  return (
    <div className="my-body">
    <Router>
      <div className="App">
        <Header />
        <Main/>
      </div>
      <div className = "transparent-background-grey">

      </div>
      <div className="transparent-background-blue"></div>
    </Router>
    </div>
  );
}

export default App;
