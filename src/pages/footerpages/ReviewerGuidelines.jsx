import React from "react";
import { motion } from "framer-motion";
import {
  BookOpen,
  CheckCircle2,
  Clock,
  FileCheck,
  Languages,
  Lock,
  Mail,
  MessageSquare,
  Scale,
  Search,
  ShieldCheck,
  Star,
  UserCheck,
  XCircle,
} from "lucide-react";

import heroImg from "../../assets/yashika-publication-home-hero-banner.webp";

/* -------------------------------------------------------------------------- */
/*                                  PAGE DATA                                 */
/* -------------------------------------------------------------------------- */

const quickGuidelines = [
  {
    icon: UserCheck,
    title: "Accept Invitation",
    description: "Confirm your availability and expertise before accepting.",
    href: "#review-process",
  },
  {
    icon: Scale,
    title: "Conflict of Interest",
    description: "Disclose any relationship that may affect impartiality.",
    href: "#reviewer-ethics",
  },
  {
    icon: Lock,
    title: "Confidentiality",
    description: "Treat the manuscript and review process as confidential.",
    href: "#reviewer-ethics",
  },
  {
    icon: Clock,
    title: "Timely Review",
    description: "Complete and submit your review within the given deadline.",
    href: "#review-process",
  },
  {
    icon: MessageSquare,
    title: "Constructive Feedback",
    description: "Provide clear, respectful, and actionable recommendations.",
    href: "#reviewer-responsibilities",
  },
  {
    icon: ShieldCheck,
    title: "Ethical Responsibility",
    description: "Identify ethical, plagiarism, or integrity concerns.",
    href: "#reviewer-ethics",
  },
];

const responsibilities = [
  {
    icon: Search,
    title: "Evaluate Originality",
    description:
      "Determine whether the manuscript presents original ideas, findings, methods, or interpretations.",
  },
  {
    icon: FileCheck,
    title: "Assess Methodology",
    description:
      "Check whether the research design, data collection, and analytical methods are appropriate and clearly explained.",
  },
  {
    icon: BookOpen,
    title: "Verify Literature",
    description:
      "Ensure that the manuscript cites relevant, current, and credible scholarly literature.",
  },
  {
    icon: Star,
    title: "Assess Significance",
    description:
      "Evaluate the academic contribution, practical relevance, and potential impact of the research.",
  },
  {
    icon: Languages,
    title: "Review Presentation",
    description:
      "Assess the clarity, organization, language quality, figures, tables, and overall readability.",
  },
  {
    icon: ShieldCheck,
    title: "Check Research Ethics",
    description:
      "Identify possible plagiarism, fabricated data, improper attribution, or missing ethical approvals.",
  },
  {
    icon: Scale,
    title: "Make a Recommendation",
    description:
      "Recommend acceptance, revision, or rejection based only on the manuscript's academic merit.",
  },
  {
    icon: Lock,
    title: "Protect Confidentiality",
    description:
      "Do not share, discuss, copy, or use unpublished manuscript material for personal benefit.",
  },
];

const processSteps = [
  {
    number: "1",
    icon: Mail,
    title: "Review Invitation",
    description:
      "The reviewer receives an invitation containing the manuscript title, abstract, and deadline.",
  },
  {
    number: "2",
    icon: UserCheck,
    title: "Accept or Decline",
    description:
      "Accept only when the manuscript matches your expertise and no conflict of interest exists.",
  },
  {
    number: "3",
    icon: BookOpen,
    title: "Read Manuscript",
    description:
      "Evaluate the manuscript carefully, including all sections, figures, tables, and references.",
  },
  {
    number: "4",
    icon: MessageSquare,
    title: "Prepare Comments",
    description:
      "Write structured comments for the authors and confidential remarks for the editor.",
  },
  {
    number: "5",
    icon: FileCheck,
    title: "Submit Review",
    description:
      "Submit the completed review form and final recommendation within the assigned deadline.",
  },
  {
    number: "6",
    icon: Scale,
    title: "Editorial Decision",
    description:
      "The editor evaluates all reviewer reports and communicates the final decision to the author.",
  },
];

