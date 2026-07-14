import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  BookOpen,
  Check,
  Copyright,
  FileText,
  Globe2,
  LockOpen,
  Mail,
  Scale,
  Send,
  Share2,
  ShieldCheck,
  Sparkles,
  UserCheck,
} from "lucide-react";

import logo from "../../assets/yashika-publication-logo.webp";
import reviewerBanner from "../../assets/yashika-publication-reviewers-banner.webp";
import editorialTeam from "../../assets/yashika-publication-editorial-team.webp";

const principles = [
  {
    icon: LockOpen,
    title: "Immediate Access",
    text: "Published articles are made available online for readers without access restrictions.",
  },
  {
    icon: Globe2,
    title: "Global Visibility",
    text: "Open access helps research reach scholars, professionals and readers worldwide.",
  },
  {
    icon: Share2,
    title: "Responsible Sharing",
    text: "Articles may be shared and reused according to the applicable publication licence.",
  },
  {
    icon: ShieldCheck,
    title: "Research Integrity",
    text: "All open-access articles continue to follow rigorous editorial and peer-review standards.",
  },
];

const authorRights = [
  "Authors retain appropriate rights to their published work.",
  "Published articles may be shared according to the stated licence.",
  "Proper attribution to the original authors is mandatory.",
  "The published version must not be altered or misrepresented.",
  "Commercial reuse depends on the applicable article licence.",
  "Authors must follow ethical and copyright requirements.",
];

const policyCards = [
  {
    icon: Copyright,
    title: "Copyright",
    text: "Copyright terms are clearly communicated to authors before final publication.",
  },
  {
    icon: Scale,
    title: "Licensing",
    text: "Each article displays the licence governing access, sharing and reuse.",
  },
  {
    icon: FileText,
    title: "Repository Sharing",
    text: "Authors may deposit permitted versions in institutional or subject repositories.",
  },
];

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

