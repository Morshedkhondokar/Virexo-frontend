// components/product/FilterSidebar.jsx
import { FiX } from "react-icons/fi";
import FilterSection from "./FilterSection";
import CategoryFilter from "./CategoryFilter";
import BrandFilter from "./BrandFilter";
import PriceFilter from "./PriceFilter";
import { memo } from "react";

const FilterSidebar = ({
  selectedCategories,
  selectedBrands,
  minPrice,
  maxPrice,
  onCategoryToggle,
  onBrandToggle,
  onPriceApply,
  onClear,
  activeCount,
}) => {

  console.log("FilterSidebar render");
  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-bold text-gray-900">Filters</h2>
        {activeCount > 0 && (
          <button
            onClick={onClear}
            className="text-xs text-gray-500 hover:text-black transition-colors flex items-center gap-1"
          >
            <FiX className="w-3 h-3" />
            Clear all
          </button>
        )}
      </div>

      {/* Filter Box */}
      <div className="bg-gray-50 rounded-2xl p-5">
        {/* Categories */}
        <FilterSection title="Categories">
          <CategoryFilter
            selected={selectedCategories}
            onToggle={onCategoryToggle}
          />
        </FilterSection>

        {/* Brands */}
        <FilterSection title="Brands">
          <BrandFilter
            selected={selectedBrands}
            onToggle={onBrandToggle}
          />
        </FilterSection>

        {/* Price Range  */}
        <FilterSection title="Price Range">
          <PriceFilter
            minPrice={minPrice}
            maxPrice={maxPrice}
            onApply={onPriceApply}
          />
        </FilterSection>
      </div>
    </div>
  );
};

export default memo(FilterSidebar);