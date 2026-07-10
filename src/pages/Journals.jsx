import { motion } from "framer-motion";
import {
  FaBookOpen,
  FaUsers,
  FaGlobe,
  FaChartLine,
  FaShieldAlt,
  FaBrain,
  FaLaptopCode,
  FaCloud,
  FaRobot,
  FaLock,
  FaCheck,
  FaEdit,
  FaFileAlt,
  FaUserCheck,
  FaRocket,
   FaChevronRight,
    
  FaDesktop,
  
  FaMicrochip,
  FaPaperPlane,
 
} from "react-icons/fa";
import {
  FiBookOpen,
  FiUsers,
  FiGlobe,
  FiTrendingUp,
  FiShield,
   
  FiAward,
  FiClock,
  FiUnlock,
} from "react-icons/fi";
import {
  HiOutlineDocumentText,
  HiOutlineUsers,
  HiOutlineCheckCircle,
  HiOutlinePencilSquare,
  HiOutlineGlobeAlt,
} from "react-icons/hi2";
import bg from "../assets/yashika-publication-journals-banner.webp"
import j1 from "../assets/yashika-publication-research-journal.webp"
import {Link} from "react-router-dom"
import SEO from "../components/SEO";

const journals = [
  {
    icon: <FaBrain />,
    title: "Artificial Intelligence Education Research and Review  ",
    desc: "Advancing innovative research and critical reviews in Artificial Intelligence for education.",
    color: "#075bc7",
    light: "#dcecff",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjjSghiwn838upIvijHiRHC4bvfbx0ZxRzu9VEyJKt_ipbc0fd6WV0Eg0&s=10",
  },
  {
    icon: <FaDesktop />,
    title: "Journal of Human Centered Artificial Intelligence in Education ",
    desc: "Exploring human-centered AI solutions that enhance teaching, learning, and educational experiences.",
    color: "#08964d",
    light: "#dff4e8",
    image:
      "https://www.brainfacts.org/-/media/Brainfacts2/Neuroscience-in-Society/Tech-and-the-Brain/Article-Images/fei-fei-li-thumbnail-image.jpg",
  },
  {
    icon: <FaCloud />,
    title: "Journal of Applied Generative AI and Learning Technologies",
    desc: "Publishing research on generative AI applications and emerging technologies in modern education.",
    color: "#6b3cc9",
    light: "#eee6ff",
    image:
      "https://www.mygreatlearning.com/blog/wp-content/uploads/2025/06/GABI09009.jpg",
  },
  {
    icon: <FaMicrochip />,
    title: "Journal of Computational Pedagogy and Intelligent Education",
    desc: "Focusing on intelligent educational systems, computational pedagogy, and technology-driven learning.",
    color: "#ff5b11",
    light: "#ffe4d4",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5Y79LFrq6Mc3xkHHa7QluK0kjbMFvFGYu4hja6JE-l0bl8RJ4w-zkQUc&s=10",
  },
  {
    icon: <FaShieldAlt />,
    title: "Future Learning Technologies Journal ",
    desc: "Showcasing cutting-edge research on next-generation learning technologies and digital education innovations.",
    color: "#0698aa",
    light: "#dff8fb",
    image:
      "https://www.shutterstock.com/image-photo/businessman-using-digital-interface-online-260nw-2676050819.jpg",
  },
];

const stats = [
  {
    icon: <FiBookOpen />,
    number: "5",
    text: " Journals",
    sub: "In Emerging Tech",
    color: "#0b63ce",
  },
  {
    icon: <FiUsers />,
    number: "200+",
    text: "Editorial Experts",
    sub: "Across the Globe",
    color: "#ff6b1a",
  },
  {
    icon: <FiGlobe />,
    number: "100+",
    text: "Countries",
    sub: "Global Reach",
    color: "#0b63ce",
  },
  {
    icon: <FiTrendingUp />,
    number: "",
    text: "High Visibility",
    sub: "Indexed in Leading Databases",
    color: "#ff6b1a",
  },
  {
    icon: <FiShield />,
    number: "",
    text: "Ethical & Transparent",
    sub: "Committed to Quality and Integrity",
    color: "#0b63ce",
  },
];

const process = [
  {
    icon: <HiOutlineDocumentText />,
    title: "Submission",
    desc: "Submit your manuscript via our online system.",
    color: "#1f66e5",
    bg: "#eef5ff",
    border: "#d5e5ff",
  },
  {
    icon: <HiOutlineUsers />,
    title: "Peer Review",
    desc: "Expert reviewers evaluate your manuscript.",
    color: "#ff7b1f",
    bg: "#fff3e8",
    border: "#ffe0c2",
  },
  {
    icon: <HiOutlineCheckCircle />,
    title: "Decision",
    desc: "Receive decision with constructive feedback.",
    color: "#28b463",
    bg: "#edf9f1",
    border: "#d8f2e2",
  },
  {
    icon: <HiOutlinePencilSquare />,
    title: "Production",
    desc: "Professional editing, typesetting and formatting.",
    color: "#8e44ec",
    bg: "#f4ecff",
    border: "#eadcff",
  },
  {
    icon: <HiOutlineGlobeAlt />,
    title: "Publication",
    desc: "Your research is published and made globally visible.",
    color: "#17b7e8",
    bg: "#eafcff",
    border: "#d5f7ff",
  },
];

const Journals = () => {
  return (
    <main className="w-full overflow-hidden bg-white text-[#06285c]">
      <SEO
  title="Our Journals | Yashika Publications"
  description="Explore international, peer-reviewed, and open-access academic journals published by Yashika Publications."
  keywords="academic journals, peer-reviewed journals, open-access journals, international journals"
  path="/journals"
/>
      {/* HERO */}
      <section
        className="relative min-h-[390px] bg-cover bg-center px-4 py-8 sm:px-8 lg:px-12"
        style={{
          backgroundImage:
            `url(${bg})`,
        }}
      >
        <div className="mx-auto max-w-[1240px]">
         <div className="flex items-center gap-2 text-sm text-white/80 sm:mt-9 mt-5">
  <Link
    to="/"
    className="transition duration-300 hover:text-[#ff9b21]"
  >
    Home
  </Link>

  <FaChevronRight className="text-[10px]" />

  <span className="font-medium text-white">
    Our Journals
  </span>
</div>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-6 text-4xl font-[600] text-white sm:text-[40px] md:text-[40px] lg:text-[42px]"
          >
            Our Journals
          </motion.h1>

          <div className="mt-2 h-[2px] w-12 bg-[#ff9b21] rounded-full" />

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-6 text-[20px] font-medium text-white"
          >
            Advancing research. Driving innovation.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-4 max-w-[400px] text-sm leading-6 text-white/90"
          >
            Five new peer-reviewed, open access journals dedicated to Computer
            Science, IT, and AI Education.
          </motion.p>
        </div>
      </section>

      {/* STATS */}
  <section className="relative z-10 mx-auto -mt-10 w-full max-w-[1240px] px-4 sm:px-6 lg:px-8">
  <motion.div
    initial={{ opacity: 0, y: 35 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.55 }}
    className="grid overflow-hidden rounded-[14px] border border-[#e4e9f2] bg-white shadow-[0_8px_24px_rgba(6,40,92,0.16)] sm:grid-cols-2 lg:grid-cols-5"
  >
    {stats.map((item, i) => (
      <motion.div
        key={i}
        whileHover={{
          y: -7,
          backgroundColor: "#f8fbff",
        }}
        transition={{ type: "spring", stiffness: 260, damping: 18 }}
        className="group relative flex min-h-[100px] items-center gap-5 border-b border-[#dfe5ee] px-8 py-6 last:border-b-0 sm:last:border-b sm:[&:nth-child(4)]:border-b-0 lg:border-b-0 lg:border-r lg:last:border-r-0"
      >
        <motion.div
          whileHover={{ scale: 1.14, rotate: -4 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="flex h-[50px] w-[50px] shrink-0 items-center justify-center text-[42px]"
          style={{ color: item.color }}
        >
          {item.icon}
        </motion.div>

        <div className="text-left">
          {item.number && (
            <h3 className="text-[22px] font-semibold leading-none tracking-tight text-[#061f5c] sm:text-[22px]">
              {item.number}
            </h3>
          )}

          <p
            className={`font-semibold leading-tight text-[#111827] ${
              item.number ? "mt-1 text-[12px]" : "text-[14px]"
            }`}
          >
            {item.text}
          </p>

          <span className="mt-1 block text-[12px] font-medium leading-[1.55] text-[#333333]">
            {item.sub}
          </span>
        </div>

      
      </motion.div>
    ))}
  </motion.div>
</section>

      {/* PORTFOLIO */}
     <section className="bg-white px-4 py-12 sm:px-6 lg:px-8">
  <div className="mx-auto max-w-[1170px] text-center">
    <motion.h2
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45 }}
      className="text-[24px] font-[600] leading-tight text-[#061f5c] sm:text-[28px]"
    >
      Our Journals Portfolio
    </motion.h2>
  <div className="mx-auto mt-2 h-[3px] w-[38px] rounded-full bg-[#f28b21]" />
    <motion.p
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: 0.08 }}
      className="mx-auto mt-3 max-w-[760px] text-[13px] font-medium leading-6 text-[#061f5c] sm:text-sm"
    >
      Explore our five new open access journals focused on cutting-edge research
      and innovation in Computer Science, IT, and AI Education.
    </motion.p>

   <div className="mt-6 grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-5">
  {journals.map((j, i) => (
    <motion.div
      key={i}
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: i * 0.08 }}
      whileHover={{ y: -12, scale: 1.025 }}
      className="group flex h-full flex-col overflow-hidden rounded-[10px] border border-[#d9e1ec] bg-white shadow-[0_8px_22px_rgba(6,31,92,0.12)] transition-all duration-300 hover:shadow-[0_18px_35px_rgba(6,31,92,0.22)]"
      style={{ borderTop: `5px solid ${j.color}` }}
    >
      {/* Content */}
      <div className="flex flex-1 flex-col px-4 pt-5 pb-5">
        <motion.div
          whileHover={{ rotate: 8, scale: 1.12 }}
          transition={{ type: "spring", stiffness: 260 }}
          className="mx-auto flex h-[55px] w-[55px] items-center justify-center rounded-full text-[26px] text-white shadow-md"
          style={{ backgroundColor: j.color }}
        >
          {j.icon}
        </motion.div>

        {/* Title */}
        <h3 className="mt-5 min-h-[65px] text-center text-[14.5px] font-semibold leading-[1.35] text-[#061f5c]">
          {j.title}
        </h3>

        {/* Description */}
        <p className="mt-4 flex-1 text-center text-[13px] font-medium leading-6 text-[#555]">
          {j.desc}
        </p>

        {/* Button */}
        <Link to="/">
        <div className="mt-3 flex justify-center">
          <span
            className="inline-flex items-center justify-center rounded-full px-7 py-2 text-[12px] font-bold transition-all duration-300"
            style={{
              backgroundColor: j.light,
              color: j.color,
            }}
          >
            View Details
          </span>
        </div></Link>
      </div>

      {/* Image */}
      <div className="h-[120px] overflow-hidden">
        <div
          className="h-full w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,.12), rgba(0,0,0,.22)), url(${j.image})`,
          }}
        />
      </div>
    </motion.div>
  ))}
