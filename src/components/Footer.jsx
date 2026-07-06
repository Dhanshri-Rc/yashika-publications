import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import logo from "../assets/logo.png";

const quickLinks = [
  { name: "About Us", path: "/about" },
  { name: "Authors", path: "/authors" },
  { name: "Journals", path: "/journals" },
  { name: "Reviewers", path: "/reviewers" },
];

const moreLinks = [
  { name: "Resources", path: "/resources" },
  { name: "Services", path: "/services" },
  { name: "Contact", path: "/contact" },
  { name: "Submit Manuscript", path: "/contact" },
];

const socials = [
  { icon: <FaFacebookF />, href: "https://facebook.com" },
  { icon: <FaTwitter />, href: "https://twitter.com" },
  { icon: <FaLinkedinIn />, href: "https://linkedin.com" },
  { icon: <FaYoutube />, href: "https://youtube.com" },
];

const Footer = () => {
  return (
    <footer className="bg-navy-950 text-white">
      <div className="container-x grid grid-cols-1 gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        {/* Brand */}
        <div>
          <img src={logo} alt="Yashika Publications" className="mb-4 h-14 w-auto object-contain brightness-0 invert" />
          <p className="text-sm leading-relaxed text-navy-200/80">
            Empowering global research by publishing high-quality, peer-reviewed
            journals across multiple disciplines for scholars and institutions
            worldwide.
          </p>
          <div className="mt-5 flex gap-3">
            {socials.map((s, i) => (
              <motion.a
                key={i}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-navy-800 text-sm text-teal-300 transition-colors duration-300 hover:bg-teal-500 hover:text-white"
              >
                {s.icon}
              </motion.a>
            ))}
          </div>
        </div>

        {/* Quick links */}
        <div>
          <h4 className="mb-5 text-base font-semibold text-white">Quick Links</h4>
          <ul className="space-y-3">
            {quickLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className="text-sm text-navy-200/80 transition-colors duration-300 hover:text-teal-300"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* More links */}
        <div>
          <h4 className="mb-5 text-base font-semibold text-white">Explore</h4>
          <ul className="space-y-3">
            {moreLinks.map((link, i) => (
              <li key={i}>
                <Link
                  to={link.path}
                  className="text-sm text-navy-200/80 transition-colors duration-300 hover:text-teal-300"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact info */}
        <div>
          <h4 className="mb-5 text-base font-semibold text-white">Get in Touch</h4>
          <ul className="space-y-4 text-sm text-navy-200/80">
            <li className="flex items-start gap-3">
              <FaMapMarkerAlt className="mt-1 shrink-0 text-teal-400" />
              <span>Sector 62, Noida, Uttar Pradesh, India</span>
            </li>
            <li className="flex items-center gap-3">
              <FaPhoneAlt className="shrink-0 text-teal-400" />
              <span>+91 98765 43210</span>
            </li>
            <li className="flex items-center gap-3">
              <FaEnvelope className="shrink-0 text-teal-400" />
              <span>info@yashikapublications.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col items-center justify-between gap-3 py-5 text-xs text-navy-300 sm:flex-row">
          <p>© {new Date().getFullYear()} Yashika Publications. All rights reserved.</p>
          <div className="flex gap-5">
            <Link to="/about" className="hover:text-teal-300">Privacy Policy</Link>
            <Link to="/about" className="hover:text-teal-300">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
