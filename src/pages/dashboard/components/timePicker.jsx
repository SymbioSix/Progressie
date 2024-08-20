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
    if (type === "hours") {
      setHours((prevHours) => {
        let newHours = parseInt(prevHours) + value;

        if (newHours > 12) {
          newHours = 1;
        } else if (newHours < 1) {
          newHours = 12;
        }

        if (
          (prevHours === "11" && newHours === 12) ||
          (prevHours === "12" && newHours === 11)
        ) {
          setPeriod((prevPeriod) => (prevPeriod === "AM" ? "PM" : "AM"));
        }

        const updatedHours = newHours < 10 ? `0${newHours}` : `${newHours}`;
        setTime(`${updatedHours}:${minutes}:${seconds} ${period}`);
        return updatedHours;
      });
    } else if (type === "minutes") {
      setMinutes((prevMinutes) => {
        let newMinutes = parseInt(prevMinutes) + value;
        if (newMinutes > 59) newMinutes = 0;
        if (newMinutes < 0) newMinutes = 59;
        const updatedMinutes = newMinutes < 10 ? `0${newMinutes}` : `${newMinutes}`;
        setTime(`${hours}:${updatedMinutes}:${seconds} ${period}`);
        return updatedMinutes;
      });
    } else if (type === "seconds") {
      setSeconds((prevSeconds) => {
        let newSeconds = parseInt(prevSeconds) + value;
        if (newSeconds > 59) newSeconds = 0;
        if (newSeconds < 0) newSeconds = 59;
        const updatedSeconds = newSeconds < 10 ? `0${newSeconds}` : `${newSeconds}`;
        setTime(`${hours}:${minutes}:${updatedSeconds} ${period}`);
        return updatedSeconds;
      });
    }
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
              onClick={() => handleScroll(1, "hours")}
            >
              ▲
            </button>
            <span className="text-md">{hours}</span>
            <button
              type="button"
              className="font-bold text-md"
              onClick={() => handleScroll(-1, "hours")}
            >
              ▼
            </button>
          </div>
          <div className="flex flex-col items-center">
            <button
              type="button"
              className="font-bold text-md"
              onClick={() => handleScroll(1, "minutes")}
            >
              ▲
            </button>
            <span className="text-md">{minutes}</span>
            <button
              type="button"
              className="font-bold text-md"
              onClick={() => handleScroll(-1, "minutes")}
            >
              ▼
            </button>
          </div>
          <div className="flex flex-col items-center">
            <button
              type="button"
              className="font-bold text-md"
              onClick={() => handleScroll(1, "seconds")}
            >
              ▲
            </button>
            <span className="text-md">{seconds}</span>
            <button
              type="button"
              className="font-bold text-md"
              onClick={() => handleScroll(-1, "seconds")}
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
  