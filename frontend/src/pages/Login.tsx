"use client";

import axios from "axios";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { useAuthStore } from "../store/useAuthStore";
import toast from "react-hot-toast"; // ✅ added

function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    return () => setFormData({ email: "", password: "" });
  }, []);

  useEffect(() => {
    if (errorMsg) {
      const timeout = setTimeout(() => setErrorMsg(""), 6500);
      return () => clearTimeout(timeout);
    }
  }, [errorMsg]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setErrorMsg("");

      const res = await axios.post(
        "http://localhost:1234/auth/login",
        formData,
        { withCredentials: true }
      );

      if (res.data.success && res.data.user) {
        useAuthStore.getState().login(res.data.user);

        // ✅ Show toast before redirect
        toast.success("Redirecting to dashboard... 🚀");

        setTimeout(() => navigate("/dashboard"), 1200);
      } else {
        setErrorMsg(res.data.message || "Login failed");
      }
    } catch {
      setErrorMsg("Invalid email or password");
      console.error("Login Failed: 11");
    }
  };

  return (
    <div className="w-full flex items-center justify-center">
      <div className="absolute w-[40%] blur-[100px] overflow-hidden h-[40%] bg-gradient-to-r from-[#7dfce7]/20 via-[#ff8080]/20 to-[#b282ff]/20" />

      <div className="relative flex flex-col justify-center items-center max-w-xl w-full pt-12 px-2 z-0">
        <motion.div
          className="relative flex flex-col rounded-xl w-full p-8 shadow-2xl bg-[var(--container-color)] border border-gray-200 dark:border-gray-700"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ type: "spring", stiffness: 100, damping: 15 }}
        >
          {errorMsg && (
            <motion.div
              initial={{ opacity: 1, y: -20 }}
              animate={{ opacity: 0, y: 0 }}
              transition={{ type: "spring", delay: 5, duration: 4, stiffness: 100, damping: 15 }}
              className="absolute top-2 opacity-0 left-0 w-full bg-red-400/90 rounded-md text-white text-center py-2"
            >
              {errorMsg}
            </motion.div>
          )}

          <h2 className="text-3xl font-extrabold text-center bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
            Log in to Bugginator
          </h2>

          <form onSubmit={handleSubmit} className="mt-8 space-y-6">
            <div>
              <label className="block text-sm font-medium">Email address</label>
              <input
                type="email"
                name="email"
                autoComplete="email"
                required
                className="mt-1 w-full rounded-md border px-4 py-2 bg-[#0000] text-[var(--primary-text-color)] border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="block text-sm font-medium">Password</label>
              <input
                type="password"
                name="password"
                autoComplete="current-password"
                required
                className="mt-1 w-full rounded-md border px-4 py-2 bg-[#0000] text-[var(--primary-text-color)] border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
                value={formData.password}
                onChange={handleChange}
              />
              <p className="text-xs mt-1 underline cursor-pointer">forgot password?</p>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              type="submit"
              className="w-full bg-gradient-to-r from-purple-500 to-blue-500 !text-white font-semibold py-2 px-4 rounded-md shadow-md hover:opacity-90 transition-all"
            >
              Log In
            </motion.button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}

export default Login;
