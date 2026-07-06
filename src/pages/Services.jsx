import { motion } from "framer-motion";
import {
  FaBookOpen,
  FaSearch,
  FaEdit,
  FaGlobeAmericas,
  FaFileInvoiceDollar,
  FaHeadset,
  FaCheck,
} from "react-icons/fa";
import SectionTitle from "../components/SectionTitle";
import Button from "../components/Button";
import PageTransition from "../components/PageTransition";

const services = [
  {
    icon: <FaBookOpen />,
    title: "Journal Publishing",
    desc: "End-to-end management of peer-reviewed journals across multiple academic disciplines.",
    points: ["Editorial management", "Peer review coordination", "Digital & print publishing"],
  },
  {
    icon: <FaSearch />,
    title: "Peer Review Management",
    desc: "Rigorous, transparent double-blind peer review conducted by qualified subject experts.",
    points: ["Expert reviewer network", "Timely turnaround", "Quality assurance"],
  },
  {
    icon: <FaEdit />,
    title: "Editing & Proofreading",
    desc: "Professional language editing and formatting services to polish your manuscript.",
    points: ["Language editing", "Technical formatting", "Plagiarism screening"],
  },
  {
    icon: <FaGlobeAmericas />,
    title: "Indexing & Visibility",
    desc: "We ensure your research is indexed across major international databases.",
    points: ["Global database indexing", "DOI assignment", "SEO-optimized listings"],
  },
  {
    icon: <FaFileInvoiceDollar />,
    title: "Transparent Pricing",
    desc: "No hidden charges - a simple, transparent fee structure payable only after acceptance.",
    points: ["No submission fee", "Pay after acceptance", "Clear fee breakdown"],
  },
  {
    icon: <FaHeadset />,
    title: "Author Support",
    desc: "Dedicated support team available to guide you through every stage of publishing.",
    points: ["24/7 email support", "Submission guidance", "Post-publication assistance"],
  },
];

const plans = [
  {
    name: "Standard",
    price: "$99",
    desc: "For individual researchers publishing a single paper.",
    features: ["Peer review", "Digital certificate", "Standard indexing", "Email support"],
  },
  {
    name: "Professional",
    price: "$199",
    desc: "For researchers who need faster review and more visibility.",
    features: [
      "Priority peer review",
      "Digital certificate & DOI",
      "Extended indexing",
      "Priority support",
    ],
    highlighted: true,
  },
  {
    name: "Institutional",
    price: "Custom",
    desc: "For universities and institutions with multiple submissions.",
    features: [
      "Dedicated account manager",
      "Bulk submission support",
      "Custom indexing plan",
      "Premium support",
    ],
  },
];

const Services = () => {
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
            OUR SERVICES
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 font-heading text-3xl font-bold text-white sm:text-4xl md:text-5xl"
          >
            Comprehensive Publishing Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mt-4 max-w-2xl text-sm text-navy-100/80 md:text-base"
          >
            From manuscript preparation to global indexing, we support
            researchers at every step of the publishing lifecycle.
          </motion.p>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="section-py bg-white">
        <div className="container-x">
          <SectionTitle
            tag="WHAT WE OFFER"
            title="Our Publishing Services"
          />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="card group p-7"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-teal-50 text-2xl text-teal-500 transition-transform duration-300 group-hover:scale-110">
                  {s.icon}
                </div>
                <h3 className="mb-2 font-heading text-lg font-semibold text-navy-900">
                  {s.title}
                </h3>
                <p className="mb-4 text-sm leading-relaxed text-navy-500">
                  {s.desc}
                </p>
                <ul className="space-y-2">
                  {s.points.map((p, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-navy-600">
                      <FaCheck className="shrink-0 text-teal-500" /> {p}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="section-py bg-navy-50">
        <div className="container-x">
          <SectionTitle
            tag="PRICING PLANS"
            title="Simple, Transparent Pricing"
            subtitle="Choose a plan that fits your publishing needs - no hidden fees, ever."
          />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {plans.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className={`relative flex flex-col rounded-xl p-8 transition-all duration-300 hover:-translate-y-2 ${
                  p.highlighted
                    ? "scale-105 bg-navy-900 text-white shadow-card-hover"
                    : "bg-white text-navy-900 shadow-card hover:shadow-card-hover"
                }`}
              >
                {p.highlighted && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-amber-400 px-4 py-1 text-xs font-bold text-navy-900">
                    MOST POPULAR
                  </span>
                )}
                <h3 className="font-heading text-lg font-semibold">{p.name}</h3>
                <p
                  className={`mt-4 text-3xl font-bold ${
                    p.highlighted ? "text-teal-300" : "text-teal-600"
                  }`}
                >
                  {p.price}
                </p>
                <p
                  className={`mt-2 text-sm ${
                    p.highlighted ? "text-navy-100/80" : "text-navy-500"
                  }`}
                >
                  {p.desc}
                </p>
                <ul className="mt-6 flex-1 space-y-3">
                  {p.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm">
                      <FaCheck
                        className={`shrink-0 ${
                          p.highlighted ? "text-teal-300" : "text-teal-500"
                        }`}
                      />
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <Button
                    to="/contact"
                    variant={p.highlighted ? "primary" : "outline"}
                    className="w-full"
                  >
                    Get Started
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Services;
