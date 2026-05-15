// DesktopNavbar.jsx
import { Link, useLocation } from "react-router";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FiSearch, 
  FiShoppingCart, 
  FiUser, 
  FiMenu,
  FiX
} from "react-icons/fi";
import Logo from "../Logo";

const DesktopNavbar = ({ 
  links, 
  searchQuery,
  isSearchOpen,
  onSearchOpen,
  onSearchClose,
  onSearchChange,
  onSearchSubmit,
  onMenuToggle 
}) => {
  const location = useLocation();

  return (
    <nav className="sticky top-0 z-40 w-full bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Left: Logo */}
          <div className="shrink-0">
            <Link to="/" className="block">
              <Logo size="small" />
            </Link>
          </div>

          {/* Center: Navigation Links */}
          <div className="hidden md:flex items-center gap-1">
            {links.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                    isActive
                      ? "text-black bg-gray-50"
                      : "text-gray-500 hover:text-black hover:bg-gray-50"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-black rounded-full" />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Right: Icons */}
          <div className="flex items-center gap-1">
            {/* Search Toggle */}
            <button
              onClick={isSearchOpen ? onSearchClose : onSearchOpen}
              className={`p-2.5 rounded-xl transition-all duration-200 ${
                isSearchOpen 
                  ? "text-black bg-gray-100" 
                  : "text-gray-500 hover:text-black hover:bg-gray-50"
              }`}
              aria-label="Search"
            >
              {isSearchOpen ? <FiX className="w-5 h-5" /> : <FiSearch className="w-5 h-5" />}
            </button>

            {/* Cart */}
            <Link
              to="/cart"
              className="relative p-2.5 text-gray-500 hover:text-black hover:bg-gray-50 rounded-xl transition-all duration-200"
              aria-label="Cart"
            >
              <FiShoppingCart className="w-5 h-5" />
              <span className="absolute top-1.5 right-1.5 w-4 h-4 bg-black text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                2
              </span>
            </Link>

            {/* Profile */}
            <Link
              to="/profile"
              className="p-2.5 text-gray-500 hover:text-black hover:bg-gray-50 rounded-xl transition-all duration-200"
              aria-label="Profile"
            >
              <FiUser className="w-5 h-5" />
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={onMenuToggle}
              className="md:hidden p-2.5 text-gray-500 hover:text-black hover:bg-gray-50 rounded-xl transition-all duration-200"
              aria-label="Open menu"
            >
              <FiMenu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Search Overlay */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="border-t border-gray-100 overflow-hidden"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
              <form onSubmit={onSearchSubmit} className="relative max-w-2xl mx-auto">
                <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => onSearchChange(e.target.value)}
                  placeholder="Search for phones, airpods, headphones..."
                  autoFocus
                  className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl text-base placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-black focus:bg-white transition-all"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => onSearchChange("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-gray-400 hover:text-black transition-colors"
                  >
                    <FiX className="w-4 h-4" />
                  </button>
                )}
              </form>
              
              {/* Quick Suggestions */}
              <div className="max-w-2xl mx-auto mt-3 flex flex-wrap gap-2">
                <span className="text-xs text-gray-400 font-medium py-1">Popular:</span>
                {["iPhone 15", "AirPods Pro", "Sony WH-1000XM5", "Samsung Galaxy"].map((term) => (
                  <button
                    key={term}
                    onClick={() => {
                      onSearchChange(term);
                      onSearchSubmit({ preventDefault: () => {} });
                    }}
                    className="text-xs px-3 py-1 bg-gray-100 text-gray-600 rounded-full hover:bg-gray-200 hover:text-black transition-all"
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default DesktopNavbar;