import { motion } from "framer-motion";
import {
  FaFileDownload,
  FaFilePdf,
  FaFileWord,
  FaVideo,
  FaQuestionCircle,
  FaBookOpen,
  FaGavel,
  FaShieldAlt,
} from "react-icons/fa";
import SectionTitle from "../components/SectionTitle";
import Button from "../components/Button";
import PageTransition from "../components/PageTransition";

const downloads = [
  { icon: <FaFileWord />, title: "Manuscript Template", type: "DOCX - 45 KB" },
  { icon: <FaFilePdf />, title: "Author Guidelines", type: "PDF - 210 KB" },
  { icon: <FaFilePdf />, title: "Reference Style Guide", type: "PDF - 130 KB" },
  { icon: <FaFileWord />, title: "Copyright Transfer Form", type: "DOCX - 60 KB" },
];

const policies = [
  {
    icon: <FaShieldAlt />,
    title: "Peer Review Policy",
    desc: "Our double-blind peer review process ensures unbiased, high-quality evaluation of every submission.",
  },
  {
    icon: <FaGavel />,
    title: "Publication Ethics",
    desc: "We follow COPE guidelines to maintain integrity, prevent misconduct and ensure ethical publishing.",
  },
  {
    icon: <FaBookOpen />,
    title: "Open Access Policy",
    desc: "All published articles are freely accessible, maximizing research visibility and impact.",
  },
  {
    icon: <FaFileDownload />,
    title: "Archiving Policy",
    desc: "Published content is permanently archived to ensure long-term accessibility.",
  },
];

const videos = [
  { title: "How to Submit Your Manuscript", duration: "4:32" },
  { title: "Understanding the Peer Review Process", duration: "6:15" },
  { title: "Formatting Your Paper Correctly", duration: "5:08" },
];

const Resources = () => {
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
            RESOURCES
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 font-heading text-3xl font-bold text-white sm:text-4xl md:text-5xl"
          >
            Helpful Resources for Authors
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mt-4 max-w-2xl text-sm text-navy-100/80 md:text-base"
          >
            Templates, guides and policies to support you throughout your
            publishing journey.
          </motion.p>
        </div>
      </section>

      {/* DOWNLOADS */}
      <section className="section-py bg-white">
        <div className="container-x">
          <SectionTitle
            tag="DOWNLOADS"
            title="Templates & Guides"
            subtitle="Download the resources you need to prepare a submission-ready manuscript."
          />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {downloads.map((d, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="card group flex flex-col items-center gap-4 p-7 text-center"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-teal-50 text-2xl text-teal-500 transition-transform duration-300 group-hover:scale-110">
                  {d.icon}
                </div>
                <h3 className="font-heading text-base font-semibold text-navy-900">
                  {d.title}
                </h3>
                <p className="text-xs text-navy-400">{d.type}</p>
                <Button variant="outline" className="w-full">
                  <FaFileDownload className="text-sm" /> Download
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* POLICIES */}
      <section className="section-py bg-navy-50">
        <div className="container-x">
          <SectionTitle
            tag="POLICIES"
            title="Publishing Policies"
            subtitle="Understand the standards and ethics that govern our publication process."
          />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {policies.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="card group p-7"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-teal-50 text-2xl text-teal-500 transition-transform duration-300 group-hover:scale-110">
                  {p.icon}
                </div>
                <h3 className="mb-2 font-heading text-base font-semibold text-navy-900">
                  {p.title}
                </h3>
                <p className="text-sm leading-relaxed text-navy-500">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* VIDEO TUTORIALS */}
      <section className="section-py bg-white">
        <div className="container-x">
          <SectionTitle
            tag="VIDEO TUTORIALS"
            title="Learn With Step-by-Step Videos"
          />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {videos.map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="card group overflow-hidden"
              >
                <div className="relative flex h-44 items-center justify-center bg-navy-900">
                  <motion.div
                    whileHover={{ scale: 1.15 }}
                    className="flex h-14 w-14 items-center justify-center rounded-full bg-teal-500 text-white shadow-lg"
                  >
                    <FaVideo />
                  </motion.div>
                  <span className="absolute bottom-3 right-3 rounded bg-black/60 px-2 py-1 text-xs text-white">
                    {v.duration}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-heading text-base font-semibold text-navy-900">
                    {v.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ CTA */}
      <section className="section-py bg-navy-50">
        <div className="container-x flex flex-col items-center gap-6 text-center">
          <FaQuestionCircle className="text-4xl text-teal-500" />
          <h2 className="font-heading text-2xl font-bold text-navy-900 md:text-3xl">
            Still Have Questions?
          </h2>
          <p className="max-w-xl text-sm text-navy-500 md:text-base">
            Our support team is ready to help you with any questions regarding
            submission, review or publication.
          </p>
          <Button to="/contact" variant="primary">
            Contact Support
          </Button>
        </div>
      </section>
    </PageTransition>
  );
};

export default Resources;
