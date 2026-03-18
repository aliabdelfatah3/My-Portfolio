import { useState } from "react";
import emailjs from "@emailjs/browser";
import Phone_Darkmode from "./Logos/Phone_Darkmode.png";
import Phone_Lightmode from "./Logos/Phone_Lightmode.png";
import Gmail_Darkmode from "./Logos/Gmail_Darkmode.png";
import Gmail_Lightmode from "./Logos/Gmail_Lightmode.png";
import Github_Darkmode from "./Logos/Github_Darkmode.png";
import Github_Lightmode from "./Logos/Github_Lightmode.png";
import LinkedIn_Darkmode from "./Logos/LinkedIn_Darkmode.png";
import LinkedIn_Lightmode from "./Logos/LinkedIn_Lightmode.png";

function ContactMe() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  const contacts = [
    {
      href: "tel:+201011624638",
      label: "+20 101 162 4638",
      darkIcon: Phone_Darkmode,
      lightIcon: Phone_Lightmode,
    },
    {
      href: "mailto:aliabdelfatah455@gmail.com",
      label: "aliabdelfatah455@gmail.com",
      darkIcon: Gmail_Darkmode,
      lightIcon: Gmail_Lightmode,
    },
    {
      href: "https://github.com/aliabdelfatah3",
      label: "GitHub",
      darkIcon: Github_Darkmode,
      lightIcon: Github_Lightmode,
    },
    {
      href: "https://www.linkedin.com/in/ali-abdelfattah-3looloo-866b91198",
      label: "LinkedIn",
      darkIcon: LinkedIn_Darkmode,
      lightIcon: LinkedIn_Lightmode,
    },
  ];

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setSending(true);

    // ⬇️ Replace these 3 values with your EmailJS credentials
    const SERVICE_ID = "service_ikrdvgd"; // e.g. "service_abc123"
    const TEMPLATE_ID = "template_6bcr8f9"; // e.g. "template_xyz789"
    const PUBLIC_KEY = "P9vtXtz4LOzynLmk6"; // e.g. "abcDEFghiJKL123"

    emailjs
      .send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
          to_email: "aliabdelfatah455@gmail.com",
        },
        PUBLIC_KEY,
      )
      .then(() => {
        setSending(false);
        setSent(true);
        setForm({ name: "", email: "", message: "" });
        setTimeout(() => setSent(false), 4000);
      })
      .catch((err) => {
        console.error("EmailJS error:", err);
        setSending(false);
        alert("Something went wrong. Please try again.");
      });
  };

  const inputClass =
    "w-full bg-white/40 dark:bg-white/5 border border-light-border dark:border-dark-border rounded-xl px-4 py-3 text-light-text-primary dark:text-dark-text-primary placeholder-light-text-secondary dark:placeholder-dark-text-secondary font-inter text-sm focus:outline-none focus:ring-2 focus:ring-accent-primary dark:focus:ring-accent-secondary focus:border-transparent transition-all duration-300 backdrop-blur-sm";

  return (
    <div className="relative flex items-center justify-center w-full px-4 py-24">
      {/* Decorative Background Glows */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-accent-primary/10 dark:bg-accent-secondary/10 blur-[100px] rounded-full -z-10 pointer-events-none"></div>
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-64 h-64 bg-accent-secondary/10 blur-[80px] rounded-full -z-10 pointer-events-none"></div>

      <div className="flex flex-col w-full max-w-6xl gap-8">
        <h1 className="text-3xl font-bold tracking-tight text-center sm:text-4xl md:text-5xl font-syne text-accent-primary dark:text-accent-secondary">
          Let&apos;s Connect
        </h1>
        <p className="max-w-xl mx-auto text-base text-center sm:text-lg text-light-text-secondary dark:text-dark-text-secondary font-inter">
          Feel free to reach out for any inquiries, collaborations, or feedback.
          I&apos;m always open to connecting!
        </p>

        <div className="flex flex-col items-start gap-8 lg:flex-row">
          {/* ── Glassmorphism Contact Form ── */}
          <form
            onSubmit={handleSubmit}
            className="flex flex-col flex-1 w-full gap-5 p-8 glass rounded-3xl"
          >
            <h2 className="mb-1 text-xl font-bold font-syne text-light-text-primary dark:text-dark-text-primary">
              Send a Message
            </h2>

            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className={inputClass}
            />
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className={inputClass}
            />
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Your Message..."
              required
              rows={5}
              className={`${inputClass} resize-none`}
            />

            <button
              type="submit"
              disabled={sending || sent}
              className="relative w-full py-3.5 rounded-xl font-semibold font-inter text-white text-sm overflow-hidden transition-all duration-300 bg-premium-gradient bg-[length:200%_auto] hover:bg-right shadow-[0_0_20px_rgba(99,102,241,0.3)] hover:shadow-[0_0_30px_rgba(139,92,246,0.5)] hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {sent
                ? "✓ Message Sent!"
                : sending
                  ? "Sending..."
                  : "Send Message →"}
            </button>
          </form>

          {/* ── Contact Links ── */}
          <div className="flex flex-col flex-shrink-0 w-full gap-4 lg:w-80">
            {contacts.map(({ href, label, darkIcon, lightIcon }, index) => (
              <a
                key={index}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group glass flex items-center gap-4 py-4 px-5 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(99,102,241,0.2)] hover:border-accent-primary/50 dark:hover:border-accent-secondary/50"
              >
                <div className="relative flex-shrink-0 w-8 h-8 transition-transform duration-300 group-hover:scale-110">
                  <img
                    src={darkIcon}
                    alt={label}
                    className="hidden object-contain w-full h-full dark:block"
                  />
                  <img
                    src={lightIcon}
                    alt={label}
                    className="object-contain w-full h-full dark:hidden"
                  />
                </div>
                <span className="text-sm font-semibold truncate transition-colors duration-300 font-inter text-light-text-primary dark:text-dark-text-primary group-hover:text-accent-primary dark:group-hover:text-accent-secondary">
                  {label}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactMe;
