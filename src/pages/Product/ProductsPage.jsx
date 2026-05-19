import { useState, useMemo, useEffect, useRef, useCallback } from "react";
import { useSearchParams } from "react-router";
import { useProducts } from "../../hooks/useProducts";
import ProductCard from "../../components/product/ProductCard";
import MobileFilterButton from "../../components/product/MobileFilterButton";
import EmptyState from "../../components/product/EmptyState";
import MobileFilterDrawer from "../../components/product/MobileFilterDrawer";
import FilterSidebar from "../../components/product/FilterSidebar";

const ProductsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  
  const observerRef = useRef(null);

  // URL category
  const categoryFromUrl = searchParams.get("category");

  // Filters
  const [selectedCategories, setSelectedCategories] = useState(
    categoryFromUrl ? [categoryFromUrl] : [],
  );

  // Infinite Query
  const {
  data, 
  isLoading, 
  isError, 
  error, 
  fetchNextPage, 
  hasNextPage, 
  isFetchingNextPage, 
} = useProducts(); 

  // Merge all pages products
  const products = useMemo(() => {
    return data?.pages.flatMap((page) => page.data) || [];
  }, [data]);

  // Filter Products
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      if (
        selectedCategories.length > 0 &&
        !selectedCategories.includes(product.category)
      ) {
        return false;
      }

      if (
        selectedBrands.length > 0 &&
        !selectedBrands.includes(product.brand)
      ) {
        return false;
      }

      if (minPrice && product.price < Number(minPrice)) {
        return false;
      }

      if (maxPrice && product.price > Number(maxPrice)) {
        return false;
      }

      return true;
    });
  }, [products, selectedCategories, selectedBrands, minPrice, maxPrice]);

  // Update URL
  useEffect(() => {
    const params = new URLSearchParams();

    if (selectedCategories.length === 1) {
      params.set("category", selectedCategories[0]);
    }

    if (minPrice) {
      params.set("minPrice", minPrice);
    }

    if (maxPrice) {
      params.set("maxPrice", maxPrice);
    }

    setSearchParams(params);
  }, [selectedCategories, minPrice, maxPrice, setSearchParams]);

  // Infinite Scroll Observer 
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {  
        const entry = entries[0];

        if (entry.isIntersecting && hasNextPage) {
          fetchNextPage();
        }
      },
      {
        threshold: 1,
      },
    );

    const observedElement = observerRef.current;

    if (observedElement) {
      observer.observe(observedElement);
    }

    return () => {
      if(observedElement){
        observer.unobserve(observedElement);
      }
    };
  }, [fetchNextPage, hasNextPage]);

  // Handlers
  const handleCategoryToggle = useCallback((category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category],
    );
  }, []);

  const handleBrandToggle = useCallback((brand) => {
    setSelectedBrands((prev) =>
      prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand],
    );
  }, []);

  const handlePriceApply = useCallback((min, max) => {
    setMinPrice(min);
    setMaxPrice(max);
  }, []);

  const handleClearFilters = useCallback(() => {
    setSelectedCategories([]);
    setSelectedBrands([]);
    setMinPrice("");
    setMaxPrice("");
  }, []);

  const activeFilterCount =
    selectedCategories.length +
    selectedBrands.length +
    (minPrice ? 1 : 0) +
    (maxPrice ? 1 : 0);

  // Loading
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-gray-200 border-t-black rounded-full animate-spin" />
      </div>
    );
  }

  // Error
  if (isError) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>{error?.message}</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Mobile Filter Button */}
          <MobileFilterButton
            count={activeFilterCount}
            onClick={() => setMobileFilterOpen(true)}
          />

          {/* Sidebar */}
          <div className="hidden lg:block w-64 shrink-0">
            <FilterSidebar
              selectedCategories={selectedCategories}
              selectedBrands={selectedBrands}
              minPrice={minPrice}
              maxPrice={maxPrice}
              onCategoryToggle={handleCategoryToggle}
              onBrandToggle={handleBrandToggle}
              onPriceApply={handlePriceApply}
              onClear={handleClearFilters}
              activeCount={activeFilterCount}
            />
          </div>

          {/* Mobile Drawer */}
          {mobileFilterOpen && (
            <MobileFilterDrawer
              selectedCategories={selectedCategories}
              selectedBrands={selectedBrands}
              minPrice={minPrice}
              maxPrice={maxPrice}
              onCategoryToggle={handleCategoryToggle}
              onBrandToggle={handleBrandToggle}
              onPriceApply={handlePriceApply}
              onClear={handleClearFilters}
              onClose={() => setMobileFilterOpen(false)}
            />
          )}

          {/* Products */}
          <div className="flex-1">
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-5">
                {filteredProducts.map((product) => (
                  <ProductCard
                    key={product._id}
                    product={product}
                  />
                ))}
              </div>
            ) : (
              <EmptyState onClear={handleClearFilters} />
            )}

            {/* Infinite Loader */}
            <div
              ref={observerRef}
              className="h-10"
            />

            {/* Loading More */}
            {isFetchingNextPage && (
              <div className="py-8 text-center">Loading more products...</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
