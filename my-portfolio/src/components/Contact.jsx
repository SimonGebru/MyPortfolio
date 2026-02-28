import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import { FiGithub, FiLinkedin, FiCopy, FiSend, FiCheck } from "react-icons/fi";

const toastStyle = {
  background: "hsl(225 22% 10%)",
  color: "hsl(220 15% 88%)",
  border: "1px solid hsl(225 14% 15%)",
  fontSize: "13px",
};

const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const social = useMemo(
    () => [
      {
        icon: FiGithub,
        label: "GitHub",
        value: "SimonGebru",
        href: "https://github.com/SimonGebru",
      },
      {
        icon: FiLinkedin,
        label: "LinkedIn",
        value: "simon-gebru",
        href: "https://www.linkedin.com/in/simon-gebru-80b21b1b8",
      },
    ],
    []
  );

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = "Name is required";
    if (!form.email.trim()) errs.email = "Email is required";
    else if (!isValidEmail(form.email)) errs.email = "Invalid email address";
    if (!form.message.trim()) errs.message = "Message is required";
    else if (form.message.length > 1000) errs.message = "Max 1000 characters";
    return errs;
  };

  const inputClass = (field) =>
    [
      "w-full px-4 py-2.5 text-sm rounded-lg transition-colors",
      "bg-slate-900/50 border",
      "placeholder:text-slate-500",
      "focus:outline-none focus:ring-1 focus:ring-sky-500",
      errors[field]
        ? "border-red-500/60"
        : "border-slate-800 hover:border-sky-500/30",
    ].join(" ");

  const copyToClipboard = async (text, label) => {
    try {
      await navigator.clipboard.writeText(text);
      toast.success(`${label} copied`, { style: toastStyle });
    } catch {
      toast.error("Copy failed", { style: toastStyle });
    }
  };

  const handleChange = (field, value) => {
    setForm((p) => ({ ...p, [field]: value }));
    setErrors((p) => ({ ...p, [field]: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (submitting) return;

    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    setSubmitting(true);

    try {
      const res = await fetch("https://formspree.io/f/xvganbvg", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Bad response");

      toast.success("Message sent!", { style: toastStyle });
      setSubmitted(true);
      setForm({ name: "", email: "", message: "" });

      setTimeout(() => setSubmitted(false), 2500);
    } catch {
      toast.error("Something went wrong. Try again.", { style: toastStyle });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative py-28 px-6 md:px-20 text-slate-200 overflow-hidden"
    >
      {/* overlays instead of solid bg so ParticleField shows through */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#020617]/85 via-[#020617]/70 to-transparent pointer-events-none" />
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_20%_25%,rgba(56,189,248,0.10),transparent_55%)] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mb-12"
        >
          <span className="text-xs uppercase tracking-widest text-sky-400">
            Get in touch
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-3">Contact</h2>
          <p className="text-slate-400 max-w-lg">
            Have a project idea or want to collaborate? Send me a message.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 max-w-5xl">
          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.05 }}
            className="space-y-4"
            noValidate
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1.5">
                Name
              </label>
              <input
                id="name"
                type="text"
                value={form.name}
                onChange={(e) => handleChange("name", e.target.value)}
                className={inputClass("name")}
                placeholder="Your name"
                maxLength={100}
              />
              {errors.name && (
                <p className="text-xs text-red-400 mt-1">{errors.name}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium mb-1.5"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                value={form.email}
                onChange={(e) => handleChange("email", e.target.value)}
                className={inputClass("email")}
                placeholder="you@email.com"
                maxLength={255}
              />
              {errors.email && (
                <p className="text-xs text-red-400 mt-1">{errors.email}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-1.5"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                value={form.message}
                onChange={(e) => handleChange("message", e.target.value)}
                className={`${inputClass("message")} resize-none`}
                placeholder="Tell me about your project..."
                maxLength={1000}
              />

              <div className="flex justify-between mt-1">
                {errors.message ? (
                  <p className="text-xs text-red-400">{errors.message}</p>
                ) : (
                  <span />
                )}
                <span className="text-xs text-slate-500">
                  {form.message.length}/1000
                </span>
              </div>
            </div>

            <button
              type="submit"
              disabled={submitting || submitted}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg font-medium text-sm transition-colors
                         bg-sky-500 text-black hover:bg-sky-400
                         disabled:opacity-60 disabled:hover:bg-sky-500"
            >
              {submitted ? <FiCheck className="w-4 h-4" /> : <FiSend className="w-4 h-4" />}
              {submitted ? "Sent" : submitting ? "Sending..." : "Send Message"}
            </button>
          </motion.form>

          {/* Social cards */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="space-y-3"
          >
            <p className="text-sm font-medium text-slate-200 mb-4">
              Or find me on
            </p>

            {social.map((item) => (
              <div
                key={item.label}
                className="group border border-slate-800 rounded-xl bg-slate-900/40 p-4 flex items-center justify-between"
              >
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-slate-300 hover:text-white transition-colors"
                >
                  <item.icon className="w-4 h-4 text-sky-400" />
                  <span>
                    <span className="font-medium text-slate-200">
                      {item.label}
                    </span>
                    <span className="block text-xs text-slate-500">
                      {item.value}
                    </span>
                  </span>
                </a>

                <button
                  type="button"
                  onClick={() => copyToClipboard(item.value, item.label)}
                  className="p-2 rounded-lg text-slate-500 hover:text-white hover:bg-slate-800/60 transition-colors
                             opacity-100 md:opacity-0 md:group-hover:opacity-100"
                  aria-label={`Copy ${item.label}`}
                >
                  <FiCopy className="w-4 h-4" />
                </button>
              </div>
            ))}

            <div className="pt-2 text-xs text-slate-500">
              Prefer a structured message? Use the form — I read everything.
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;