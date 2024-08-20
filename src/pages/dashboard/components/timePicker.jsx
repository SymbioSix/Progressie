import { useState } from "react";
import PropTypes from "prop-types";

import IconUp from "../assets/icon/up.svg";
import "../assets/css/todolist.css";


const TimePicker = ({ setTime }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [hours, setHours] = useState("12");
  const [minutes, setMinutes] = useState("00");
  const [seconds, setSeconds] = useState("00");
  const [period, setPeriod] = useState("AM");

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleScroll = (value, type) => {
    let assignTime = parseInt(value);
    if (type === "hours") { 
      if (assignTime > 12) assignTime = 1;
      if (assignTime < 1) assignTime = 12;
      setHours(assignTime < 10 ? `0${assignTime}` : `${assignTime}`);
      setPeriod(assignTime >= 12 ? "PM" : "AM");
    } else if (type === "minutes" || type === "seconds") {
      if (assignTime > 59) assignTime = 0;
      if (assignTime < 0) assignTime = 59;
      type === "minutes"
        ? setMinutes(assignTime < 10 ? `0${assignTime}` : `${assignTime}`)
        : setSeconds(
            assignTime < 10 ? `0${assignTime}` : `${assignTime}`
          );
    }
    setTime(`${hours}:${minutes}:${seconds} ${period}`);
  };

  return (
    <div className="flex flex-col w-full gap-2 pl-4 mt-5">
      <label className="text-lg font-bold">Time</label>
      <div
        className="relative flex items-center justify-between w-full px-5 py-5 border-2 rounded-lg cursor-pointer"
        onClick={toggleDropdown}
      >
        <span className="text-md">Select Time</span>
        {isOpen ? (
          <img src={IconUp} className="w-5 h-5" />
        ) : (
          <img src={IconUp} className="w-5 h-5 rotate-180" />
        )}
      </div>

      {isOpen && (
        <div className="absolute left-[95px] right-0 z-10 flex items-center justify-around w-[705px] px-3 py-5 mt-[105px] bg-white border-2 rounded-lg shadow-lg animate-dropdown">
          <div className="flex flex-col items-center">
            <button
              type="button"
              className="font-bold text-md"
              onClick={() => handleScroll(hours - 1, "hours")}
            >
              ▲
            </button>
            <span className="text-md">{hours}</span>
            <button
              type="button"
              className="font-bold text-md"
              onClick={() => handleScroll(hours + 1, "hours")}
            >
              ▼
            </button>
          </div>
          <div className="flex flex-col items-center">
            <button
              type="button"
              className="font-bold text-md"
              onClick={() => handleScroll(minutes - 1, "minutes")}
            >
              ▲
            </button>
            <span className="text-md">{minutes}</span>
            <button
              type="button"
              className="font-bold text-md"
              onClick={() => handleScroll(minutes + 1, "minutes")}
            >
              ▼
            </button>
          </div>
          <div className="flex flex-col items-center">
            <button
              type="button"
              className="font-bold text-md"
              onClick={() => handleScroll(seconds - 1, "seconds")}
            >
              ▲
            </button>
            <span className="text-md">{seconds}</span>
            <button
              type="button"
              className="font-bold text-md"
              onClick={() => handleScroll(seconds + 1, "seconds")}
            >
              ▼
            </button>
          </div>
          <div className="font-bold text-md">{period}</div>
        </div>
      )}
    </div>
  );
};

TimePicker.propTypes = {
  setTime: PropTypes.func.isRequired,
};

export default TimePicker;