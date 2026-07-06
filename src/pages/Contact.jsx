import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaPaperPlane,
} from "react-icons/fa";
import SectionTitle from "../components/SectionTitle";
import Button from "../components/Button";
import PageTransition from "../components/PageTransition";

const contactInfo = [
  {
    icon: <FaMapMarkerAlt />,
    title: "Our Office",
    text: "Sector 62, Noida, Uttar Pradesh, India",
  },
  {
    icon: <FaPhoneAlt />,
    title: "Call Us",
    text: "+91 98765 43210",
  },
  {
    icon: <FaEnvelope />,
    title: "Email Us",
    text: "info@yashikapublications.com",
  },
  {
    icon: <FaClock />,
    title: "Office Hours",
    text: "Mon - Sat: 9:00 AM - 6:00 PM",
  },
];

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <PageTransition>
      {/* HERO */}
      <section className="bg-navy-900 py-16 text-center md:py-20">
        <div className="container-x">
          <motion.span
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="section-tag"
          >
            CONTACT US
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 font-heading text-3xl font-bold text-white sm:text-4xl md:text-5xl"
          >
            Get in Touch With Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mt-4 max-w-2xl text-sm text-navy-100/80 md:text-base"
          >
            Have a question about submission, review or publication? Our team
            is here to help.
          </motion.p>
        </div>
      </section>

      {/* CONTACT INFO CARDS */}
      <section className="bg-white py-14">
        <div className="container-x grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {contactInfo.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="card p-7 text-center"
            >
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-teal-50 text-2xl text-teal-500">
                {c.icon}
              </div>
              <h3 className="mb-1 font-heading text-base font-semibold text-navy-900">
                {c.title}
              </h3>
              <p className="text-sm text-navy-500">{c.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FORM + MAP */}
      <section className="section-py bg-navy-50">
        <div className="container-x grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="rounded-xl bg-white p-8 shadow-card"
          >
            <h2 className="mb-6 font-heading text-2xl font-bold text-navy-900">
              Send Us a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <input
                  type="text"
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="input-field"
                />
                <input
                  type="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  className="input-field"
                />
              </div>
              <input
                type="text"
                name="subject"
                required
                value={form.subject}
                onChange={handleChange}
                placeholder="Subject"
                className="input-field"
              />
              <textarea
                name="message"
                required
                rows={5}
                value={form.message}
                onChange={handleChange}
                placeholder="Your Message"
                className="input-field resize-none"
              />
              <Button type="submit" variant="primary" className="w-full sm:w-auto">
                <FaPaperPlane className="text-sm" /> Send Message
              </Button>
              {submitted && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-sm font-medium text-teal-600"
                >
                  Thank you! Your message has been sent successfully.
                </motion.p>
              )}
            </form>
          </motion.div>

          {/* Map / Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6"
          >
            <div className="overflow-hidden rounded-xl shadow-card">
              <iframe
                title="Yashika Publications Location"
                src="https://www.google.com/maps?q=Noida,Uttar%20Pradesh,India&output=embed"
                width="100%"
                height="320"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="rounded-xl bg-navy-900 p-8 text-white">
              <h3 className="mb-3 font-heading text-lg font-semibold">
                Why Reach Out to Us?
              </h3>
              <p className="text-sm leading-relaxed text-navy-100/80">
                Whether you have questions about submitting a manuscript,
                becoming a reviewer, or partnering with us institutionally,
                our dedicated support team responds within 24-48 hours.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Contact;
