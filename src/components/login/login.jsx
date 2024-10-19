import sideImage from "@/assets/Side Image.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import apiClient from "@/lib/api-client.js";
import { setUserInfo } from "@/redux-toolkit/slices/authSlice";
import { LOGIN_ROUTE } from "../../utils/constants";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validateSignup = () => {
    if (!email || !password) {
      toast.error("Please fill in all fields.");
      return false;
    }
    if (!validateEmail(email)) {
      toast.error("Please enter a valid email address.");
      return false;
    }
    return true;
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    if (validateSignup()) {
      try {
        setLoading(true);
        const response = await apiClient.post(
          LOGIN_ROUTE,
          { email, password },
          { withCredentials: true }
        );

        if (response.data.data.user) {
          const token = response.data.data.accessToken;
          sessionStorage.setItem("token", token);

          dispatch(setUserInfo(response.data.data.user));
          navigate("/");
          toast.success("Login successfully!");
        }
      } catch (error) {
        const errorMessage =
          error.response?.data?.message || "Login failed. Please try again.";
        toast.error(errorMessage);
        console.error("Login error:", error);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <>
      <div className="flex flex-col md:flex-row h-auto md:h-[90vh] py-8 md:py-16 justify-between w-11/12 mx-auto">
        <div className="md:flex justify-center items-center mb-8 md:mb-0 md:w-1/2 hidden">
          <img
            src={sideImage}
            alt="Shopping Cart and Phone"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="w-full md:w-1/2 flex flex-col justify-center px-6 md:px-20">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">
            Log in to Exclusive{" "}
          </h2>
          <p className="text-gray-600 mb-4">Enter your details below</p>

          <form className="space-y-4" onSubmit={handleLogin}>
            <input
              type="email"
              placeholder="Email or Phone Number"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
              onChange={(e) => setEmail(e.target.value)}
              aria-label="Email"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
              onChange={(e) => setPassword(e.target.value)}
              aria-label="Password"
            />
            <div className="flex justify-between items-center">
              <button
                type="submit"
                className="bg-[#db4444] text-white py-3 px-4 rounded-md hover:bg-red-600 transition-colors"
                disabled={loading}
              >
                {loading ? (
                  <div className="flex justify-center items-center">
                    <div
                      className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-white"
                      role="status"
                    >
                      <span className="sr-only">Loading...</span>
                    </div>
                  </div>
                ) : (
                  "Log In"
                )}
              </button>
              <a
                href="/forget-password"
                className="text-[#db4444] text-[16px] font-semibold rounded-[5px]"
              >
                {" "}
                Forget Password?
              </a>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer position="top-right" autoClose={2000} hideProgressBar />
          
    </>
  );
}
