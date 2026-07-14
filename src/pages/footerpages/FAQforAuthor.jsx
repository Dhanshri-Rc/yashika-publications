import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  ChevronDown,
  CircleHelp,
  Clock3,
  FileCheck2,
  FileText,
  HelpCircle,
  Mail,
  MessageCircle,
  Search,
  Send,
  ShieldCheck,
  Sparkles,
  Upload,
  UserRoundCheck,
} from "lucide-react";

import logo from "../../assets/yashika-publication-logo.webp";
import reviewerBanner from "../../assets/yashika-publication-reviewers-banner.webp";
import editorialTeam from "../../assets/yashika-publication-editorial-team.webp";

/* -------------------------------------------------------------------------- */
/*                                    DATA                                    */
/* -------------------------------------------------------------------------- */

const categories = [
  {
    icon: Upload,
    title: "Submission",
    text: "Questions related to manuscript submission and required documents.",
  },
  {
    icon: FileCheck2,
    title: "Peer Review",
    text: "Information about editorial screening and the review process.",
  },
  {
    icon: BookOpen,
    title: "Publication",
    text: "Guidance about acceptance, proofreading and final publication.",
  },
  {
    icon: ShieldCheck,
    title: "Policies",
    text: "Questions regarding ethics, copyright and publication policies.",
  },
];

const faqs = [
  {
    category: "Submission",
    question: "How can I submit my manuscript?",
    answer:
      "Authors can submit their manuscript through the online submission system or by following the submission instructions provided on the journal page. Ensure that all required files and author details are included.",
  },
  {
    category: "Submission",
    question: "Which file formats are accepted?",
    answer:
      "Manuscripts are generally accepted in Microsoft Word format. Figures may be submitted in JPG, PNG or high-resolution image formats, while supplementary files should be clearly labelled.",
  },
  {
    category: "Submission",
    question: "What documents are required during submission?",
    answer:
      "Authors should submit the manuscript, author information, affiliation details, corresponding author contact information, declarations and any supplementary material required by the journal.",
  },
  {
    category: "Peer Review",
    question: "What type of peer-review process is followed?",
    answer:
      "Yashika Publications follows a double-blind peer-review process in which the identities of both authors and reviewers remain confidential during evaluation.",
  },
  {
    category: "Peer Review",
    question: "How long does the review process take?",
    answer:
      "The review timeline depends on reviewer availability and manuscript complexity. Most manuscripts complete the initial review process within two to four weeks.",
  },
  {
    category: "Peer Review",
    question: "Can I track the status of my manuscript?",
    answer:
      "Yes. Authors may check the status through the submission system or contact the editorial office using their manuscript identification number.",
  },
  {
    category: "Publication",
    question: "What happens after my manuscript is accepted?",
    answer:
      "Accepted manuscripts proceed to copyediting, formatting and proofreading. Authors may receive page proofs for final corrections before publication.",
  },
  {
    category: "Publication",
    question: "Will I receive a publication certificate?",
    answer:
      "Yes. Authors may receive an electronic publication certificate after the article has been successfully published in the journal.",
  },
  {
    category: "Publication",
    question: "How will I receive the published article link?",
    answer:
      "Once published, the corresponding author receives an email containing the article link, citation details and other publication information.",
  },
  {
    category: "Policies",
    question: "Can I submit the same manuscript to another journal?",
    answer:
      "No. A manuscript must not be under consideration by another journal at the same time. Duplicate submission is considered an ethical violation.",
  },
  {
    category: "Policies",
    question: "What is the plagiarism policy?",
    answer:
      "All manuscripts are screened for originality. Authors must properly cite all sources and ensure that the submission does not contain plagiarised or duplicated content.",
  },
  {
    category: "Policies",
    question: "Can I make changes after submission?",
    answer:
      "Minor corrections may be requested through the editorial office. Major changes to authorship, title or manuscript content require editorial approval.",
  },
];

const supportCards = [
  {
    icon: FileText,
    title: "Author Guidelines",
    text: "Review formatting, structure and submission requirements.",
    link: "/author-guidelines",
    button: "View Guidelines",
  },
  {
    icon: Send,
    title: "Submit Your Paper",
    text: "Start your manuscript submission through the journal platform.",
    link: "/submit-your-paper",
    button: "Submit Manuscript",
  },
  {
    icon: Mail,
    title: "Editorial Support",
    text: "Contact the editorial team for submission or publication assistance.",
    link: "/contact",
    button: "Contact Office",
  },
];

/* -------------------------------------------------------------------------- */
/*                                 ANIMATION                                  */
/* -------------------------------------------------------------------------- */

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 28,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: "easeOut",
    },
  },
};

const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

/* -------------------------------------------------------------------------- */
/*                               MAIN COMPONENT                               */
/* -------------------------------------------------------------------------- */

