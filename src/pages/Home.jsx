import { motion } from "framer-motion";
import {
  FaBookOpen,
  FaGlobeAmericas,
  FaUserGraduate,
  FaQuoteRight,
  FaFlask,
  FaLaptopCode,
  FaChartLine,
  FaHeartbeat,
  FaLeaf,
  FaBalanceScale,
  FaFileUpload,
  FaSearch,
  FaCheckCircle,
  FaAward,
} from "react-icons/fa";
import Button from "../components/Button";
import SectionTitle from "../components/SectionTitle";
import PageTransition from "../components/PageTransition";

const stats = [
  { icon: <FaBookOpen />, value: "150+", label: "Published Journals" },
  { icon: <FaUserGraduate />, value: "25,000+", label: "Global Authors" },
  { icon: <FaGlobeAmericas />, value: "80+", label: "Countries Reached" },
  { icon: <FaAward />, value: "1.2M+", label: "Citations" },
];

const journals = [
  {
    icon: <FaFlask />,
    title: "Applied Sciences & Engineering",
    desc: "Peer-reviewed research covering emerging technologies, materials science and engineering innovation.",
  },
  {
    icon: <FaLaptopCode />,
    title: "Computer Science & IT",
    desc: "Cutting-edge studies in AI, data science, cybersecurity and software engineering.",
  },
  {
    icon: <FaHeartbeat />,
    title: "Medical & Health Sciences",
    desc: "Clinical research, public health studies and advances in medical practice.",
  },
  {
    icon: <FaChartLine />,
    title: "Management & Economics",
    desc: "Business strategy, finance, economics and organizational research.",
  },
  {
    icon: <FaLeaf />,
    title: "Environmental Sciences",
    desc: "Sustainability, climate research and environmental policy studies.",
  },
  {
    icon: <FaBalanceScale />,
    title: "Social Sciences & Humanities",
    desc: "Research spanning law, education, psychology and cultural studies.",
  },
];

const process = [
  {
    icon: <FaFileUpload />,
    step: "01",
    title: "Submit Manuscript",
    desc: "Authors submit their original research through our online submission portal.",
  },
  {
    icon: <FaSearch />,
    step: "02",
    title: "Peer Review",
    desc: "Manuscripts undergo rigorous double-blind peer review by subject experts.",
  },
  {
    icon: <FaCheckCircle />,
    step: "03",
    title: "Editorial Decision",
    desc: "Editors make an informed decision based on reviewer feedback and quality.",
  },
  {
    icon: <FaBookOpen />,
    step: "04",
    title: "Publication",
    desc: "Accepted papers are formatted, indexed and published with a DOI.",
  },
];

const features = [
  {
    title: "Rigorous Peer Review",
    desc: "Every submission is evaluated by qualified experts to ensure academic integrity.",
  },
  {
    title: "Fast Turnaround",
    desc: "Efficient editorial workflow ensures quick review and publication timelines.",
  },
  {
    title: "Global Indexing",
    desc: "Journals indexed across major international databases for maximum visibility.",
  },
  {
    title: "Open Access",
    desc: "Free and unrestricted access to published research for readers worldwide.",
  },
];

const testimonials = [
  {
    quote:
      "The review process was transparent and constructive. My paper reached a global audience within weeks of acceptance.",
    name: "Dr. Ananya Sharma",
    role: "Professor, Delhi University",
  },
  {
    quote:
      "Excellent editorial support and a smooth submission process. Highly recommended for young researchers.",
    name: "Dr. Michael Chen",
    role: "Research Fellow, NUS Singapore",
  },
  {
    quote:
      "Fast, professional and reliable. Yashika Publications helped my work gain the recognition it deserved.",
    name: "Dr. Fatima Noor",
    role: "Associate Professor, Cairo University",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" },
  }),
};

