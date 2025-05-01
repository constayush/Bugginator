"use client";
import axios from "axios";
import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router";

function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });
 const [backendResponse, setBackendResponse] = useState("");
 const navigate = useNavigate();
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



  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); 
  
    try {
      const res = await axios.post("http://localhost:1234/user/login", formData);
      setBackendResponse(res.data.success);
      if (res.data.success) {
        navigate("/dashboard");
      }
    } catch (err) {
      console.error("Error while logging in:", err);
    }
  };

  return (<>

   {backendResponse?  (<> {navigate("/dashboard")}</>) : ( <div className="w-full flex items-center justify-center  ">
    <div className="absolute w-[40%] blur-[100px] overflow-hidden h-[40%] bg-gradient-to-r from-[#7dfce7]/20 via-[#ff8080]/20 to-[#b282ff]/20"></div>
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
  </div>)}   

    
   
 </> );
}

export default Login;