const reviewCriteria = [
  {
    criterion: "Originality",
    description:
      "The manuscript provides a novel contribution and avoids unnecessary duplication.",
    priority: "High",
  },
  {
    criterion: "Research Objective",
    description:
      "The problem statement, research questions, and objectives are clearly defined.",
    priority: "High",
  },
  {
    criterion: "Methodology",
    description:
      "The research design, sampling, instruments, and analysis are appropriate.",
    priority: "High",
  },
  {
    criterion: "Results",
    description:
      "Findings are accurately presented and supported by suitable evidence.",
    priority: "High",
  },
  {
    criterion: "Discussion",
    description:
      "The authors interpret the results and connect them with existing research.",
    priority: "Medium",
  },
  {
    criterion: "References",
    description:
      "Sources are relevant, recent, correctly cited, and appropriately balanced.",
    priority: "Medium",
  },
  {
    criterion: "Language & Structure",
    description:
      "The manuscript is clearly written, logically structured, and easy to understand.",
    priority: "Medium",
  },
  {
    criterion: "Ethical Compliance",
    description:
      "The study follows accepted ethical practices and provides required approvals.",
    priority: "High",
  },
];

const ethicalResponsibilities = [
  "Maintain complete confidentiality throughout and after the review process.",
  "Declare any personal, professional, academic, or financial conflict of interest.",
  "Do not use unpublished information or ideas for personal or professional advantage.",
  "Avoid personal criticism, offensive language, or unsupported accusations.",
  "Report suspected plagiarism, duplicate publication, data manipulation, or unethical research.",
  "Evaluate the manuscript objectively without discrimination or personal bias.",
  "Do not contact the authors directly regarding the manuscript.",
  "Return the review within the specified deadline or request an extension promptly.",
];

const goodPractices = [
  "Focus comments on the research and not on the authors.",
  "Begin with a concise summary of the manuscript.",
  "Separate major comments from minor comments.",
  "Explain the reason behind every important recommendation.",
  "Suggest practical ways to improve the manuscript.",
  "Mention both strengths and weaknesses.",
  "Use professional, respectful, and clear language.",
];

const prohibitedPractices = [
  "Do not reveal your identity when the journal uses anonymous review.",
  "Do not share the manuscript with colleagues without editorial permission.",
  "Do not request unnecessary citations to your own publications.",
  "Do not rewrite the manuscript according to your personal writing style.",
  "Do not delay the review without informing the editorial office.",
  "Do not make acceptance dependent on irrelevant changes.",
  "Do not retain or distribute manuscript copies after completing the review.",
];

const recommendationOptions = [
  {
    title: "Accept",
    description:
      "The manuscript is suitable for publication without substantial changes.",
  },
  {
    title: "Minor Revision",
    description:
      "Small corrections are required, but the main research is academically sound.",
  },
  {
    title: "Major Revision",
    description:
      "Substantial changes are required before the manuscript can be reconsidered.",
  },
  {
    title: "Reject",
    description:
      "The manuscript has serious methodological, ethical, originality, or relevance concerns.",
  },
];

/* -------------------------------------------------------------------------- */
/*                                ANIMATIONS                                  */
/* -------------------------------------------------------------------------- */

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 28,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.62,
      ease: "easeOut",
    },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

/* -------------------------------------------------------------------------- */
/*                              SHARED COMPONENTS                             */
/* -------------------------------------------------------------------------- */

