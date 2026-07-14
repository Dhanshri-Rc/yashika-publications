import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  AlertTriangle,
  ArrowRight,
  BadgeCheck,
  BookOpenCheck,
  Check,
  Copyright,
  Download,
  FileCheck2,
  FileWarning,
  Fingerprint,
  Gavel,
  Mail,
  MessageSquareWarning,
  Scale,
  SearchCheck,
  Send,
  ShieldCheck,
  Sparkles,
  UserCheck,
  Users,
  BookOpen
} from "lucide-react";
import logo from "../../assets/yashika-publication-logo.webp";
import reviewerBanner from "../../assets/yashika-publication-reviewers-banner.webp";
import editorialTeam from "../../assets/yashika-publication-editorial-team.webp";
import peerReview from "../../assets/yashika-publication-peer-review-process.webp";

/* -------------------------------------------------------------------------- */
/*                                    DATA                                    */
/* -------------------------------------------------------------------------- */

const ethicsPrinciples = [
  {
    icon: Fingerprint,
    number: "01",
    title: "Original Research",
    text: "Authors must submit original work that has not been published or submitted elsewhere.",
  },
  {
    icon: SearchCheck,
    number: "02",
    title: "Accurate Reporting",
    text: "Research methods, results and conclusions must be presented honestly and accurately.",
  },
  {
    icon: Copyright,
    number: "03",
    title: "Proper Attribution",
    text: "All sources, ideas, data and previous studies must be cited appropriately.",
  },
  {
    icon: Users,
    number: "04",
    title: "Responsible Authorship",
    text: "Only individuals who made meaningful scholarly contributions should be listed as authors.",
  },
  {
    icon: Scale,
    number: "05",
    title: "Conflict Disclosure",
    text: "Authors, reviewers and editors must disclose relevant financial or personal conflicts.",
  },
  {
    icon: ShieldCheck,
    number: "06",
    title: "Research Ethics",
    text: "Research involving humans, animals or sensitive data must follow applicable ethical standards.",
  },
];

const responsibilities = [
  {
    title: "Authors",
    icon: UserCheck,
    points: [
      "Submit original and accurate research.",
      "Declare funding and conflicts of interest.",
      "Obtain required ethical approvals.",
      "Correct significant errors after publication.",
    ],
  },
  {
    title: "Reviewers",
    icon: FileCheck2,
    points: [
      "Maintain complete confidentiality.",
      "Provide objective and constructive feedback.",
      "Avoid personal or professional bias.",
      "Report suspected ethical concerns.",
    ],
  },
  {
    title: "Editors",
    icon: Gavel,
    points: [
      "Make fair and independent decisions.",
      "Protect author and reviewer confidentiality.",
      "Investigate ethical complaints carefully.",
      "Avoid discrimination and conflicts.",
    ],
  },
];

const misconductItems = [
  "Plagiarism or duplicate publication",
  "Data fabrication or falsification",
  "Improper authorship attribution",
  "Undisclosed conflicts of interest",
  "Manipulation of peer review",
  "Unethical use of human or animal data",
];