const Home = () => {
  return (
    <PageTransition>
      {/* HERO */}
      <section className="relative overflow-hidden bg-navy-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(15,181,186,0.25),transparent_50%)]" />
        <div className="container-x relative section-py flex flex-col items-center gap-10 text-center">
          <motion.span
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="rounded-full bg-teal-500/10 px-4 py-1.5 text-xs md:text-sm font-semibold tracking-wide text-teal-300"
          >
            International Peer-Reviewed Journals
          </motion.span>

          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={1}
            className="max-w-4xl font-heading text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl"
          >
            Empowering Global{" "}
            <span className="text-teal-400">Research Excellence</span>
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={2}
            className="max-w-2xl text-sm leading-relaxed text-navy-100/80 md:text-base"
          >
            Yashika Publications is a trusted platform for researchers, academics
            and students to publish high-quality, peer-reviewed work across
            multiple disciplines and reach a global scholarly community.
          </motion.p>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={3}
            className="flex flex-col gap-4 sm:flex-row"
          >
            <Button to="/contact" variant="primary">
              Submit Manuscript
            </Button>
            <Button to="/journals" variant="secondary">
              Explore Journals
            </Button>
          </motion.div>
        </div>

        {/* Stats bar */}
        <div className="relative border-t border-white/10 bg-navy-950/60 backdrop-blur">
          <div className="container-x grid grid-cols-2 gap-8 py-10 md:grid-cols-4">
            {stats.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="flex flex-col items-center text-center"
              >
                <div className="mb-2 text-2xl text-teal-400">{s.icon}</div>
                <p className="font-heading text-xl font-bold text-white md:text-2xl">
                  {s.value}
                </p>
                <p className="text-xs text-navy-200/70 md:text-sm">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR JOURNALS */}
      <section className="section-py bg-white">
        <div className="container-x">
          <SectionTitle
            tag="OUR JOURNALS"
            title="Explore Our Diverse Range of Journals"
            subtitle="We publish research across a broad spectrum of academic disciplines, connecting scholars with a worldwide readership."
          />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {journals.map((j, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="card group p-7"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-teal-50 text-2xl text-teal-500 transition-transform duration-300 group-hover:scale-110">
                  {j.icon}
                </div>
                <h3 className="mb-2 font-heading text-lg font-semibold text-navy-900">
                  {j.title}
                </h3>
                <p className="text-sm leading-relaxed text-navy-500">{j.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="section-py bg-navy-50">
        <div className="container-x grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-tag">WHY CHOOSE US</span>
            <h2 className="mt-3 font-heading text-2xl font-bold text-navy-900 sm:text-3xl md:text-4xl">
              Trusted Partner for Academic Publishing
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-navy-500 md:text-base">
              We are committed to advancing scholarly communication through
              ethical publishing practices, rigorous review standards and
              exceptional author support at every step.
            </p>

            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
              {features.map((f, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="flex items-start gap-3"
                >
                  <FaCheckCircle className="mt-1 shrink-0 text-teal-500" />
                  <div>
                    <h4 className="font-semibold text-navy-900">{f.title}</h4>
                    <p className="mt-1 text-sm text-navy-500">{f.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="rounded-2xl bg-navy-900 p-10 text-white shadow-card-hover">
              <FaQuoteRight className="mb-4 text-3xl text-teal-400" />
              <p className="text-lg leading-relaxed text-navy-100/90">
                "Our mission is to make quality research accessible to
                everyone, everywhere - bridging the gap between groundbreaking
                ideas and the global academic community."
              </p>
              <div className="mt-6 border-t border-white/10 pt-6">
                <p className="font-semibold">Editorial Board</p>
                <p className="text-sm text-navy-200/70">Yashika Publications</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* PUBLICATION PROCESS */}
      <section className="section-py bg-white">
        <div className="container-x">
          <SectionTitle
            tag="HOW IT WORKS"
            title="Our Simple Publication Process"
            subtitle="A streamlined, transparent workflow from manuscript submission to final publication."
          />
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="relative rounded-xl border border-navy-100 p-7 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-card-hover"
              >
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-amber-400 px-3 py-1 text-xs font-bold text-navy-900">
                  {p.step}
                </span>
                <div className="mx-auto mb-4 mt-3 flex h-14 w-14 items-center justify-center rounded-full bg-teal-50 text-2xl text-teal-500">
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

      {/* TESTIMONIALS */}
      <section className="section-py bg-navy-50">
        <div className="container-x">
          <SectionTitle
            tag="TESTIMONIALS"
            title="What Our Authors Say"
            subtitle="Feedback from researchers who have published with us."
          />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="card p-7"
              >
                <FaQuoteRight className="mb-4 text-2xl text-teal-500/40" />
                <p className="text-sm leading-relaxed text-navy-600">
                  {t.quote}
                </p>
                <div className="mt-6 border-t border-navy-100 pt-4">
                  <p className="font-semibold text-navy-900">{t.name}</p>
                  <p className="text-xs text-navy-400">{t.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="relative overflow-hidden bg-navy-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(245,166,35,0.15),transparent_50%)]" />
        <div className="container-x relative flex flex-col items-center gap-6 py-16 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl font-heading text-2xl font-bold text-white sm:text-3xl md:text-4xl"
          >
            Ready to Publish Your Research?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="max-w-xl text-sm text-navy-100/80 md:text-base"
          >
            Join thousands of researchers who trust Yashika Publications to
            showcase their work to the world.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Button to="/contact" variant="primary">
              Get Started Today
            </Button>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Home;
