import { useState } from "react";

const AccordionItem = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b">
      <button
        className="flex items-center justify-between w-full py-4 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-xl font-medium">{title}</span>
        <span
          className={`transform transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          <svg width="24" height="24" fill="currentColor">
            <path d="M12 15l-6-6h12z" />
          </svg>
        </span>
      </button>
      {isOpen && <div className="p-4">{content}</div>}
    </div>
  );
};

const Accordion = ({ items }) => {
  return (
    <div className="w-full h-auto">
      {items.map((item, index) => (
        <AccordionItem key={index} title={item.title} content={item.content} />
      ))}
    </div>
  );
};

export default Accordion;