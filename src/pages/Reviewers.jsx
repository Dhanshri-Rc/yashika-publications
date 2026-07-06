import { motion } from "framer-motion";
import {
  FaUserCheck,
  FaClipboardList,
  FaCommentDots,
  FaCertificate,
  FaGraduationCap,
  FaClock,
  FaGlobe,
  FaAward,
} from "react-icons/fa";
import SectionTitle from "../components/SectionTitle";
import Button from "../components/Button";
import PageTransition from "../components/PageTransition";

const responsibilities = [
  {
    icon: <FaClipboardList />,
    title: "Evaluate Manuscripts",
    desc: "Assess submitted research for originality, methodology and scientific merit.",
  },
  {
    icon: <FaCommentDots />,
    title: "Provide Constructive Feedback",
    desc: "Offer clear, actionable feedback to help authors strengthen their manuscripts.",
  },
  {
    icon: <FaClock />,
    title: "Timely Reviews",
    desc: "Complete reviews within the agreed timeline to keep the publication process moving.",
  },
  {
    icon: <FaUserCheck />,
    title: "Maintain Confidentiality",
    desc: "Treat all manuscripts under review as strictly confidential documents.",
  },
];

const benefits = [
  { icon: <FaCertificate />, label: "Reviewer Certificate" },
  { icon: <FaGraduationCap />, label: "Professional Recognition" },
  { icon: <FaGlobe />, label: "Global Networking" },
  { icon: <FaAward />, label: "Editorial Board Opportunities" },
];

const criteria = [
  "PhD or equivalent research experience in relevant field",
  "Minimum 3 published research papers in reputed journals",
  "Strong understanding of research methodology & ethics",
  "Ability to provide timely, constructive feedback",
];

const Reviewers = () => {
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
            FOR REVIEWERS
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 font-heading text-3xl font-bold text-white sm:text-4xl md:text-5xl"
          >
            Join Our Reviewer Panel
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mt-4 max-w-2xl text-sm text-navy-100/80 md:text-base"
          >
            Help shape the future of academic research by joining our global
            community of expert peer reviewers.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8"
          >
            <Button to="/contact" variant="primary">
              Apply to Become a Reviewer
            </Button>
          </motion.div>
        </div>
      </section>

      {/* RESPONSIBILITIES */}
      <section className="section-py bg-white">
        <div className="container-x">
          <SectionTitle
            tag="RESPONSIBILITIES"
            title="What Reviewers Do"
            subtitle="Reviewers play a vital role in maintaining the quality and integrity of published research."
          />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {responsibilities.map((r, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="card group p-7 text-center"
              >
                <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-teal-50 text-2xl text-teal-500 transition-transform duration-300 group-hover:scale-110">
                  {r.icon}
                </div>
                <h3 className="mb-2 font-heading text-base font-semibold text-navy-900">
                  {r.title}
                </h3>
                <p className="text-sm leading-relaxed text-navy-500">{r.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ELIGIBILITY */}
      <section className="section-py bg-navy-50">
        <div className="container-x grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-tag">ELIGIBILITY CRITERIA</span>
            <h2 className="mt-3 font-heading text-2xl font-bold text-navy-900 sm:text-3xl md:text-4xl">
              Who Can Become a Reviewer?
            </h2>
            <ul className="mt-6 space-y-4">
              {criteria.map((c, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-teal-500" />
                  <span className="text-sm leading-relaxed text-navy-600 md:text-base">
                    {c}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-5"
          >
            {benefits.map((b, i) => (
              <div
                key={i}
                className="card flex flex-col items-center gap-3 p-7 text-center"
              >
                <div className="text-3xl text-teal-500">{b.icon}</div>
                <p className="text-sm font-semibold text-navy-900">{b.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-py bg-navy-900 text-center">
        <div className="container-x flex flex-col items-center gap-6">
          <SectionTitle
            title="Ready to Contribute to Global Research?"
            subtitle="Apply today and become part of our trusted reviewer community."
            light
          />
          <Button to="/contact" variant="primary">
            Apply Now
          </Button>
        </div>
      </section>
    </PageTransition>
  );
};

export default Reviewers;
