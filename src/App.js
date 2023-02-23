import './App.css';
import React, { Component } from 'react';
import News from './components/News';
import Navbar from './components/Navbar';
import About from './components/About';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
        <Navbar/>
          <Routes>
            <Route path='/' element={<News pageSize={12} country="in" category="science" language="en"/>}/>
            <Route path='/about' element={<About/>}/>
          </Routes>
        </Router>
      </div>
    )
  }
}