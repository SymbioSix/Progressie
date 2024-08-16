import { useState } from "react";

import IconUp from "../assets/icon/up.svg";
import "../assets/css/todolist.css";


const TimePicker = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTime, setSelectedTime] = useState("");
  const [hours, setHours] = useState("12");
  const [minutes, setMinutes] = useState("00");
  const [seconds, setSeconds] = useState("00");
  const [period, setPeriod] = useState("AM");

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleScroll = (value, type) => {
    let updatedValue = parseInt(value);
    if (type === "hours") {
      if (updatedValue > 12) updatedValue = 1;
      if (updatedValue < 1) updatedValue = 12;
      setHours(updatedValue < 10 ? `0${updatedValue}` : `${updatedValue}`);
      setPeriod(updatedValue >= 12 ? "PM" : "AM");
    } else if (type === "minutes" || type === "seconds") {
      if (updatedValue > 59) updatedValue = 0;
      if (updatedValue < 0) updatedValue = 59;
      type === "minutes"
        ? setMinutes(updatedValue < 10 ? `0${updatedValue}` : `${updatedValue}`)
        : setSeconds(
            updatedValue < 10 ? `0${updatedValue}` : `${updatedValue}`
          );
    }
  };

  return (
    <div className="flex flex-col w-full gap-2 pl-4 mt-5">
      <label className="text-lg font-bold">Time</label>
      <div
        className="relative flex items-center justify-between w-full px-5 py-5 border-2 rounded-lg cursor-pointer"
        onClick={toggleDropdown}
      >
        <span className="text-md">{selectedTime || "Select time"}</span>
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
              className="font-bold text-md"
              onClick={() => handleScroll(hours - 1, "hours")}
            >
              ▲
            </button>
            <span className="text-md">{hours}</span>
            <button
              className="font-bold text-md"
              onClick={() => handleScroll(hours + 1, "hours")}
            >
              ▼
            </button>
          </div>
          <div className="flex flex-col items-center">
            <button
              className="font-bold text-md"
              onClick={() => handleScroll(minutes - 1, "minutes")}
            >
              ▲
            </button>
            <span className="text-md">{minutes}</span>
            <button
              className="font-bold text-md"
              onClick={() => handleScroll(minutes + 1, "minutes")}
            >
              ▼
            </button>
          </div>
          <div className="flex flex-col items-center">
            <button
              className="font-bold text-md"
              onClick={() => handleScroll(seconds - 1, "seconds")}
            >
              ▲
            </button>
            <span className="text-md">{seconds}</span>
            <button
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

export default TimePicker;