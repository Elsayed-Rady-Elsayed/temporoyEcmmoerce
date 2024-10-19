// src/components/GoogleCallback.js

import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUserInfo } from "@/redux-toolkit/slices/authSlice";
import apiClient from "@/lib/api-client"; // Adjust the import path as needed

const GoogleCallback = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get("token"); // Get the token from the URL

    if (token) {
      sessionStorage.setItem("token", token); // Store the access token
      // You can fetch user info if needed or use the token directly
      // e.g., fetching user data from your backend if you store user info in your db
      // Dispatch action to store user info in Redux
      navigate("/"); // Redirect to home page
    } else {
      console.error("No token found in URL.");
      navigate("/"); // Redirect to home if no token is present
    }
  }, [navigate, dispatch]);

  return null; // Optionally, return a loading indicator while processing
};

export default GoogleCallback;