function SectionHeading({ children, subtitle }) {
  return (
    <div className="mb-5">
      <h2 className="text-[16px] font-semibold uppercase tracking-[0.02em] text-[#075bc7] sm:text-[18px]">
        {children}
      </h2>

      <div className="mt-2 h-[2px] w-[38px] rounded-full bg-[#ff7200]" />

      {subtitle && (
        <p className="mt-3 max-w-[850px] text-[11px] font-medium leading-[1.7] text-[#44556d] sm:text-[12px]">
          {subtitle}
        </p>
      )}
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                                  HERO                                     */
/* -------------------------------------------------------------------------- */

function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div
        className="relative min-h-[440px] bg-cover bg-center bg-no-repeat sm:min-h-[470px] lg:min-h-[500px]"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div className="relative z-10 mx-auto flex min-h-[440px] max-w-[1400px] items-center px-5 py-10 sm:min-h-[470px] sm:px-8 lg:min-h-[500px] lg:px-14">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="w-full max-w-[510px]"
          >
            <motion.div
              whileHover={{ x: 4 }}
              className="mb-6 flex flex-wrap items-center gap-2 text-[13px] font-semibold"
            >
              <a
                href="/"
                className="text-[#ff7600] transition-colors hover:text-white"
              >
                Home
              </a>

              <span className="text-white/75">›</span>

              <span className="text-white">Reviewer Guidelines</span>
            </motion.div>

            <h1 className="max-w-[520px] text-[34px] font-semibold leading-none tracking-[-0.8px] text-white sm:text-[36px] md:text-[38px] lg:text-[40px]">
              Reviewer Guidelines
            </h1>

            <div className="mt-5 h-[3px] w-[45px] rounded-full bg-[#ff7900]" />

            <p className="mt-5 max-w-[450px] text-[16px] font-medium leading-[1.7] text-white sm:text-[18px]">
              Artificial Intelligence Education Research
              <br className="hidden sm:block" />
              and Review (AIERRR)
            </p>

            <p className="mt-5 max-w-[485px] text-[13px] font-medium leading-[1.85] text-white/90 sm:text-[14px]">
              These guidelines help reviewers conduct fair, confidential,
              constructive, and timely peer reviews while maintaining the
              academic and ethical standards of the journal.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="pointer-events-none absolute -bottom-[1px] left-0 h-[34px] w-full bg-white [clip-path:ellipse(62%_38%_at_50%_100%)] sm:h-[46px]" />
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*                              QUICK GUIDELINES                              */
/* -------------------------------------------------------------------------- */

function QuickGuidelines() {
  return (
    <motion.section
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      whileHover={{
        y: -4,
        boxShadow: "0 14px 30px rgba(8,66,145,0.11)",
      }}
      className="grid overflow-hidden rounded-[8px] border border-[#dbe6f2] bg-[#f4f8ff] shadow-[0_4px_16px_rgba(8,66,145,0.06)] sm:grid-cols-2 lg:grid-cols-3"
    >
      {quickGuidelines.map((item, index) => {
        const Icon = item.icon;

        return (
          <motion.a
            key={item.title}
            href={item.href}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.4,
              delay: index * 0.06,
            }}
            whileHover={{
              y: -4,
              backgroundColor: "#eaf3ff",
            }}
            className="group flex min-h-[112px] items-start gap-4 border-b border-[#d9e4f0] px-5 py-5 sm:[&:nth-child(odd)]:border-r lg:border-r lg:[&:nth-child(3n)]:border-r-0"
          >
            <motion.div
              whileHover={{
                scale: 1.08,
                rotate: 3,
              }}
              className="flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-full bg-white text-[#075bc7] shadow-[0_5px_16px_rgba(8,66,145,0.11)]"
            >
              <Icon className="h-[22px] w-[22px]" strokeWidth={1.7} />
            </motion.div>

            <div>
              <h3 className="text-[12px] font-bold leading-[1.4] text-[#072d74]">
                {item.title}
              </h3>

              <p className="mt-2 text-[10px] font-medium leading-[1.6] text-[#394c67] sm:text-[11px]">
                {item.description}
              </p>
            </div>
          </motion.a>
        );
      })}
    </motion.section>
  );
}

/* -------------------------------------------------------------------------- */
/*                         REVIEWER RESPONSIBILITIES                          */
/* -------------------------------------------------------------------------- */

