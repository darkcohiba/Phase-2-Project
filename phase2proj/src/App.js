import React from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './Home';
import About from './About';
import './App.css';

function App() {
  return(
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      </Routes>
  );
}

export default App;
