import React from "react";
import { useNavigate } from 'react-router-dom';
import clock from "../assets/Clock.png"
import '../styles/HomePage.scss';


const HomePage = () => {

  const navigate = useNavigate();

  const handleStartClick = () => {
    navigate('/select-time');
  };

  return (
    <div className="home-page-wrapper">
      <div className="clock-wrapper">
        <img src={clock} alt="Clock" />
        <h1>Egg timer</h1>
      </div>
      <div className="menu-box">
        <h1>Let’s time your egg!</h1>
        <button onClick={handleStartClick} className="start-button">Start</button>
      </div>
    </div>
  );
};

export default HomePage;
