import './App.css';
// import React, { Component } from 'react';
import React from 'react';
import News from './components/News';
import Navbar from './components/Navbar';
import About from './components/About';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App(){
    const apikey = 'dbe57b028aeb41285a226a94865f7a7'
    // const apikey = '1834ad42eb01433d83facfb182fd15c9'
    let category = 'technology', language = 'en', country = 'in';
    return (
      <div>
        <Router>
        <Navbar/>
          <Routes>
            <Route path='/' element={<News country={country} pageSize={12} category={category} language={language} apikey={apikey}/>}/>
            <Route path='/about' element={<About/>}/>
          </Routes>
        </Router>
      </div>
    )
}

export default App;