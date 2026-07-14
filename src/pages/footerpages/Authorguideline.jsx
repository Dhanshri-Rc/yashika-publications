import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  AlignLeft,
  BadgeCheck,
  BookOpen,
  Bot,
  CheckCircle2,
  ChevronRight,
  Copyright,
  Download,
  File,
  FileCheck2,
  FileText,
  Hash,
  Image,
  Info,
  Languages,
  ListChecks,
  LockKeyhole,
  Mail,
  PanelTop,
  Pilcrow,
  Ruler,
  Search,
  Send,
  ShieldCheck,
  Type,
  Upload,
} from "lucide-react";

import PageTransition from "../../components/PageTransition";
import logo from "../../assets/yashika-publication-logo.webp";
import reviewerBanner from "../../assets/yashika-publication-reviewers-banner.webp";

/* =====================================================
   PAGE DATA
===================================================== */

const quickLinks = [
  {
    icon: FileCheck2,
    title: "Before Submission",
    subtitle: "Preparation and policies",
    href: "#before-submission",
  },
  {
    icon: FileText,
    title: "Manuscript Categories",
    subtitle: "Article types and limits",
    href: "#manuscript-categories",
  },
  {
    icon: AlignLeft,
    title: "Manuscript Structure",
    subtitle: "Organize your paper",
    href: "#manuscript-structure",
  },
  {
    icon: Type,
    title: "Formatting",
    subtitle: "Style and layout",
    href: "#formatting-requirements",
  },
  {
    icon: BookOpen,
    title: "References",
    subtitle: "Citation requirements",
    href: "#references-citations",
  },
  {
    icon: Send,
    title: "Submission",
    subtitle: "How to submit",
    href: "#submission-process",
  },
];

const sidebarItems = [
  {
    number: "01",
    title: "Before Submission",
    href: "#before-submission",
  },
  {
    number: "02",
    title: "Manuscript Categories",
    href: "#manuscript-categories",
  },
  {
    number: "03",
    title: "Manuscript Structure",
    href: "#manuscript-structure",
  },
  {
    number: "04",
    title: "Formatting Requirements",
    href: "#formatting-requirements",
  },
  {
    number: "05",
    title: "Figures and Tables",
    href: "#figures-tables",
  },
  {
    number: "06",
    title: "References and Citations",
    href: "#references-citations",
  },
  {
    number: "07",
    title: "Ethical Considerations",
    href: "#ethical-considerations",
  },
  {
    number: "08",
    title: "Use of AI in Writing",
    href: "#ai-writing",
  },
  {
    number: "09",
    title: "Copyright and Licensing",
    href: "#copyright-licensing",
  },
  {
    number: "10",
    title: "Submission Process",
    href: "#submission-process",
  },
  {
    number: "11",
    title: "After Acceptance",
    href: "#after-acceptance",
  },
];

const beforeSubmission = [
  {
    icon: Search,
    title: "Originality",
    description:
      "The manuscript must be original, unpublished and not under consideration by another journal.",
  },
  {
    icon: Languages,
    title: "Language",
    description:
      "All manuscripts must be written in clear, concise and grammatically correct English.",
  },
  {
    icon: File,
    title: "File Format",
    description:
      "Submit the complete manuscript in Microsoft Word DOC or DOCX format.",
  },
  {
    icon: ListChecks,
    title: "Article Length",
    description:
      "Authors must follow the maximum word limit specified for their selected manuscript category.",
  },
  {
    icon: ShieldCheck,
    title: "Plagiarism",
    description:
      "All manuscripts are screened for similarity. Manuscripts exceeding the permitted limit may be rejected.",
  },
  {
    icon: FileText,
    title: "Permissions",
    description:
      "Authors must obtain permission for copyrighted figures, tables, photographs or other material.",
  },
];