function ReviewerResponsibilities() {
  return (
    <section id="reviewer-responsibilities">
      <SectionHeading
        subtitle="Reviewers should provide an impartial, evidence-based, and constructive assessment of every manuscript."
      >
        Reviewer Responsibilities
      </SectionHeading>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.08 }}
        className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
      >
        {responsibilities.map((item) => {
          const Icon = item.icon;

          return (
            <motion.article
              key={item.title}
              variants={fadeUp}
              whileHover={{
                y: -7,
                scale: 1.012,
                boxShadow: "0 15px 30px rgba(8,66,145,0.12)",
              }}
              className="group flex min-h-[190px] flex-col rounded-[8px] border border-[#dce5ef] bg-white px-5 py-5 shadow-[0_3px_13px_rgba(8,66,145,0.05)]"
            >
              <motion.div
                whileHover={{
                  scale: 1.09,
                  rotate: 4,
                }}
                className="flex h-[46px] w-[46px] items-center justify-center rounded-full bg-[#edf4ff] text-[#075bc7]"
              >
                <Icon className="h-[24px] w-[24px]" strokeWidth={1.7} />
              </motion.div>

              <h3 className="mt-4 text-[13px] font-bold text-[#072d74]">
                {item.title}
              </h3>

              <p className="mt-3 text-[10px] font-medium leading-[1.7] text-[#394c67] sm:text-[11px]">
                {item.description}
              </p>
            </motion.article>
          );
        })}
      </motion.div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*                              REVIEW PROCESS                                */
/* -------------------------------------------------------------------------- */

function ReviewProcess() {
  return (
    <section id="review-process">
      <SectionHeading
        subtitle="The peer-review process follows a structured workflow to ensure fairness, accuracy, and timely editorial decisions."
      >
        Peer Review Process
      </SectionHeading>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.08 }}
        className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
      >
        {processSteps.map((step) => {
          const Icon = step.icon;

          return (
            <motion.article
              key={step.title}
              variants={fadeUp}
              whileHover={{
                y: -7,
                boxShadow: "0 15px 30px rgba(8,66,145,0.12)",
              }}
              className="group flex min-h-[180px] gap-5 rounded-[8px] border border-[#dbe6f2] bg-white px-5 py-5"
            >
              <div className="flex flex-col items-center gap-4">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="flex h-[32px] w-[32px] items-center justify-center rounded-full bg-[#07347d] text-[12px] font-bold text-white"
                >
                  {step.number}
                </motion.div>

                <motion.div
                  whileHover={{
                    scale: 1.1,
                    rotate: 4,
                  }}
                  className="text-[#075bc7]"
                >
                  <Icon className="h-[30px] w-[30px]" strokeWidth={1.65} />
                </motion.div>
              </div>

              <div>
                <h3 className="text-[12px] font-bold text-[#092b68]">
                  {step.title}
                </h3>

                <p className="mt-3 text-[10px] font-medium leading-[1.65] text-[#394c67] sm:text-[11px]">
                  {step.description}
                </p>
              </div>
            </motion.article>
          );
        })}
      </motion.div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*                              REVIEW CRITERIA                               */
/* -------------------------------------------------------------------------- */

