import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../styles/SelectTimePage.scss"
//slike
import clock from "../assets/Clock.png";
import four from "../assets/4min.png";
import six from "../assets/6min.png";
import eight from "../assets/8min.png";
import ten from "../assets/10min.png";
import twelve from "../assets/12min.png"
import fourteen from "../assets/14min.png"


const SelectTimePage = ({ onSelectTime }) => {

  const navigate = useNavigate();

  const handleTimeSelect = (minutes) => {
    navigate('/timer', { state: { minutes } });
  };

  const times = [
    { time: 4, img: four },
    { time: 6, img: six },
    { time: 8, img: eight },
    { time: 10, img: ten },
    { time: 12, img: twelve },
    { time: 14, img: fourteen },
  ];

  return (
    <div className="select-time-page-wrapper">
      <div className="clock-wrapper">
        <img src={clock} alt="Clock" />
        <h1>Egg timer</h1>
      </div>

      <div className="select-box">
        {times.map((item) => (
          <img
            key={item.time}
            src={item.img}
            alt={`${item.time} minute egg`}
            onClick={() => handleTimeSelect(item.time)}
          />
        ))}
      </div>
    </div>
  );
};

export default SelectTimePage;
