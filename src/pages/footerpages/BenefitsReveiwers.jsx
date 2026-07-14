import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Award,
  BadgeCheck,
  BookOpen,
  Check,
  FileBadge,
  GraduationCap,
  Medal,
  Network,
  ShieldCheck,
  Sparkles,
  Star,
  Trophy,
  UserRoundCheck,
} from "lucide-react";

import logo from "../../assets/yashika-publication-logo.webp";
import reviewerBanner from "../../assets/yashika-publication-reviewers-banner.webp";
import editorialTeam from "../../assets/yashika-publication-editorial-team.webp";

const benefits = [
  {
    icon: FileBadge,
    title: "Review Certificate",
    text: "Receive an official certificate for every successfully completed manuscript review.",
  },
  {
    icon: Trophy,
    title: "Professional Recognition",
    text: "Gain recognition for your valuable contribution to scholarly publishing.",
  },
  {
    icon: GraduationCap,
    title: "Academic Development",
    text: "Improve your research, analytical and critical evaluation skills.",
  },
  {
    icon: BookOpen,
    title: "Early Research Access",
    text: "Explore new research developments before they are formally published.",
  },
  {
    icon: Network,
    title: "Global Academic Network",
    text: "Connect with researchers, editors and experts from different disciplines.",
  },
  {
    icon: Medal,
    title: "Reviewer Awards",
    text: "Outstanding reviewers may receive special appreciation and recognition.",
  },
];

const highlights = [
  "Official reviewer certificate",
  "Reviewer acknowledgement",
  "Academic profile enhancement",
  "Editorial board opportunities",
];

const recognitionSteps = [
  {
    number: "01",
    title: "Accept Invitation",
    text: "Accept a review request related to your area of expertise.",
  },
  {
    number: "02",
    title: "Complete Review",
    text: "Submit a detailed, ethical and constructive reviewer report.",
  },
  {
    number: "03",
    title: "Receive Recognition",
    text: "Receive your certificate and reviewer acknowledgement.",
  },
];

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

const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

