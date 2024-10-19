import Google from "@/assets/Icon-Google.png";
import sideImage from "@/assets/Side Image.png";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import apiClient from "@/lib/api-client.js";
import { SIGNUP_ROUTE } from "@/utils/constants";
import { setUserInfo } from "@/redux-toolkit/slices/authSlice";
import axios from "axios";
import { HOST } from "../../utils/constants";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const validateSignup = () => {
    if (!email || !password || !name) {
      toast.error("Please fill in all fields.");
      return false;
    }
    return true;
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    if (validateSignup()) {
      try {
        setLoading(true);
        const response = await apiClient.post(
          SIGNUP_ROUTE,
          {
            email,
            password,
            name,
          },
          { withCredentials: true }
        );
        if (response.status === 201 && response.data.data.user) {
          dispatch(setUserInfo(response.data.data.user));
          const token = response.data.data.accessToken;
          sessionStorage.setItem("token", token);

          navigate("/");
          toast.success("Signed up successfully!");
        }
      } catch (error) {
        toast.error("Signup failed. Please try again.");
        console.error("Signup error:", error);
      } finally {
        setLoading(false);
      }
    }
  };

  const authGoogle = () => {
    const googleAuthUrl = `${HOST}/api/v1/auth/google`;
    window.open(googleAuthUrl, "_self");
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
            Create an account
          </h2>
          <p className="text-gray-600 mb-4">Enter your details below</p>

          <form className="space-y-4" onSubmit={handleSignup}>
            <input
              type="text"
              placeholder="Name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              placeholder="Email or Phone Number"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="submit"
              className="w-full bg-[#db4444] text-white py-3 rounded-md hover:bg-red-600 transition-colors"
              disabled={loading}
            >
              {loading ? (
                <div className="flex justify-center items-center">
                  <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-white"></div>
                </div>
              ) : (
                "Create Account"
              )}
            </button>
          </form>

          <div className="flex items-center my-6">
            <hr className="flex-grow border-gray-300" />
            <span className="mx-4 text-gray-400">or</span>
            <hr className="flex-grow border-gray-300" />
          </div>

          <button
            className="w-full border border-gray-300 py-3 rounded-md flex justify-center items-center hover:bg-gray-100 transition-colors"
            onClick={authGoogle}
          >
            <img src={Google} alt="Google Logo" className="w-5 mr-2" />
            Sign up with Google
          </button>

          <p className="mt-6 text-center">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-500 hover:underline">
              Log in
            </Link>
          </p>
        </div>
      </div>

      <ToastContainer position="top-right" autoClose={2000} hideProgressBar />
    </>
  );
}
