// CollectionSection.jsx

import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import { useNavigate } from "react-router";

const collections = [
  {
    id: 1,
    name: "Headband",
    image:
      "https://i.pinimg.com/1200x/6e/86/d5/6e86d534300404b64375739e18064a77.jpg",
  },
  {
    id: 2,
    name: "Earbuds",
    image:
      "https://i.pinimg.com/1200x/73/0a/6c/730a6ca67e6fba7aa9239a51b75be735.jpg",
  },
  {
    id: 3,
    name: "Smart Watch",
    image:
      "https://i.pinimg.com/736x/57/48/22/574822c6c53434f2546d014ae552e2c0.jpg",
  },
];

const CollectionSection = () => {
  const navigate = useNavigate();

  const handleCollectionClick = (collectionName) => {
    navigate(
      `/products?category=${encodeURIComponent(
        collectionName.toLowerCase()
      )}`
    );
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section className="relative w-full bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
            Shop Collection
          </h2>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6"
        >
          {/* Left Large Card */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -4 }}
            onClick={() => handleCollectionClick("Headband")}
            className="
              group relative cursor-pointer
              rounded-3xl overflow-hidden
              bg-gray-50
              aspect-[4/5]
              md:row-span-2
              md:h-full
            "
          >
            {/* Image */}
            <img
              src={collections[0].image}
              alt={collections[0].name}
              className="
                absolute inset-0
                w-full h-full
                object-cover
                transition-transform duration-700
                group-hover:scale-110
              "
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />

            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-3">
                {collections[0].name}
              </h3>

              <div className="flex items-center gap-2 text-white">
                <span className="text-sm border-b border-white/50 pb-0.5">
                  Collection
                </span>

                <FiArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </div>
            </div>
          </motion.div>

          {/* Earbuds Card */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -4 }}
            onClick={() => handleCollectionClick("Earbuds")}
            className="
              group relative cursor-pointer
              rounded-3xl overflow-hidden
              bg-gray-50
              aspect-[4/3]
              sm:aspect-[16/10]
            "
          >
            {/* Image */}
            <img
              src={collections[1].image}
              alt={collections[1].name}
              className="
                absolute inset-0
                w-full h-full
                object-cover
                transition-transform duration-700
                group-hover:scale-110
              "
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />

            {/* Content */}
            <div className="absolute bottom-0 left-0 p-6 lg:p-8">
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-3">
                {collections[1].name}
              </h3>

              <div className="flex items-center gap-2 text-white">
                <span className="text-sm border-b border-white/50 pb-0.5">
                  Collection
                </span>

                <FiArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </div>
            </div>
          </motion.div>

          {/* Smart Watch Card */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -4 }}
            onClick={() => handleCollectionClick("Smart Watch")}
            className="
              group relative cursor-pointer
              rounded-3xl overflow-hidden
              bg-gray-50
              aspect-[4/3]
              sm:aspect-[16/10]
            "
          >
            {/* Image */}
            <img
              src={collections[2].image}
              alt={collections[2].name}
              className="
                absolute inset-0
                w-full h-full
                object-cover
                transition-transform duration-700
                group-hover:scale-110
              "
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />

            {/* Content */}
            <div className="absolute bottom-0 left-0 p-6 lg:p-8">
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-3">
                {collections[2].name}
              </h3>

              <div className="flex items-center gap-2 text-white">
                <span className="text-sm border-b border-white/50 pb-0.5">
                  Collection
                </span>

                <FiArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CollectionSection;