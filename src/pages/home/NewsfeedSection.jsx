// NewsfeedSection.jsx
import { motion } from "framer-motion";
import { FiInstagram } from "react-icons/fi";

const instagramPosts = [
  {
    id: 1,
    image: "https://i.pinimg.com/1200x/21/66/34/2166347553095852317a294c985d85de.jpg",
    likes: 1240,
  },
  {
    id: 2,
    image: "https://i.pinimg.com/736x/55/28/e4/5528e4c982297365e5c4c2216e710133.jpg",
    likes: 892,
  },
  {
    id: 3,
    image: "https://i.pinimg.com/webp85/1200x/29/04/76/290476f54d8d02358fb671e6e1a4b188.webp",
    likes: 2156,
  },
  {
    id: 4,
    image: "https://i.pinimg.com/1200x/bf/ed/5f/bfed5fa4006430250372e64bc410b438.jpg",
    likes: 1567,
  },
];

const NewsfeedSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section className="relative w-full bg-white py-16 lg:py-16">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block text-xs font-medium text-gray-400 uppercase tracking-[0.2em] mb-3">
            Newsfeed
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight mb-4">
            Instagram
          </h2>
          <p className="text-sm text-gray-500 mb-3">
            Follow us on social media for more discount & promotions
          </p>
          <a
            href="https://instagram.com/virexo_official"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-gray-900 hover:text-gray-600 transition-colors"
          >
            <FiInstagram className="w-4 h-4" />
            @virexo_official
          </a>
        </motion.div>

        {/* Instagram Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {instagramPosts.map((post) => (
            <motion.a
              key={post.id}
              variants={itemVariants}
              href="https://instagram.com/virexo_official"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative rounded-2xl overflow-hidden bg-gray-100"
            >
              <img
                src={post.image}
                alt={`Instagram post ${post.id}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-center text-white">
                  <FiInstagram className="w-8 h-8 mx-auto mb-2" />
                  <span className="text-sm font-medium">{post.likes.toLocaleString()} likes</span>
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default NewsfeedSection;