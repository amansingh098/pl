// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Welcome from './components/Welcome';
import Explore from './components/Explore'; // Import your Explore component
import './components/Welcome.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Welcome />} />
        
          
        </Routes>
      </div>
    </Router>
  );
};

export default App;
