
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
        <div className="navbar transition-all duration-500 ease  max-w-6xl w-full flex items-center justify-between">
          <a href='/'><h1 className="logo font-bold text-lg">BUGGINATOR</h1></a>
  
          <ul className="hidden md:flex gap-4">
            <Link className="hover:border-b-2   border-b-2 border-[#ddd0] hover:border-purple-500 transition duration-500 " to="/">Home</Link>
            <Link className="hover:border-b-2   border-b-2 border-[#ddd0] hover:border-purple-500 transition duration-500 " to="/">Features</Link>
            <Link className="hover:border-b-2   border-b-2 border-[#ddd0] hover:border-purple-500 transition duration-500 " to="/">Contact</Link>
          </ul>
  
          <ul className="cta hidden md:flex gap-4 items-center">
           <Link className='' to='/signup'><button className="border border-white rounded-lg hover:bg-[#ffffff28] hover:underline hover:font-bold underline-offset-2  transition-all w-full h-full p-2">Sign Up</button></Link>
           <Link className='' to='/login'> <button className="border border-white rounded-lg hover:bg-[#ffffff28] hover:underline hover:font-bold underline-offset-2  transition-all w-full h-full p-2">Login    </button></Link>
            <ThemeToggle />
          </ul>
        </div>
      </nav>
    );
  }
  

export default Navbar;
