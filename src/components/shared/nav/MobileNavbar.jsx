// MobileNavbar.jsx (Separate file)
import { useEffect } from "react";
import { Link, useLocation } from "react-router";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FiX, 
  FiSearch, 
  FiShoppingCart, 
  FiUser, 
  FiHeart
} from "react-icons/fi";
import Logo from "../Logo";

const MobileNavbar = ({ 
  links, 
  isOpen, 
  onClose,
  searchQuery,
  onSearchChange,
  onSearchSubmit
}) => {
  const location = useLocation();

  // Lock body scroll
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Close on route change - FIXED: removed onClose from deps
  useEffect(() => {
    if (isOpen) {
      onClose();
    }
  }, [location.pathname]); // Only depend on pathname

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  };

  const panelVariants = {
    hidden: { x: "100%" },
    visible: { 
      x: 0,
      transition: { type: "spring", damping: 30, stiffness: 300 },
    },
    exit: { 
      x: "100%",
      transition: { type: "spring", damping: 35, stiffness: 300 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.05, duration: 0.3, ease: "easeOut" },
    }),
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/30 z-40 md:hidden backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Slide Panel */}
          <motion.div
            variants={panelVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-y-0 right-0 z-50 w-[90%] max-w-sm bg-white md:hidden shadow-2xl"
          >
            <div className="flex flex-col h-full">
              
              {/* Header */}
              <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
                <Logo size="small" />
                
                <div className="flex items-center gap-2">
                  <Link
                    to="/cart"
                    onClick={onClose}
                    className="relative p-2 text-gray-500 hover:text-black hover:bg-gray-50 rounded-lg transition-all"
                  >
                    <FiShoppingCart className="w-5 h-5" />
                    <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-black text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                      2
                    </span>
                  </Link>

                  <Link
                    to="/wishlist"
                    onClick={onClose}
                    className="relative p-2 text-gray-500 hover:text-black hover:bg-gray-50 rounded-lg transition-all"
                  >
                    <FiHeart className="w-5 h-5" />
                    <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-black text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                      2
                    </span>
                  </Link>

                  <motion.button
                    whileTap={{ scale: 0.9 }}
                    onClick={onClose}
                    className="p-2 text-gray-500 hover:text-black hover:bg-gray-50 rounded-lg transition-colors ml-1"
                  >
                    <FiX className="w-5 h-5" />
                  </motion.button>
                </div>
              </div>

              {/* Search */}
              <motion.div 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="px-5 py-4 border-b border-gray-100"
              >
                <form onSubmit={onSearchSubmit} className="relative">
                  <FiSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => onSearchChange(e.target.value)}
                    placeholder="Search products..."
                    className="w-full pl-10 pr-10 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-black focus:bg-white transition-all"
                  />
                  {searchQuery && (
                    <button
                      type="button"
                      onClick={() => onSearchChange("")}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-black transition-colors"
                    >
                      <FiX className="w-4 h-4" />
                    </button>
                  )}
                </form>
                
                <div className="mt-3 flex flex-wrap gap-2">
                  {["iPhone", "AirPods", "Sony", "Samsung"].map((term) => (
                    <button
                      key={term}
                      onClick={() => onSearchChange(term)}
                      className="text-xs px-3 py-1.5 bg-gray-100 text-gray-600 rounded-full hover:bg-gray-200 hover:text-black transition-all"
                    >
                      {term}
                    </button>
                  ))}
                </div>
              </motion.div>

              {/* Navigation Links */}
              <nav className="flex-1 px-5 py-4 overflow-y-auto">
                <ul className="space-y-1">
                  {links.map((link, index) => {
                    const isActive = location.pathname === link.path;
                    return (
                      <motion.li
                        key={link.name}
                        custom={index}
                        variants={itemVariants}
                        initial="hidden"
                        animate="visible"
                      >
                        <Link
                          to={link.path}
                          onClick={onClose}
                          className={`flex items-center px-4 py-3.5 rounded-xl text-sm font-medium transition-all ${
                            isActive
                              ? "bg-black text-white"
                              : "text-gray-700 hover:bg-gray-50 hover:text-black"
                          }`}
                        >
                          {link.name}
                        </Link>
                      </motion.li>
                    );
                  })}
                </ul>
              </nav>

              {/* Sign In Button */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="px-5 py-4 border-t border-gray-100"
              >
                <Link
                  to="/login"
                  onClick={onClose}
                  className="flex items-center justify-center gap-2 w-full bg-black text-white py-3.5 rounded-xl text-sm font-semibold hover:bg-gray-900 transition-all"
                >
                  <FiUser className="w-4 h-4" />
                  Sign In
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileNavbar;