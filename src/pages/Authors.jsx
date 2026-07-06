import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FiFileText,
  FiUsers,
  FiMessageSquare,
  FiBookOpen,
  FiHelpCircle,
  FiAward,
  FiGlobe,
  FiShield,
  FiRefreshCw,
  FiChevronRight,
  FiSend,
} from "react-icons/fi";
import {
  FaGoogle,
} from "react-icons/fa";
import PageTransition from "../components/PageTransition";

const authorCards = [
  {
    icon: <FiFileText />,
    title: "Easy Submission",
    desc: "Simple and user-friendly submission system.",
  },
  {
    icon: <FiUsers />,
    title: "Guidelines & Policies",
    desc: "Clear author guidelines and publication policies.",
  },
  {
    icon: <FiMessageSquare />,
    title: "Track Your Paper",
    desc: "Stay updated on your manuscript status.",
  },
  {
    icon: <FiBookOpen />,
    title: "Prepare Your Paper",
    desc: "Access templates, checklists and formatting resources.",
  },
  {
    icon: <FiHelpCircle />,
    title: "Get Support",
    desc: "Our team is here to help you at every step.",
  },
  {
    icon: <FiAward />,
    title: "Grow Your Impact",
    desc: "Maximize visibility and citations for your work.",
  },
];

const resources = [
  "Author Guidelines",
  "Formatting & Style Guide",
  "Publication Ethics",
  "Frequently Asked Questions",
  "Paper Templates",
  "Plagiarism Policy",
  "Copyright Policy",
  "Open Access Policy",
];

const indexes = ["Scopus", "DOAJ", "Google Scholar", "Crossref", "Dimensions", "ROAD"];

