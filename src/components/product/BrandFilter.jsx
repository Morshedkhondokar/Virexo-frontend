const BrandFilter = ({  selected, onToggle }) => {
  const brands = [
  "Apple",
  "Samsung",
  "Xiaomi",
  "Realme",
  "Dell",
  "HP",
  "Lenovo",
];

  return (
    <div className="space-y-2">
      {brands.map((brand) => (
        <label
          key={brand}
          className="flex items-center gap-3 cursor-pointer group"
        >
          <input 
            type="checkbox" 
            checked={selected.includes(brand)} 
            onChange={() => onToggle(brand)} 
            className="w-4 h-4 rounded border-gray-300 text-black focus:ring-black cursor-pointer"
          /> 
          <span className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors">
            {brand}
          </span>
        </label>
      ))}
    </div>
  );
};

export default BrandFilter;