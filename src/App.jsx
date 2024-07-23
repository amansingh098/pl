// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Welcome from './components/Welcome';
import Explore from './components/Explore'; // Import your Explore component
import Home from './components/Home'; // Import your Home component
import './components/Welcome.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
         
          <Route path="/" element={<Welcome />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/home" element={<Home />} /> {/* Add this route */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