const categories = [
  {
    category: "Research Paper",
    description: "Original research presenting significant findings.",
    words: "3,500",
    abstract: "250 words",
    references: "Maximum 50",
  },
  {
    category: "Review Paper",
    description: "A comprehensive review of a current research topic.",
    words: "6,000",
    abstract: "250 words",
    references: "Maximum 80",
  },
  {
    category: "Short Communication",
    description: "A concise report describing novel research findings.",
    words: "2,000",
    abstract: "150 words",
    references: "Maximum 25",
  },
  {
    category: "Technical Note",
    description: "A description of a technical method, process or tool.",
    words: "2,500",
    abstract: "150 words",
    references: "Maximum 30",
  },
  {
    category: "Case Study",
    description: "A detailed investigation and analysis of a specific case.",
    words: "3,000",
    abstract: "200 words",
    references: "Maximum 40",
  },
  {
    category: "Editorial / Perspective",
    description: "An invited opinion, commentary or perspective article.",
    words: "1,500",
    abstract: "Not required",
    references: "Maximum 20",
  },
];

const manuscriptStructure = [
  {
    title: "Title",
    description:
      "The title should be concise, accurate, informative and relevant to the manuscript.",
  },
  {
    title: "Authors and Affiliations",
    description:
      "Include full names, institutional affiliations, ORCID IDs and correspondence email address.",
  },
  {
    title: "Abstract",
    description:
      "Provide a structured abstract containing aim, methodology, results and conclusion.",
  },
  {
    title: "Keywords",
    description:
      "Add three to six relevant keywords that accurately represent the research.",
  },
  {
    title: "Introduction",
    description:
      "Describe the research background, problem statement, objectives and significance.",
  },
  {
    title: "Methodology",
    description:
      "Explain the research design, materials, data, procedures and analysis methods.",
  },
  {
    title: "Results",
    description:
      "Present all significant findings clearly using text, tables and figures where necessary.",
  },
  {
    title: "Discussion",
    description:
      "Interpret the findings and compare them with previous research and existing literature.",
  },
  {
    title: "Conclusion",
    description:
      "Summarize the principal findings, limitations, implications and future research directions.",
  },
  {
    title: "Acknowledgements",
    description:
      "Recognize financial support, technical assistance and other relevant contributions.",
  },
  {
    title: "References",
    description:
      "List all cited sources according to the journal's prescribed reference style.",
  },
];

const formattingRequirements = [
  {
    icon: Type,
    label: "Font Family",
    value: "Times New Roman",
  },
  {
    icon: Type,
    label: "Font Size",
    value: "12 pt body text",
  },
  {
    icon: ListChecks,
    label: "Line Spacing",
    value: "1.5 line spacing",
  },
  {
    icon: AlignLeft,
    label: "Alignment",
    value: "Justified text",
  },
  {
    icon: PanelTop,
    label: "Margins",
    value: "1 inch or 2.54 cm on every side",
  },
  {
    icon: Hash,
    label: "Page Numbering",
    value: "Bottom centre of every page",
  },
  {
    icon: Pilcrow,
    label: "Headings",
    value: "Use consistent Heading 1, Heading 2 and Heading 3 styles",
  },
  {
    icon: Ruler,
    label: "Measurement Units",
    value: "Use internationally accepted SI units",
  },
  {
    icon: BadgeCheck,
    label: "Abbreviations",
    value: "Define every abbreviation when it is first used",
  },
];

