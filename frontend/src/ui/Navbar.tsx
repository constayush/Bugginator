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
    const onScroll = () => setScrolled(window.scrollY > 100)
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
      {/* Adaptive Navbar - Static initially, fixed on scroll */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        className={`z-50 w-full transition-all duration-700 ease-out ${scrolled ? "fixed top-0" : "static"}`}
      >
        <div className="max-w-[73rem] mx-auto">
          <motion.div
            animate={{
              marginTop: scrolled ? "1.5rem" : "0rem",
              marginLeft: scrolled ? "50%" : "0%",
              marginRight: scrolled ? "0%" : "0%",
              x: scrolled ? "-50%" : "0%",
              maxWidth: scrolled ? "fit-content" : "100%",
            }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            className={`backdrop-blur-xl transition-all duration-700 ease-out ${
              scrolled
                ? "bg-[var(--navbar-bg-color)] rounded-full px-8 py-4 shadow-lg shadow-black/10 dark:shadow-white/5"
                : "bg-transparent px-6 py-6 md:px-8 md:py-8"
            }`}
            style={{
              boxShadow: scrolled
                ? "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04), inset 0 1px 0 rgba(255, 255, 255, 0.1)"
                : "none",
            }}
          >
            <div className={`${scrolled ? "flex items-center gap-8" : "flex justify-between items-center"}`}>
              {/* Logo */}
              <motion.a
                href="/"
                whileHover={{ scale: 1.05 }}
                animate={{
                  fontSize: scrolled ? "1.125rem" : "1.275rem", // text-lg vs text-2xl/3xl
                }}
                transition={{
                  duration: 0.7,
                  ease: [0.25, 0.1, 0.25, 1], // Smooth cubic-bezier, no spring
                }}
                className="font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent hidden md:block"
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
                      className={`font-medium text-sm transition-all duration-300 ease-out hover:scale-105`}
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
                className={`md:hidden w-8 h-8 flex items-center justify-center transition-colors duration-300 ${
                  scrolled
                    ? "text-gray-700 dark:text-white/80 hover:text-gray-900 dark:hover:text-white"
                    : "text-white/80 hover:text-white"
                }`}
              >
                <motion.div animate={{ rotate: isOpen ? 90 : 0 }} transition={{ duration: 0.3, ease: "easeOut" }}>
                  {isOpen ? <X size={18} /> : <Menu size={18} />}
                </motion.div>
              </button>
            </div>
          </motion.div>
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
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 md:hidden"
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
              className="fixed top-0 right-0 h-full w-72 bg-[var(--navbar-bg-color)] backdrop-blur-2xl z-50 md:hidden"
              style={{
                boxShadow: "-10px 0 25px -5px rgba(0, 0, 0, 0.1), -10px 0 10px -5px rgba(0, 0, 0, 0.04)",
              }}
            >
              <div className="flex flex-col h-full p-8">
                {/* Header */}
                <div className="flex items-center justify-between mb-12">
                  <motion.span
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2, duration: 0.4 }}
                    className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent"
                  >
                    Bugginator
                  </motion.span>
                
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
                        className="block text-xl  font-light transition-all duration-300 ease-out hover:translate-x-2"
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
                  className="mt-auto pt-8 border-t border-gray-200 dark:border-white/10"
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
