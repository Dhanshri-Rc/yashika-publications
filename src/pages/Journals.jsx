import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaFlask,
  FaLaptopCode,
  FaHeartbeat,
  FaChartLine,
  FaLeaf,
  FaBalanceScale,
  FaGraduationCap,
  FaSearch,
} from "react-icons/fa";
import SectionTitle from "../components/SectionTitle";
import Button from "../components/Button";
import PageTransition from "../components/PageTransition";

const categories = ["All", "Science & Engineering", "Medicine", "Business", "Social Sciences"];

const journals = [
  {
    icon: <FaFlask />,
    title: "International Journal of Applied Sciences",
    category: "Science & Engineering",
    issn: "ISSN: 2456-1234",
    freq: "Monthly",
    desc: "Covering materials science, mechanical & civil engineering, and applied physics research.",
  },
  {
    icon: <FaLaptopCode />,
    title: "Journal of Computer Science & AI",
    category: "Science & Engineering",
    issn: "ISSN: 2456-5678",
    freq: "Bi-Monthly",
    desc: "Focused on artificial intelligence, machine learning, data science and cybersecurity.",
  },
  {
    icon: <FaHeartbeat />,
    title: "International Journal of Medical Research",
    category: "Medicine",
    issn: "ISSN: 2456-9101",
    freq: "Monthly",
    desc: "Clinical studies, public health research and advances in medical technology.",
  },
  {
    icon: <FaChartLine />,
    title: "Journal of Business & Economics",
    category: "Business",
    issn: "ISSN: 2456-1122",
    freq: "Quarterly",
    desc: "Research on finance, marketing, entrepreneurship and global economic trends.",
  },
  {
    icon: <FaLeaf />,
    title: "Journal of Environmental Studies",
    category: "Science & Engineering",
    issn: "ISSN: 2456-3344",
    freq: "Quarterly",
    desc: "Sustainability, climate change and environmental policy research.",
  },
  {
    icon: <FaBalanceScale />,
    title: "International Journal of Social Sciences",
    category: "Social Sciences",
    issn: "ISSN: 2456-5566",
    freq: "Monthly",
    desc: "Research spanning sociology, law, education and cultural studies.",
  },
  {
    icon: <FaGraduationCap />,
    title: "Journal of Educational Research",
    category: "Social Sciences",
    issn: "ISSN: 2456-7788",
    freq: "Bi-Monthly",
    desc: "Pedagogy, curriculum development and educational psychology studies.",
  },
  {
    icon: <FaHeartbeat />,
    title: "Journal of Pharmaceutical Sciences",
    category: "Medicine",
    issn: "ISSN: 2456-9900",
    freq: "Monthly",
    desc: "Drug discovery, pharmacology and clinical pharmaceutical research.",
  },
];

const Journals = () => {
  const [active, setActive] = useState("All");
  const [query, setQuery] = useState("");

  const filtered = journals.filter((j) => {
    const matchesCategory = active === "All" || j.category === active;
    const matchesQuery = j.title.toLowerCase().includes(query.toLowerCase());
    return matchesCategory && matchesQuery;
  });

  return (
    <PageTransition>
      {/* HERO */}
      <section className="bg-navy-900 py-16 text-center md:py-20">
        <div className="container-x">
          <motion.span
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="section-tag"
          >
            OUR JOURNALS
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 font-heading text-3xl font-bold text-white sm:text-4xl md:text-5xl"
          >
            Explore Our Journal Portfolio
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mt-4 max-w-2xl text-sm text-navy-100/80 md:text-base"
          >
            150+ peer-reviewed journals spanning science, medicine, business
            and the social sciences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mx-auto mt-8 flex max-w-md items-center gap-2 rounded-md bg-white p-1.5 shadow-lg"
          >
            <FaSearch className="ml-3 text-navy-300" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search journals..."
              className="w-full bg-transparent px-2 py-2 text-sm text-navy-900 outline-none placeholder:text-navy-300"
            />
          </motion.div>
        </div>
      </section>

      {/* FILTER + GRID */}
      <section className="section-py bg-white">
        <div className="container-x">
          <div className="mb-10 flex flex-wrap justify-center gap-3">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 ${
                  active === c
                    ? "bg-teal-500 text-white shadow-md"
                    : "bg-navy-50 text-navy-600 hover:bg-teal-50 hover:text-teal-600"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((j, i) => (
              <motion.div
                key={j.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: (i % 3) * 0.08, duration: 0.5 }}
                className="card group flex flex-col p-7"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-teal-50 text-2xl text-teal-500 transition-transform duration-300 group-hover:scale-110">
                  {j.icon}
                </div>
                <h3 className="mb-2 font-heading text-lg font-semibold text-navy-900">
                  {j.title}
                </h3>
                <p className="mb-4 flex-1 text-sm leading-relaxed text-navy-500">
                  {j.desc}
                </p>
                <div className="mb-4 flex flex-wrap gap-2 text-xs text-navy-400">
                  <span className="rounded-full bg-navy-50 px-3 py-1">{j.issn}</span>
                  <span className="rounded-full bg-navy-50 px-3 py-1">{j.freq}</span>
                </div>
                <Button to="/contact" variant="outline" className="mt-auto w-full">
                  Submit to this Journal
                </Button>
              </motion.div>
            ))}
            {filtered.length === 0 && (
              <p className="col-span-full text-center text-navy-400">
                No journals found matching your search.
              </p>
            )}
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Journals;
