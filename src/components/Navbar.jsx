import { useState, useEffect } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";
import logo from "../assets/logo2.png";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Authors", path: "/authors" },
  { name: "Journals", path: "/journals" },
  { name: "Reviewers", path: "/reviewers" },
  { name: "Resources", path: "/resources" },
  { name: "Services", path: "/services" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`sticky top-0 z-50 w-full bg-navy-900 transition-shadow duration-300 ${
        scrolled ? "shadow-lg" : ""
      }`}
    >
      <nav className="container-x flex h-[70px] items-center justify-between">
        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-2 shrink-0">
          <img src={logo} alt="Yashika Publications" className="h-12 w-auto object-contain md:h-10" />
        </NavLink>

        {/* Desktop nav links */}
        <div className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === "/"}
              className={({ isActive }) =>
                `nav-link ${isActive ? "nav-link-active" : ""}`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>

        {/* CTA button (desktop) */}
        <div className="hidden lg:block">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/contact"
              className="rounded-md bg-teal-500 px-5 py-2.5 text-sm font-semibold text-white shadow-md transition-colors duration-300 hover:bg-teal-600"
            >
              Submit Manuscript
            </Link>
          </motion.div>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="text-white lg:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <HiX size={30} /> : <HiMenu size={30} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden bg-navy-800 lg:hidden"
          >
            <div className="container-x flex flex-col gap-1 py-4">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  end={item.path === "/"}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `rounded-md px-3 py-3 text-sm font-medium transition-colors duration-300 ${
                      isActive
                        ? "bg-navy-700 text-teal-300"
                        : "text-white/90 hover:bg-navy-700 hover:text-teal-300"
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ))}
              <NavLink
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="mt-2 rounded-md bg-teal-500 px-4 py-3 text-center text-sm font-semibold text-white transition-colors duration-300 hover:bg-teal-600"
              >
                Submit Manuscript
              </NavLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
