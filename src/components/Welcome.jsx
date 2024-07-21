import React from 'react';

const Welcome = () => {
  return (
    <div className="welcome-container">
      <div className="text-container">
        <h1>Welcome to PlusAI </h1>
        <p>Jobindeed</p>
        <p>Your journey to AI excellence starts here.</p>
        <button className="explore-button">Explore</button>
      </div>
      <div className="logo-container">
        <svg width="150" height="150" viewBox="0 0 100 100" className="logo">
          <circle cx="50" cy="50" r="45" stroke="#00AEEF" strokeWidth="4" fill="none" />
          <circle cx="50" cy="50" r="35" stroke="#FFCB05" strokeWidth="4" fill="none" />
          <circle cx="50" cy="50" r="25" stroke="#FF6F61" strokeWidth="4" fill="none" />
          <line x1="50" y1="5" x2="50" y2="45" stroke="#FFFFFF" strokeWidth="2" />
        </svg>
      </div>
      <div className="background-lines">
        <svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">

        </svg>
      </div>
    </div>
  );
};

export default Welcome;