export default function FAQforAuthor() {
  const [openFaq, setOpenFaq] = useState(0);
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredFaqs = faqs.filter((faq) => {
    const matchesCategory =
      activeCategory === "All" || faq.category === activeCategory;

    const matchesSearch =
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="overflow-hidden bg-white text-[#10213D]"
    >
      {/* ================================================================== */}
      {/* HERO SECTION                                                       */}
      {/* ================================================================== */}

      <section className="relative min-h-[340px] overflow-hidden bg-[#082D68]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_20%,rgba(37,99,235,.42),transparent_30%),linear-gradient(115deg,#061B46_0%,#0B2C66_50%,transparent_50%)]" />

        <div className="absolute inset-y-0 right-0 w-full lg:w-[56%]">
          <img
            src={reviewerBanner}
            alt="Authors receiving publication support"
            className="h-full w-full object-cover object-center"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#0B2C66] via-[#0B2C66]/45 to-transparent lg:from-[#0B2C66]/65" />
        </div>

        <motion.div
          animate={{
            y: [0, -12, 0],
            rotate: [25, 28, 25],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-[38%] top-[-130px] hidden h-[560px] w-36 bg-blue-500/25 lg:block"
        />

        <div className="absolute left-[44%] top-[-120px] hidden h-[550px] w-1 rotate-[28deg] bg-[#F57C20] lg:block" />

        <div className="relative mx-auto flex min-h-[340px] max-w-[1260px] items-center px-5 py-14 sm:px-8 lg:px-10">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="show"
            className="max-w-[640px]"
          >
            <motion.img
              variants={fadeUp}
              src={logo}
              alt="Yashika Publications"
              className="mb-7 h-10 w-auto object-contain sm:h-12"
            />

            <motion.p
              variants={fadeUp}
              className="mb-3 text-[12px] font-semibold uppercase tracking-[0.2em] text-[#FFA65C]"
            >
              Author Support
            </motion.p>

            <motion.h1
              variants={fadeUp}
              className="text-[36px] font-[600] leading-tight text-white sm:text-[42px] lg:text-[48px]"
            >
              FAQ for Authors
            </motion.h1>

            <motion.span
              variants={fadeUp}
              className="mt-3 block h-1 w-14 rounded-full bg-[#F57C20]"
            />

            <motion.p
              variants={fadeUp}
              className="mt-5 max-w-[580px] text-[16px] font-[500] leading-7 text-white/90 sm:text-[18px]"
            >
              Find clear answers about manuscript submission, peer review,
              publication and journal policies.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* INTRODUCTION AND CATEGORY SECTION                                  */}
      {/* ================================================================== */}

      <section className="relative py-8">
        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-blue-50/70 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-orange-50 blur-3xl" />

        <div className="relative mx-auto max-w-[1260px] px-5 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-[12px] font-semibold uppercase tracking-[0.18em] text-[#125FEA]">
              <Sparkles size={14} />
              Quick Assistance
            </span>

            <h2 className="mx-auto mt-4 max-w-[600px] text-[24px] font-[600] leading-tight text-[#0B2C66] sm:text-[28px] lg:text-[30px]">
              How Can We Help You?
            </h2>

            <span className="mx-auto mt-4 block h-1 w-14 rounded-full bg-[#F57C20]" />

            <p className="mx-auto mt-5 max-w-2xl text-[13px] leading-7 text-slate-600 sm:text-[14px]">
              Select a category or search for a question to find information
              about the complete publication process.
            </p>
          </div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
          >
            {categories.map(({ icon: Icon, title, text }, index) => (
              <motion.button
                type="button"
                key={title}
                variants={fadeUp}
                whileHover={{
                  y: -7,
                  scale: 1.01,
                }}
                onClick={() => {
                  setActiveCategory(title);
                  setOpenFaq(null);
                }}
                className={`group rounded-[22px] border p-5 text-left shadow-[0_10px_30px_rgba(15,54,110,.09)] transition-all ${
                  activeCategory === title
                    ? "border-[#125FEA] bg-blue-50"
                    : "border-slate-100 bg-white hover:border-blue-100"
                }`}
              >
                <div
                  className={`grid h-12 w-12 place-items-center rounded-2xl text-white shadow-lg transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110 ${
                    index % 2 === 1
                      ? "bg-[#F57C20] shadow-orange-200"
                      : "bg-gradient-to-br from-[#216DED] to-[#092F70] shadow-blue-200"
                  }`}
                >
                  <Icon size={23} />
                </div>

                <h3 className="mt-4 text-[15px] font-[600] text-[#0B2C66]">
                  {title}
                </h3>

                <p className="mt-2 text-[12px] leading-5 text-slate-600">
                  {text}
                </p>
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* FAQ ACCORDION SECTION                                              */}
      {/* ================================================================== */}

      <section className="bg-[#F8FAFE] py-8">
        <div className="mx-auto max-w-[1050px] px-5 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-[12px] font-semibold uppercase tracking-[0.18em] text-[#125FEA]">
              <CircleHelp size={14} />
              Common Questions
            </span>

            <h2 className="mx-auto mt-4 max-w-[520px] text-[24px] font-[600] leading-tight text-[#0B2C66] sm:text-[28px] lg:text-[30px]">
              Frequently Asked Questions
            </h2>

            <span className="mx-auto mt-4 block h-1 w-14 rounded-full bg-[#F57C20]" />
          </div>

          {/* Search and filters */}

          <div className="mt-9 rounded-[24px] border border-slate-100 bg-white p-4 shadow-[0_10px_30px_rgba(15,54,110,.08)] sm:p-5">
            <div className="relative">
              <Search
                size={19}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              />

              <input
                type="text"
                value={searchTerm}
                onChange={(event) => {
                  setSearchTerm(event.target.value);
                  setOpenFaq(null);
                }}
                placeholder="Search your question..."
                className="w-full rounded-[16px] border border-slate-200 bg-slate-50 py-3.5 pl-12 pr-4 text-[13px] text-slate-700 outline-none transition focus:border-[#125FEA] focus:bg-white focus:ring-4 focus:ring-blue-100"
              />
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {[
                "All",
                "Submission",
                "Peer Review",
                "Publication",
                "Policies",
              ].map((category) => (
                <button
                  type="button"
                  key={category}
                  onClick={() => {
                    setActiveCategory(category);
                    setOpenFaq(null);
                  }}
                  className={`rounded-full px-4 py-2 text-[12px] font-[600] transition ${
                    activeCategory === category
                      ? "bg-[#125FEA] text-white shadow-md shadow-blue-200"
                      : "bg-slate-100 text-slate-600 hover:bg-blue-50 hover:text-[#125FEA]"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* FAQ cards */}

          <div className="mt-7 space-y-4">
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((faq, index) => {
                const isOpen = openFaq === index;

                return (
                  <motion.article
                    key={`${faq.category}-${faq.question}`}
                    layout
                    initial={{
                      opacity: 0,
                      y: 18,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{ once: true }}
                    transition={{
                      delay: index * 0.04,
                    }}
                    className={`overflow-hidden rounded-[20px] border bg-white shadow-[0_8px_26px_rgba(15,54,110,.08)] transition-colors ${
                      isOpen ? "border-blue-200" : "border-slate-100"
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : index)}
                      className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left sm:px-6"
                    >
                      <span className="flex items-center gap-4">
                        <span
                          className={`grid h-10 w-10 shrink-0 place-items-center rounded-full transition-colors ${
                            isOpen
                              ? "bg-[#F57C20] text-white"
                              : "bg-blue-50 text-[#125FEA]"
                          }`}
                        >
                          <HelpCircle size={19} />
                        </span>

                        <span>
                          <span className="block text-[10px] font-bold uppercase tracking-[0.14em] text-[#125FEA]">
                            {faq.category}
                          </span>

                          <span className="mt-1 block text-[13px] font-[600] leading-6 text-[#0B2C66] sm:text-[14px]">
                            {faq.question}
                          </span>
                        </span>
                      </span>

                      <motion.span
                        animate={{
                          rotate: isOpen ? 180 : 0,
                        }}
                        transition={{
                          duration: 0.25,
                        }}
                        className="shrink-0 text-[#0B2C66]"
                      >
                        <ChevronDown size={21} />
                      </motion.span>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{
                            height: 0,
                            opacity: 0,
                          }}
                          animate={{
                            height: "auto",
                            opacity: 1,
                          }}
                          exit={{
                            height: 0,
                            opacity: 0,
                          }}
                          transition={{
                            duration: 0.3,
                          }}
                          className="overflow-hidden"
                        >
                          <div className="border-t border-slate-100 px-5 pb-6 pt-4 sm:px-6 sm:pl-20">
                            <p className="text-[13px] leading-7 text-slate-600">
                              {faq.answer}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.article>
                );
              })
            ) : (
              <div className="rounded-[22px] border border-slate-100 bg-white px-6 py-12 text-center shadow-[0_8px_26px_rgba(15,54,110,.08)]">
                <Search size={35} className="mx-auto text-slate-300" />

                <h3 className="mt-4 text-[16px] font-[600] text-[#0B2C66]">
                  No questions found
                </h3>

                <p className="mt-2 text-[13px] text-slate-500">
                  Try another search term or select a different category.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* AUTHOR SUPPORT SECTION                                             */}
      {/* ================================================================== */}

      <section className="py-8">
        <div className="mx-auto max-w-[1260px] px-5 sm:px-8 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-[.85fr_1.15fr] lg:items-center">
            <motion.div
              initial={{
                opacity: 0,
                x: -35,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
              }}
              className="relative"
            >
              <motion.div
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative rounded-[28px] bg-gradient-to-br from-blue-50 via-white to-orange-50 p-5 shadow-[0_22px_55px_rgba(10,50,110,.14)]"
              >
                <img
                  src={editorialTeam}
                  alt="Editorial support for authors"
                  className="h-[330px] w-full rounded-[22px] object-cover sm:h-[380px]"
                />

                <div className="absolute bottom-8 left-8 right-8 rounded-[18px] border border-white/70 bg-white/90 p-4 shadow-xl backdrop-blur-xl">
                  <div className="flex items-center gap-4">
                    <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-[#125FEA] text-white">
                      <UserRoundCheck size={24} />
                    </div>

                    <div>
                      <h3 className="text-[14px] font-[600] text-[#0B2C66]">
                        Dedicated Author Support
                      </h3>

                      <p className="mt-1 text-[12px] leading-5 text-slate-600">
                        Assistance from submission through publication.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-[12px] font-semibold uppercase tracking-[0.18em] text-[#125FEA]">
                <MessageCircle size={14} />
                More Assistance
              </span>

              <h2 className="mt-4 max-w-[540px] text-[24px] font-[600] leading-tight text-[#0B2C66] sm:text-[28px] lg:text-[30px]">
                Helpful Resources for Authors
              </h2>

              <span className="mt-4 block h-1 w-14 rounded-full bg-[#F57C20]" />

              <motion.div
                variants={stagger}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.15 }}
                className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-1"
              >
                {supportCards.map(
                  ({ icon: Icon, title, text, link, button }, index) => (
                    <motion.article
                      key={title}
                      variants={fadeUp}
                      whileHover={{
                        x: 6,
                      }}
                      className="group flex flex-col gap-4 rounded-[22px] border border-slate-100 bg-white p-5 shadow-[0_10px_30px_rgba(15,54,110,.09)] sm:flex-row sm:items-center"
                    >
                      <div
                        className={`grid h-12 w-12 shrink-0 place-items-center rounded-2xl text-white ${
                          index === 1
                            ? "bg-[#F57C20]"
                            : "bg-gradient-to-br from-[#216DED] to-[#092F70]"
                        }`}
                      >
                        <Icon size={23} />
                      </div>

                      <div className="flex-1">
                        <h3 className="text-[14px] font-[600] text-[#0B2C66]">
                          {title}
                        </h3>

                        <p className="mt-1 text-[12px] leading-5 text-slate-600">
                          {text}
                        </p>
                      </div>

                      <Link
                        to={link}
                        className="inline-flex shrink-0 items-center gap-2 text-[12px] font-[600] text-[#125FEA] transition hover:text-[#F57C20]"
                      >
                        {button}

                        <ArrowRight
                          size={15}
                          className="transition-transform group-hover:translate-x-1"
                        />
                      </Link>
                    </motion.article>
                  ),
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* CTA SECTION                                                        */}
      {/* ================================================================== */}

      <section className="relative overflow-hidden bg-gradient-to-r from-[#0D63E8] via-[#084AB9] to-[#071F58] py-8 text-white">
        <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(135deg,transparent_42%,#fff_43%,transparent_44%)] [background-size:80px_80px]" />

        <motion.div
          animate={{
            x: [0, 18, 0],
            rotate: [0, 4, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -right-12 -top-24 h-72 w-72 rounded-full border border-blue-200/20"
        />

        <div className="relative mx-auto flex max-w-[1260px] flex-col items-center justify-between gap-7 px-5 text-center sm:px-8 lg:flex-row lg:px-10 lg:text-left">
          <div className="flex max-w-3xl flex-col items-center gap-5 sm:flex-row">
            <div className="grid h-16 w-16 shrink-0 place-items-center rounded-full border border-white/25 bg-white/10 shadow-[0_0_35px_rgba(58,126,245,.28)]">
              <Clock3 size={31} />
            </div>

            <div>
              <h2 className="text-[24px] font-[550] sm:text-[26px]">
                Still Have a Question?
              </h2>

              <p className="mt-2 max-w-2xl text-[13px] leading-6 text-blue-100/85 sm:text-[14px]">
                Contact the editorial office for help with your manuscript,
                review status or publication process.
              </p>
            </div>
          </div>

          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#F57C20] px-4 py-3 text-[13px] font-[500] text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-[#FF8D35]"
            >
              Contact Editorial Office
              <ArrowRight size={17} />
            </Link>

            <Link
              to="/submit-your-paper"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/50 px-4 py-3 text-[12px] font-[500] text-white transition duration-300 hover:-translate-y-1 hover:bg-white hover:text-[#0B2C66]"
            >
              Submit Your Paper
              <Send size={17} />
            </Link>
          </div>
        </div>
      </section>
    </motion.main>
  );
}
