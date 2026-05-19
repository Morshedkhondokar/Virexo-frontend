import { FiX } from "react-icons/fi";
import FilterSection from "./FilterSection";
import CategoryFilter from "./CategoryFilter";
import BrandFilter from "./BrandFilter";
import PriceFilter from "./PriceFilter";
import { memo } from "react";

const MobileFilterDrawer = ({
  selectedCategories,
  selectedBrands,
  minPrice,
  maxPrice,
  onCategoryToggle,
  onBrandToggle,
  onPriceApply,
  onClear,
  onClose,
}) => {
  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 z-40 lg:hidden"
        onClick={onClose}
      />

      {/* Drawer */}
      <div className="fixed inset-y-0 left-0 w-80 bg-white z-50 lg:hidden overflow-y-auto shadow-xl">
        <div className="p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-bold text-gray-900">Filters</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <FiX className="w-5 h-5" />
            </button>
          </div>

          {/* Filters */}
          <div className="space-y-1">
            <FilterSection title="Categories">
              <CategoryFilter
                selected={selectedCategories}
                onToggle={onCategoryToggle}
              />
            </FilterSection>

            <FilterSection title="Brands">
              <BrandFilter
                selected={selectedBrands}
                onToggle={onBrandToggle}
              />
            </FilterSection>

            <FilterSection title="Price Range">
              <PriceFilter
                minPrice={minPrice}
                maxPrice={maxPrice}
                onApply={onPriceApply}
              />
            </FilterSection>
          </div>

          {/* Clear Button */}
          <div className="mt-6 pt-6 border-t border-gray-100">
            <button
              onClick={() => {
                onClear();
                onClose();
              }}
              className="w-full py-3 bg-gray-100 text-gray-900 rounded-xl text-sm font-semibold hover:bg-gray-200 transition-colors"
            >
              Clear all filters
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(MobileFilterDrawer);