export default function BenefitsOfReviewers() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="overflow-hidden bg-white text-[#10213D]"
    >
      {/* ================================================================ */}
      {/* HERO SECTION                                                     */}
      {/* ================================================================ */}

      <section className="relative min-h-[340px] overflow-hidden bg-[#082D68]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_20%,rgba(37,99,235,.42),transparent_30%),linear-gradient(115deg,#061B46_0%,#0B2C66_50%,transparent_50%)]" />

        <div className="absolute inset-y-0 right-0 w-full lg:w-[56%]">
          <img
            src={reviewerBanner}
            alt="Benefits of reviewers"
            className="h-full w-full object-cover object-center"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#0B2C66] via-[#0B2C66]/40 to-transparent lg:from-[#0B2C66]/60" />
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
              For Reviewers
            </motion.p>

            <motion.h1
              variants={fadeUp}
              className="text-[36px] font-[600] leading-tight text-white sm:text-[42px] lg:text-[48px]"
            >
              Benefits of Reviewers
            </motion.h1>

            <motion.span
              variants={fadeUp}
              className="mt-2 block h-1 w-14 rounded-full bg-[#F57C20]"
            />

            <motion.p
              variants={fadeUp}
              className="mt-5 max-w-[580px] text-[16px] font-[500] leading-6 text-white/90 sm:text-[18px]"
            >
              Recognizing the expertise, contribution and commitment of our
              reviewer community.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* INTRODUCTION SECTION                                             */}
      {/* ================================================================ */}

      <section className="relative py-8">
        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-blue-50/70 blur-3xl" />

        <div className="relative mx-auto grid max-w-[1260px] gap-10 px-5 sm:px-8 lg:grid-cols-[1fr_.9fr] lg:items-center lg:px-10">
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-[12px] font-semibold uppercase tracking-[0.18em] text-[#125FEA]">
              <Sparkles size={14} />
              Reviewer Community
            </span>

            <h2 className="mt-4 max-w-[520px] text-[24px] font-[600] leading-tight text-[#0B2C66] sm:text-[28px] lg:text-[30px]">
              Your Expertise Deserves Recognition
            </h2>

            <span className="mt-4 block h-1 w-14 rounded-full bg-[#F57C20]" />

            <p className="mt-5 max-w-[620px] text-[13px] leading-7 text-slate-600 sm:text-[14px]">
              Reviewers play an essential role in maintaining the quality,
              integrity and credibility of academic publishing. Yashika
              Publications values every reviewer contribution and provides
              professional recognition, certificates and opportunities for
              academic development.
            </p>

            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {highlights.map((item) => (
                <motion.div
                  key={item}
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-3 rounded-2xl border border-slate-100 bg-white px-4 py-3 shadow-[0_8px_24px_rgba(15,54,110,.08)]"
                >
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-blue-50 text-[#125FEA]">
                    <Check size={16} strokeWidth={3} />
                  </span>

                  <span className="text-[13px] font-[600] text-[#0B2C66]">
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative rounded-[28px] bg-gradient-to-br from-blue-50 via-white to-orange-50 p-5 shadow-[0_22px_55px_rgba(10,50,110,.14)]"
            >
              <img
                src={editorialTeam}
                alt="Reviewer recognition"
                className="h-[330px] w-full rounded-[22px] object-cover sm:h-[380px]"
              />

              <div className="absolute bottom-8 left-8 right-8 rounded-[18px] border border-white/70 bg-white/90 p-4 shadow-xl backdrop-blur-xl">
                <div className="flex items-center gap-4">
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-[#F57C20] text-white">
                    <Award size={24} />
                  </div>

                  <div>
                    <h3 className="text-[14px] font-[600] text-[#0B2C66]">
                      Reviewer Recognition
                    </h3>

                    <p className="mt-1 text-[12px] leading-5 text-slate-600">
                      Every valuable review supports better research.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* BENEFITS SECTION                                                 */}
      {/* ================================================================ */}

      <section className="bg-[#F8FAFE] py-8">
        <div className="mx-auto max-w-[1260px] px-5 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-[12px] font-semibold uppercase tracking-[0.18em] text-[#125FEA]">
              <Star size={14} />
              Key Advantages
            </span>

            <h2 className="mx-auto mt-4 max-w-[500px] text-[24px] font-[600] leading-tight text-[#0B2C66] sm:text-[28px] lg:text-[30px]">
              Benefits of Becoming a Reviewer
            </h2>

            <span className="mx-auto mt-4 block h-1 w-14 rounded-full bg-[#F57C20]" />

            <p className="mx-auto mt-5 max-w-2xl text-[13px] leading-7 text-slate-600 sm:text-[14px]">
              Reviewing provides valuable opportunities for academic growth,
              recognition and professional collaboration.
            </p>
          </div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.12 }}
            className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          >
            {benefits.map(({ icon: Icon, title, text }, index) => (
              <motion.article
                key={title}
                variants={fadeUp}
                whileHover={{
                  y: -8,
                  scale: 1.01,
                }}
                className="group flex min-h-[230px] flex-col rounded-[24px] border border-slate-100 bg-white p-6 shadow-[0_12px_32px_rgba(15,54,110,.10)] transition-shadow hover:shadow-[0_20px_45px_rgba(15,54,110,.16)]"
              >
                <div
                  className={`grid h-14 w-14 place-items-center rounded-2xl text-white shadow-lg transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110 ${
                    index % 3 === 1
                      ? "bg-[#F57C20] shadow-orange-200"
                      : "bg-gradient-to-br from-[#216DED] to-[#092F70] shadow-blue-200"
                  }`}
                >
                  <Icon size={26} />
                </div>

                <h3 className="mt-5 text-[16px] font-[600] text-[#0B2C66]">
                  {title}
                </h3>

                <p className="mt-3 flex-1 text-[13px] leading-6 text-slate-600">
                  {text}
                </p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* RECOGNITION PROCESS SECTION                                      */}
      {/* ================================================================ */}

      <section className="py-8">
        <div className="mx-auto max-w-[1260px] px-5 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-[12px] font-semibold uppercase tracking-[0.18em] text-[#125FEA]">
              <BadgeCheck size={14} />
              Simple Process
            </span>

            <h2 className="mx-auto mt-4 max-w-[480px] text-[24px] font-[600] leading-tight text-[#0B2C66] sm:text-[28px] lg:text-[30px]">
              How Reviewer Recognition Works
            </h2>

            <span className="mx-auto mt-4 block h-1 w-14 rounded-full bg-[#F57C20]" />
          </div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            className="relative mt-12 grid gap-6 md:grid-cols-3"
          >
            <div className="absolute left-[16%] right-[16%] top-8 hidden h-[2px] bg-gradient-to-r from-[#125FEA] via-blue-300 to-[#125FEA] md:block" />

            {recognitionSteps.map(({ number, title, text }) => (
              <motion.article
                key={number}
                variants={fadeUp}
                whileHover={{ y: -7 }}
                className="relative rounded-[24px] border border-slate-100 bg-white px-6 pb-7 pt-12 text-center shadow-[0_12px_32px_rgba(15,54,110,.10)]"
              >
                <div className="absolute left-1/2 top-0 z-10 grid h-16 w-16 -translate-x-1/2 -translate-y-2 place-items-center rounded-full bg-gradient-to-br from-[#216DED] to-[#092F70] text-[16px] font-[600] text-white ring-8 ring-white shadow-lg shadow-blue-200">
                  {number}
                </div>

                <h3 className="mt-3 text-[16px] font-[600] text-[#0B2C66]">
                  {title}
                </h3>

                <p className="mt-3 text-[13px] leading-6 text-slate-600">
                  {text}
                </p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* CTA SECTION                                                       */}
      {/* ================================================================ */}

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
              <UserRoundCheck size={32} />
            </div>

            <div>
              <h2 className="text-[24px] font-[600] sm:text-[28px]">
                Become a Valued Reviewer
              </h2>

              <p className="mt-2 max-w-2xl text-[13px] leading-6 text-blue-100/85 sm:text-[14px]">
                Join our reviewer community and contribute your expertise to
                quality academic publishing.
              </p>
            </div>
          </div>

          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#F57C20] px-6 py-3 text-[13px] font-[600] text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-[#FF8D35]"
            >
              Apply as Reviewer
              <ArrowRight size={17} />
            </Link>

            <Link
              to="/reviewer-guidelines"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/50 px-6 py-3 text-[13px] font-[600] text-white transition duration-300 hover:-translate-y-1 hover:bg-white hover:text-[#0B2C66]"
            >
              Reviewer Guidelines
              <ShieldCheck size={17} />
            </Link>
          </div>
        </div>
      </section>
    </motion.main>
  );
}