function ReviewCriteria() {
  return (
    <section>
      <SectionHeading
        subtitle="The following criteria should guide the reviewer's academic and editorial assessment."
      >
        Manuscript Evaluation Criteria
      </SectionHeading>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.58 }}
        className="overflow-hidden rounded-[7px] border border-[#dbe5ef] bg-white shadow-[0_4px_16px_rgba(8,66,145,0.06)]"
      >
        <div className="overflow-x-auto">
          <table className="w-full min-w-[760px] border-collapse">
            <thead>
              <tr className="bg-[#062c68] text-white">
                <th className="w-[23%] border-r border-white/25 px-5 py-3 text-left text-[11px] font-semibold">
                  Evaluation Criterion
                </th>

                <th className="w-[59%] border-r border-white/25 px-5 py-3 text-left text-[11px] font-semibold">
                  Description
                </th>

                <th className="w-[18%] px-5 py-3 text-center text-[11px] font-semibold">
                  Priority
                </th>
              </tr>
            </thead>

            <tbody>
              {reviewCriteria.map((item, index) => (
                <motion.tr
                  key={item.criterion}
                  initial={{ opacity: 0, x: -14 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.35,
                    delay: index * 0.05,
                  }}
                  whileHover={{
                    backgroundColor: "#f3f8ff",
                  }}
                  className="border-b border-[#dfe7ef] last:border-b-0"
                >
                  <td className="border-r border-[#dfe7ef] px-5 py-4 text-[11px] font-bold text-[#102651]">
                    {item.criterion}
                  </td>

                  <td className="border-r border-[#dfe7ef] px-5 py-4 text-[10px] font-medium leading-[1.6] text-[#30435f] sm:text-[11px]">
                    {item.description}
                  </td>

                  <td className="px-5 py-4 text-center">
                    <span
                      className={`inline-flex min-w-[68px] justify-center rounded-full px-3 py-1 text-[10px] font-bold ${
                        item.priority === "High"
                          ? "bg-[#e9f2ff] text-[#075bc7]"
                          : "bg-[#fff3e8] text-[#e96800]"
                      }`}
                    >
                      {item.priority}
                    </span>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*                               REVIEW ETHICS                                */
/* -------------------------------------------------------------------------- */

function ReviewerEthics() {
  return (
    <section id="reviewer-ethics">
      <SectionHeading
        subtitle="Ethical conduct is essential to maintaining trust, fairness, confidentiality, and research integrity."
      >
        Reviewer Ethics and Confidentiality
      </SectionHeading>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.12 }}
        whileHover={{
          y: -5,
          boxShadow: "0 16px 34px rgba(8,66,145,0.12)",
        }}
        className="grid gap-6 rounded-[9px] border border-[#dbe6f2] bg-[#f4f8ff] px-6 py-7 shadow-[0_4px_16px_rgba(8,66,145,0.05)] md:grid-cols-[72px_minmax(0,1fr)]"
      >
        <motion.div
          whileHover={{
            scale: 1.08,
            rotate: 4,
          }}
          className="mx-auto flex h-[64px] w-[64px] items-center justify-center rounded-full bg-[#07347d] text-white md:mx-0"
        >
          <ShieldCheck className="h-[32px] w-[32px]" strokeWidth={1.6} />
        </motion.div>

        <div className="grid gap-x-8 gap-y-3 sm:grid-cols-2">
          {ethicalResponsibilities.map((item) => (
            <motion.div
              key={item}
              whileHover={{ x: 4 }}
              className="flex items-start gap-3"
            >
              <CheckCircle2
                className="mt-[2px] h-[14px] w-[14px] shrink-0 text-[#075bc7]"
                strokeWidth={2}
              />

              <p className="text-[10px] font-medium leading-[1.65] text-[#30435f] sm:text-[11px]">
                {item}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*                              BEST PRACTICES                                */
/* -------------------------------------------------------------------------- */

function BestPractices() {
  return (
    <section>
      <SectionHeading>
        Constructive Review Practices
      </SectionHeading>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="grid gap-5 lg:grid-cols-2"
      >
        <motion.article
          variants={fadeUp}
          whileHover={{
            y: -7,
            boxShadow: "0 16px 32px rgba(15,139,76,0.12)",
          }}
          className="rounded-[8px] border border-[#cfe8da] bg-[#f5fcf8] px-6 py-6"
        >
          <div className="flex items-center gap-4">
            <div className="flex h-[44px] w-[44px] items-center justify-center rounded-full bg-[#e1f5e9] text-[#159153]">
              <CheckCircle2 className="h-[23px] w-[23px]" />
            </div>

            <div>
              <h3 className="text-[15px] font-bold text-[#0b6840]">
                Recommended Practices
              </h3>

              <p className="mt-1 text-[10px] font-medium text-[#51645a] sm:text-[11px]">
                A professional reviewer should:
              </p>
            </div>
          </div>

          <div className="mt-5 space-y-3">
            {goodPractices.map((item) => (
              <motion.div
                key={item}
                whileHover={{ x: 4 }}
                className="flex items-start gap-3"
              >
                <CheckCircle2 className="mt-[2px] h-[14px] w-[14px] shrink-0 text-[#159153]" />

                <p className="text-[10px] font-medium leading-[1.6] text-[#344b40] sm:text-[11px]">
                  {item}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.article>

        <motion.article
          variants={fadeUp}
          whileHover={{
            y: -7,
            boxShadow: "0 16px 32px rgba(198,61,61,0.11)",
          }}
          className="rounded-[8px] border border-[#f0d5d5] bg-[#fff8f8] px-6 py-6"
        >
          <div className="flex items-center gap-4">
            <div className="flex h-[44px] w-[44px] items-center justify-center rounded-full bg-[#fdeaea] text-[#c54343]">
              <XCircle className="h-[23px] w-[23px]" />
            </div>

            <div>
              <h3 className="text-[15px] font-bold text-[#9e3030]">
                Prohibited Practices
              </h3>

              <p className="mt-1 text-[10px] font-medium text-[#6c5555] sm:text-[11px]">
                A reviewer must not:
              </p>
            </div>
          </div>

          <div className="mt-5 space-y-3">
            {prohibitedPractices.map((item) => (
              <motion.div
                key={item}
                whileHover={{ x: 4 }}
                className="flex items-start gap-3"
              >
                <XCircle className="mt-[2px] h-[14px] w-[14px] shrink-0 text-[#c54343]" />

                <p className="text-[10px] font-medium leading-[1.6] text-[#5d4343] sm:text-[11px]">
                  {item}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.article>
      </motion.div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*                             RECOMMENDATIONS                                */
/* -------------------------------------------------------------------------- */

function RecommendationSection() {
  return (
    <section>
      <SectionHeading
        subtitle="The final recommendation should reflect the manuscript's quality, validity, originality, and readiness for publication."
      >
        Reviewer Recommendation Options
      </SectionHeading>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
      >
        {recommendationOptions.map((item, index) => (
          <motion.article
            key={item.title}
            variants={fadeUp}
            whileHover={{
              y: -7,
              scale: 1.012,
              boxShadow: "0 15px 30px rgba(8,66,145,0.12)",
            }}
            className="rounded-[8px] border border-[#dbe6f2] bg-white px-5 py-5"
          >
            <div className="flex items-center gap-3">
              <span className="flex h-[28px] w-[28px] items-center justify-center rounded-full bg-[#07347d] text-[11px] font-bold text-white">
                {index + 1}
              </span>

              <h3 className="text-[13px] font-bold text-[#063b87]">
                {item.title}
              </h3>
            </div>

            <p className="mt-4 text-[10px] font-medium leading-[1.7] text-[#394c67] sm:text-[11px]">
              {item.description}
            </p>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*                              CONTACT STRIP                                 */
/* -------------------------------------------------------------------------- */

function ContactStrip() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55 }}
      whileHover={{
        y: -4,
        boxShadow: "0 14px 28px rgba(8,66,145,0.11)",
      }}
      className="flex flex-col items-center justify-center gap-4 rounded-[8px] border border-[#dbe6f2] bg-[#edf4ff] px-5 py-4 text-center shadow-[0_3px_13px_rgba(8,66,145,0.05)] sm:flex-row"
    >
      <div className="flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-full bg-[#07347d] text-white">
        <Mail className="h-[21px] w-[21px]" strokeWidth={1.7} />
      </div>

      <p className="text-[10px] font-medium leading-[1.7] text-[#263b5c] sm:text-[11px]">
        For reviewer-related queries or assistance, please contact the editorial
        office at:{" "}
        <a
          href="mailto:editor.aierrr@yashikapublications.com"
          className="font-bold text-[#075bc7] hover:underline"
        >
          editor.aierrr@yashikapublications.com
        </a>
      </p>
    </motion.section>
  );
}

/* -------------------------------------------------------------------------- */
/*                                  PAGE                                     */
/* -------------------------------------------------------------------------- */

export default function ReviewerGuidelines() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden bg-white text-[#102651]">
      <HeroSection />

      <section className="bg-white px-4 pb-12 pt-6 sm:px-8 lg:px-14">
        <div className="mx-auto max-w-[1180px]">
          <QuickGuidelines />

          <div className="mt-8">
            <ReviewerResponsibilities />
          </div>

          <div className="mt-8">
            <ReviewProcess />
          </div>

          <div className="mt-8">
            <ReviewCriteria />
          </div>

          <div className="mt-8">
            <ReviewerEthics />
          </div>

          <div className="mt-8">
            <BestPractices />
          </div>

          <div className="mt-8">
            <RecommendationSection />
          </div>

          <div className="mt-6">
            <ContactStrip />
          </div>
        </div>
      </section>
    </main>
  );
}