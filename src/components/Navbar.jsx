
import { useState } from "react";
import { useTheme } from "./ThemeProvider";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#education", label: "Education" },
    { href: "#projects", label: "Projects" },
    { href: "#extracurricular", label: "Beyond Work" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav className="fixed w-full z-50 bg-background text-foreground transition-colors duration-300 h-[80px] flex items-center">
      <div className="container mx-auto px-6 md:px-12 w-full">
        <div className="flex justify-between items-center w-full py-4">
          {/* Left: Logo SVG */}
          <a href="#" className="flex items-center py-2 ">
            <img
              src="/assets/logo1.svg"
              alt="Logo"
              className="h-16 w-auto" 
            />
          </a>



          {/* Right: Desktop Navigation Links */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-medium hover:text-[#e0f11f] transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile: Hamburger Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile: Dropdown Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden absolute top-[80px] left-0 right-0 bg-background border-b border-gray-200 shadow-lg overflow-hidden"
            >
              <div className="container mx-auto px-6">
                <div className="flex flex-col space-y-3 py-4">
                  {navLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={closeMenu}
                      className="py-2 font-medium hover:text-[#e0f11f] transition-colors duration-300"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>

            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </nav>
  );
}