const supportingGuidelines = [
  {
    id: "figures-tables",
    number: "05",
    icon: Image,
    title: "Figures and Tables",
    items: [
      "Number every figure and table consecutively.",
      "Provide a clear and descriptive caption for every item.",
      "Submit images in high-resolution PNG, JPG or TIFF format.",
      "Cite every figure and table within the manuscript text.",
      "Obtain permission for material reproduced from another source.",
    ],
  },
  {
    id: "references-citations",
    number: "06",
    icon: BookOpen,
    title: "References and Citations",
    items: [
      "Use one consistent citation and reference style throughout.",
      "Ensure that every in-text citation appears in the reference list.",
      "Include DOI information whenever it is available.",
      "Verify author names, article titles, journal names, years and page numbers.",
      "Avoid excessive self-citation and references unrelated to the manuscript.",
    ],
  },
  {
    id: "ethical-considerations",
    number: "07",
    icon: LockKeyhole,
    title: "Ethical Considerations",
    items: [
      "Disclose all conflicts of interest.",
      "Mention ethical approval for research involving humans or animals.",
      "Protect participant confidentiality and personal information.",
      "Provide complete funding and sponsorship information.",
      "Do not fabricate, falsify or selectively manipulate research data.",
    ],
  },
  {
    id: "ai-writing",
    number: "08",
    icon: Bot,
    title: "Use of AI in Writing",
    items: [
      "AI tools cannot be listed as manuscript authors.",
      "Authors remain fully responsible for all submitted content.",
      "Any significant use of AI tools must be clearly disclosed.",
      "AI-generated references must be checked manually before submission.",
      "Confidential manuscript information must not be uploaded to unsecured AI tools.",
    ],
  },
  {
    id: "copyright-licensing",
    number: "09",
    icon: Copyright,
    title: "Copyright and Licensing",
    items: [
      "Authors must submit a completed copyright declaration.",
      "Authors must confirm that the work does not violate third-party rights.",
      "Open-access articles may be distributed under the applicable journal licence.",
      "Proper attribution must be provided whenever published material is reused.",
      "The corresponding author is responsible for obtaining approval from all co-authors.",
    ],
  },
];

