import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Award,
  BookOpenCheck,
  Check,
  CheckCircle2,
  ChevronDown,
  CircleCheckBig,
  ClipboardCheck,
  Clock3,
  FileCheck2,
  FileSearch,
  Mail,
  MessageSquareText,
  RotateCcw,
  SearchCheck,
  Send,
  ShieldCheck,
  Sparkles,
  Target,
  UserRoundCheck,
  UsersRound,
  XCircle,
} from "lucide-react";

import logo from "../../assets/yashika-publication-logo.webp";
import reviewerBanner from "../../assets/yashika-publication-reviewers-banner.webp";
import peerReview from "../../assets/yashika-publication-peer-review-process.webp";
import editorialTeam from "../../assets/yashika-publication-editorial-team.webp";

/* -------------------------------------------------------------------------- */
/*                                   DATA                                     */
/* -------------------------------------------------------------------------- */

const processSteps = [
  {
    icon: Send,
    number: "01",
    title: "Manuscript Submission",
    text: "The author submits the manuscript through the journal submission system.",
  },
  {
    icon: ClipboardCheck,
    number: "02",
    title: "Initial Screening",
    text: "The editorial team checks scope, formatting, originality and completeness.",
  },
  {
    icon: UsersRound,
    number: "03",
    title: "Reviewer Selection",
    text: "Suitable subject experts are invited to evaluate the manuscript.",
  },
  {
    icon: FileSearch,
    number: "04",
    title: "Peer Review",
    text: "Reviewers assess originality, methodology, quality and significance.",
  },
  {
    icon: MessageSquareText,
    number: "05",
    title: "Author Revision",
    text: "Authors respond to reviewer comments and submit a revised manuscript.",
  },
  {
    icon: Award,
    number: "06",
    title: "Editorial Decision",
    text: "The editor makes the final decision based on reviewer recommendations.",
  },
  {
    icon: FileCheck2,
    number: "07",
    title: "Production",
    text: "Accepted manuscripts undergo editing, formatting and proofreading.",
  },
  {
    icon: BookOpenCheck,
    number: "08",
    title: "Publication",
    text: "The final article is published and made available to readers worldwide.",
  },
];

const screeningChecks = [
  {
    icon: Target,
    title: "Journal Scope",
    text: "The manuscript must align with the aims and scope of the selected journal.",
  },
  {
    icon: SearchCheck,
    title: "Originality Check",
    text: "The submission is screened for plagiarism and duplicate publication.",
  },
  {
    icon: FileCheck2,
    title: "Formatting Review",
    text: "Structure, references, figures and tables are checked for compliance.",
  },
  {
    icon: ShieldCheck,
    title: "Ethical Compliance",
    text: "Research ethics, declarations and conflicts of interest are verified.",
  },
];

const reviewCriteria = [
  "Originality and novelty of the research",
  "Relevance to the journal's scope",
  "Quality and suitability of methodology",
  "Accuracy of analysis and interpretation",
  "Clarity of writing and presentation",
  "Quality and relevance of references",
  "Scientific, academic or practical significance",
  "Compliance with ethical research standards",
];

const decisions = [
  {
    icon: CircleCheckBig,
    title: "Accept",
    text: "The manuscript meets the journal's standards and requires no major changes.",
    tone: "green",
  },
  {
    icon: MessageSquareText,
    title: "Minor Revision",
    text: "Small corrections or clarifications are required before acceptance.",
    tone: "blue",
  },
  {
    icon: RotateCcw,
    title: "Major Revision",
    text: "Substantial improvements are required, followed by another evaluation.",
    tone: "orange",
  },
  {
    icon: XCircle,
    title: "Reject",
    text: "The manuscript does not currently meet the journal's publication criteria.",
    tone: "red",
  },
];

const timelines = [
  {
    value: "2–5 Days",
    title: "Initial Screening",
    text: "Editorial and technical assessment",
  },
  {
    value: "2–4 Weeks",
    title: "Peer Review",
    text: "Independent expert evaluation",
  },
  {
    value: "1–3 Weeks",
    title: "Author Revision",
    text: "Time may vary by revision type",
  },
  {
    value: "3–7 Days",
    title: "Final Decision",
    text: "Editorial assessment after revision",
  },
];

