import { motion } from "framer-motion";
import {
  FaFileAlt,
  FaFileUpload,
  FaClipboardCheck,
  FaMoneyBillWave,
  FaCertificate,
  FaBookReader,
  FaDownload,
} from "react-icons/fa";
import SectionTitle from "../components/SectionTitle";
import Button from "../components/Button";
import PageTransition from "../components/PageTransition";

const guidelines = [
  {
    icon: <FaFileAlt />,
    title: "Manuscript Format",
    desc: "Prepare your paper in Word or LaTeX following our standard template with clear headings and sections.",
  },
  {
    icon: <FaFileUpload />,
    title: "Online Submission",
    desc: "Submit your manuscript through our secure online portal along with a cover letter.",
  },
  {
    icon: <FaClipboardCheck />,
    title: "Plagiarism Check",
    desc: "All submissions are screened for originality using industry-standard plagiarism detection tools.",
  },
  {
    icon: <FaMoneyBillWave />,
    title: "Publication Fee",
    desc: "Transparent, one-time processing fee payable only after acceptance - no hidden charges.",
  },
  {
    icon: <FaCertificate />,
    title: "Certificate & DOI",
    desc: "Every published author receives a certificate of publication and a unique DOI for their paper.",
  },
  {
    icon: <FaBookReader />,
    title: "Author Support",
    desc: "Dedicated editorial support to guide you through revisions and formatting requirements.",
  },
];

const benefits = [
  "Fast and transparent peer review process",
  "Global visibility through international indexing",
  "Affordable and transparent publication charges",
  "Dedicated author support team",
  "Digital certificate & DOI for every paper",
  "Open access for maximum readership",
];

const faqs = [
  {
    q: "How long does the review process take?",
    a: "Our standard review process takes 2-4 weeks depending on the journal and subject area.",
  },
  {
    q: "What are the manuscript formatting requirements?",
    a: "We provide a downloadable template covering fonts, headings, citations and referencing style.",
  },
  {
    q: "Is there a submission fee?",
    a: "No, submission is completely free. Charges apply only after your manuscript is accepted.",
  },
  {
    q: "Can I track my submission status?",
    a: "Yes, authors receive email updates at every stage and can also check status through our portal.",
  },
];

const Authors = () => {
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
            FOR AUTHORS
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 font-heading text-3xl font-bold text-white sm:text-4xl md:text-5xl"
          >
            Author Guidelines & Resources
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mt-4 max-w-2xl text-sm text-navy-100/80 md:text-base"
          >
            Everything you need to know to prepare, submit and publish your
            research with Yashika Publications.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex flex-col justify-center gap-4 sm:flex-row"
          >
            <Button to="/contact" variant="primary">
              Submit Manuscript
            </Button>
            <Button variant="secondary">
              <FaDownload className="text-sm" /> Download Template
            </Button>
          </motion.div>
        </div>
      </section>

      {/* GUIDELINES */}
      <section className="section-py bg-white">
        <div className="container-x">
          <SectionTitle
            tag="SUBMISSION GUIDELINES"
            title="Steps to Publish With Us"
            subtitle="Follow these guidelines to ensure a smooth submission and review experience."
          />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {guidelines.map((g, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="card group p-7"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-teal-50 text-2xl text-teal-500 transition-transform duration-300 group-hover:scale-110">
                  {g.icon}
                </div>
                <h3 className="mb-2 font-heading text-lg font-semibold text-navy-900">
                  {g.title}
                </h3>
                <p className="text-sm leading-relaxed text-navy-500">{g.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="section-py bg-navy-900">
        <div className="container-x grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-tag">AUTHOR BENEFITS</span>
            <h2 className="mt-3 font-heading text-2xl font-bold text-white sm:text-3xl md:text-4xl">
              Why Authors Choose Yashika Publications
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-navy-100/80 md:text-base">
              We provide comprehensive support and resources to help authors
              succeed at every stage of the publishing journey.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 gap-4 sm:grid-cols-2"
          >
            {benefits.map((b, i) => (
              <div
                key={i}
                className="flex items-start gap-3 rounded-lg bg-white/5 p-4"
              >
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-teal-400" />
                <p className="text-sm text-navy-100/90">{b}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-py bg-white">
        <div className="container-x">
          <SectionTitle
            tag="FAQ"
            title="Frequently Asked Questions"
          />
          <div className="mx-auto max-w-3xl space-y-4">
            {faqs.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="rounded-lg border border-navy-100 p-6 transition-shadow duration-300 hover:shadow-card"
              >
                <h3 className="mb-2 font-heading text-base font-semibold text-navy-900">
                  {f.q}
                </h3>
                <p className="text-sm leading-relaxed text-navy-500">{f.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Authors;
