import { useState } from "react";
import PropTypes from "prop-types";

import btnDropdown from "../assets/images/icon-btn-dropdown.svg";


const AccordionItem = ({ title, desc }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border rounded-xl">
      <button
        className="flex items-center justify-between w-full py-2 sm:py-4 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="p-4 text-lg font-black text-left sm:text-2xl lg:text-3xl w-[95%] sm:w-[90%]">
          {title}
        </span>
        <span
          className={`p-2 sm:p-5 flex justify-center transform transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          <img
            src={btnDropdown}
            alt="Icon button dropdown"
            className="w-[60%] sm:w-full h-[60%] sm:h-full"
          />
        </span>
      </button>
      <hr
        style={{
          color: "#00000030",
          backgroundColor: "#00000031",
          height: 1,
          marginLeft: "auto",
          marginRight: "auto",
          width: "90%",
        }}
      />
      {isOpen && (
        <div className="p-4 text-sm text-black sm:text-xl">{desc}</div>
      )}
    </div>
  );
};

const Accordion = ({ items }) => {
  return (
    <div className="flex flex-col w-full h-auto gap-5">
      {items.map((item, index) => (
        <AccordionItem key={index} title={item.title} desc={item.desc} />
      ))}
    </div>
  );
};

AccordionItem.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.node.isRequired,
};

Accordion.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      desc: PropTypes.node.isRequired,
    })
  ).isRequired,
};

export default Accordion;
