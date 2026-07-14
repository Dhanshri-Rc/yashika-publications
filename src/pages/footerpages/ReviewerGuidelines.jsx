import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Award,
  BookOpen,
  Check,
  CheckCircle2,
  ChevronDown,
  CircleUserRound,
  Clock3,
  FileCheck2,
  FileSearch,
  GraduationCap,
  Lightbulb,
  LockKeyhole,
  Mail,
  MessageSquareText,
  Microscope,
  SearchCheck,
  ShieldCheck,
  Sparkles,
  Target,
  Trophy,
  UserRoundCheck,
  UsersRound,
} from "lucide-react";

import logo from "../../assets/yashika-publication-logo.webp";
import reviewerBanner from "../../assets/yashika-publication-reviewers-banner.webp";
import editorialTeam from "../../assets/yashika-publication-editorial-team.webp";
import peerReview from "../../assets/yashika-publication-peer-review-process.webp";

const stats = [
  {
    icon: BookOpen,
    title: "Double Blind Review",
    text: "Ensuring impartiality through anonymous evaluation.",
    tone: "blue",
  },
  {
    icon: ShieldCheck,
    title: "Ethical Review",
    text: "Upholding integrity, transparency and publication ethics.",
    tone: "orange",
  },
  {
    icon: UsersRound,
    title: "Expert Reviewers",
    text: "A global community of domain experts and research leaders.",
    tone: "blue",
  },
  {
    icon: Clock3,
    title: "Fast Decisions",
    text: "Timely reviews for efficient editorial decisions.",
    tone: "orange",
  },
];

const process = [
  {
    icon: Mail,
    title: "Invitation",
    text: "Reviewer is invited to review a manuscript.",
  },
  {
    icon: CheckCircle2,
    title: "Accept Review",
    text: "Reviewer accepts the invitation and confirms availability.",
  },
  {
    icon: FileSearch,
    title: "Evaluate Manuscript",
    text: "Carefully read and assess the quality of the submission.",
  },
  {
    icon: MessageSquareText,
    title: "Submit Comments",
    text: "Provide constructive feedback and recommendation.",
  },
  {
    icon: Award,
    title: "Editorial Decision",
    text: "Editors make decisions based on reviewer feedback.",
  },
  {
    icon: BookOpen,
    title: "Publication",
    text: "High quality research is published and disseminated.",
  },
];

const responsibilities = [
  {
    icon: LockKeyhole,
    title: "Confidentiality",
    text: "Maintain complete confidentiality of the manuscript.",
  },
  {
    icon: SearchCheck,
    title: "Originality Check",
    text: "Ensure the work is original and not previously published.",
  },
  {
    icon: MessageSquareText,
    title: "Constructive Feedback",
    text: "Provide clear, respectful and helpful feedback.",
  },
  {
    icon: Clock3,
    title: "Timely Review",
    text: "Submit reviews within the agreed timeline for efficiency.",
  },
  {
    icon: UsersRound,
    title: "Conflict of Interest",
    text: "Decline reviews with potential conflicts of interest.",
  },
  {
    icon: ShieldCheck,
    title: "Ethical Standards",
    text: "Follow ethical guidelines and uphold research integrity.",
  },
];

const criteria = [
  { icon: Lightbulb, title: "Originality", value: 90 },
  { icon: Microscope, title: "Methodology", value: 85 },
  { icon: FileCheck2, title: "Technical Quality", value: 80 },
  { icon: GraduationCap, title: "Presentation", value: 85 },
  { icon: BookOpen, title: "References", value: 75 },
  { icon: Target, title: "Significance", value: 85 },
];

const benefits = [
  {
    icon: Award,
    title: "Certificate of Reviewing",
    text: "Receive an official certificate recognizing your valuable contribution.",
  },
  {
    icon: Trophy,
    title: "Recognition",
    text: "Get acknowledged on our website and reviewer recognition platform.",
  },
  {
    icon: GraduationCap,
    title: "Professional Development",
    text: "Enhance your academic profile and stay updated with the latest research.",
  },
];

