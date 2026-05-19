import { FiFilter } from "react-icons/fi";

const MobileFilterButton = ({ count, onClick }) => {
  return (
    <div className="lg:hidden mb-4">
      <button
        onClick={onClick}
        className="flex items-center gap-2 px-4 py-2.5 bg-gray-900 text-white rounded-lg text-sm font-semibold"
      >
        <FiFilter className="w-4 h-4" />
        Filters
        {count > 0 && (
          <span className="w-5 h-5 bg-white text-black text-xs font-bold rounded-full flex items-center justify-center">
            {count}
          </span>
        )}
      </button>
    </div>
  );
};

export default MobileFilterButton;