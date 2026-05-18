// Logo.jsx
import { FiShoppingBag } from "react-icons/fi";

const Logo = ({ size = "default", showText = true, className = "" }) => {
  const sizes = {
    small: {
      container: "w-8 h-8",
      icon: "w-4 h-4",
      text: "text-lg",
      gap: "gap-1.5",
    },
    default: {
      container: "w-12 h-12",
      icon: "w-6 h-6",
      text: "text-2xl",
      gap: "gap-2",
    },
    large: {
      container: "w-16 h-16",
      icon: "w-8 h-8",
      text: "text-3xl",
      gap: "gap-3",
    },
  };

  const currentSize = sizes[size] || sizes.default;

  return (
    <div className={`flex items-center ${currentSize.gap} ${className}`}>
      <div className={`${currentSize.container} bg-black rounded-xl flex items-center justify-center`}>
        <FiShoppingBag className={`${currentSize.icon} text-white`} />
      </div>
      {showText && (
        <span className={`${currentSize.text} ${className} font-bold tracking-tight text-gray-900`}>
          Virexo
        </span>
      )}
    </div>
  );
};

export default Logo;