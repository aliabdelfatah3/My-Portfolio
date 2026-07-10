import { useState } from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FiCopy, FiExternalLink } from "react-icons/fi";

const links = [
  {
    href: "tel:+201011624638",
    label: "Phone",
    value: "+20 101 162 4638",
    icon: FiExternalLink,
  },
  {
    href: "mailto:aliabdelfatah455@gmail.com",
    label: "Email",
    value: "aliabdelfatah455@gmail.com",
    icon: FiExternalLink,
  },
  {
    href: "https://www.linkedin.com/in/ali-abdelfattah-866b91198/",
    label: "LinkedIn",
    value: "Ali Abdelfattah",
    icon: FaLinkedinIn,
  },
  {
    href: "https://github.com/aliabdelfatah3",
    label: "GitHub",
    value: "aliabdelfatah3",
    icon: FaGithub,
  },
];

function ContactMe() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    project: "",
    message: "",
  });
  const [status, setStatus] = useState("idle");

  const handleChange = (e) => {
    setStatus("idle");
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setStatus("missing");
      return;
    }

    const brief = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Project type: ${form.project || "Not specified"}`,
      "",
      form.message,
    ].join("\n");

    try {
      await navigator.clipboard.writeText(brief);
      setStatus("copied");
      setForm({ name: "", email: "", project: "", message: "" });
    } catch {
      setStatus("manual");
    }
  };

  const inputClass =
    "w-full rounded-xl border border-dark-border bg-[#061820] px-4 py-3 text-sm text-dark-text-primary placeholder:text-dark-text-secondary/65 outline-none transition focus:border-accent-primary focus:ring-2 focus:ring-accent-primary/20";

  return (
    <div className="relative overflow-hidden border-t border-dark-border bg-[#030B0E] px-5 py-24 sm:px-8 lg:px-12">
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-accent-primary/10 blur-[110px]" />
      <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.86fr_1.14fr]">
        <div>
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.12em] text-accent-primary">
            Get in touch
          </p>
          <h2 className="font-syne text-4xl font-bold leading-tight tracking-[-0.025em] text-dark-text-primary sm:text-5xl">
            Let&apos;s build something clean, fast, and useful.
          </h2>
          <p className="mt-5 max-w-xl text-base leading-8 text-dark-text-secondary">
            Reach out for frontend roles, responsive websites, React or Angular
            projects, collaborations, or feedback. I&apos;m open to discussing
            practical ways to bring your interface to life.
          </p>

          <div className="mt-8 grid gap-3">
            {links.map(({ href, label, value, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="group flex min-h-16 items-center gap-4 rounded-2xl border border-dark-border bg-dark-card px-5 transition hover:-translate-y-0.5 hover:border-accent-primary/55"
              >
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-accent-primary/10 text-accent-primary">
                  <Icon aria-hidden="true" />
                </span>
                <span>
                  <span className="block text-[11px] font-bold uppercase tracking-[0.09em] text-dark-text-secondary">
                    {label}
                  </span>
                  <span className="mt-1 block text-sm font-semibold text-dark-text-primary group-hover:text-accent-primary">
                    {value}
                  </span>
                </span>
              </a>
            ))}
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-[1.35rem] border border-dark-border bg-dark-card p-5 shadow-[0_30px_80px_rgba(0,0,0,0.28)] sm:p-7"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block">
              <span className="mb-2 block text-xs font-bold uppercase tracking-[0.08em] text-dark-text-secondary">
                Your name
              </span>
              <input
                className={inputClass}
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Name"
              />
            </label>
            <label className="block">
              <span className="mb-2 block text-xs font-bold uppercase tracking-[0.08em] text-dark-text-secondary">
                Email address
              </span>
              <input
                className={inputClass}
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
              />
            </label>
          </div>

          <label className="mt-4 block">
            <span className="mb-2 block text-xs font-bold uppercase tracking-[0.08em] text-dark-text-secondary">
              Project type
            </span>
            <select
              className={inputClass}
              name="project"
              value={form.project}
              onChange={handleChange}
            >
              <option value="">Select a service</option>
              <option>Frontend role</option>
              <option>Responsive website</option>
              <option>React project</option>
              <option>Angular project</option>
              <option>UI improvement</option>
            </select>
          </label>

          <label className="mt-4 block">
            <span className="mb-2 block text-xs font-bold uppercase tracking-[0.08em] text-dark-text-secondary">
              Message
            </span>
            <textarea
              className={`${inputClass} min-h-36 resize-none`}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Tell me about the role, project, timeline, and what you need built or improved."
            />
          </label>

          <button
            type="submit"
            className="mt-5 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-accent-primary px-5 text-sm font-bold text-[#021014] transition hover:-translate-y-0.5 hover:bg-accent-secondary focus:outline-none focus:ring-2 focus:ring-accent-primary focus:ring-offset-2 focus:ring-offset-dark-bg"
          >
            <FiCopy aria-hidden="true" />
            Copy contact brief
          </button>

          <div className="mt-4 min-h-6 text-sm font-medium">
            {status === "missing" && (
              <p className="text-accent-tertiary">
                Add your name, email, and message before copying.
              </p>
            )}
            {status === "copied" && (
              <p className="text-accent-secondary">
                Contact brief copied. Send it through LinkedIn or your preferred email.
              </p>
            )}
            {status === "manual" && (
              <p className="text-accent-tertiary">
                Clipboard access was blocked. Select the message and copy it manually.
              </p>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactMe;
