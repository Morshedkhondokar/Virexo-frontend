    const EmptyState = ({ onClear }) => {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center">
      <p className="text-lg font-medium text-gray-900 mb-2">
        No products found
      </p>
      <p className="text-sm text-gray-400 mb-6">
        Try adjusting your filters to see more results
      </p>
      <button
        onClick={onClear}
        className="px-6 py-2.5 bg-black text-white rounded-lg text-sm font-semibold hover:bg-gray-800 transition-colors"
      >
        Clear all filters
      </button>
    </div>
  );
};

export default EmptyState;