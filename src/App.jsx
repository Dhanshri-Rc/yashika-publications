import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Authors from "./pages/Authors";
import Journals from "./pages/Journals";
import Reviewers from "./pages/Reviewers";
import Resources from "./pages/Resources";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import ScrollToTop from "./components/ScrollToTop";
import SubmitYourPaper from "./pages/footerpages/SubmitYourPaper";
import ReviewProcess from "./pages/footerpages/ReviewProcess";
import FAQforAuthor from "./pages/footerpages/FAQforAuthor";
import Authorguideline from "./pages/footerpages/Authorguideline";
import PublicationEthics from "./pages/footerpages/PublicationEthics";
import OpenAccessPolicy from "./pages/footerpages/OpenAccessPolicy";
import ReviewersGuidelines from "./pages/footerpages/ReviewerGuidelines";
import BenefitsOfReviewers from "./pages/footerpages/BenefitsReveiwers";

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/authors" element={<Authors />} />
        <Route path="/journals" element={<Journals />} />
        <Route path="/reviewers" element={<Reviewers />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/submit-your-paper" element={<SubmitYourPaper />} />
        <Route path="/review-process" element={<ReviewProcess />} />
        <Route path="/faq-for-authors" element={<FAQforAuthor />} />
        <Route path="/author-guidelines" element={<Authorguideline />} />
        <Route path="/publication-ethics" element={<PublicationEthics />} />
        <Route path="/open-access-policy" element={<OpenAccessPolicy />} />
        <Route path="/author-guidelines" element={<ReviewersGuidelines />} />
        <Route path="/benefits-of-reviewers" element={<BenefitsOfReviewers />} />
        {/* Add more routes for other pages as needed */}
        {/* Fallback route - redirect unknown paths to Home content (SPA friendly) */}
        <Route path="*" element={<Home />} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <BrowserRouter>
      <div className="flex min-h-screen flex-col">
        <Navbar />
          <ScrollToTop />
        <main className="flex-1">
          <AnimatedRoutes />
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
