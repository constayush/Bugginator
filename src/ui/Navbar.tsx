
import { useEffect } from "react";
import ThemeToggle from "./ThemeToggleButton";
function Navbar() {

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      }, []);
    
      const handleScroll = () => {
        const navbar = document.querySelector(".navbar");
        if (navbar) {
          navbar.classList.toggle("scrolled-nav", window.scrollY > 10);
        }
      };


    return (
      <nav className="sticky top-0 z-50  w-full flex justify-center items-center py-12">
        <div className="navbar transition-all duration-500 ease  max-w-6xl w-full flex items-center justify-between">
          <h1 className="logo font-bold text-lg">BUGGINATOR</h1>
  
          <ul className="hidden md:flex gap-4">
            <li>Home</li>
            <li>Features</li>
            <li>Contact</li>
          </ul>
  
          <ul className="cta hidden md:flex gap-4 items-center">
            <button className="border rounded-lg p-2">Sign in</button>
            <button className="border rounded-lg p-2">Login</button>
            <ThemeToggle />
          </ul>
        </div>
      </nav>
    );
  }
  

export default Navbar;
