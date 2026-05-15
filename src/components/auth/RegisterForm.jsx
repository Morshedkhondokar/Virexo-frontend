import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import {
  FiMail,
  FiLock,
  FiEye,
  FiEyeOff,
  FiUser,
  FiArrowRight,
  FiCheck,
} from "react-icons/fi";
import Logo from "../shared/Logo";
import { Link } from "react-router";

const RegisterForm = () => {
  // State to toggle password visibility (show/hide text)
  const [showPassword, setShowPassword] = useState(false);
  // State to manage the submit button loading spinner
  const [isLoading, setIsLoading] = useState(false);
  // State to toggle between the registration form and the success screen
  const [isSuccess, setIsSuccess] = useState(false);
  // State to capture and display any backend API validation errors
  const [apiError, setApiError] = useState(null);

  const navigate = useNavigate();

  // Initializing react-hook-form for efficient form validation and submission
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  // Watching the password field value to compare it with the confirmPassword field
  const password = watch("password");

  // handler for form submission
  const onSubmit = async (data) => {
    setIsLoading(true);
    setApiError(null); // Reset previous API errors before a new attempt

    try {
      // Simulating a network delay/API response time of 1.5 seconds
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log("Register data:", data); // Log validated form data

      setIsLoading(false);
      setIsSuccess(true);
    } catch (error) {
      setIsLoading(false);
      // Set error message to be displayed above the fields if the API call fails
      setApiError(error.message || "Something went wrong. Please try again!");
    }
  };

  // Handling redirection inside useEffect to clean up memory
  useEffect(() => {
    if (isSuccess) {
      // Set a timer to redirect the user after 2 seconds
      const timer = setTimeout(() => {
        navigate("/");
      }, 2000);

      // Cleanup function to clear the timer if the component unmounts before redirection
      return () => clearTimeout(timer);
    }
  }, [isSuccess, navigate]);

  //  If account creation is successful, show Success View
  if (isSuccess) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
        <div className="w-full max-w-md text-center">
          {/* Animated Green Checkmark Icon */}
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <FiCheck className="w-8 h-8 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Account created!
          </h2>
          <p className="text-gray-500 mb-8">
            Welcome to Virexo. Redirecting you to home...
          </p>
          {/* Loading Spinner during Redirection delay */}
          <div className="w-5 h-5 border-2 border-gray-300 border-t-black rounded-full animate-spin mx-auto" />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-12">
      <div className="w-full max-w-md">
        {/* Form Branding/Header */}
        <div className="text-center mb-8">
          <Logo
            size="large"
            className="justify-center mb-4"
          />
          <h2 className="text-2xl font-semibold text-gray-900 mb-1">
            Create your account
          </h2>
          <p className="text-sm text-gray-500">
            Join Virexo for exclusive deals and faster checkout
          </p>
        </div>

        {/* Form Container Card */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-5"
          >
            {/* Dynamic API Error message block */}
            {apiError && (
              <div className="p-3 bg-red-50 border border-red-200 text-red-600 text-sm rounded-xl font-medium text-center">
                {apiError}
              </div>
            )}

            {/* Username Input Field */}
            <div>
              <label
                htmlFor="userName"
                className="block text-sm font-medium text-gray-700 mb-1.5"
              >
                Username
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                  <FiUser className="w-5 h-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  id="userName"
                  placeholder="johndoe"
                  // Dynamically toggle red borders if a validation error exists
                  className={`w-full pl-11 pr-4 py-3 bg-gray-50 border rounded-xl text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-black focus:bg-white transition-all ${
                    errors.userName
                      ? "border-red-300 focus:ring-red-200"
                      : "border-gray-200"
                  }`}
                  // Registering username with custom regex and character limits
                  {...register("userName", {
                    required: "Username is required",
                    minLength: {
                      value: 3,
                      message: "Username must be at least 3 characters",
                    },
                    maxLength: {
                      value: 20,
                      message: "Username must be less than 20 characters",
                    },
                    pattern: {
                      value: /^[a-zA-Z0-9_]+$/,
                      message: "Only letters, numbers, and underscores allowed",
                    },
                  })}
                />
              </div>
              {/* Field-level validation error message handling */}
              {errors.userName && (
                <p className="mt-1.5 text-xs text-red-500 font-medium">
                  {errors.userName.message}
                </p>
              )}
            </div>

            {/* Email Input Field */}
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
                  // Validating exact email schema formats
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address",
                    },
                  })}
                />
              </div>
              {errors.email && (
                <p className="mt-1.5 text-xs text-red-500 font-medium">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Password Input Field */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-1.5"
              >
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                  <FiLock className="w-5 h-5 text-gray-400" />
                </div>
                <input
                  type={showPassword ? "text" : "password"} // Dynamic switch based on visibility state
                  id="password"
                  placeholder="Min. 6 characters"
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
                {/* Visibility Toggle Button */}
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

            {/* Confirm Password Input Field */}
            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-gray-700 mb-1.5"
              >
                Confirm password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                  <FiLock className="w-5 h-5 text-gray-400" />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  id="confirmPassword"
                  placeholder="Repeat your password"
                  className={`w-full pl-11 pr-4 py-3 bg-gray-50 border rounded-xl text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-black focus:bg-white transition-all ${
                    errors.confirmPassword
                      ? "border-red-300 focus:ring-red-200"
                      : "border-gray-200"
                  }`}
                  // Custom validator checking if confirm value equals password value
                  {...register("confirmPassword", {
                    required: "Please confirm your password",
                    validate: (value) =>
                      value === password || "Passwords do not match",
                  })}
                />
              </div>
              {errors.confirmPassword && (
                <p className="mt-1.5 text-xs text-red-500 font-medium">
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>

            {/* Terms of Service Checkbox */}
            <div className="flex items-start">
              <input
                id="terms"
                type="checkbox"
                className="w-3 h-3 mt-1 border-gray-300 rounded text-black focus:ring-black cursor-pointer"
                {...register("terms", {
                  required: "You must accept the terms",
                })}
              />
              <label
                htmlFor="terms"
                className="ml-2 block text-xs text-gray-600 cursor-pointer select-none leading-relaxed"
              >
                I agree to the{" "}
                <a
                  href="#"
                  className="text-gray-900 underline underline-offset-2 hover:text-black"
                >
                  Terms of Service
                </a>{" "}
                and{" "}
                <a
                  href="#"
                  className="text-gray-900 underline underline-offset-2 hover:text-black"
                >
                  Privacy Policy
                </a>
              </label>
            </div>
            {errors.terms && (
              <p className="text-xs text-red-500 font-medium -mt-3">
                {errors.terms.message}
              </p>
            )}

            {/* Form Submit Button (Disabled while sending request) */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full flex items-center justify-center gap-2 bg-black text-white py-3 px-4 rounded-xl text-sm font-semibold hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {/* Conditional Spinner based on isLoading status */}
              {isLoading ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <>
                  Create account
                  <FiArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>

          {/* Alternative Action: Redirection link back to Sign In */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-100" />
            </div>
            <div className="relative flex justify-center text-xs">
              <span className="px-4 bg-white text-gray-400 font-medium">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="text-gray-600 hover:text-black underline underline-offset-2 transition-colors"
                >
                  Sign in
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