const submissionSteps = [
  {
    number: "01",
    title: "Prepare Manuscript",
    description:
      "Format the paper according to the Author Guidelines and journal template.",
  },
  {
    number: "02",
    title: "Collect Documents",
    description:
      "Prepare the cover letter, declarations, figures, supplementary files and copyright form.",
  },
  {
    number: "03",
    title: "Submit Online",
    description:
      "Upload all required files through the journal's manuscript submission page.",
  },
  {
    number: "04",
    title: "Editorial Screening",
    description:
      "The editorial office checks scope, originality, format and completeness.",
  },
  {
    number: "05",
    title: "Peer Review",
    description:
      "Suitable manuscripts are forwarded for independent double-blind peer review.",
  },
];

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 28,
  },
  visible: {
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
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

/* =====================================================
   MAIN COMPONENT
===================================================== */

const Authorguideline = () => {
  const [activeSection, setActiveSection] = useState("#before-submission");

  useEffect(() => {
    const sectionIds = sidebarItems.map((item) => item.href.replace("#", ""));

    const handleScroll = () => {
      const currentSection = sectionIds.find((sectionId) => {
        const section = document.getElementById(sectionId);

        if (!section) return false;

        const rect = section.getBoundingClientRect();

        return rect.top <= 170 && rect.bottom >= 170;
      });

      if (currentSection) {
        setActiveSection(`#${currentSection}`);
      }
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (event, href) => {
    event.preventDefault();

    const section = document.querySelector(href);

    section?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    setActiveSection(href);
  };

  return (
    <PageTransition>
      <main className="min-h-screen overflow-x-hidden bg-[#f6f8fc] text-[#172b4d]">
        <StandalonePageHeader scrollToSection={scrollToSection} />

        <QuickNavigation scrollToSection={scrollToSection} />

        <section className="px-4 pb-10 pt-7 sm:px-6 sm:pb-12 sm:pt-8 lg:px-8 xl:px-14">
          <div className="mx-auto grid max-w-[1380px] gap-7 lg:grid-cols-[240px_minmax(0,1fr)] xl:grid-cols-[275px_minmax(0,1fr)]">
            <Sidebar
              activeSection={activeSection}
              scrollToSection={scrollToSection}
            />

            <div className="min-w-0 space-y-7 sm:space-y-9">
              <BeforeSubmissionSection />

              <CategoriesSection />

              <div className="grid gap-5 md:grid-cols-2 xl:gap-6">
                <ManuscriptStructureSection />

                <FormattingSection />
              </div>

              <SupportingGuidelines />

              <SubmissionProcess />

              <AfterAcceptance />
            </div>
          </div>

          <ImportantNote />
        </section>
      </main>
    </PageTransition>
  );
};

/* =====================================================
   STANDALONE FOOTER-PAGE HEADER
===================================================== */

const StandalonePageHeader = ({ scrollToSection }) => {
  return (
    <section className="relative min-h-[390px] overflow-hidden bg-[#082D68] sm:min-h-[410px] lg:min-h-[340px]">
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_12%_20%,rgba(37,99,235,.42),transparent_30%),linear-gradient(115deg,#061B46_0%,#0B2C66_50%,transparent_50%)]" />

      <div className="absolute inset-y-0 right-0 z-0 w-full lg:w-[56%]">
        <img
          src={reviewerBanner}
          alt="Submit research paper"
          className="h-full w-full object-cover object-[65%_center] sm:object-center"
        />

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

      <div className="relative z-20 mx-auto flex min-h-[390px] max-w-[1260px] items-center px-4 py-12 sm:min-h-[410px] sm:px-6 sm:py-14 lg:min-h-[340px] lg:px-10">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="w-full max-w-[650px] text-center sm:text-left"
        >
          <motion.img
            variants={fadeUp}
            src={logo}
            alt="Yashika Publications"
            className="mx-auto mb-6 h-9 w-auto object-contain sm:mx-0 sm:mb-7 sm:h-12"
          />

          <motion.p
            variants={fadeUp}
            className="mb-3 text-[11px] font-[600] uppercase tracking-[0.16em] text-[#FFA65C] sm:text-[13px] sm:tracking-[0.2em]"
          >
            Author Guidelines
          </motion.p>

          <motion.h1
            variants={fadeUp}
            className="text-[31px] font-[600] leading-tight text-white sm:text-[38px] md:text-[42px] lg:text-[44px]"
          >
            Author Guidelines
          </motion.h1>

          <motion.span
            variants={fadeUp}
            className="mx-auto mt-3 block h-1 w-14 rounded-full bg-[#F57C20] sm:mx-0"
          />

          <motion.p
            variants={fadeUp}
            className="mx-auto mt-5 max-w-[590px] text-[14px] font-[500] leading-6 text-white/90 sm:mx-0 sm:text-[16px] sm:leading-7 lg:text-[18px]"
          >
            Instructions for preparing, formatting, and submitting manuscripts
            to Yashika Publications. Please review all requirements carefully
            before submitting your research.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

/* =====================================================
   SHARED COMPONENTS
===================================================== */

const SectionHeading = ({ number, title, description }) => {
  return (
    <div className="mb-6">
      <div className="flex items-start gap-3">
        <span className="flex h-[31px] min-w-[31px] items-center justify-center rounded-[5px] bg-[#eaf3ff] px-2 text-[11px] font-[700] text-[#0861bd]">
          {number}
        </span>

        <div>
          <h2 className="text-[18px] font-[700] leading-[1.35] text-[#0b3675] sm:text-[20px]">
            {title}
          </h2>

          {description && (
            <p className="mt-2 max-w-[800px] text-[11px] leading-[1.7] text-[#607086] sm:text-[12px]">
              {description}
            </p>
          )}
        </div>
      </div>

      <div className="mt-4 h-[3px] w-[38px] rounded-full bg-[#ff6b00]" />
    </div>
  );
};

const QuickNavigation = ({ scrollToSection }) => {
  return (
    <section className="relative z-10 px-4 pt-6 sm:px-6 sm:pt-8 lg:px-8 xl:px-14">
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.15,
        }}
        className="mx-auto grid max-w-[1380px] overflow-hidden rounded-[10px] border border-[#dce5ef] bg-white shadow-[0_8px_25px_rgba(6,48,105,0.08)] sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6"
      >
        {quickLinks.map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.a
              key={item.title}
              href={item.href}
              onClick={(event) => scrollToSection(event, item.href)}
              variants={fadeUp}
              whileHover={{
                y: -5,
                backgroundColor: "#f4f8ff",
              }}
              className={`group flex min-h-[88px] items-center gap-3 border-[#e2e8f0] px-4 py-4 transition-colors duration-300 sm:min-h-[100px] sm:gap-4 sm:px-5 sm:py-5 ${
                index !== quickLinks.length - 1
                  ? "border-b xl:border-b-0 xl:border-r"
                  : ""
              }`}
            >
              <div className="flex h-[45px] w-[45px] shrink-0 items-center justify-center rounded-[7px] bg-[#eaf3ff] text-[#0861bd] transition-all duration-300 group-hover:bg-[#0861bd] group-hover:text-white">
                <Icon size={23} strokeWidth={1.8} />
              </div>

              <div>
                <h3 className="text-[12px] font-[700] leading-[1.4] text-[#12386f]">
                  {item.title}
                </h3>

                <p className="mt-1 text-[10px] leading-[1.5] text-[#68778a]">
                  {item.subtitle}
                </p>
              </div>
            </motion.a>
          );
        })}
      </motion.div>
    </section>
  );
};

const Sidebar = ({ activeSection, scrollToSection }) => {
  return (
    <aside className="hidden self-start lg:sticky lg:top-6 lg:block">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="rounded-[7px] border border-[#dce5ef] bg-white p-5 shadow-[0_5px_18px_rgba(6,48,105,0.06)]"
      >
        <h2 className="text-[14px] font-[700] uppercase tracking-[0.3px] text-[#113b79]">
          Guidelines Sections
        </h2>

        <div className="mt-3 h-[3px] w-[32px] bg-[#ff6b00]" />

        <div className="mt-5 space-y-1">
          {sidebarItems.map((item) => {
            const active = activeSection === item.href;

            return (
              <a
                key={item.href}
                href={item.href}
                onClick={(event) => scrollToSection(event, item.href)}
                className={`group flex items-center gap-3 rounded-[5px] px-2 py-[9px] transition-all duration-300 ${
                  active
                    ? "bg-[#0861bd] text-white"
                    : "text-[#263f67] hover:translate-x-1 hover:bg-[#eef5ff] hover:text-[#0861bd]"
                }`}
              >
                <span
                  className={`flex h-[23px] min-w-[30px] items-center justify-center rounded-[4px] px-1 text-[9px] font-[700] ${
                    active
                      ? "bg-white/20 text-white"
                      : "bg-[#eaf3ff] text-[#0861bd]"
                  }`}
                >
                  {item.number}
                </span>

                <span className="text-[11px] font-[600] leading-[1.4]">
                  {item.title}
                </span>
              </a>
            );
          })}
        </div>
      </motion.div>

      <motion.div
        whileHover={{
          y: -5,
          boxShadow: "0 15px 30px rgba(7,75,161,0.14)",
        }}
        className="mt-5 rounded-[7px] bg-gradient-to-br from-[#0a62bc] to-[#063778] p-5 text-center text-white shadow-[0_7px_20px_rgba(5,59,129,0.18)]"
      >
        <div className="mx-auto flex h-[54px] w-[54px] items-center justify-center rounded-full bg-white/15">
          <Download size={27} strokeWidth={1.8} />
        </div>

        <h3 className="mt-4 text-[15px] font-[700]">Manuscript Template</h3>

        <p className="mt-3 text-[10px] leading-[1.7] text-white/85">
          Use the official journal template to prepare your manuscript.
        </p>

        <a
          href="/documents/aierrr-manuscript-template.docx"
          download
          className="mt-5 inline-flex h-[40px] w-full items-center justify-center gap-2 rounded-[5px] bg-white px-3 text-[10px] font-[700] text-[#0759ad] transition-all duration-300 hover:-translate-y-1 hover:bg-[#fff4ea] hover:text-[#e76400]"
        >
          <Download size={14} />
          Download DOCX
        </a>
      </motion.div>
    </aside>
  );
};

/* =====================================================
   CONTENT SECTIONS
===================================================== */

const BeforeSubmissionSection = () => {
  return (
    <section id="before-submission" className="scroll-mt-24">
      <SectionHeading
        number="01"
        title="Before Submission"
        description="Complete these essential checks before submitting your manuscript."
      />

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.1,
        }}
        className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3"
      >
        {beforeSubmission.map((item) => {
          const Icon = item.icon;

          return (
            <motion.article
              key={item.title}
              variants={fadeUp}
              whileHover={{
                y: -7,
                boxShadow: "0 14px 30px rgba(6,58,131,0.12)",
              }}
              className="group rounded-[10px] border border-[#dce5ef] bg-white p-4 shadow-[0_4px_15px_rgba(6,48,105,0.05)] sm:p-5"
            >
              <div className="flex h-[43px] w-[43px] items-center justify-center rounded-[7px] bg-[#eaf3ff] text-[#0861bd] transition-all duration-300 group-hover:bg-[#0861bd] group-hover:text-white">
                <Icon size={22} strokeWidth={1.8} />
              </div>

              <h3 className="mt-4 text-[13px] font-[700] text-[#113b79]">
                {item.title}
              </h3>

              <p className="mt-2 text-[10px] leading-[1.7] text-[#526279] sm:text-[11px]">
                {item.description}
              </p>
            </motion.article>
          );
        })}
      </motion.div>
    </section>
  );
};

