
import { useEffect } from "react";
import ThemeToggle from "./ThemeToggleButton";
import { Link } from "react-router";
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
        <div className="navbar transition-all duration-500 ease  max-w-6xl px-6 w-full flex items-center justify-between">
          <a href='/'><h1 className="logo font-bold text-lg tracking-wider">BUGGINATOR</h1></a>
  
          <ul className="hidden md:flex gap-4">
            <Link className="hover:border-b-2   border-b-2 border-[#ddd0] hover:border-purple-500 transition duration-300 " to="/login">Login</Link>
            <Link className="hover:border-b-2   border-b-2 border-[#ddd0] hover:border-purple-500 transition duration-300 " to="/signup">Sign Up</Link>
            <Link className="hover:border-b-2   border-b-2 border-[#ddd0] hover:border-purple-500 transition duration-300 " to="/">Features</Link>
          </ul>
  
          <ul className="cta hidden md:flex gap-4 items-center">
            <ThemeToggle />
          </ul>
        </div>
      </nav>
    );
  }
  

export default Navbar;
