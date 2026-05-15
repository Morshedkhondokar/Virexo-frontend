// HeroSection.jsx
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router";

const HeroSection = () => {
  return (
    <section className="relative w-full bg-white overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center lg:h-[90vh] py-10">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block text-xs font-medium text-gray-400 uppercase tracking-[0.2em] mb-6">
              Virexo Collection
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-[1.1] tracking-tight mb-6">
              Premium Tech
              <br />
              <span className="text-gray-300">For Every Moment</span>
            </h1>

            <p className="text-base text-gray-500 leading-relaxed max-w-md mb-10">
              Discover our curated selection of smartphones, wireless earbuds, and 
              premium headphones designed for your lifestyle.
            </p>

            <div className="flex items-center gap-4">
              <Link to="/products">
                <motion.button
                  whileHover={{ x: 4 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center gap-2 bg-black text-white px-6 py-3 rounded-lg text-sm font-semibold hover:bg-gray-800 transition-colors"
                >
                  Shop Now
                  <FiArrowRight className="w-4 h-4" />
                </motion.button>
              </Link>

              {/* <Link
                to="/products"
                className="text-sm text-gray-400 hover:text-black transition-colors"
              >
                View all products
              </Link> */}
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="flex items-center justify-center lg:justify-end"
          >
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 bg-gray-50 rounded-3xl flex items-center justify-center">
              <img
                src="https://i.pinimg.com/1200x/6e/86/d5/6e86d534300404b64375739e18064a77.jpg"
                alt="Premium Headphones"
                className="w-full h-full object-contain rounded-2xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;