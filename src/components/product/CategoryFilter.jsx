const CategoryFilter = ({ selected, onToggle }) => {

  const categories = [
  "Mobile",
  "Laptop",
  "Tablet",
  "Smart Watch",
];

  return (
    <div className="space-y-2">
      {categories.map((category) => (
        <label
          key={category}
          className="flex items-center gap-3 cursor-pointer group"
        >
          <input
            type="checkbox"
            checked={selected.includes(category)}
            onChange={() => onToggle(category)}
            className="w-4 h-4 rounded border-gray-300 text-black focus:ring-black cursor-pointer"
          />
          <span className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors">
            {category}
          </span>
        </label>
      ))}
    </div>
  );
};

export default CategoryFilter;