const faqs = [
  {
    question: "What type of peer review does Yashika Publications use?",
    answer:
      "Yashika Publications generally follows a double-blind peer-review process. The identities of authors and reviewers remain confidential during the evaluation process.",
  },
  {
    question: "How many reviewers evaluate a manuscript?",
    answer:
      "A manuscript is normally evaluated by at least two qualified subject experts. Additional reviewers may be invited when specialist assessment is required.",
  },
  {
    question: "What happens when reviewers give different recommendations?",
    answer:
      "The editor carefully evaluates both reports and may invite another reviewer before making a balanced editorial decision.",
  },
  {
    question: "Can authors appeal an editorial decision?",
    answer:
      "Authors may submit a respectful and evidence-based appeal to the editorial office. Appeals are evaluated according to the journal's editorial policies.",
  },
];

/* -------------------------------------------------------------------------- */
/*                                ANIMATIONS                                  */
/* -------------------------------------------------------------------------- */

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 30,
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

/* -------------------------------------------------------------------------- */
/*                              COMMON HEADING                                */
/* -------------------------------------------------------------------------- */

function SectionHeading({
  eyebrow,
  title,
  description,
  centered = false,
  light = false,
}) {
  return (
    <div
      className={
        centered
          ? "mx-auto max-w-3xl text-center"
          : "max-w-3xl text-left"
      }
    >
      {eyebrow && (
        <span
          className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-[12px] font-semibold uppercase tracking-[0.18em] ${
            light
              ? "border border-white/20 bg-white/10 text-blue-100"
              : "bg-blue-50 text-[#125FEA]"
          }`}
        >
          <Sparkles size={14} />
          {eyebrow}
        </span>
      )}

     <h2
  className={`mt-4 max-w-[350px] ${
    centered ? "mx-auto" : ""
  } text-[24px] font-[600] leading-tight tracking-tight sm:text-[28px] lg:text-[30px] ${
    light ? "text-white" : "text-[#0B2C66]"
  }`}
>
        {title}
      </h2>

      <span
        className={`mt-4 block h-1 w-14 rounded-full bg-[#F57C20] ${
          centered ? "mx-auto" : ""
        }`}
      />

      {description && (
        <p
          className={`mt-5 text-[13px] leading-7 sm:text-[14px] ${
            light ? "text-blue-100/85" : "text-slate-600"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                              MAIN COMPONENT                                */
/* -------------------------------------------------------------------------- */

export default function ReviewProcess() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="overflow-hidden bg-white text-[#10213D]"
    >
      {/* -------------------------------------------------------------------- */}
      {/* HERO                                                                 */}
      {/* -------------------------------------------------------------------- */}

      <section className="relative min-h-[340px] overflow-hidden bg-[#082D68]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_20%,rgba(37,99,235,.42),transparent_30%),linear-gradient(115deg,#061B46_0%,#0B2C66_50%,transparent_50%)]" />

        <div className="absolute inset-y-0 right-0 w-full lg:w-[56%]">
          <img
            src={reviewerBanner}
            alt="Yashika Publications peer-review team"
            className="h-full w-full object-cover object-center"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#0B2C66] via-[#0B2C66]/40 to-transparent lg:from-[#0B2C66]/60" />
        </div>

        <motion.div
          animate={{
            y: [0, -14, 0],
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
              Editorial Workflow
            </motion.p>

            <motion.h1
              variants={fadeUp}
              className="text-white text-[36px] font-[600] leading-tight sm:text-[40px] md:text-[44px]"
            >
              Review Process
            </motion.h1>

            <motion.span
              variants={fadeUp}
              className="mt-2 block h-1 w-14 rounded-full bg-[#F57C20]"
            />

            <motion.p
              variants={fadeUp}
              className="mt-4 text-[18px] w-[500px] font-[500] leading-snug md:text-[20px] text-white/95"
            >
              A transparent, rigorous and ethical peer-review process designed
              to maintain scholarly quality.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* -------------------------------------------------------------------- */}
      {/* INTRODUCTION                                                         */}
      {/* -------------------------------------------------------------------- */}

      <section className="relative py-10">
        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-blue-50/70 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-orange-50 blur-3xl" />

        <div className="relative mx-auto grid max-w-[1260px] gap-10 px-5 sm:px-8 lg:grid-cols-[1fr_.95fr] lg:items-center lg:px-10">
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
          >
            <SectionHeading
              eyebrow="Quality Assurance"
              title="A Fair and Transparent Evaluation System"
              description="Every manuscript submitted to Yashika Publications undergoes a carefully structured evaluation process. Our editorial workflow is designed to protect academic integrity, ensure unbiased assessment and improve the quality of published research."
            />

            <div className="mt-7 grid gap-4 sm:grid-cols-2">
              {[
                "Double-blind evaluation",
                "Independent expert reviewers",
                "Ethical editorial decisions",
                "Constructive author feedback",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-2xl border border-slate-100 bg-white px-4 py-3 shadow-[0_8px_25px_rgba(15,54,110,.08)]"
                >
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-blue-50 text-[#125FEA]">
                    <Check size={17} strokeWidth={3} />
                  </span>

                  <span className="text-[14px] font-[500] text-[#0B2C66]">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
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
              className="relative rounded-[30px] bg-gradient-to-br from-blue-50 via-white to-orange-50 p-5 shadow-[0_24px_60px_rgba(10,50,110,.14)]"
            >
              <img
                src={peerReview}
                alt="Peer-review process"
                className="h-[330px] w-full rounded-[24px] object-cover sm:h-[390px]"
              />

              <div className="absolute bottom-8 left-8 right-8 rounded-[20px] border border-white/70 bg-white/85 p-4 shadow-xl backdrop-blur-xl">
                <div className="flex items-center gap-4">
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-[#125FEA] text-white">
                    <ShieldCheck size={24} />
                  </div>

                  <div>
                    <p className="text-[14px] font-bold text-[#0B2C66]">
                      Quality-focused review
                    </p>

                    <p className="mt-1 text-xs leading-5 text-slate-600">
                      Each manuscript is evaluated objectively and
                      confidentially.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* -------------------------------------------------------------------- */}
      {/* COMPLETE PROCESS                                                     */}
      {/* -------------------------------------------------------------------- */}

    <section className="bg-[#F8FAFE] py-8">
  <div className="mx-auto max-w-[1260px] px-5 sm:px-8 lg:px-10">
    <SectionHeading
      eyebrow="Step-by-Step"
      title="Complete Publication Review Process"
      description="From initial submission to final publication, every stage is completed through a systematic and quality-driven editorial workflow."
      centered
    />

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            className="relative mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4"
          >
            {processSteps.map(
              ({ icon: Icon, number, title, text }, index) => (
                <motion.article
                  key={title}
                  variants={fadeUp}
                  whileHover={{
                    y: -10,
                    scale: 1.015,
                  }}
                  className="group relative flex min-h-[240px] flex-col rounded-[24px] border border-slate-100 bg-white p-5 shadow-[0_12px_34px_rgba(14,53,112,.10)] transition-shadow duration-300 hover:shadow-[0_22px_50px_rgba(14,53,112,.17)]"
                >
                  <span className="absolute right-5 top-4 text-[28px] font-[500] text-blue-100 transition-colors group-hover:text-blue-100">
                    {number}
                  </span>

                  <div
                    className={`relative z-10 grid h-14 w-14 place-items-center rounded-2xl text-white shadow-lg ${
                      index % 3 === 1
                        ? "bg-[#F57C20] shadow-orange-200"
                        : "bg-gradient-to-br from-[#216DED] to-[#092F70] shadow-blue-200"
                    }`}
                  >
                    <Icon size={27} />
                  </div>

                  <h3 className="mt-6 text-[14px] font-[550] text-[#0B2C66]">
                    {title}
                  </h3>

                  <p className="mt-3 flex-1 text-[13px] leading-6 text-slate-600">
                    {text}
                  </p>

                 
                </motion.article>
              )
            )}
          </motion.div>
        </div>
      </section>

      {/* -------------------------------------------------------------------- */}
      {/* INITIAL SCREENING                                                    */}
      {/* -------------------------------------------------------------------- */}

      <section className="py-8">
        <div className="mx-auto max-w-[1260px] px-5 sm:px-8 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
            <motion.div
              variants={fadeLeft}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="relative"
            >
              <div className="absolute -left-5 -top-5 h-28 w-28 rounded-full bg-blue-100 blur-2xl" />

              <div className="relative overflow-hidden rounded-[30px] bg-[#0B2C66] p-5 shadow-[0_25px_60px_rgba(11,44,102,.22)]">
                <img
                  src={editorialTeam}
                  alt="Yashika Publications editorial assessment"
                  className="h-[380px] w-full rounded-[24px] object-cover"
                />

                <div className="absolute inset-x-10 bottom-10 rounded-[20px] border border-white/30 bg-[#0B2C66]/85 p-5 text-white backdrop-blur-xl">
                  <p className="text-[13px] font-[500] uppercase tracking-[0.18em] text-orange-300">
                    First Assessment
                  </p>

                  <h3 className="mt-2 text-[18px] font-[550]">
                    Editorial Screening
                  </h3>

                  <p className="mt-2 text-[13px] leading-6 text-white/80">
                    Only manuscripts meeting fundamental quality and ethical
                    requirements proceed to peer review.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={fadeRight}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
            >
              <SectionHeading
                eyebrow="Stage One"
                title="Initial Editorial Screening"
                description="Before peer review begins, the editorial office performs a preliminary assessment to confirm that the submission meets the journal's basic requirements."
              />

              <motion.div
                variants={stagger}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.15 }}
                className="mt-8 grid gap-4 sm:grid-cols-2"
              >
                {screeningChecks.map(({ icon: Icon, title, text }) => (
                  <motion.article
                    key={title}
                    variants={fadeUp}
                    whileHover={{
                      y: -6,
                    }}
                    className="rounded-[22px] border border-slate-100 bg-white p-5 shadow-[0_10px_30px_rgba(15,54,110,.09)]"
                  >
                    <div className="grid h-11 w-11 place-items-center rounded-xl bg-blue-50 text-[#125FEA]">
                      <Icon size={22} />
                    </div>

                    <h3 className="mt-4 font-[550] text-[#0B2C66]">
                      {title}
                    </h3>

                    <p className="mt-2 text-[13px] leading-6 text-slate-600">
                      {text}
                    </p>
                  </motion.article>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------------- */}
      {/* PEER REVIEW                                                          */}
      {/* -------------------------------------------------------------------- */}

      <section className="relative overflow-hidden bg-[#082D68] py-8 text-white">
        <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_1px_1px,#72A7FF_1px,transparent_0)] [background-size:26px_26px]" />

        <div className="absolute -right-28 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full border border-blue-300/20" />
        <div className="absolute -right-12 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full border border-blue-300/20" />

        <div className="relative mx-auto grid max-w-[1260px] gap-10 px-5 sm:px-8 lg:grid-cols-[.8fr_1.2fr] lg:items-center lg:px-10">
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <SectionHeading
              eyebrow="Stage Two"
              title="Double-Blind Peer Review"
              description="Reviewers and authors remain anonymous to one another, helping maintain independence, objectivity and fairness throughout the evaluation process."
              light
            />

            <div className="mt-8 rounded-[24px] border border-white/15 bg-white/10 p-6 backdrop-blur-md">
              <div className="flex items-start gap-4">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-[#F57C20] text-white">
                  <ShieldCheck size={24} />
                </div>

                <div>
                  <h3 className="text-[18px] font-[550]">
                    Confidential and Impartial
                  </h3>

                  <p className="mt-2 text-[13px] leading-6 text-blue-100/85">
                    Reviewers must not disclose manuscript information or use
                    unpublished findings for personal benefit.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            className="grid gap-3 sm:grid-cols-2"
          >
            {reviewCriteria.map((item, index) => (
              <motion.div
                key={item}
                variants={fadeUp}
                whileHover={{
                  x: 5,
                  backgroundColor: "rgba(255,255,255,.14)",
                }}
                className="flex items-center gap-4 rounded-[18px] border border-white/15 bg-white/[0.08] px-5 py-4 backdrop-blur-sm"
              >
                <span
                  className={`grid h-9 w-9 shrink-0 place-items-center rounded-full font-[550] ${
                    index % 4 === 3
                      ? "bg-[#F57C20] text-white"
                      : "bg-blue-500/25 text-blue-100"
                  }`}
                >
                  <Check size={17} strokeWidth={3} />
                </span>

                <p className="text-[13px] font-medium leading-6 text-white/90">
                  {item}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* -------------------------------------------------------------------- */}
      {/* DECISIONS                                                            */}
      {/* -------------------------------------------------------------------- */}

      <section className="py-8">
        <div className="mx-auto max-w-[1260px] px-5 sm:px-8 lg:px-10">
          <SectionHeading
            eyebrow="Editorial Outcome"
            title="Possible Editorial Decisions"
            description="After carefully considering the reviewers' reports, the editor selects the most appropriate decision for the manuscript."
            centered
          />

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
          >
            {decisions.map(({ icon: Icon, title, text, tone }) => {
              const toneClasses = {
                green: {
                  icon: "bg-emerald-500",
                  border: "hover:border-emerald-200",
                  label: "text-emerald-600",
                },
                blue: {
                  icon: "bg-[#125FEA]",
                  border: "hover:border-blue-200",
                  label: "text-[#125FEA]",
                },
                orange: {
                  icon: "bg-[#F57C20]",
                  border: "hover:border-orange-200",
                  label: "text-[#F57C20]",
                },
                red: {
                  icon: "bg-red-500",
                  border: "hover:border-red-200",
                  label: "text-red-500",
                },
              };

              return (
                <motion.article
                  key={title}
                  variants={fadeUp}
                  whileHover={{
                    y: -10,
                  }}
                  className={`group rounded-[24px] border border-slate-100 bg-white p-6 text-center shadow-[0_12px_35px_rgba(15,54,110,.10)] transition-all duration-300 ${toneClasses[tone].border}`}
                >
                  <div
                    className={`mx-auto grid h-16 w-16 place-items-center rounded-full text-white shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6 ${toneClasses[tone].icon}`}
                  >
                    <Icon size={29} />
                  </div>

                  <h3
                    className={`mt-5 text-[18px] font-[550] ${toneClasses[tone].label}`}
                  >
                    {title}
                  </h3>

                  <p className="mt-3 text-[13px] leading-6 text-slate-600">
                    {text}
                  </p>
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* -------------------------------------------------------------------- */}
      {/* TIMELINES                                                            */}
      {/* -------------------------------------------------------------------- */}

      <section className="bg-[#F8FAFE] py-8 lg:py-10">
        <div className="mx-auto max-w-[1260px] px-5 sm:px-8 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-[.75fr_1.25fr] lg:items-center">
            <motion.div
              variants={fadeLeft}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
            >
              <SectionHeading
                eyebrow="Expected Duration"
                title="Review Timeline"
                description="The duration of each stage may vary depending on reviewer availability, revision complexity and the nature of the manuscript."
              />

              <div className="mt-7 rounded-[22px] border border-orange-100 bg-orange-50 p-5">
                <div className="flex gap-4">
                  <Clock3
                    size={26}
                    className="shrink-0 text-[#F57C20]"
                  />

                  <p className="text-[13px] leading-6 text-slate-700">
                    Authors and reviewers are encouraged to respond promptly to
                    avoid unnecessary delays in the publication process.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.15 }}
              className="grid gap-4 sm:grid-cols-2"
            >
              {timelines.map(({ value, title, text }, index) => (
                <motion.article
                  key={title}
                  variants={fadeUp}
                  whileHover={{
                    y: -6,
                  }}
                  className="relative overflow-hidden rounded-[22px] border border-slate-100 bg-white p-6 shadow-[0_10px_30px_rgba(15,54,110,.09)]"
                >
                  <div
                    className={`absolute inset-y-0 left-0 w-1.5 ${
                      index % 2 === 0 ? "bg-[#125FEA]" : "bg-[#F57C20]"
                    }`}
                  />

                  <p
                    className={`text-[14px] font-[500] ${
                      index % 2 === 0
                        ? "text-[#125FEA]"
                        : "text-[#F57C20]"
                    }`}
                  >
                    {value}
                  </p>

                  <h3 className="mt-2 text-[15px] font-[550] text-[#0B2C66]">
                    {title}
                  </h3>

                  <p className="mt-2 text-[13px] text-slate-600">{text}</p>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------------- */}
      {/* ETHICS                                                               */}
      {/* -------------------------------------------------------------------- */}

      <section className="py-8">
        <div className="mx-auto max-w-[1260px] px-5 sm:px-8 lg:px-10">
          <div className="overflow-hidden rounded-[30px] bg-gradient-to-br from-[#0D63E8] via-[#084AB9] to-[#071F58] shadow-[0_28px_65px_rgba(7,45,115,.25)]">
            <div className="relative grid gap-8 px-6 py-10 sm:px-10 lg:grid-cols-[1.2fr_.8fr] lg:items-center lg:px-14 lg:py-14">
              <div className="absolute inset-0 opacity-15 [background-image:linear-gradient(135deg,transparent_42%,#fff_43%,transparent_44%)] [background-size:90px_90px]" />

              <motion.div
                variants={fadeLeft}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="relative"
              >
                <p className="text-[14px] font-[500] uppercase tracking-[0.2em] text-orange-300">
                  Ethical Commitment
                </p>

                <h2 className="mt-3 text-[22px] font-[550] text-white sm:text-[28px]">
                  Integrity at Every Stage
                </h2>

                <p className="mt-4 max-w-2xl text-[13px] leading-7 text-blue-100/85 sm:text-[14px]">
                  Editors, reviewers and authors are expected to follow strict
                  principles of confidentiality, transparency, fairness and
                  responsible research conduct.
                </p>

                <div className="mt-7 grid gap-3 sm:grid-cols-2">
                  {[
                    "Confidential evaluation",
                    "Conflict-of-interest disclosure",
                    "Objective editorial decisions",
                    "Respectful communication",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 text-[13px] font-[500] text-white/90"
                    >
                      <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full border border-blue-200/40 bg-white/10 shadow-[0_0_16px_rgba(102,164,255,.5)]">
                        <Check size={15} />
                      </span>

                      {item}
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.85,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                }}
                className="relative hidden justify-center lg:flex"
              >
                <motion.div
                  animate={{
                    y: [0, -10, 0],
                    rotate: [0, 3, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="grid h-52 w-52 place-items-center rounded-full border border-white/20 bg-white/10 shadow-[0_0_70px_rgba(87,153,255,.35)] backdrop-blur-md"
                >
                  <ShieldCheck size={100} className="text-blue-100" />
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------------- */}
      {/* FAQ                                                                  */}
      {/* -------------------------------------------------------------------- */}

      <section className="bg-[#F8FAFE] py-8">
        <div className="mx-auto max-w-[1000px] px-5 sm:px-8 lg:px-10">
          <SectionHeading
            eyebrow="Help Center"
            title="Frequently Asked Questions"
            description="Find answers to common questions about the editorial and peer-review process."
            centered
          />

          <div className="mt-10 space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;

              return (
                <motion.article
                  key={faq.question}
                  layout
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.07,
                  }}
                  className={`overflow-hidden rounded-[20px] border bg-white shadow-[0_8px_28px_rgba(15,54,110,.08)] transition-colors ${
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
                        <UserRoundCheck size={19} />
                      </span>

                      <span className="text-[13px] font-[500] leading-6 text-[#0B2C66] sm:text-[14px]">
                        {faq.question}
                      </span>
                    </span>

                    <motion.span
                      animate={{
                        rotate: isOpen ? 180 : 0,
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
                        <p className="px-5 pb-6 pl-5 text-[13px] leading-7 text-slate-600 sm:px-6 sm:pl-20">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------------- */}
      {/* CTA                                                                  */}
      {/* -------------------------------------------------------------------- */}

      <section className="relative overflow-hidden bg-[#071F58] py-12 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_50%,rgba(34,104,235,.45),transparent_30%),radial-gradient(circle_at_90%_20%,rgba(245,124,32,.18),transparent_25%)]" />

        <motion.div
          animate={{
            x: [0, 20, 0],
            rotate: [0, 4, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -right-10 -top-24 h-72 w-72 rounded-full border border-blue-300/20"
        />

        <div className="relative mx-auto flex max-w-[1260px] flex-col items-center justify-between gap-8 px-5 text-center sm:px-8 lg:flex-row lg:px-10 lg:text-left">
          <div className="flex max-w-3xl flex-col items-center gap-5 sm:flex-row lg:items-center">
            <div className="grid h-16 w-16 shrink-0 place-items-center rounded-full border border-white/25 bg-white/10 shadow-[0_0_35px_rgba(58,126,245,.28)]">
              <Mail size={31} />
            </div>

            <div>
              <h2 className="text-[18px] font-[550] sm:text-[24px]">
                Need Help With the Review Process?
              </h2>

              <p className="mt-2 text-[13px] leading-6 text-blue-100/85 sm:text-[14px]">
                Contact our editorial office for guidance regarding manuscript
                submission, peer review or editorial decisions.
              </p>
            </div>
          </div>

          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#F57C20] px-2 py-3.5 text-[12px] font-[500] text-white shadow-lg shadow-orange-950/20 transition duration-300 hover:-translate-y-1 hover:bg-[#FF8D35]"
            >
              Contact Editorial Office
              <ArrowRight size={17} />
            </Link>

            <Link
              to="/submit-your-paper"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/45 px-2 py-3.5 text-[12px] font-[500] text-white transition duration-300 hover:-translate-y-1 hover:bg-white hover:text-[#0B2C66]"
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