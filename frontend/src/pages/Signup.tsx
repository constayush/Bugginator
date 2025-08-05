import { motion } from "framer-motion";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import { useAuthStore } from "../store/useAuthStore";
import { toast } from "react-hot-toast";

function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:1234/auth/register",
        formData,
        { withCredentials: true }
      );

      if (res.data.success && res.data.user) {
        useAuthStore.getState().login(res.data.user);
        toast.success("Signed up successfully! Redirecting to dashboard...");

        setTimeout(() => {
          navigate("/dashboard");
        }, 1200);
      } else {
        toast.error("Something went wrong. Try again.");
      }
    } catch (err) {
      console.error("Signup error:", err);
      toast.error("Signup failed. Please try again.");
    }
  };

  return (
    <div className="w-full h-full flex items-center justify-center relative">
      <div className="absolute w-[40%] blur-[100px] overflow-hidden h-[40%] bg-gradient-to-r from-[#7dfce7]/20 via-[#ff8080]/20 to-[#b282ff]/20"></div>
      <div className="relative flex flex-col justify-center items-center max-w-xl w-full pt-12 px-2 z-0">
        <motion.div
          className="rounded-xl bg-[var(--container-color)] w-full p-8 shadow-2xl border border-gray-200 dark:border-gray-700"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ damping: 15, stiffness: 100, type: "spring" }}
        >
          <h2 className="text-3xl font-extrabold text-center bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
            Sign up for Bugginator
          </h2>

          <form onSubmit={handleSubmit} className="mt-8 space-y-6">
            <div>
              <label className="block text-sm font-medium">Full Name</label>
              <input
                type="text"
                name="name"
                required
                className="mt-1 w-full rounded-md border px-4 py-2 bg-[#0000] text-[var(--primary-text-color)] border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="block text-sm font-medium">Email address</label>
              <input
                type="email"
                name="email"
                required
                className="mt-1 w-full rounded-md border px-4 py-2 bg-[#0000] text-[var(--primary-text-color)] border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
                value={formData.email}
                onChange={handleChange}
                autoComplete="email"
              />
            </div>

            <div>
              <label className="block text-sm font-medium">Password</label>
              <input
                type="password"
                name="password"
                required
                autoComplete="new-password"
                className="mt-1 w-full rounded-md border px-4 py-2 bg-[#0000] text-[var(--primary-text-color)] border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
                value={formData.password}
                onChange={handleChange}
              />
            </div>

            <motion.button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-blue-600 hover:to-purple-600 !text-white font-semibold py-2 px-4 rounded-md shadow-md hover:opacity-80"
            >
              Sign Up
            </motion.button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}

export default Signup;
