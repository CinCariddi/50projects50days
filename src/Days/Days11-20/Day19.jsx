import "./Style/Day19.css";
import { useState, useRef, useEffect } from "react";

export default function Day19() {
  const hourEl = useRef(null);
  const minuteEl = useRef(null);
  const secondEl = useRef(null);
  const timeEl = useRef(null);
  const dateEl = useRef(null);
  const [darkMode, setDarkMode] = useState(false);

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ];

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const setTime = () => {
    const time = new Date();
    const month = time.getMonth();
    const day = time.getDay();
    const date = time.getDate();
    const hours = time.getHours();
    const hoursForClock = hours >= 13 ? hours % 12 : hours;
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const ampm = hours >= 12 ? "PM" : "AM";

    if (
      hourEl.current &&
      minuteEl.current &&
      secondEl.current &&
      timeEl.current &&
      dateEl.current
    ) {
      hourEl.current.style.transform = `translate(-50%, -100%) rotate(${scale(
        hoursForClock,
        0,
        12,
        0,
        360
      )}deg)`;
      minuteEl.current.style.transform = `translate(-50%, -100%) rotate(${scale(
        minutes,
        0,
        60,
        0,
        360
      )}deg)`;
      secondEl.current.style.transform = `translate(-50%, -100%) rotate(${scale(
        seconds,
        0,
        60,
        0,
        360
      )}deg)`;

      timeEl.current.innerHTML = `${hoursForClock}:${
        minutes < 10 ? `0${minutes}` : minutes
      } ${ampm}`;
      dateEl.current.innerHTML = `${days[day]}, ${months[month]} <span class="circle19">${date}</span>`;
    }
  };

  const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
  };

  useEffect(() => {
    setTime();
    const interval = setInterval(() => setTime(), 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="contenedorDia19">
      <div className={`contenedorDia19 ${darkMode ? "dark" : "light"}`}>
        <div className="toggle" onClick={toggleDarkMode}>
          {darkMode ? "Light mode" : "Dark mode"}
        </div>
        <div className="clock-container">
          <div className="clock">
            <div className="hand hour" ref={hourEl}></div>
            <div className="hand minute" ref={minuteEl}></div>
            <div className="hand second" ref={secondEl}></div>
            <div class="center-point"></div>
          </div>
          <div className="time" ref={timeEl}></div>
          <div className="date" ref={dateEl}></div>
        </div>
      </div>
    </div>
  );
}