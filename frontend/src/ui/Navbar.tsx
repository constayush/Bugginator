"use client"

import { useEffect, useState } from "react"
import { Link } from "react-router"
import ThemeToggle from "./ThemeToggleButton"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const toggleMenu = () => setIsOpen(!isOpen)

  const menuItems = [
    { path: "/", label: "Features" },
    { path: "/login", label: "Login" },
    { path: "/signup", label: "Signup" },
  ]

  return (
    <>
      {/* Adaptive Navbar - Full width initially, dock on scroll */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        className={`sm:fixed top-0 z-50 w-full transition-all duration-700 ease-out ${
          scrolled
            ? "top-6 left-1/2  -translate-x-1/2 max-w-fit backdrop-blur-xl bg-black/20 border border-white/10 rounded-full px-8 py-4"
            : "backdrop-blur-0 md:static bg-transparent px-6 py-6 md:px-8 md:py-8"
        }`}
      >
        <div
          className={`${scrolled ? "flex items-center gap-8" : "max-w-6xl mx-auto flex justify-between items-center"}`}
        >
          {/* Logo */}
          <motion.a
            href="/"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className={`font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent hidden md:block ${
              scrolled ? "text-lg" : "text-2xl md:text-3xl"
            } transition-all duration-700`}
          >
            BUGGINATOR
          </motion.a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            {menuItems.map((item, i) => (
              <motion.div
                key={item.path}
                initial={{ opacity: 0, filter: "blur(4px)" }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
                transition={{
                  delay: i * 0.1 + 0.3,
                  duration: 0.6,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
              >
                <Link
                  to={item.path}
                  className="text-white/80 hover:text-white text-sm font-medium transition-all duration-300 ease-out hover:scale-105"
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden w-8 h-8 flex items-center justify-center text-white/80 hover:text-white transition-colors duration-300"
          >
            <motion.div animate={{ rotate: isOpen ? 90 : 0 }} transition={{ duration: 0.3, ease: "easeOut" }}>
              {isOpen ? <X size={18} /> : <Menu size={18} />}
            </motion.div>
          </button>
        </div>
      </motion.nav>

      {/* Liquidy Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
              onClick={toggleMenu}
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                duration: 0.5,
                ease: [0.25, 0.1, 0.25, 1], // Smooth cubic-bezier
              }}
              className="fixed top-0 right-0 h-full w-72 bg-black/90 backdrop-blur-2xl z-50 md:hidden"
            >
              <div className="flex flex-col h-full p-8">
                {/* Header */}
                <div className="flex items-center justify-between mb-12">
                  <motion.span
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2, duration: 0.4 }}
                    className="text-lg font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent"
                  >
                    Menu
                  </motion.span>
                  <button
                    onClick={toggleMenu}
                    className="text-white/60 hover:text-white transition-colors duration-300"
                  >
                    <X size={20} />
                  </button>
                </div>

                {/* Menu Items */}
                <div className="space-y-6">
                  {menuItems.map((item, i) => (
                    <motion.div
                      key={item.path}
                      initial={{
                        opacity: 0,
                        x: 30,
                        filter: "blur(8px)",
                      }}
                      animate={{
                        opacity: 1,
                        x: 0,
                        filter: "blur(0px)",
                      }}
                      exit={{
                        opacity: 0,
                        x: 30,
                        filter: "blur(8px)",
                      }}
                      transition={{
                        delay: i * 0.1 + 0.1,
                        duration: 0.5,
                        ease: [0.25, 0.1, 0.25, 1],
                      }}
                    >
                      <Link
                        to={item.path}
                        onClick={toggleMenu}
                        className="block text-xl text-white/80 hover:text-white font-light transition-all duration-300 ease-out hover:translate-x-2"
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  ))}
                </div>

                {/* Footer */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.4 }}
                  className="mt-auto pt-8 border-t border-white/10"
                >
                  <ThemeToggle />
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar
