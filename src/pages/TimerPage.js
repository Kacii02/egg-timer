import { useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";
import "../styles/TimerPage.scss";

import clock from "../assets/Clock.png";
import hourglass1 from "../assets/hourglass/hourglass1.png";

const TimerPage = () => {
  const location = useLocation();
  const minutes = location.state?.minutes || 0;
  const [timeLeft, setTimeLeft] = useState(minutes * 60 * 1000);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 100 : 0)); // update every 100ms
    }, 100);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (ms) => {
    const mins = String(Math.floor(ms / 60000)).padStart(2, '0');
    const secs = String(Math.floor((ms % 60000) / 1000)).padStart(2, '0');
    const millis = String(ms % 1000/10).padStart(2, '0');
    return `${mins}:${secs}:${millis}`;
  };

  return (
    //Ovde treba da se igram jos sa ovim cao
    timeLeft === 0 ? <div>Cao</div> :
    <div className="timer-page-wrapper">
      <div className="clock-wrapper">
        <img src={clock} alt="Clock" />
        <h1>Egg timer</h1>
      </div>
      <div className="timer-wrapper">
        <div className="inner-timer-wrapper">
          <div className="hourglass">
            <img src={hourglass1} alt="hourglass" />
          </div>
          <div className="timer">
            <h2>{formatTime(timeLeft)}</h2>
            <button>Stop</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimerPage;
