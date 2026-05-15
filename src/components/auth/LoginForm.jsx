import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  FiMail,
  FiLock,
  FiEye,
  FiEyeOff,
  FiArrowRight,
  FiCheck,
} from "react-icons/fi";
import Logo from "../shared/Logo";
import { Link} from "react-router";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setIsLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log("Login data:", data);
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-12">
      <div className="w-full max-w-md">
        {/* Logo & Header */}
        <div className="text-center mb-8">
          <Logo
            size="large"
            className="justify-center mb-4"
          />
          <h2 className="text-2xl font-semibold text-gray-900 mb-1">
            Welcome back
          </h2>
          <p className="text-sm text-gray-500">
            Sign in to access your orders and saved items
          </p>
        </div>


        {/* Form Card */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-5"
          >
            {/* Email Field */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1.5"
              >
                Email address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                  <FiMail className="w-5 h-5 text-gray-400" />
                </div>
                <input
                  type="email"
                  id="email"
                  placeholder="you@example.com"
                  className={`w-full pl-11 pr-4 py-3 bg-gray-50 border rounded-xl text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-black focus:bg-white transition-all ${
                    errors.email
                      ? "border-red-300 focus:ring-red-200"
                      : "border-gray-200"
                  }`}
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address",
                    },
                  })}
                />
                {!errors.email && (
                  <div className="absolute inset-y-0 right-0 pr-3.5 flex items-center">
                    <FiCheck className="w-5 h-5 text-green-500 opacity-0 peer-focus:opacity-100" />
                  </div>
                )}
              </div>
              {errors.email && (
                <p className="mt-1.5 text-xs text-red-500 font-medium">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Password Field */}
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <a
                  href="#"
                  className="text-xs text-gray-500 hover:text-black transition-colors font-medium"
                >
                  Forgot password?
                </a>
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                  <FiLock className="w-5 h-5 text-gray-400" />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  placeholder="Enter your password"
                  className={`w-full pl-11 pr-12 py-3 bg-gray-50 border rounded-xl text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-black focus:bg-white transition-all ${
                    errors.password
                      ? "border-red-300 focus:ring-red-200"
                      : "border-gray-200"
                  }`}
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters",
                    },
                  })}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-gray-400 hover:text-gray-600 transition-colors"
                >
                  {showPassword ? (
                    <FiEyeOff className="w-5 h-5" />
                  ) : (
                    <FiEye className="w-5 h-5" />
                  )}
                </button>
              </div>
              {errors.password && (
                <p className="mt-1.5 text-xs text-red-500 font-medium">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Remember Me */}
            <div className="flex items-center">
              <input
                id="remember-me"
                type="checkbox"
                className="w-4 h-4 border-gray-300 rounded text-black focus:ring-black cursor-pointer"
                {...register("rememberMe")}
              />
              <label
                htmlFor="remember-me"
                className="ml-2 block text-sm text-gray-600 cursor-pointer select-none"
              >
                Keep me signed in
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full flex items-center justify-center gap-2 bg-black text-white py-3 px-4 rounded-xl text-sm font-semibold hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <>
                  Sign in
                  <FiArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>

          {/* link to register */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-100" />
            </div>
            <div className="relative flex justify-center text-xs">
              <span className="px-4 bg-white text-gray-400 font-medium">
                don't have an account? <Link to="/register" className="text-gray-600 hover:text-black underline underline-offset-2 transition-colors">Sign up</Link>
              </span>
            </div>
          </div>
          
        </div>
        {/* Footer */}
        <p className="mt-8 text-center text-xs text-gray-400">
          By signing in, you agree to our{" "}
          <Link
            href="#"
            className="text-gray-600 hover:text-black underline underline-offset-2 transition-colors"
          >
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link
            href="#"
            className="text-gray-600 hover:text-black underline underline-offset-2 transition-colors"
          >
            Privacy Policy
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