const ethics = [
  "Treat every manuscript as confidential.",
  "Do not share or discuss the manuscript.",
  "Use the information only for review purposes.",
  "Report ethical concerns to the editor.",
  "Decline if you have a conflict of interest.",
  "Respect authors and their work at all times.",
];

const faqs = [
  {
    q: "How long does the review process take?",
    a: "Reviewers are generally requested to submit their report within the timeline stated in the invitation email. If extra time is required, contact the editorial office promptly.",
  },
  {
    q: "What is expected in a good review?",
    a: "A good review is objective, specific, respectful and evidence-based. It clearly identifies strengths, weaknesses and practical improvements.",
  },
  {
    q: "Will my identity be revealed to the authors?",
    a: "No. Yashika Publications follows a double-blind review process in which reviewer and author identities remain confidential.",
  },
  {
    q: "Can I suggest improvements to the manuscript?",
    a: "Yes. Constructive recommendations that improve clarity, methodology, analysis, presentation and scholarly contribution are strongly encouraged.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } };

function SectionHeading({ children, centered = false }) {
  return (
    <div className={centered ? "text-center" : "text-left"}>
      <h2 className="text-[24px] font-[600] tracking-tight text-[#0B2C66] sm:text-[28px]">
        {children}
      </h2>
      <span
        className={`mt-3 block h-1 w-12 rounded-full bg-[#F57C20] ${centered ? "mx-auto" : ""}`}
      />
    </div>
  );
}

function ProgressRing({ value }) {
  const r = 38;
  const c = 2 * Math.PI * r;
  const offset = c - (value / 100) * c;
  return (
    <div className="relative h-24 w-24">
      <svg viewBox="0 0 96 96" className="h-full w-full -rotate-90">
        <circle
          cx="48"
          cy="48"
          r={r}
          fill="none"
          stroke="#E7EEFA"
          strokeWidth="8"
        />
        <motion.circle
          cx="48"
          cy="48"
          r={r}
          fill="none"
          stroke="#125FEA"
          strokeWidth="8"
          strokeLinecap="round"
          strokeDasharray={c}
          initial={{ strokeDashoffset: c }}
          whileInView={{ strokeDashoffset: offset }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1.1, ease: "easeOut" }}
        />
      </svg>
      <div className="absolute inset-0 grid place-items-center text-[22px] font-[600] text-[#0B2C66]">
        {value}%
      </div>
    </div>
  );
}

export default function ReviewerGuidelines() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="overflow-hidden bg-white text-[#10213D]"
    >
      {/* HERO */}
      <section className="relative min-h-[340px] overflow-hidden bg-[#082F70]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(35,101,231,.35),transparent_30%),linear-gradient(115deg,#071F4F_0%,#0B2C66_48%,transparent_48%)]" />
        <div className="absolute inset-y-0 right-0 w-full lg:w-[57%]">
          <img
            src={reviewerBanner}
            alt="Professional reviewer and editor team"
            className="h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B2C66] via-[#0B2C66]/20 to-transparent lg:from-[#0B2C66]/45" />
        </div>
        <div className="absolute -left-20 top-0 h-72 w-72 rotate-45 border border-blue-400/20" />
        <div className="absolute left-[37%] top-[-120px] h-[520px] w-36 rotate-[28deg] bg-blue-500/35 blur-[1px]" />
        <div className="absolute left-[43%] top-[-100px] h-[520px] w-1 rotate-[28deg] bg-[#F57C20]" />

        <div className="relative mx-auto flex min-h-[320px] max-w-[1260px] items-center px-5 py-12 sm:px-8 lg:px-10">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="show"
            className="max-w-[620px]"
          >
            <motion.img
              variants={fadeUp}
              src={logo}
              alt="Yashika Publications"
              className="mb-7 h-10 w-auto object-contain sm:h-12"
            />
            <motion.h1
              variants={fadeUp}
              className="text-white text-[36px] font-[600] leading-tight sm:text-[40px] md:text-[44px]"
            >
              Reviewer Guidelines
            </motion.h1>
            <motion.span
              variants={fadeUp}
              className="mt-2 block h-1 w-12 rounded-full bg-[#F57C20]"
            />
            <motion.p
              variants={fadeUp}
              className="mt-4 text-[18px] font-[500] leading-snug md:text-[22px] text-white/95"
            >
              Maintaining Excellence Through
              <br className="hidden sm:block" /> Rigorous and Ethical Peer
              Review
            </motion.p>
            {/* <motion.div variants={fadeUp} className="mt-5 flex flex-wrap items-center gap-2 text-xs font-medium text-white/80 sm:text-sm">
              <Link to="/" className="hover:text-white">Home</Link><span>/</span><Link to="/reviewers" className="hover:text-white">For Reviewers</Link><span>/</span><span className="font-semibold text-[#FFA64D]">Reviewer Guidelines</span>
            </motion.div> */}
          </motion.div>
        </div>
      </section>

      {/* WELCOME + STATS */}
      <section className="relative bg-[radial-gradient(circle_at_0%_50%,rgba(64,125,238,.08),transparent_25%),radial-gradient(circle_at_100%_40%,rgba(64,125,238,.08),transparent_25%)] py-10">
        <div className="mx-auto max-w-[1260px] px-5 sm:px-8 lg:px-10">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="grid gap-7 lg:grid-cols-2 lg:items-center"
          >
            <motion.div variants={fadeUp}>
              <SectionHeading>
                Welcome to the
                <br />
                Reviewer Community
              </SectionHeading>
            </motion.div>
            <motion.p
              variants={fadeUp}
              className="text-[14px] leading-7 text-slate-600 sm:text-[16px]"
            >
              At Yashika Publications, our reviewers play a vital role in
              maintaining the highest standards of academic integrity and
              scholarly excellence. Your expertise helps us ensure that only
              rigorous, ethical, and impactful research reaches the world.
            </motion.p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
          >
            {stats.map(({ icon: Icon, title, text, tone }) => (
              <motion.article
                key={title}
                variants={fadeUp}
                whileHover={{ y: -8, scale: 1.015 }}
                className="group rounded-[24px] border border-white/80 bg-white/75 p-6 text-center shadow-[0_14px_35px_rgba(18,60,120,.11)] backdrop-blur-xl"
              >
                <div
                  className={`mx-auto grid h-12 w-12 place-items-center rounded-full text-white shadow-lg transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110 ${tone === "orange" ? "bg-[#F57C20] shadow-orange-200" : "bg-[#125FEA] shadow-blue-200"}`}
                >
                  <Icon size={23} />
                </div>
                <h3 className="mt-5 text-[15px] font-[550] text-[#0B2C66]">
                  {title}
                </h3>
                <p className="mt-2 text-[14px] leading-6 text-slate-600">
                  {text}
                </p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="py-8">
        <div className="mx-auto max-w-[1260px] px-5 sm:px-8 lg:px-10">
          <SectionHeading centered>The Review Process</SectionHeading>

          <div className="relative mt-12">
            <div className="absolute left-[7%] right-[7%] top-4 hidden h-[3px] bg-gradient-to-r from-[#125FEA] via-[#347CF3] to-[#125FEA] lg:block" />

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.15 }}
              className="grid items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-6"
            >
              {process.map(({ icon: Icon, title, text }, index) => (
                <motion.article
                  key={title}
                  variants={fadeUp}
                  whileHover={{ y: -7, scale: 1.03 }}
                  className="relative flex h-[240px] flex-col items-center rounded-[20px] border border-slate-100 bg-white px-4 pt-9 pb-6 text-center shadow-[0_10px_28px_rgba(16,56,108,.12)]"
                >
                  <div className="absolute left-1/2 top-0 z-10 flex h-8 w-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#125FEA] text-sm font-semibold text-white ring-4 ring-white">
                    {index + 1}
                  </div>

                  <Icon className="text-[#125FEA]" size={30} />

                  <h3 className="mt-4 flex h-12 items-center justify-center text-[15px] font-semibold text-[#0B2C66]">
                    {title}
                  </h3>

                  <p className="mt-2 flex-1 text-sm leading-6 text-slate-600">
                    {text}
                  </p>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* RESPONSIBILITIES */}
      <section className="bg-[#FBFCFF] py-8">
        <div className="mx-auto max-w-[1260px] px-5 sm:px-8 lg:px-10">
          <SectionHeading>Reviewer Responsibilities</SectionHeading>
          <div className="mt-9 grid gap-10 lg:grid-cols-[1.15fr_.85fr] lg:items-center">
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.15 }}
              className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
            >
              {responsibilities.map(({ icon: Icon, title, text }, index) => (
                <motion.article
                  key={title}
                  variants={fadeUp}
                  whileHover={{
                    y: -6,
                    boxShadow: "0 18px 40px rgba(17,67,139,.15)",
                  }}
                  className="rounded-[20px] border border-slate-100 bg-white p-5 shadow-[0_8px_24px_rgba(17,67,139,.09)]"
                >
                  <div
                    className={`grid h-11 w-11 place-items-center rounded-full text-white ${index % 3 === 1 ? "bg-[#F57C20]" : "bg-[#125FEA]"}`}
                  >
                    <Icon size={21} />
                  </div>
                  <h3 className="mt-4 text-[14px] font-[550] text-[#0B2C66]">
                    {title}
                  </h3>
                  <p className="mt-2 text-[13px] leading-5 text-slate-600">
                    {text}
                  </p>
                </motion.article>
              ))}
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="rounded-[28px] bg-gradient-to-br from-blue-50 to-white p-5"
              >
                <img
                  src={editorialTeam}
                  alt="Reviewer working on laptop"
                  className="mx-auto max-h-[360px] w-full rounded-[22px] object-cover"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CRITERIA */}
      <section className="py-8">
        <div className="mx-auto max-w-[1260px] px-5 sm:px-8 lg:px-10">
          <SectionHeading>Evaluation Criteria</SectionHeading>
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6"
          >
            {criteria.map(({ icon: Icon, title, value }) => (
              <motion.article
                key={title}
                variants={fadeUp}
                whileHover={{ y: -7 }}
                className="rounded-[20px] border border-slate-100 bg-white p-4 text-center shadow-[0_10px_28px_rgba(16,56,108,.11)]"
              >
                <ProgressRing value={value} />
                <div className="mt-2 flex items-center justify-center gap-2 text-[#0B2C66]">
                  <Icon size={16} className="text-[#125FEA]" />
                  <span className="text-[12px] font-[550] sm:text-[14px]">
                    {title}
                  </span>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="pb-16">
        <div className="mx-auto max-w-[1260px] px-5 sm:px-8 lg:px-10">
          <SectionHeading>Reviewer Benefits</SectionHeading>
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            className="mt-8 grid gap-5 lg:grid-cols-3"
          >
            {benefits.map(({ icon: Icon, title, text }, index) => (
              <motion.article
                key={title}
                variants={fadeUp}
                whileHover={{ y: -8, scale: 1.01 }}
                className="flex items-center gap-5 rounded-[22px] border border-slate-100 bg-white p-6 shadow-[0_12px_30px_rgba(16,56,108,.11)]"
              >
                <div
                  className={`grid h-16 w-16 shrink-0 place-items-center rounded-full text-white shadow-lg ${index === 1 ? "bg-[#F57C20] shadow-orange-200" : "bg-gradient-to-br from-[#125FEA] to-[#072D73] shadow-blue-200"}`}
                >
                  <Icon size={30} />
                </div>
                <div>
                  <h3 className="font-[550] text-[#0B2C66]">{title}</h3>
                  <p className="mt-2 text-[13px] leading-6 text-slate-600">
                    {text}
                  </p>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ETHICS */}
      <section className="relative overflow-hidden bg-[#082D68] py-8 text-white">
        <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_1px_1px,#57A0FF_1px,transparent_0)] [background-size:24px_24px]" />
        <div className="absolute -right-16 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full border border-blue-300/20" />
        <div className="relative mx-auto grid max-w-[1260px] gap-8 px-5 sm:px-8 lg:grid-cols-[1.4fr_.6fr] lg:px-10">
          <div>
            <h2 className="text-[24px] font-[550] sm:text-[28px]">
              Ethics &amp; Confidentiality
            </h2>
            <span className="mt-2 block h-1 w-12 bg-[#F57C20]" />
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {ethics.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 text-[14px] text-white/90"
                >
                  <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full border border-blue-300 shadow-[0_0_14px_rgba(76,146,255,.7)]">
                    <Check size={14} />
                  </span>
                  {item}
                </div>
              ))}
            </div>
          </div>
          <motion.div
            animate={{ scale: [1, 1.04, 1], opacity: [0.85, 1, 0.85] }}
            transition={{ duration: 3.5, repeat: Infinity }}
            className="hidden items-center justify-center lg:flex"
          >
            <div className="grid h-40 w-40 place-items-center rounded-full border border-blue-300/30 bg-blue-500/10 shadow-[0_0_65px_rgba(40,116,255,.32)]">
              <ShieldCheck size={80} className="text-blue-300" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-8">
        <div className="mx-auto max-w-[1260px] px-5 sm:px-8 lg:px-10">
          <SectionHeading>Frequently Asked Questions</SectionHeading>
          <div className="mt-7 grid gap-4 lg:grid-cols-2">
            {faqs.map((faq, index) => {
              const open = openFaq === index;
              return (
                <motion.div
                  key={faq.q}
                  layout
                  className="text-[14px]  font-medium overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-[0_7px_22px_rgba(16,56,108,.09)]"
                >
                  <button
                    onClick={() => setOpenFaq(open ? null : index)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                  >
                    <span className="flex items-center gap-3 font-[550] text-[#0B2C66]">
                      <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-[#125FEA] text-white ">
                        <CircleUserRound size={16} />
                      </span>
                      {faq.q}
                    </span>
                    <motion.span animate={{ rotate: open ? 180 : 0 }}>
                      <ChevronDown size={19} />
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {open && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <p className="px-5 pb-5 pl-16 text-[13px] leading-6 text-slate-600">
                          {faq.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-gradient-to-r from-[#0D63E8] via-[#064DCA] to-[#071F58] py-8 text-white">
        <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(135deg,transparent_40%,#fff_41%,transparent_42%)] [background-size:70px_70px]" />
        <div className="relative mx-auto flex max-w-[1260px] flex-col items-center justify-between gap-6 px-5 sm:px-8 lg:flex-row lg:px-10">
          <div className="flex items-center gap-5">
            <div className="grid h-16 w-16 shrink-0 place-items-center rounded-full border border-white/30 bg-white/10">
              <UserRoundCheck size={30} className="text-white" />
            </div>
            <div>
              <h2 className="text-[24px] font-[550] sm:text-[28px]">
                Become a Reviewer
              </h2>
              <p className="mt-1 max-w-xl text-[14px] text-white/85">
                Join our global community of experts and contribute to the
                advancement of knowledge and society.
              </p>
            </div>
          </div>
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#F57C20] px-6 py-3 text-[13px] font-[500] shadow-lg shadow-orange-950/20 transition hover:-translate-y-1 hover:bg-[#ff8d34]"
            >
              Apply as Reviewer <Sparkles size={17} />
            </Link>
            <a
              href="mailto:info@yashikapublications.com"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/55 px-6 py-3 text-[13px] font-[500] transition hover:-translate-y-1 hover:bg-white hover:text-[#0B2C66]"
            >
              Contact Editorial Office <Mail size={17} />
            </a>
          </div>
        </div>
      </section>
    </motion.main>
  );
}
