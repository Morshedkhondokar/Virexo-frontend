// NotFound.jsx
import { useNavigate } from "react-router";
import { FiHome, FiArrowLeft } from "react-icons/fi";
import Logo from "../components/shared/Logo";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <header className="w-full px-6 py-5 border-b border-gray-100">
        <Logo size="small" />
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center px-4 py-16 sm:py-24">
        <div className="w-full max-w-md text-center">
          
          {/* 404 Visual */}
          <div className="relative mb-10">
            <span className="text-[10rem] sm:text-[12rem] font-black text-gray-100 leading-none select-none tracking-tighter">
              404
            </span>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center shadow-xl shadow-black/10">
                <span className="text-white text-2xl font-bold">?</span>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="space-y-3 mb-10">
            <h1 className="text-3xl font-bold text-gray-900 tracking-tight">
              Page not found
            </h1>
            <p className="text-gray-500 text-base leading-relaxed max-w-xs mx-auto">
              The page you're looking for doesn't exist or has been moved.
            </p>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={() => navigate(-1)}
              className="group w-full sm:w-auto flex items-center justify-center gap-2.5 bg-gray-50 text-gray-900 py-3.5 px-7 rounded-xl text-sm font-semibold hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 transition-all duration-200"
            >
              <FiArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform duration-200" />
              Go back
            </button>
            
            <button
              onClick={() => navigate("/")}
              className="group w-full sm:w-auto flex items-center justify-center gap-2.5 bg-black text-white py-3.5 px-7 rounded-xl text-sm font-semibold hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black transition-all duration-200 shadow-lg shadow-black/10 hover:shadow-xl hover:shadow-black/15"
            >
              <FiHome className="w-4 h-4" />
              Back to home
            </button>
          </div>

          {/* Helpful Links */}
          <div className="mt-12 pt-8 border-t border-gray-100">
            <p className="text-xs text-gray-400 uppercase tracking-widest font-medium mb-4">
              Need help?
            </p>
            <div className="flex items-center justify-center gap-6 text-sm">
              <button 
                onClick={() => navigate("/contact")}
                className="text-gray-600 hover:text-black font-medium transition-colors"
              >
                Contact us
              </button>
              <span className="w-1 h-1 bg-gray-300 rounded-full" />
              <button 
                onClick={() => navigate("/faq")}
                className="text-gray-600 hover:text-black font-medium transition-colors"
              >
                FAQ
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full py-6 border-t border-gray-100">
        <p className="text-center text-xs text-gray-400">
          © {new Date().getFullYear()} Virexo. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default NotFound;