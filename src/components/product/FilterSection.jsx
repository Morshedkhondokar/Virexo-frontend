import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

const FilterSection = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(true);
        
  return (
    <div className="border-b border-gray-300 last:border-0">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between py-4 text-left"
        >
          <span className="text-sm font-semibold text-gray-900">{title}</span>
          <FiChevronDown
            className={`w-4 h-4 text-gray-400 transition-transform ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </button>

      {isOpen && <div className="pb-4">{children}</div>}
    </div>
  );
};

export default FilterSection;