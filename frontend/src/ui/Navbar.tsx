'use client'

import { useEffect, useState } from "react"
import { Link } from "react-router"
import ThemeToggle from "./ThemeToggleButton"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from 'lucide-react'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const toggleMenu = () => setIsOpen(!isOpen)

  const centerMenuItems = [
    { path: "/#features", label: "Features" },
    { path: "/#pricing", label: "Pricing" },
     {  path: "/#faq",label: "FAQ" },
  ]

  const authButtons = [
    { path: "/login", label: "Login", variant: "ghost" },
    { path: "/signup", label: "Sign Up", variant: "primary" },
  ]


  return (
    <>
      {/* Adaptive Navbar - Static initially, fixed on scroll */}
      <motion.nav
        initial={{ y: -100, opacity: 0,  }}
        animate={{ y: 0, opacity: 1, }}
        transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
        className={`z-50 w-full bg-transparent  ${scrolled ? "fixed top-0" : "static"}`}
      >
        <div className="max-w-[74.5rem] mx-auto ">
          <motion.div
            animate={{
              marginTop: scrolled ? "1.5rem" : "0rem",
              marginLeft: scrolled ? "50%" : "0%",
              marginRight: scrolled ? "0%" : "0%",
              x: scrolled ? "-50%" : "0%",
              maxWidth: scrolled ? "fit-content" : "100%",
            }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            className={`backdrop-blur-xl  ${
              scrolled
                ? "bg-[var(--navbar-bg-color)] backdrop-blur-2xl rounded-full px-8 py-4 shadow-lg shadow-black/10 dark:shadow-white/5"
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
                initial={{ fontSize: ".1rem ", filter: "blur(10px)" }}
                animate={{
                  fontSize: scrolled ? "1.125rem" : "1.275rem", filter: "blur(0px)",
                }}
                transition={{
                  duration: 1,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                className="font-bold bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)] bg-clip-text text-transparent"
              >
                BUGGINATOR
              </motion.a>

              {/* Desktop Menu */}
              <div className="hidden lg:flex items-center justify-between flex-1">
                {/* Center Navigation */}
                <div className="flex items-center gap-8 mx-auto">
                  {centerMenuItems.map((item, i) => (
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
                      <a
                        href={item.path}
                        className="font-medium transition-colors text-sm text-[var(--primary-text-color)] hover:scale-105 hover:text-[var(--gradient-start)] relative group"
                      >
                        {item.label}
                        <span className="absolute transition-all duration-300 -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)] group-hover:w-full"></span>
                      </a>
                    </motion.div>
                  ))}
                </div>

                {/* Right Side - Auth Buttons & Theme Toggle */}
                <div className="flex items-center gap-4">
                  {authButtons.map((item, i) => (
                    <motion.div
                      key={item.path}
                      initial={{ opacity: 0, filter: "blur(4px)" }}
                      animate={{ opacity: 1, filter: "blur(0px)" }}
                      transition={{
                        delay: (i + centerMenuItems.length) * 0.1 + 0.3,
                        duration: 0.6,
                        ease: [0.25, 0.1, 0.25, 1],
                      }}
                    >
                      {item.variant === "primary" ? (
                        <Link
                          to={item.path}
                          className="inline-flex whitespace-nowrap transition-colors
 items-center justify-center px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)] rounded-lg  hover:opacity-90 hover:scale-105 shadow-sm"
                        >
                          {item.label}
                        </Link>
                      ) : (
                        <Link
                          to={item.path}
                          className="inline-flex border ml-4 items-center justify-center px-4 py-2 text-sm font-medium text-[var(--primary-text-color)]  hover:bg-[var(--container-color)] rounded-lg hover:scale-105"
                        >
                          {item.label}
                        </Link>
                      )}
                    </motion.div>
                  ))}
                  
                  <motion.div
                    initial={{ opacity: 0, filter: "blur(4px)" }}
                    animate={{ opacity: 1, filter: "blur(0px)" }}
                    transition={{
                      delay: (authButtons.length + centerMenuItems.length) * 0.1 + 0.3,
                      duration: 0.6,
                      ease: [0.25, 0.1, 0.25, 1],
                    }}
                  >
                    <ThemeToggle />
                  </motion.div>
                </div>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={toggleMenu}
                className={`lg:hidden w-8 h-8 flex items-center justify-center text-[var(--primary-text-color)] hover:text-[var(--gradient-start)]`}
              >
                <motion.div animate={{ rotate: isOpen ? 90 : 0 }} transition={{ duration: 0.3, ease: "easeOut" }}>
                  {isOpen ? <X size={18} /> : <Menu size={18} />}
                </motion.div>
              </button>
            </div>
          </motion.div>
        </div>
      </motion.nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 md:static lg:hidden"
              onClick={toggleMenu}
            />
            
            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                duration: 0.5,
                ease: [0.25, 0.1, 0.25, 1],
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
                    className="text-2xl font-bold bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)] bg-clip-text text-transparent"
                  >
                    Bugginator
                  </motion.span>
                </div>

                {/* Menu Items */}
                <div className="space-y-6">
                  {/* Navigation Links */}
                  {centerMenuItems.map((item, i) => (
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
                      <a
                        href={item.path}
                        onClick={toggleMenu}
                        className="block transition-all text-xl font-light text-[var(--primary-text-color)] ease-out hover:translate-x-2 hover:text-[var(--gradient-start)]"
                      >
                        {item.label}
                      </a>
                    </motion.div>
                  ))}

                  {/* Auth Buttons */}
                  <div className="pt-6 border-t border-[var(--card-border-color)] space-y-4">
                    {authButtons.map((item, i) => (
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
                          delay: (i + centerMenuItems.length) * 0.1 + 0.2,
                          duration: 0.5,
                          ease: [0.25, 0.1, 0.25, 1],
                        }}
                      >
                        {item.variant === "primary" ? (
                          <Link
                            to={item.path}
                            onClick={toggleMenu}
                            className="block w-full text-center px-6 py-3 text-white bg-gradient-to-r transition-colors duration-300 from-[var(--gradient-start)] to-[var(--gradient-end)] hover:from-[var(--gradient-end)] hover:to-[var(--gradient-start)] rounded-lg font-medium hover:opacity-60"
                          >
                            {item.label}
                          </Link>
                        ) : (
                          <Link
                            to={item.path}
                            onClick={toggleMenu}
                            className="block transition-all rounded-lg text-center border-[var(--text-color)] bg-[#ffffff46] border-2 p-2 text-xl font-light text-[var(--primary-text-color)] hover:bg-[#ddb6f7a3] ease-out  "
                          >
                            {item.label}
                          </Link>
                        )}
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Footer */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.4 }}
                  className="mt-auto pt-8 border-t border-[var(--card-border-color)]"
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
