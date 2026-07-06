import { motion } from "framer-motion";
import {
  FaBullseye,
  FaEye,
  FaHandshake,
  FaAward,
  FaUsers,
  FaGlobe,
} from "react-icons/fa";
import SectionTitle from "../components/SectionTitle";
import Button from "../components/Button";
import PageTransition from "../components/PageTransition";

const values = [
  {
    icon: <FaBullseye />,
    title: "Our Mission",
    desc: "To democratize access to quality research by providing a transparent, ethical and efficient publishing platform for scholars worldwide.",
  },
  {
    icon: <FaEye />,
    title: "Our Vision",
    desc: "To become the most trusted global publisher, recognized for advancing knowledge and fostering academic collaboration across borders.",
  },
  {
    icon: <FaHandshake />,
    title: "Our Values",
    desc: "Integrity, transparency and academic excellence guide everything we do - from peer review to final publication.",
  },
];

const milestones = [
  { year: "2015", text: "Yashika Publications founded with 3 journals." },
  { year: "2018", text: "Expanded to 50+ peer-reviewed journals globally." },
  { year: "2021", text: "Crossed 15,000 published research papers." },
  { year: "2024", text: "Serving authors across 80+ countries." },
];

const team = [
  { name: "Dr. Rajesh Kumar", role: "Editor-in-Chief" },
  { name: "Dr. Sarah Williams", role: "Managing Editor" },
  { name: "Dr. Amit Verma", role: "Head of Peer Review" },
  { name: "Dr. Lisa Chen", role: "Publications Director" },
];

const About = () => {
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
            ABOUT US
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 font-heading text-3xl font-bold text-white sm:text-4xl md:text-5xl"
          >
            Advancing Knowledge Since 2015
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mt-4 max-w-2xl text-sm text-navy-100/80 md:text-base"
          >
            Yashika Publications is dedicated to fostering academic excellence
            through ethical, high-quality scholarly publishing.
          </motion.p>
        </div>
      </section>

      {/* STORY */}
      <section className="section-py bg-white">
        <div className="container-x grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-tag">OUR STORY</span>
            <h2 className="mt-3 font-heading text-2xl font-bold text-navy-900 sm:text-3xl md:text-4xl">
              A Decade of Empowering Researchers
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-navy-500 md:text-base">
              Founded in 2015, Yashika Publications began with a simple goal:
              to make scholarly publishing accessible, transparent and
              rigorous. What started as a small platform for a handful of
              journals has grown into a trusted global publisher serving tens
              of thousands of authors.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-navy-500 md:text-base">
              Today, we support researchers across engineering, medicine,
              social sciences and the humanities - ensuring every submission
              is reviewed with academic integrity and published with global
              visibility.
            </p>
            <div className="mt-6">
              <Button to="/contact" variant="outline">
                Get in Touch
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-5"
          >
            {[
              { icon: <FaAward />, label: "9+ Years Experience" },
              { icon: <FaUsers />, label: "25,000+ Authors" },
              { icon: <FaGlobe />, label: "80+ Countries" },
              { icon: <FaHandshake />, label: "150+ Journals" },
            ].map((item, i) => (
              <div
                key={i}
                className="card flex flex-col items-center gap-3 p-6 text-center"
              >
                <div className="text-3xl text-teal-500">{item.icon}</div>
                <p className="text-sm font-semibold text-navy-900">
                  {item.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* MISSION / VISION / VALUES */}
      <section className="section-py bg-navy-50">
        <div className="container-x">
          <SectionTitle
            tag="WHAT DRIVES US"
            title="Mission, Vision & Values"
            subtitle="The principles that shape every decision we make as a publisher."
          />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {values.map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="card p-8 text-center"
              >
                <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-teal-50 text-3xl text-teal-500">
                  {v.icon}
                </div>
                <h3 className="mb-3 font-heading text-lg font-semibold text-navy-900">
                  {v.title}
                </h3>
                <p className="text-sm leading-relaxed text-navy-500">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* MILESTONES */}
      <section className="section-py bg-white">
        <div className="container-x">
          <SectionTitle
            tag="OUR JOURNEY"
            title="Milestones Along the Way"
          />
          <div className="mx-auto max-w-3xl">
            {milestones.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="relative flex gap-6 pb-10 last:pb-0"
              >
                <div className="flex flex-col items-center">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-navy-900 text-sm font-bold text-teal-300">
                    {m.year}
                  </span>
                  {i !== milestones.length - 1 && (
                    <span className="mt-2 h-full w-px flex-1 bg-navy-100" />
                  )}
                </div>
                <p className="pt-3 text-sm leading-relaxed text-navy-600 md:text-base">
                  {m.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="section-py bg-navy-50">
        <div className="container-x">
          <SectionTitle
            tag="LEADERSHIP"
            title="Meet Our Editorial Team"
            subtitle="Experienced academics and editors ensuring the highest publishing standards."
          />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="card p-7 text-center"
              >
                <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-navy-900 text-2xl font-bold text-teal-300">
                  {t.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <h3 className="font-heading text-base font-semibold text-navy-900">
                  {t.name}
                </h3>
                <p className="text-sm text-teal-600">{t.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default About;