</div>

   
  </div>
</section>

      {/* WHY PUBLISH */}
  <section className="bg-[#f3f8ff] px-4 py-10 sm:px-6 lg:px-8">
  <div className="mx-auto grid max-w-[1170px] items-center gap-10 lg:grid-cols-[1fr_1.35fr]">
    {/* Left Image */}
    <motion.div
      initial={{ opacity: 0, x: -35 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55 }}
      whileHover={{ scale: 1.02 }}
      className="overflow-hidden rounded-[16px] shadow-[0_8px_20px_rgba(6,31,92,0.14)]"
    >
      <img
        src={j1}
        alt="Researcher working on laptop"
        className="h-[285px] w-full object-cover transition duration-500 hover:scale-105 sm:h-[300px] lg:h-[310px]"
      />
    </motion.div>

    {/* Right Content */}
    <motion.div
      initial={{ opacity: 0, x: 35 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55 }}
      className="lg:pl-10"
    >
      <p className="text-[12px] font-semibold uppercase tracking-wide text-[#f8883d]">
        Why Publish With Us
      </p>

      <h2 className="mt-2 text-[27px] font-semibold leading-tight text-[#061f5c] sm:text-[30px]">
        Global Standards. Maximum Impact.
      </h2>

      <div className="mt-2 h-[3px] w-[50px] rounded-full bg-[#f8883d]" />

      <div className="mt-6 grid gap-y-8 sm:grid-cols-2 sm:gap-x-8">
        {[
          {
            icon: <FiGlobe />,
            title: "Global Indexing",
            desc: "Indexed in leading databases for maximum visibility.",
          },
          {
            icon: <FiAward />,
            title: "Rigorous Peer Review",
            desc: "Ensuring research quality and credibility.",
          },
          {
            icon: <FiClock />,
            title: "Timely Publication",
            desc: "Fast and efficient publication process.",
          },
          {
            icon: <FiUnlock />,
            title: "Open Access",
            desc: "Wider dissemination and greater impact.",
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ x: 8, y: -4 }}
            transition={{ type: "spring", stiffness: 260, damping: 18 }}
            className={`group flex gap-5 ${
              i % 2 === 1 ? "sm:border-l sm:border-[#cfd8e6] sm:pl-12" : ""
            }`}
          >
            <motion.div
              whileHover={{ rotate: -8, scale: 1.12 }}
              className="flex h-[48px] w-[48px] shrink-0 items-center justify-center text-[42px] text-[#0b3fa3]"
            >
              {item.icon}
            </motion.div>

            <div>
              <h4 className="text-[15.5px] font-semibold text-[#061f5c]">
                {item.title}
              </h4>
              <p className="mt-2 max-w-[230px] text-[14px] font-medium leading-[1.65] text-black">
                {item.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  </div>
</section>

      {/* PROCESS */}
    <section className="bg-white px-4 py-10">
  <div className="mx-auto max-w-[1170px]">

    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-[24px] font-[600] leading-tight text-[#061f5c] sm:text-[28px] text-center"
    >
      Our Publication Process
    </motion.h2>
 <div className="mx-auto mt-2 h-[3px] w-[38px] rounded-full bg-[#f28b21]" />
    <div className="relative mt-6">

      {/* Dotted Line */}
      <div className="absolute left-[10%] right-[10%] top-[33px] hidden border-t-2 border-dashed border-[#cfd7e8] lg:block"></div>

      <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-5">

        {process.map((item, index) => (

          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: .45,
              delay: index * .08,
            }}
            whileHover={{
              y: -10,
            }}
            className="relative z-10 text-center"
          >

            <motion.div
              whileHover={{
                scale: 1.12,
                rotate: -8,
              }}
              transition={{
                type: "spring",
                stiffness: 250,
              }}
              className="mx-auto flex h-[68px] w-[68px] items-center justify-center rounded-full border-[2px] shadow-sm"
              style={{
                background: item.bg,
                borderColor: item.border,
                color: item.color,
              }}
            >

              <div className="text-[34px]">
                {item.icon}
              </div>

            </motion.div>

            <h3 className="mt-5 text-[16px] font-semibold text-[#06285c]">
              {item.title}
            </h3>

            <p className="mx-2 mt-2 max-w-[190px] text-[13px] leading-5 text-[#0f1113]">
              {item.desc}
            </p>

          </motion.div>

        ))}

      </div>

    </div>

  </div>
</section>

      {/* CTA */}
     <div className="py-6">
       <section className="relative overflow-hidden bg-[#004b93] px-5 py-8 text-white sm:py-8 ">
     <div className="absolute right-0 top-0 h-full w-[240px] opacity-35 ">
       <div className="h-full w-full bg-[radial-gradient(circle,#28b8ff_2px,transparent_2px)] [background-size:18px_18px]" />
     </div>
   
     <motion.div
       initial={{ opacity: 0, y: 25 }}
       whileInView={{ opacity: 1, y: 0 }}
       viewport={{ once: true }}
       transition={{ duration: 0.6 }}
       className="relative z-10 mx-auto flex max-w-[1170px] flex-col items-center justify-between gap-7 md:flex-row"
     >
       <div className="flex flex-col items-center gap-5 text-center sm:flex-row sm:text-left">
         <motion.div
           whileHover={{ scale: 1.08, rotate: 3 }}
           className="flex h-[80px] w-[80px] items-center justify-center rounded-full border-2 border-white/70 text-[44px]"
         >
           <FaFileAlt />
         </motion.div>
   
         <div>
           <h2 className="text-[24px] font-medium leading-tight sm:text-[26px]">
             Ready to Publish Your Research?
           </h2>
           <p className="mt-1 max-w-[560px] text-[14px] font-medium leading-6 text-white/90 sm:text-[14px]">
             Join thousands of researchers worldwide who trust <br className="hidden sm:block" />
             Yashika Publications for quality and impact.
           </p>
         </div>
       </div>
   
       <motion.a
         whileHover={{
           scale: 1.06,
           boxShadow: "0 0 25px rgba(255,255,255,0.45)",
         }}
         whileTap={{ scale: 0.96 }}
         href="/contact"
         className="inline-flex h-[50px] sm:mr-10 mr-0 min-w-[220px] items-center justify-center gap-3 rounded-[6px] bg-white px-6 text-[15px] font-semibold text-[#063a70] shadow-xl transition duration-300 hover:bg-[#f2f7ff]"
       >
         Submit Your Paper <FaPaperPlane className="text-[18px]" />
       </motion.a>
     </motion.div>
   </section></div>
       
    </main>
  );
};

export default Journals;