// ProductCard.jsx

import { motion } from "framer-motion";
import {
  FiHeart,
  FiShoppingCart,
  FiEye,
  FiStar,
} from "react-icons/fi";
import { Link } from "react-router";

const ProductCard = ({ product }) => {
  const {
    _id,
    title,
    price,
    description,
    category,
    brand,
    stock,
    images,
  } = product;

  const imageUrl =
    images?.[0] || "https://via.placeholder.com/500";

  const isOutOfStock = stock === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -4 }}
      className="
        group relative
        bg-white
        rounded-2xl
        overflow-hidden
        border border-gray-100
        hover:border-gray-200
        transition-all duration-500
        hover:shadow-xl
      "
    >
      {/* IMAGE */}
      <div className="relative overflow-hidden aspect-[4/4.5] bg-gray-100">
        
        {/* Product Image */}
        <Link to={`/product/${_id}`}>
          <img
            src={imageUrl}
            alt={title}
            className="
              w-full h-full
              object-cover
              transition-transform duration-700
              group-hover:scale-105
            "
          />
        </Link>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Category */}
        <div className="absolute top-3 left-3">
          <span className="px-3 py-1 rounded-full bg-white text-[10px] font-semibold uppercase tracking-wider text-black shadow-sm">
            {category}
          </span>
        </div>

        {/* Desktop Actions Only */}
        <div className="hidden md:flex absolute top-3 right-3 flex-col gap-2">
          
          {/* Wishlist */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.08 }}
            className="
              w-9 h-9
              rounded-full
              bg-white
              shadow-md
              items-center justify-center
              text-gray-700
              opacity-0 translate-x-3
              group-hover:opacity-100
              group-hover:translate-x-0
              transition-all duration-300
              hidden md:flex
            "
          >
            <FiHeart className="w-4 h-4" />
          </motion.button>

          {/* Quick View */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.08 }}
            className="
              w-9 h-9
              rounded-full
              bg-white
              shadow-md
              items-center justify-center
              text-gray-700
              opacity-0 translate-x-3
              group-hover:opacity-100
              group-hover:translate-x-0
              transition-all duration-500
              hidden md:flex
            "
          >
            <FiEye className="w-4 h-4" />
          </motion.button>
        </div>

        {/* Add To Cart Desktop Only */}
        {!isOutOfStock && (
          <div
            className="
              hidden md:block
              absolute bottom-4 left-4 right-4
              opacity-0 translate-y-4
              group-hover:opacity-100
              group-hover:translate-y-0
              transition-all duration-500
            "
          >
            <button
              className="
                w-full
                bg-black text-white
                py-3 rounded-xl
                text-sm font-semibold
                flex items-center justify-center gap-2
                hover:bg-gray-900
                transition-colors
              "
            >
              <FiShoppingCart className="w-4 h-4" />
              Add To Cart
            </button>
          </div>
        )}

        {/* Out Of Stock */}
        {isOutOfStock && (
          <div className="absolute inset-0 bg-white/70 backdrop-blur-sm flex items-center justify-center">
            <span className="px-4 py-2 rounded-full bg-black text-white text-xs font-bold uppercase tracking-widest">
              Out of Stock
            </span>
          </div>
        )}
      </div>

      {/* CONTENT */}
      <div className="p-4 sm:p-5">
        
        {/* Brand + Rating */}
        <div className="flex items-center justify-between mb-2">
          <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-widest text-gray-400">
            {brand}
          </span>

          <div className="flex items-center gap-1">
            <FiStar className="w-3.5 h-3.5 text-black" />
            <span className="text-[11px] sm:text-xs text-gray-600">
              4.8
            </span>
          </div>
        </div>

        {/* Title */}
        <Link to={`/product/${_id}`}>
          <h3
            className="
              text-sm sm:text-lg
              font-bold
              text-gray-900
              leading-snug
              line-clamp-2
            "
          >
            {title}
          </h3>
        </Link>

        {/* Description */}
        <p className="text-xs sm:text-sm text-gray-500 mt-2 line-clamp-2 leading-relaxed">
          {description}
        </p>

        {/* Price */}
        <div className="mt-4">
          <span className="text-xl sm:text-2xl font-black text-black">
            ${price}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;