const CategoriesSection = () => {
  return (
    <section id="manuscript-categories" className="scroll-mt-24">
      <SectionHeading
        number="02"
        title="Manuscript Categories"
        description="Select the correct category and follow its prescribed content limits."
      />

      <motion.div
        initial={{
          opacity: 0,
          y: 22,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{ once: true }}
        className="overflow-hidden rounded-[7px] border border-[#dce5ef] bg-white shadow-[0_4px_16px_rgba(6,48,105,0.05)]"
      >
        <div className="overflow-x-auto">
          <table className="w-full min-w-[830px] border-collapse">
            <thead>
              <tr className="bg-[#073b82] text-white">
                <th className="border-r border-white/15 px-4 py-3 text-left text-[11px] font-[700]">
                  Category
                </th>

                <th className="border-r border-white/15 px-4 py-3 text-left text-[11px] font-[700]">
                  Description
                </th>

                <th className="border-r border-white/15 px-4 py-3 text-center text-[11px] font-[700]">
                  Word Limit
                </th>

                <th className="border-r border-white/15 px-4 py-3 text-center text-[11px] font-[700]">
                  Abstract
                </th>

                <th className="px-4 py-3 text-center text-[11px] font-[700]">
                  References
                </th>
              </tr>
            </thead>

            <tbody>
              {categories.map((item) => (
                <tr
                  key={item.category}
                  className="border-b border-[#e1e8f0] transition-colors last:border-b-0 hover:bg-[#f4f8ff]"
                >
                  <td className="border-r border-[#e1e8f0] px-4 py-3 text-[11px] font-[700] text-[#0861bd]">
                    {item.category}
                  </td>

                  <td className="border-r border-[#e1e8f0] px-4 py-3 text-[10px] leading-[1.6] text-[#526279]">
                    {item.description}
                  </td>

                  <td className="border-r border-[#e1e8f0] px-4 py-3 text-center text-[11px] font-[600] text-[#263e64]">
                    {item.words}
                  </td>

                  <td className="border-r border-[#e1e8f0] px-4 py-3 text-center text-[11px] font-[600] text-[#263e64]">
                    {item.abstract}
                  </td>

                  <td className="px-4 py-3 text-center text-[11px] font-[600] text-[#263e64]">
                    {item.references}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>

      <p className="mt-3 text-[10px] leading-[1.6] text-[#677589]">
        Word limits include the main text, references, tables and figure
        captions unless otherwise stated.
      </p>
    </section>
  );
};

const ManuscriptStructureSection = () => {
  return (
    <section
      id="manuscript-structure"
      className="scroll-mt-24 rounded-[10px] border border-[#dce5ef] bg-white p-4 shadow-[0_4px_16px_rgba(6,48,105,0.05)] sm:p-5"
    >
      <SectionHeading number="03" title="Manuscript Structure" />

      <div className="space-y-1">
        {manuscriptStructure.map((item, index) => (
          <motion.div
            key={item.title}
            whileHover={{
              x: 4,
              backgroundColor: "#f4f8ff",
            }}
            className="grid grid-cols-[30px_minmax(0,1fr)] gap-x-2 gap-y-1 rounded-[5px] border-b border-[#e7ecf2] px-1 py-3 last:border-b-0 sm:grid-cols-[32px_135px_minmax(0,1fr)] sm:px-2"
          >
            <span className="flex h-[24px] w-[24px] items-center justify-center rounded-full bg-[#eaf3ff] text-[9px] font-[700] text-[#0861bd]">
              {index + 1}
            </span>

            <h3 className="text-[11px] font-[700] text-[#173c76]">
              {item.title}
            </h3>

            <p className="col-start-2 text-[10px] leading-[1.65] text-[#59687d] sm:col-start-auto">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const FormattingSection = () => {
  return (
    <section
      id="formatting-requirements"
      className="scroll-mt-24 rounded-[10px] border border-[#dce5ef] bg-white p-4 shadow-[0_4px_16px_rgba(6,48,105,0.05)] sm:p-5"
    >
      <SectionHeading number="04" title="Formatting Requirements" />

      <div className="space-y-1">
        {formattingRequirements.map((item) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={item.label}
              whileHover={{
                x: 4,
                backgroundColor: "#f4f8ff",
              }}
              className="grid grid-cols-[32px_minmax(0,1fr)] items-start gap-x-2 gap-y-1 rounded-[5px] border-b border-[#e7ecf2] px-2 py-3 last:border-b-0 sm:grid-cols-[32px_120px_minmax(0,1fr)]"
            >
              <div className="flex h-[25px] w-[25px] items-center justify-center rounded-[5px] bg-[#eaf3ff] text-[#0861bd]">
                <Icon size={13} strokeWidth={1.9} />
              </div>

              <h3 className="text-[11px] font-[700] text-[#173c76]">
                {item.label}
              </h3>

              <p className="col-start-2 text-[10px] leading-[1.6] text-[#59687d] sm:col-start-auto">
                {item.value}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

const SupportingGuidelines = () => {
  return (
    <div className="grid gap-5 md:grid-cols-2 xl:gap-6">
      {supportingGuidelines.map((section) => {
        const Icon = section.icon;

        return (
          <motion.section
            key={section.id}
            id={section.id}
            initial={{
              opacity: 0,
              y: 22,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            whileHover={{
              y: -5,
              boxShadow: "0 14px 30px rgba(6,58,131,0.1)",
            }}
            className="scroll-mt-24 rounded-[10px] border border-[#dce5ef] bg-white p-4 shadow-[0_4px_16px_rgba(6,48,105,0.05)] sm:p-5"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-[42px] w-[42px] items-center justify-center rounded-[7px] bg-[#eaf3ff] text-[#0861bd]">
                <Icon size={21} strokeWidth={1.8} />
              </div>

              <div>
                <p className="text-[9px] font-[700] text-[#ff6b00]">
                  {section.number}
                </p>

                <h2 className="text-[15px] font-[700] text-[#113b79]">
                  {section.title}
                </h2>
              </div>
            </div>

            <ul className="mt-5 space-y-3">
              {section.items.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-[10px] leading-[1.65] text-[#526279]"
                >
                  <CheckCircle2
                    size={14}
                    strokeWidth={2}
                    className="mt-[1px] shrink-0 text-[#0861bd]"
                  />

                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.section>
        );
      })}
    </div>
  );
};

const SubmissionProcess = () => {
  return (
    <section id="submission-process" className="scroll-mt-24">
      <SectionHeading
        number="10"
        title="Submission Process"
        description="Follow these stages to submit your manuscript successfully."
      />

      <div className="relative">
        <div className="absolute left-[10%] right-[10%] top-[35px] hidden border-t-2 border-dashed border-[#b6cae4] xl:block" />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {submissionSteps.map((step, index) => (
            <motion.article
              key={step.number}
              initial={{
                opacity: 0,
                y: 22,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.45,
                delay: index * 0.07,
              }}
              whileHover={{
                y: -7,
                boxShadow: "0 14px 30px rgba(6,58,131,0.12)",
              }}
              className="relative mt-3 rounded-[10px] border border-[#dce5ef] bg-white px-4 pb-5 pt-10 text-center shadow-[0_4px_16px_rgba(6,48,105,0.05)]"
            >
              <div className="absolute left-1/2 top-0 flex h-[31px] w-[31px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#073b82] text-[10px] font-[700] text-white">
                {step.number}
              </div>

              <Upload
                size={25}
                strokeWidth={1.8}
                className="mx-auto text-[#0861bd]"
              />

              <h3 className="mt-4 text-[11px] font-[700] text-[#123b77]">
                {step.title}
              </h3>

              <p className="mt-3 text-[9px] leading-[1.6] text-[#59687d]">
                {step.description}
              </p>
            </motion.article>
          ))}
        </div>

        <div className="mt-6 flex justify-center">
          <motion.a
            href="/submit-your-paper"
            whileHover={{
              y: -3,
              boxShadow: "0 10px 25px rgba(8,97,189,0.25)",
            }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex h-[45px] items-center justify-center gap-2 rounded-[5px] bg-[#0861bd] px-7 text-[11px] font-[700] text-white transition-colors hover:bg-[#064e9b]"
          >
            Submit Your Manuscript
            <Send size={15} />
          </motion.a>
        </div>
      </div>
    </section>
  );
};

const AfterAcceptance = () => {
  const acceptanceItems = [
    "The corresponding author receives the acceptance notification.",
    "Authors must submit the final corrected manuscript and requested files.",
    "Page proofs must be reviewed and returned within the specified period.",
    "Only minor corrections are permitted at the proof stage.",
    "The article is published online after production and final approval.",
    "Authors receive the final article link and publication information.",
  ];

  return (
    <motion.section
      id="after-acceptance"
      initial={{
        opacity: 0,
        y: 22,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{ once: true }}
      className="scroll-mt-24 rounded-[10px] border border-[#cfe0f2] bg-[#edf5ff] p-4 sm:p-6"
    >
      <SectionHeading number="11" title="After Acceptance" />

      <div className="grid gap-4 sm:grid-cols-2">
        {acceptanceItems.map((item) => (
          <motion.div
            key={item}
            whileHover={{
              y: -3,
              backgroundColor: "#ffffff",
            }}
            className="flex items-start gap-3 rounded-[5px] bg-white/70 p-3 transition-colors duration-300"
          >
            <CheckCircle2
              size={15}
              className="mt-[1px] shrink-0 text-[#0861bd]"
            />

            <p className="text-[10px] leading-[1.65] text-[#4f6077]">{item}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

const ImportantNote = () => {
  return (
    <motion.section
      initial={{
        opacity: 0,
        y: 22,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{ once: true }}
      whileHover={{
        y: -4,
        boxShadow: "0 14px 30px rgba(7,75,161,0.1)",
      }}
      className="mx-auto mt-8 grid max-w-[1380px] overflow-hidden rounded-[10px] border border-[#ccddf0] bg-white shadow-[0_5px_18px_rgba(6,48,105,0.06)] md:grid-cols-[1fr_0.75fr]"
    >
      <div className="flex items-start gap-3 p-4 sm:gap-4 sm:p-6">
        <div className="flex h-[43px] w-[43px] shrink-0 items-center justify-center rounded-full bg-[#eaf3ff] text-[#0861bd]">
          <Info size={22} />
        </div>

        <div>
          <h3 className="text-[15px] font-[700] text-[#103b78]">
            Important Note
          </h3>

          <p className="mt-2 text-[10px] leading-[1.7] text-[#53637a] sm:text-[11px]">
            Failure to follow the author guidelines may delay editorial
            evaluation or result in the manuscript being returned for correction
            before peer review.
          </p>
        </div>
      </div>

      <div className="flex items-center gap-3 border-t border-[#dce5ef] bg-[#f1f6fd] p-4 sm:gap-4 sm:p-6 md:border-l md:border-t-0">
        <Mail size={22} className="shrink-0 text-[#0861bd]" />

        <div>
          <p className="text-[10px] text-[#53637a]">
            For author-related enquiries:
          </p>

          <a
            href="mailto:editor.aierrr@yashikapublications.com"
            className="mt-1 block break-all text-[11px] font-[700] text-[#0861bd] transition-colors hover:text-[#ff6b00] hover:underline"
          >
            editor.aierrr@yashikapublications.com
          </a>
        </div>
      </div>
    </motion.section>
  );
};

export default Authorguideline;