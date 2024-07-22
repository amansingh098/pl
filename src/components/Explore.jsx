import React from 'react';
import './Explore.css';
import Navbar from './Navbar';// Adjust the import path according to your folder structure
import Footer from './Footer';

function Explore() {
  return (
    <div>
      <Navbar />
      <div className="explore-content">
        <h1>Explore Page</h1>
        <p>Welcome to the Explore page!</p>
      </div>
      <Footer/>
    </div>
  );
}

export default Explore;