const responseSteps = [
  {
    number: "01",
    title: "Concern Reported",
    text: "An ethical concern is submitted to the editorial office.",
  },
  {
    number: "02",
    title: "Initial Assessment",
    text: "The editor reviews the evidence and relevant publication records.",
  },
  {
    number: "03",
    title: "Author Clarification",
    text: "Authors may be asked to provide an explanation or supporting documents.",
  },
  {
    number: "04",
    title: "Editorial Action",
    text: "A correction, rejection, retraction or other appropriate action may follow.",
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

const fadeLeft = {
  hidden: {
    opacity: 0,
    x: -35,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const fadeRight = {
  hidden: {
    opacity: 0,
    x: 35,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
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

const scrollToSection = (event, selector) => {
  event.preventDefault();

  const element = document.querySelector(selector);

  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
};
/* -------------------------------------------------------------------------- */
/*                               MAIN COMPONENT                               */
/* -------------------------------------------------------------------------- */

export default function PublicationEthics() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="overflow-hidden bg-white text-[#10213D]"
    >
      {/* ================================================================== */}
      {/* ASYMMETRIC HERO                                                   */}
      {/* ================================================================== */}

      {/* <section className="relative overflow-hidden bg-[#071F58]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_30%,rgba(37,99,235,.35),transparent_30%),radial-gradient(circle_at_85%_20%,rgba(245,124,32,.16),transparent_25%)]" />

        <div className="absolute left-0 top-0 h-full w-[42%] bg-[linear-gradient(135deg,rgba(255,255,255,.06)_25%,transparent_25%)] bg-[length:70px_70px] opacity-40" />

        <div className="relative mx-auto grid min-h-[430px] max-w-[1260px] items-center gap-10 px-5 py-14 sm:px-8 lg:grid-cols-[1.05fr_.95fr] lg:px-10">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="show"
            className="relative z-10"
          >
            <motion.img
              variants={fadeUp}
              src={logo}
              alt="Yashika Publications"
              className="mb-8 h-10 w-auto object-contain sm:h-12"
            />

            <motion.span
              variants={fadeUp}
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[12px] font-semibold uppercase tracking-[0.18em] text-blue-100 backdrop-blur-md"
            >
              <ShieldCheck size={14} />
              Ethical Publishing
            </motion.span>

            <motion.h1
              variants={fadeUp}
              className="mt-5 max-w-[600px] text-[38px] font-[600] leading-tight text-white sm:text-[46px] lg:text-[54px]"
            >
              Publication Ethics
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-5 max-w-[600px] text-[15px] leading-7 text-blue-100/85 sm:text-[17px]"
            >
              Protecting academic integrity through transparent editorial
              practices, responsible authorship and ethical peer review.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-7 flex flex-wrap items-center gap-2 text-[13px] text-white/70"
            >
              <Link to="/" className="transition hover:text-white">
                Home
              </Link>

              <span>/</span>

              <span>For Authors</span>

              <span>/</span>

              <span className="font-semibold text-[#FFA65C]">
                Publication Ethics
              </span>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.9,
              x: 40,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              x: 0,
            }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
            className="relative"
          >
            <div className="absolute -left-8 top-10 h-36 w-36 rounded-[30px] border border-blue-300/20 bg-blue-500/10" />
            <div className="absolute -right-7 bottom-8 h-28 w-28 rounded-full border border-orange-300/20 bg-orange-400/10" />

            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative rounded-[34px] border border-white/10 bg-white/10 p-4 shadow-[0_30px_70px_rgba(0,0,0,.25)] backdrop-blur-lg"
            >
              <img
                src={peerReview}
                alt="Ethical peer-review process"
                className="h-[320px] w-full rounded-[27px] object-cover sm:h-[360px]"
              />

              <div className="absolute bottom-8 left-8 right-8 rounded-[22px] border border-white/60 bg-white/90 p-5 shadow-xl backdrop-blur-xl">
                <div className="flex items-center gap-4">
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-[#F57C20] text-white">
                    <Scale size={24} />
                  </div>

                  <div>
                    <h3 className="text-[14px] font-[600] text-[#0B2C66]">
                      Integrity Before Publication
                    </h3>

                    <p className="mt-1 text-[12px] leading-5 text-slate-600">
                      Every submission is evaluated according to ethical and
                      scholarly standards.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section> */}

      <section className="relative min-h-[340px] overflow-hidden bg-[#082D68]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_20%,rgba(37,99,235,.42),transparent_30%),linear-gradient(115deg,#061B46_0%,#0B2C66_50%,transparent_50%)]" />

        <div className="absolute inset-y-0 right-0 w-full lg:w-[56%]">
          <img
            src={reviewerBanner}
            alt="Submit research paper"
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
            className="max-w-[650px]"
          >
            <motion.img
              variants={fadeUp}
              src={logo}
              alt="Yashika Publications"
              className="mb-7 h-10 w-auto object-contain sm:h-12"
            />

            <motion.p
              variants={fadeUp}
              className="mb-3 text-[14px] font-[500] uppercase tracking-[0.2em] text-[#FFA65C]"
            >
              Ethical Publishing
            </motion.p>

            <motion.h1
              variants={fadeUp}
              className="text-white text-[36px] font-[600] leading-tight sm:text-[40px] md:text-[44px]"
            >
              Publication Ethics
            </motion.h1>

            <motion.span
              variants={fadeUp}
              className="mt-3 block h-1 w-14 rounded-full bg-[#F57C20]"
            />

            <motion.p
              variants={fadeUp}
              className="mt-5 max-w-[590px] text-[16px] font-[500] leading-7 text-white/90 sm:text-[18px]"
            >
              Protecting academic integrity through transparent editorial
              practices, responsible authorship and ethical peer review.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* ETHICS CHARTER                                                    */}
      {/* ================================================================== */}

      <section className="relative py-14 lg:py-18">
        <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-blue-50 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-orange-50 blur-3xl" />

        <div className="relative mx-auto grid max-w-[1260px] gap-10 px-5 sm:px-8 lg:grid-cols-[.72fr_1.28fr] lg:px-10">
          <motion.aside
            variants={fadeLeft}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="lg:sticky lg:top-8 lg:self-start"
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-[12px] font-semibold uppercase tracking-[0.18em] text-[#125FEA]">
              <Sparkles size={14} />
              Ethics Charter
            </span>

            <h2 className="mt-4 max-w-[430px] text-[25px] font-[600] leading-tight text-[#0B2C66] sm:text-[29px] lg:text-[32px]">
              Core Principles of Responsible Publishing
            </h2>

            <span className="mt-4 block h-1 w-14 rounded-full bg-[#F57C20]" />

            <p className="mt-5 max-w-[450px] text-[13px] leading-7 text-slate-600 sm:text-[14px]">
              Yashika Publications expects authors, reviewers and editors to
              maintain honesty, transparency and accountability at every stage
              of publication.
            </p>

            <div className="mt-7 rounded-[24px] border border-orange-100 bg-orange-50 p-5">
              <div className="flex items-start gap-4">
                <AlertTriangle
                  size={24}
                  className="mt-1 shrink-0 text-[#F57C20]"
                />

                <div>
                  <h3 className="text-[14px] font-[600] text-[#0B2C66]">
                    Zero Tolerance
                  </h3>

                  <p className="mt-2 text-[12px] leading-6 text-slate-600">
                    Proven cases of plagiarism, data manipulation or unethical
                    conduct may result in rejection, correction or retraction.
                  </p>
                </div>
              </div>
            </div>
          </motion.aside>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            className="grid gap-5 sm:grid-cols-2"
          >
            {ethicsPrinciples.map(
              ({ icon: Icon, number, title, text }, index) => (
                <motion.article
                  key={title}
                  variants={fadeUp}
                  whileHover={{
                    y: -8,
                    scale: 1.01,
                  }}
                  className={`group relative overflow-hidden rounded-[26px] border p-6 shadow-[0_12px_34px_rgba(15,54,110,.09)] ${
                    index === 0 || index === 5
                      ? "border-[#0B2C66] bg-[#0B2C66] text-white"
                      : "border-slate-100 bg-white"
                  }`}
                >
                  <span
                    className={`absolute right-5 top-3 text-[48px] font-[550] ${
                      index === 0 || index === 5
                        ? "text-white/5"
                        : "text-blue-50"
                    }`}
                  >
                    {number}
                  </span>

                  <div
                    className={`relative z-10 grid h-13 w-13 h-[52px] place-items-center rounded-2xl ${
                      index === 0 || index === 5
                        ? "bg-white/10 text-white"
                        : index % 2 === 1
                          ? "bg-orange-50 text-[#F57C20]"
                          : "bg-blue-50 text-[#125FEA]"
                    }`}
                  >
                    <Icon size={24} />
                  </div>

                  <h3
                    className={`relative z-10 mt-5 text-[16px] font-[600] ${
                      index === 0 || index === 5
                        ? "text-white"
                        : "text-[#0B2C66]"
                    }`}
                  >
                    {title}
                  </h3>

                  <p
                    className={`relative z-10 mt-3 text-[13px] leading-6 ${
                      index === 0 || index === 5
                        ? "text-blue-100/80"
                        : "text-slate-600"
                    }`}
                  >
                    {text}
                  </p>
                </motion.article>
              ),
            )}
          </motion.div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* RESPONSIBILITIES                                                  */}
      {/* ================================================================== */}

      <section className="bg-[#F7F9FD] py-14 lg:py-16">
        <div className="mx-auto max-w-[1260px] px-5 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-[12px] font-semibold uppercase tracking-[0.18em] text-[#125FEA] shadow-sm">
              <BadgeCheck size={14} />
              Shared Responsibility
            </span>

            <h2 className="mx-auto mt-4 max-w-[590px] text-[25px] font-[600] leading-tight text-[#0B2C66] sm:text-[29px] lg:text-[32px]">
              Ethical Responsibilities of the Publishing Community
            </h2>

            <span className="mx-auto mt-4 block h-1 w-14 rounded-full bg-[#F57C20]" />
          </div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            className="mt-11 grid gap-6 lg:grid-cols-3"
          >
            {responsibilities.map(({ title, icon: Icon, points }, index) => (
              <motion.article
                key={title}
                variants={fadeUp}
                whileHover={{
                  y: -8,
                }}
                className="group overflow-hidden rounded-[26px] border border-slate-100 bg-white shadow-[0_14px_36px_rgba(15,54,110,.10)]"
              >
                <div
                  className={`relative px-6 py-7 ${
                    index === 1
                      ? "bg-gradient-to-r from-[#F57C20] to-[#FF9B4D]"
                      : "bg-gradient-to-r from-[#125FEA] to-[#082D68]"
                  }`}
                >
                  <div className="absolute right-5 top-4 opacity-10">
                    <Icon size={70} />
                  </div>

                  <div className="relative grid h-13 w-13 h-[52px] place-items-center rounded-2xl bg-white/15 text-white backdrop-blur-md">
                    <Icon size={24} />
                  </div>

                  <h3 className="relative mt-4 text-[19px] font-[600] text-white">
                    {title}
                  </h3>
                </div>

                <div className="space-y-3 p-6">
                  {points.map((point) => (
                    <div key={point} className="flex items-start gap-3">
                      <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-blue-50 text-[#125FEA]">
                        <Check size={14} strokeWidth={3} />
                      </span>

                      <p className="text-[13px] leading-6 text-slate-600">
                        {point}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* MISCONDUCT AND RESPONSE                                           */}
      {/* ================================================================== */}

      <section className="py-14 lg:py-16">
        <div className="mx-auto grid max-w-[1260px] gap-10 px-5 sm:px-8 lg:grid-cols-[.95fr_1.05fr] lg:items-center lg:px-10">
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-[30px] bg-[#0B2C66] p-5 shadow-[0_28px_65px_rgba(11,44,102,.22)]">
              <img
                src={editorialTeam}
                alt="Editorial ethics review"
                className="h-[390px] w-full rounded-[24px] object-cover"
              />

              <div className="absolute inset-x-9 bottom-9 rounded-[22px] border border-white/20 bg-[#071F58]/90 p-5 text-white backdrop-blur-lg">
                <div className="flex items-start gap-4">
                  <MessageSquareWarning
                    size={28}
                    className="mt-1 shrink-0 text-[#F57C20]"
                  />

                  <div>
                    <h3 className="text-[16px] font-[600]">
                      Report an Ethical Concern
                    </h3>

                    <p className="mt-2 text-[12px] leading-6 text-white/75">
                      Concerns should include clear evidence, manuscript details
                      and relevant supporting information.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-red-50 px-4 py-2 text-[12px] font-semibold uppercase tracking-[0.18em] text-red-600">
              <FileWarning size={14} />
              Unethical Conduct
            </span>

            <h2 className="mt-4 max-w-[560px] text-[25px] font-[600] leading-tight text-[#0B2C66] sm:text-[29px] lg:text-[32px]">
              Research Misconduct and Editorial Response
            </h2>

            <span className="mt-4 block h-1 w-14 rounded-full bg-[#F57C20]" />

            <p className="mt-5 text-[13px] leading-7 text-slate-600 sm:text-[14px]">
              Any suspected violation is reviewed fairly and confidentially.
              Editorial actions depend on the nature and seriousness of the
              concern.
            </p>

            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {misconductItems.map((item) => (
                <motion.div
                  key={item}
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-3 rounded-[17px] border border-red-100 bg-red-50/60 px-4 py-3"
                >
                  <AlertTriangle size={17} className="shrink-0 text-red-500" />

                  <span className="text-[12px] font-[500] leading-5 text-slate-700">
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* RESPONSE FLOW                                                     */}
      {/* ================================================================== */}

      <section className="bg-[#0B2C66] py-14 text-white lg:py-16">
        <div className="mx-auto max-w-[1260px] px-5 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[12px] font-semibold uppercase tracking-[0.18em] text-blue-100">
              <Gavel size={14} />
              Investigation Process
            </span>

            <h2 className="mx-auto mt-4 max-w-[600px] text-[25px] font-[600] leading-tight text-white sm:text-[29px] lg:text-[32px]">
              How Ethical Concerns Are Handled
            </h2>

            <span className="mx-auto mt-4 block h-1 w-14 rounded-full bg-[#F57C20]" />
          </div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            className="relative mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4"
          >
            <div className="absolute left-[12%] right-[12%] top-8 hidden h-[2px] bg-gradient-to-r from-blue-400 via-[#F57C20] to-blue-400 lg:block" />

            {responseSteps.map(({ number, title, text }, index) => (
              <motion.article
                key={number}
                variants={fadeUp}
                whileHover={{
                  y: -8,
                }}
                className="relative rounded-[24px] border border-white/10 bg-white/[0.08] px-5 pb-6 pt-12 text-center backdrop-blur-md"
              >
                <div
                  className={`absolute left-1/2 top-0 z-10 grid h-16 w-16 -translate-x-1/2 -translate-y-2 place-items-center rounded-full text-[15px] font-[600] text-white ring-8 ring-[#0B2C66] ${
                    index === 1 || index === 3 ? "bg-[#F57C20]" : "bg-[#125FEA]"
                  }`}
                >
                  {number}
                </div>

                <h3 className="mt-3 text-[15px] font-[600] text-white">
                  {title}
                </h3>

                <p className="mt-3 text-[12px] leading-6 text-blue-100/75">
                  {text}
                </p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* CTA SECTION                                                        */}
      {/* ================================================================== */}

      {/* <section className="relative overflow-hidden bg-white py-12">
        <div className="mx-auto max-w-[1260px] px-5 sm:px-8 lg:px-10">
          <div className="relative overflow-hidden rounded-[30px] bg-gradient-to-r from-[#0D63E8] via-[#084AB9] to-[#071F58] px-6 py-10 text-white shadow-[0_28px_65px_rgba(7,45,115,.22)] sm:px-10 lg:px-12">
            <div className="absolute inset-0 opacity-15 [background-image:linear-gradient(135deg,transparent_42%,#fff_43%,transparent_44%)] [background-size:85px_85px]" />

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
              className="absolute -right-16 -top-24 h-72 w-72 rounded-full border border-blue-200/20"
            />

            <div className="relative flex flex-col items-center justify-between gap-7 text-center lg:flex-row lg:text-left">
              <div className="flex max-w-3xl flex-col items-center gap-5 sm:flex-row">
                <div className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl border border-white/25 bg-white/10">
                  <ShieldCheck size={32} />
                </div>

                <div>
                  <h2 className="text-[24px] font-[600] sm:text-[28px]">
                    Questions About Publication Ethics?
                  </h2>

                  <p className="mt-2 max-w-2xl text-[13px] leading-6 text-blue-100/85 sm:text-[14px]">
                    Contact the editorial office to report an ethical concern or
                    request clarification about our publication policies.
                  </p>
                </div>
              </div>

              <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#F57C20] px-6 py-3 text-[13px] font-[600] text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-[#FF8D35]"
                >
                  Contact Editorial Office
                  <Mail size={17} />
                </Link>

                <Link
                  to="/submit-your-paper"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/50 px-6 py-3 text-[13px] font-[600] text-white transition duration-300 hover:-translate-y-1 hover:bg-white hover:text-[#0B2C66]"
                >
                  Submit Your Paper
                  <Send size={17} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <section className="relative overflow-hidden bg-[#071F58] py-11 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_50%,rgba(34,104,235,.45),transparent_30%),radial-gradient(circle_at_90%_20%,rgba(245,124,32,.18),transparent_25%)]" />

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
            <div className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl border border-white/25 bg-white/10">
              <BookOpen size={31} />
            </div>

            <div>
              <h2 className="text-[18px] font-[550] sm:text-[20px]">
                Questions About Publication Ethics?
              </h2>

              <p className="mt-2 max-w-2xl text-[13px] leading-6 text-blue-100/85 sm:text-[14px]">
                Contact the editorial office to report an ethical concern or
                request clarification about our publication policies.
              </p>
            </div>
          </div>

          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <Link
              to="/author-guidelines"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#F57C20] px-4 py-3 text-[12px] font-[500] text-white transition duration-300 hover:-translate-y-1 hover:bg-[#FF8D35]"
            >
              Submit Your Paper
              <ArrowRight size={17} />
            </Link>

            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/50 px-4 py-3 text-[12px] font-[500] text-white transition duration-300 hover:-translate-y-1 hover:bg-white hover:text-[#0B2C66]"
            >
              Contact Editorial Office
              <Mail size={17} />
            </Link>
          </div>
        </div>
      </section>
    </motion.main>
  );
}
