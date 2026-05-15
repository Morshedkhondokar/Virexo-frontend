// CategorySection.jsx
import { motion } from "framer-motion";
import { useNavigate } from "react-router";

const categories = [
  {
    id: 1,
    name: "Phones",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=400&fit=crop",
  },
  {
    id: 2,
    name: "AirPods",
    image: "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=400&h=400&fit=crop",
  },
  {
    id: 3,
    name: "Headphones",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
  },
  {
    id: 4,
    name: "Smartwatch",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop",
  },
  {
    id: 5,
    name: "Accessories",
    image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400&h=400&fit=crop",
  },
  {
    id: 6,
    name: "Tablets",
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=400&fit=crop",
  },
];

const CategorySection = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (categoryName) => {
    navigate(`/products?category=${encodeURIComponent(categoryName.toLowerCase())}`);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section className="relative w-full bg-white py-10 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
            Shop by Category
          </h2>
        </motion.div>

        {/* Category Row */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex gap-6 sm:gap-8 py-3 lg:gap-10 overflow-x-auto scrollbar-hide justify-start sm:justify-center"
        >
          {categories.map((category) => (
            <motion.div
              key={category.id}
              variants={itemVariants}
              whileHover={{ y: -6 }}
              onClick={() => handleCategoryClick(category.name)}
              className="group flex flex-col items-center gap-3 cursor-pointer shrink-0"
            >
              {/* Circular Image */}
              <div className="relative w-24 h-24 sm:w-28 sm:h-28 lg:w-30 lg:h-30 rounded-full overflow-hidden
               bg-gray-100 ring-2 ring-transparent group-hover:ring-black transition-all duration-300">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Label */}
              <span className="text-sm font-medium text-gray-900 group-hover:text-black transition-colors">
                {category.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CategorySection;