"use client"

import { useEffect, useState } from "react"
import { Sun, Moon } from "lucide-react"
import { motion } from "framer-motion"

function ThemeToggle() {
  const [theme, setTheme] = useState("light")

  useEffect(() => {
    const root = document.documentElement
    root.classList.toggle("dark", theme === "dark")
  }, [theme])

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"))
  }

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative w-14 h-7 rounded-full p-0.5 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
      style={{
        backgroundColor: theme === "dark" ? "#374151" : "#e5e7eb",
      }}
      whileTap={{ scale: 0.95 }}
      whileHover={{ scale: 1.05 }}
    >
      {/* Background gradient overlay */}
      <div
        className="absolute inset-0 rounded-full opacity-50"
        style={{
          background:
            theme === "dark" ? "linear-gradient(45deg, #4f46e5, #7c3aed)" : "linear-gradient(45deg, #fbbf24, #f59e0b)",
        }}
      />

      {/* Sliding indicator */}
      <motion.div
        className="relative w-6 h-6 rounded-full shadow-lg flex items-center justify-center z-10"
        style={{
          backgroundColor: theme === "dark" ? "#1f2937" : "#ffffff",
        }}
        animate={{
          x: theme === "dark" ? 28 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 30,
          mass: 0.8,
        }}
      >
        {/* Icon with rotation animation */}
        <motion.div
          key={theme}
          initial={{ rotate: -180, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          exit={{ rotate: 180, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {theme === "dark" ? (
            <Moon size={14} className="text-blue-400" />
          ) : (
            <Sun size={14} className="text-amber-500" />
          )}
        </motion.div>
      </motion.div>

      {/* Subtle glow effect */}
      <motion.div
        className="absolute inset-0 rounded-full"
        style={{
          boxShadow: theme === "dark" ? "0 0 20px rgba(59, 130, 246, 0.3)" : "0 0 20px rgba(245, 158, 11, 0.3)",
        }}
        animate={{
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
    </motion.button>
  )
}

export default ThemeToggle
