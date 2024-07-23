// Explore.jsx
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Explore.css';
import videoSrc from '../assets/TO OUR CHANNEL.mp4'; // Adjust the path to your video file

function Explore() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/home'); // Navigate to Home page after 6 seconds
    }, 6000);

    return () => clearTimeout(timer); // Cleanup the timer on component unmount
  }, [navigate]);

  return (
    <div className="explore-container">
      <video className="explore-video" autoPlay muted>
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default Explore;
