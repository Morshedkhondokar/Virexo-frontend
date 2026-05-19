// components/product/PriceFilter.jsx
import { useState } from "react";
import { FiCheck } from "react-icons/fi";

const PriceFilter = ({  onApply }) => {
  // Local state for inputs (not sent to parent yet)
  const [localMin, setLocalMin] = useState("");
  const [localMax, setLocalMax] = useState("");

  // Handle apply button click
  const handleApply = () => {
    onApply(localMin, localMax);
  };

  // Handle clear
  const handleClear = () => {
    setLocalMin("");
    setLocalMax("");
    onApply("", "");
  };

  return (
    <div className="space-y-3">
      {/* Min Input */}
      <div className="relative">
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs text-gray-400">
          $
        </span>
        <input
          type="number"
          placeholder="Min price"
          value={localMin}
          onChange={(e) => setLocalMin(e.target.value)}
          className="w-full pl-7 pr-3 py-2.5 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-black transition-all"
        />
      </div>

      {/* Max Input */}
      <div className="relative">
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs text-gray-400">
          $
        </span>
        <input
          type="number"
          placeholder="Max price"
          value={localMax}
          onChange={(e) => setLocalMax(e.target.value)}
          className="w-full pl-7 pr-3 py-2.5 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-black transition-all"
        />
      </div>

      {/* Buttons */}
      <div className="flex gap-2 pt-1">
        <button
          onClick={handleApply}
          className="flex-1 flex items-center justify-center gap-1.5 bg-black text-white py-2 rounded-lg text-xs font-semibold hover:bg-gray-800 transition-colors"
        >
          <FiCheck className="w-3.5 h-3.5" />
          Apply
        </button>
        
        {(localMin || localMax) && (
          <button
            onClick={handleClear}
            className="px-3 py-2 text-xs font-medium text-gray-500 hover:text-black transition-colors"
          >
            Clear
          </button>
        )}
      </div>
    </div>
  );
};

export default PriceFilter;