const Authors = () => {
  return (
    <PageTransition>
      <main className="overflow-hidden bg-white text-[#061f5c]">
        {/* HERO */}
        <section
          className="relative min-h-[380px] bg-cover bg-center px-4 py-8 sm:px-8 lg:px-12"
          style={{
            backgroundImage:
              "linear-gradient(90deg, rgba(0,43,105,.98) 0%, rgba(0,55,130,.9) 42%, rgba(0,55,130,.12) 100%), url('https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1600&q=80')",
          }}
        >
          <div className="mx-auto max-w-[1280px]">
            <nav className="flex items-center gap-2 text-xs text-white/80">
              <Link to="/" className="hover:text-[#ff7a1a]">Home</Link>
              <span>›</span>
              <span>For Authors</span>
            </nav>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-8 text-[44px] font-extrabold leading-tight text-white sm:text-[56px]"
            >
              For Authors
            </motion.h1>

            <div className="mt-3 h-[3px] w-28 bg-[#ff7a1a]" />

            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mt-5 max-w-[420px] text-[22px] font-extrabold leading-snug text-white"
            >
              We’re here to support every step of your publishing journey.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-5 max-w-[455px] text-sm font-medium leading-6 text-white/90"
            >
              Yashika Publications is committed to helping researchers share their
              work with the world through a smooth, fair, and transparent
              publishing experience.
            </motion.p>
          </div>
        </section>

        {/* AUTHOR CARDS */}
        <section className="px-4 py-10 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-[1280px] text-center">
            <h2 className="text-[26px] font-extrabold text-[#061f5c]">
              Everything You Need, All in One Place
            </h2>
            <div className="mx-auto mt-2 h-[2px] w-12 bg-[#ff7a1a]" />

            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-6">
              {authorCards.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  whileHover={{ y: -10, scale: 1.03 }}
                  className="group rounded-[10px] border border-[#dce4ef] bg-white px-5 py-7 shadow-sm transition hover:shadow-xl"
                >
                  <motion.div
                    whileHover={{ rotate: -8, scale: 1.12 }}
                    className="mx-auto flex h-[58px] w-[58px] items-center justify-center rounded-full bg-[#0646b4] text-[28px] text-white"
                  >
                    {item.icon}
                  </motion.div>

                  <h3 className="mt-5 text-[13px] font-extrabold text-[#061f5c]">
                    {item.title}
                  </h3>
                  <p className="mx-auto mt-3 max-w-[130px] text-[12px] font-medium leading-5 text-black">
                    {item.desc}
                  </p>
                  <div className="mx-auto mt-5 h-[3px] w-9 bg-[#0646b4]" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* PLATFORM + RESOURCES */}
        <section className="bg-[#f4f8ff] px-4 py-10 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-[1280px] gap-8 lg:grid-cols-[1fr_1.2fr]">
            <motion.div
              initial={{ opacity: 0, x: -35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-xl bg-[#003b91] p-7 text-white shadow-xl"
            >
              <h2 className="text-xl font-extrabold">Your Research. Our Global Platform.</h2>

              <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-3">
                {[
                  [<FiGlobe />, "100+", "Countries Reached"],
                  [<FiUsers />, "200+", "Editorial Experts"],
                  [<FiFileText />, "5", "New Journals in Emerging Tech"],
                  [<FiAward />, "0%", "Author Charges For Quality Publications"],
                  [<FiShield />, "100%", "Ethical & Transparent Publishing"],
                  [<FiRefreshCw />, "Fast", "Review & Publication"],
                ].map((s, i) => (
                  <motion.div key={i} whileHover={{ y: -6 }} className="text-center">
                    <div className="mx-auto text-4xl text-white">{s[0]}</div>
                    <h3 className="mt-3 text-2xl font-extrabold">{s[1]}</h3>
                    <p className="mx-auto mt-1 max-w-[105px] text-xs leading-4 text-white/85">
                      {s[2]}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <div className="grid gap-8 md:grid-cols-[1.1fr_.9fr]">
              <motion.div
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white p-7"
              >
                <p className="text-xs font-extrabold uppercase text-[#ff7a1a]">
                  Author Resources
                </p>
                <h2 className="mt-1 text-2xl font-extrabold text-[#061f5c]">
                  Author Resources
                </h2>
                <p className="mt-2 text-xs font-medium text-black">
                  Find everything you need to prepare and submit your best work.
                </p>

                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {resources.map((r, i) => (
                    <motion.button
                      key={i}
                      whileHover={{ x: 5 }}
                      className="flex items-center justify-between rounded-md border border-[#dce4ef] bg-white px-3 py-3 text-left text-[12px] font-bold text-[#061f5c] shadow-sm"
                    >
                      <span className="flex items-center gap-2">
                        <FiFileText className="text-[#0646b4]" />
                        {r}
                      </span>
                      <FiChevronRight />
                    </motion.button>
                  ))}
                </div>

                <button className="mt-5 rounded-md border border-[#0646b4] px-5 py-3 text-xs font-extrabold text-[#0646b4] transition hover:bg-[#0646b4] hover:text-white">
                  Explore All Resources →
                </button>
              </motion.div>

              <motion.img
                initial={{ opacity: 0, x: 35 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03 }}
                src="https://images.unsplash.com/photo-1551836022-8b2858c9c69b?auto=format&fit=crop&w=700&q=80"
                alt="Author writing"
                className="h-full min-h-[330px] w-full rounded-xl object-cover"
              />
            </div>
          </div>
        </section>

        {/* INDEXED */}
        <section className="px-4 py-10 text-center sm:px-6 lg:px-8">
          <div className="mx-auto max-w-[1280px]">
            <h2 className="text-[24px] font-extrabold text-[#061f5c]">
              Indexed In Leading Databases
            </h2>
            <div className="mx-auto mt-2 h-[2px] w-12 bg-[#ff7a1a]" />

            <div className="mt-8 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-6">
              {indexes.map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -8, scale: 1.04 }}
                  className="flex h-[88px] items-center justify-center rounded-lg border border-[#dce4ef] bg-white px-4 text-xl font-extrabold shadow-md"
                >
                  {item === "Google Scholar" ? (
                    <span className="text-center text-[18px] leading-5">
                      <FaGoogle className="mx-auto mb-1 text-[#4285f4]" />
                      Scholar
                    </span>
                  ) : (
                    <span
                      className={
                        item === "Scopus"
                          ? "text-[#ff6a00]"
                          : item === "DOAJ"
                          ? "text-[#555]"
                          : item === "Crossref"
                          ? "text-[#555]"
                          : item === "Dimensions"
                          ? "text-[#5a5a5a]"
                          : "text-[#e02020]"
                      }
                    >
                      {item}
                    </span>
                  )}
                </motion.div>
              ))}
            </div>

            <button className="mt-8 rounded-md border border-[#0646b4] px-6 py-3 text-xs font-extrabold text-[#0646b4] transition hover:bg-[#0646b4] hover:text-white">
              View All Indexing & Partnerships →
            </button>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#003b91] px-4 py-8 text-white sm:px-6 lg:px-8">
          <div className="mx-auto flex max-w-[1280px] flex-col items-center justify-between gap-6 md:flex-row">
            <div className="flex items-center gap-5">
              <div className="flex h-16 w-16 items-center justify-center rounded-full border border-white text-3xl">
                <FiFileText />
              </div>
              <div>
                <h3 className="text-xl font-extrabold">
                  Have a Research to Publish?
                </h3>
                <p className="mt-1 max-w-xl text-sm text-white/85">
                  Join thousands of researchers worldwide who trust Yashika
                  Publications for quality and impact.
                </p>
              </div>
            </div>

            <button className="inline-flex items-center gap-3 rounded-md bg-[#ff7417] px-7 py-3 text-sm font-extrabold text-white transition hover:-translate-y-1 hover:shadow-xl">
              Submit Your Paper <FiSend />
            </button>
          </div>
        </section>
      </main>
    </PageTransition>
  );
};

export default Authors;