export default function OpenAccessPolicy() {
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
            alt="Open access publishing"
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
              className="mb-3 text-[12px] font-semibold uppercase tracking-[0.2em] text-[#FFA65C]"
            >
              Publishing Policy
            </motion.p>

            <motion.h1
              variants={fadeUp}
              className="text-[36px] font-[600] leading-tight text-white sm:text-[42px] lg:text-[48px]"
            >
              Open Access Policy
            </motion.h1>

            <motion.span
              variants={fadeUp}
              className="mt-3 block h-1 w-14 rounded-full bg-[#F57C20]"
            />

            <motion.p
              variants={fadeUp}
              className="mt-5 max-w-[590px] text-[16px] font-[500] leading-7 text-white/90 sm:text-[18px]"
            >
              Promoting unrestricted access, wider visibility and responsible
              sharing of scholarly research.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-6 flex flex-wrap items-center gap-2 text-[13px] text-white/75"
            >
              <Link to="/" className="transition hover:text-white">
                Home
              </Link>

              <span>/</span>

              <span>For Authors</span>

              <span>/</span>

              <span className="font-semibold text-[#FFA65C]">
                Open Access Policy
              </span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* POLICY OVERVIEW                                                  */}
      {/* ================================================================ */}

      <section className="relative py-14 lg:py-16">
        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-blue-50/70 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-orange-50 blur-3xl" />

        <div className="relative mx-auto grid max-w-[1260px] gap-10 px-5 sm:px-8 lg:grid-cols-[1fr_.9fr] lg:items-center lg:px-10">
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
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-[12px] font-semibold uppercase tracking-[0.18em] text-[#125FEA]">
              <Sparkles size={14} />
              Policy Overview
            </span>

            <h2 className="mt-4 max-w-[550px] text-[24px] font-[600] leading-tight text-[#0B2C66] sm:text-[28px] lg:text-[30px]">
              Open Knowledge for Global Research Communities
            </h2>

            <span className="mt-4 block h-1 w-14 rounded-full bg-[#F57C20]" />

            <p className="mt-5 max-w-[650px] text-[13px] leading-7 text-slate-600 sm:text-[14px]">
              Yashika Publications supports open access to scholarly knowledge.
              Articles published under an open-access model are available for
              reading and legitimate use without conventional subscription
              barriers.
            </p>

            <p className="mt-4 max-w-[650px] text-[13px] leading-7 text-slate-600 sm:text-[14px]">
              Open access improves research discoverability, supports academic
              collaboration and allows scientific knowledge to reach a wider
              audience while preserving proper attribution and ethical use.
            </p>

            <div className="mt-7 flex items-center gap-4 rounded-[20px] border border-blue-100 bg-blue-50/70 p-5">
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-[#125FEA] text-white">
                <BookOpen size={24} />
              </div>

              <div>
                <h3 className="text-[14px] font-[600] text-[#0B2C66]">
                  Free to Read
                </h3>

                <p className="mt-1 text-[12px] leading-5 text-slate-600">
                  Readers may access open-access articles directly through the
                  journal website.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              x: 35,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
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
                alt="Open scholarly communication"
                className="h-[330px] w-full rounded-[22px] object-cover sm:h-[380px]"
              />

              <div className="absolute bottom-8 left-8 right-8 rounded-[18px] border border-white/70 bg-white/90 p-4 shadow-xl backdrop-blur-xl">
                <div className="flex items-center gap-4">
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-[#F57C20] text-white">
                    <Globe2 size={24} />
                  </div>

                  <div>
                    <h3 className="text-[14px] font-[600] text-[#0B2C66]">
                      Wider Research Reach
                    </h3>

                    <p className="mt-1 text-[12px] leading-5 text-slate-600">
                      Open publishing increases global access and visibility.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* KEY PRINCIPLES SECTION                                           */}
      {/* ================================================================ */}

      <section className="bg-[#F8FAFE] py-14 lg:py-16">
        <div className="mx-auto max-w-[1260px] px-5 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-[12px] font-semibold uppercase tracking-[0.18em] text-[#125FEA]">
              <LockOpen size={14} />
              Key Principles
            </span>

            <h2 className="mx-auto mt-4 max-w-[530px] text-[24px] font-[600] leading-tight text-[#0B2C66] sm:text-[28px] lg:text-[30px]">
              Our Open Access Commitments
            </h2>

            <span className="mx-auto mt-4 block h-1 w-14 rounded-full bg-[#F57C20]" />

            <p className="mx-auto mt-5 max-w-2xl text-[13px] leading-7 text-slate-600 sm:text-[14px]">
              Our open-access practices are designed to promote availability,
              transparency and responsible scholarly communication.
            </p>
          </div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
          >
            {principles.map(({ icon: Icon, title, text }, index) => (
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
                    index % 2 === 1
                      ? "bg-[#F57C20] shadow-orange-200"
                      : "bg-gradient-to-br from-[#216DED] to-[#092F70] shadow-blue-200"
                  }`}
                >
                  <Icon size={26} />
                </div>

                <h3 className="mt-5 text-[15px] font-[600] text-[#0B2C66]">
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
      {/* AUTHOR RIGHTS AND LICENSING                                      */}
      {/* ================================================================ */}

      <section className="py-14 lg:py-16">
        <div className="mx-auto max-w-[1260px] px-5 sm:px-8 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-start">
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
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-[12px] font-semibold uppercase tracking-[0.18em] text-[#125FEA]">
                <UserCheck size={14} />
                Author Rights
              </span>

              <h2 className="mt-4 max-w-[520px] text-[24px] font-[600] leading-tight text-[#0B2C66] sm:text-[28px] lg:text-[30px]">
                Rights, Sharing and Attribution
              </h2>

              <span className="mt-4 block h-1 w-14 rounded-full bg-[#F57C20]" />

              <p className="mt-5 text-[13px] leading-7 text-slate-600 sm:text-[14px]">
                Authors and readers must follow the licence displayed with each
                published article. Appropriate citation and acknowledgement of
                the original work are required in every form of reuse.
              </p>

              <div className="mt-7 space-y-3">
                {authorRights.map((item) => (
                  <motion.div
                    key={item}
                    whileHover={{ x: 5 }}
                    className="flex items-start gap-3 rounded-[16px] border border-slate-100 bg-white px-4 py-3 shadow-[0_7px_22px_rgba(15,54,110,.07)]"
                  >
                    <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-blue-50 text-[#125FEA]">
                      <Check size={15} strokeWidth={3} />
                    </span>

                    <p className="text-[13px] leading-6 text-slate-600">
                      {item}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.15 }}
              className="grid gap-5"
            >
              {policyCards.map(({ icon: Icon, title, text }, index) => (
                <motion.article
                  key={title}
                  variants={fadeUp}
                  whileHover={{ x: 7 }}
                  className="group flex items-center gap-5 rounded-[22px] border border-slate-100 bg-white p-6 shadow-[0_10px_30px_rgba(15,54,110,.09)]"
                >
                  <div
                    className={`grid h-14 w-14 shrink-0 place-items-center rounded-2xl text-white ${
                      index === 1
                        ? "bg-[#F57C20]"
                        : "bg-gradient-to-br from-[#216DED] to-[#092F70]"
                    }`}
                  >
                    <Icon size={25} />
                  </div>

                  <div>
                    <h3 className="text-[15px] font-[600] text-[#0B2C66]">
                      {title}
                    </h3>

                    <p className="mt-2 text-[13px] leading-6 text-slate-600">
                      {text}
                    </p>
                  </div>
                </motion.article>
              ))}

              <div className="rounded-[22px] border border-orange-100 bg-orange-50 p-6">
                <div className="flex items-start gap-4">
                  <ShieldCheck
                    size={25}
                    className="mt-1 shrink-0 text-[#F57C20]"
                  />

                  <div>
                    <h3 className="text-[15px] font-[600] text-[#0B2C66]">
                      Important Notice
                    </h3>

                    <p className="mt-2 text-[13px] leading-6 text-slate-600">
                      Licence conditions may differ by journal or article.
                      Readers should always review the licence statement
                      displayed on the published article page.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* CTA SECTION                                                       */}
      {/* ================================================================ */}

      <section className="relative overflow-hidden bg-gradient-to-r from-[#0D63E8] via-[#084AB9] to-[#071F58] py-10 text-white">
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
              <Globe2 size={31} />
            </div>

            <div>
              <h2 className="text-[24px] font-[600] sm:text-[28px]">
                Publish Your Research Openly
              </h2>

              <p className="mt-2 max-w-2xl text-[13px] leading-6 text-blue-100/85 sm:text-[14px]">
                Submit your manuscript and make your research accessible to a
                wider scholarly audience.
              </p>
            </div>
          </div>

          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <Link
              to="/submit-your-paper"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#F57C20] px-4 py-3 text-[12px] font-[500] text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-[#FF8D35]"
            >
              Submit Your Paper
              <Send size={17} />
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