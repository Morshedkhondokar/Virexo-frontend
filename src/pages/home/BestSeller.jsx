// BestSeller.jsx
import { useEffect, useState } from "react";
import ProductCard from "../../components/product/ProductCard";

const BestSeller = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => { 
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await fetch("http://localhost:8000/product/all-products");
        
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }

        const data = await response.json();
        // console.log("API Response:", data); 
        
        // setProducts expects an array, ensure data.data is an array
        setProducts(data.data || []);
      } catch (error) {
        console.error("Error fetching products:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    
    fetchProducts();
  }, []);

  console.log("Products state:", products); 

  // Loading State
  if (loading) {
    return (
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex items-center justify-center min-h-75">
            <div className="w-8 h-8 border-2 border-gray-200 border-t-black rounded-full animate-spin" />
          </div>
        </div>
      </section>
    );
  }

  // Error State
  if (error) {
    return (
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center py-20">
            <p className="text-red-500 text-sm">Failed to load products. Please try again.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 lg:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="flex items-center justify-between mb-10">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
              Best Sellers
            </h2>
            <p className="text-sm text-gray-400 mt-1">
              Our most popular products this month
            </p>
          </div>
          
          <a 
            href="/products" 
            className="text-sm font-medium text-gray-500 hover:text-black transition-colors hidden sm:block"
          >
            View all
          </a>
        </div>

        {/* Product Grid */}
        {products.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
            {products.slice(0, 8).map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-gray-400 text-sm">No products found.</p>
          </div>
        )}

        {/* Mobile View All Button */}
        <div className="mt-8 text-center sm:hidden">
          <a 
            href="/products"
            className="inline-flex items-center gap-2 text-sm font-medium text-gray-900 border-b border-gray-900 pb-0.5"
          >
            View all products
          </a>
        </div>
      </div>
    </section>
  );
};

export default BestSeller;