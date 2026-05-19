import { useState } from "react";
import { motion } from "framer-motion";
import { FiMail, FiArrowRight } from "react-icons/fi";
import NewsLetterImage from "../../assets/news-letter.png";
import HeadphoneImage from "../../assets/headphone.jpg";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      console.log("Newsletter signup:", email);
      setIsSubmitted(true);
      setEmail("");
      setTimeout(() => setIsSubmitted(false), 3000);
    }
  };

  return (
    <section className="relative w-full bg-gray-100 overflow-hidden h-[70vh]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center py-16 lg:py-20">
          
          {/* Left Image - Headphones */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="hidden lg:flex justify-center"
          >
            <div className="relative w-64 h-64 rounded-2xl overflow-hidden">
              <img
                src={HeadphoneImage}
                alt="Premium Headphones"
                className="w-full h-full object-contain drop-shadow-xl"
              />
            </div>
          </motion.div>

          {/* Center Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight mb-3">
              Join Our Newsletter
            </h2>
            <p className="text-sm text-gray-500 mb-8">
              Sign up for deals, new products and promotions
            </p>

            {/* Email Form */}
            <form onSubmit={handleSubmit} className="relative max-w-md mx-auto lg:mx-0">
              <div className="flex items-center border-b-2 border-gray-300 focus-within:border-black transition-colors pb-2">
                <FiMail className="w-5 h-5 text-gray-400 mr-3 shrink-0" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email address"
                  className="flex-1 bg-transparent text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none"
                  required
                />
                <motion.button
                  whileHover={{ x: 3 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="flex items-center gap-1 text-sm font-medium text-gray-900 hover:text-black transition-colors ml-2"
                >
                  Signup
                  <FiArrowRight className="w-4 h-4" />
                </motion.button>
              </div>
            </form>

            {/* Success Message */}
            {isSubmitted && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-sm text-green-600 mt-3 font-medium"
              >
                Thanks for subscribing!
              </motion.p>
            )}
          </motion.div>

          {/* Right Image - Person with Headphones */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="hidden lg:flex justify-center"
          >
            <div className="relative w-84 h-84">
              <img
                src={NewsLetterImage}
                alt="Happy customer with headphones"
                className="w-full h-full object-contain drop-shadow-xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;