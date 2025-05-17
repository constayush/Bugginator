"use client";

import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import { motion } from "framer-motion";

function ThemeToggle() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", theme === "dark");
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <button
      onClick={toggleTheme}
      className="flex items-center gap-3 text-sm md:text-base px-3 py-2 rounded-md 
                 transition "
    >
      <div className="relative w-16 h-8 bg-[#8c00ff3e] rounded-full flex items-center px-1">
        <motion.div
          layout
          className="w-6 h-6 bg-[var(--bg-color)] rounded-full shadow-md flex justify-center items-center"
          animate={{ x: theme === "dark" ? 30 : 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >  {theme === "dark" ? <Moon className="text-[var(--primary-text-color)] " size={20} /> : <Sun className="text-[var(--primary-text-color)]" size={20} />}</motion.div>
      </div>
      <span className="hidden md:inline">
        {theme === "dark" ? "Dark Mode" : "Light Mode"}
      </span>
    </button>
  );
}

export default ThemeToggle;
