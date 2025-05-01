"use client";
import { motion } from "framer-motion";
import { useState } from "react";

function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Logging in with:", formData);
    // TODO: Add your login logic here
  };

  return (
    <div className="w-full flex items-center justify-center  bg-[var(--bg-color)">
      <div className=" relative flex flex-col justify-center items-center max-w-xl w-full pt-12 px-2 z-0 ]">
        <motion.div
          className=" rounded-xl w-full p-8 shadow-2xl bg-[var(--container-color)] border border-gray-200 dark:border-gray-700"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <h2 className="text-3xl font-extrabold text-center bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
            Log in to Bugginator
          </h2>

          <form onSubmit={handleSubmit} className="mt-8 space-y-6">
            <div>
              <label className="block text-sm font-medium ">
                Email address
              </label>
              <input
                type="email"
                name="email"
                required
                className="mt-1 w-full rounded-md border px-4 py-2 bg-[#0000] text-[var(--primary-text-color)]  border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500 "
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="block text-sm font-medium">Password</label>
              <input
                type="password"
                name="password"
                required
                className="mt-1 w-full rounded-md border px-4 py-2 bg-[#0000] text-[var(--primary-text-color)]  border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
                value={formData.password}
                onChange={handleChange}
              />
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
