import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("https://formspree.io/f/xvganbvg", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        toast.success("Tack för ditt meddelande!");
        setForm({ name: "", email: "", message: "" });
      } else {
        toast.error("Något gick fel, försök igen.");
      }
    } catch (err) {
      toast.error("Nätverksfel. Försök igen.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative bg-[#1e1f25] text-white py-14 px-6 md:px-20 overflow-hidden"
    >
      <Toaster position="top-center" />
      <div className="absolute inset-0 bg-gradient-to-br from-lime-300/10 to-transparent pointer-events-none z-0" />

      {/* Rubrik */}
      <div className="relative z-10 text-center mb-12">
        <h2 className="text-4xl font-bold text-lime-500 uppercase">Contact me</h2>
        <p className="text-gray-400 mt-2">
        Interested in talking code, collaborations, or just want to say hi?
        </p>
      </div>

      {/* Formulär */}
      <div className="relative z-10 max-w-2xl mx-auto bg-white/5 border border-lime-500 p-8 rounded-xl backdrop-blur-md shadow-md">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-lime-400">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="mt-1 w-full p-3 rounded bg-[#2b2c34] text-white border border-lime-400 focus:outline-none"
              placeholder="Your name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-lime-400">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="mt-1 w-full p-3 rounded bg-[#2b2c34] text-white border border-lime-400 focus:outline-none"
              placeholder="your@email.se"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-lime-400">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={form.message}
              onChange={handleChange}
              required
              className="mt-1 w-full p-3 rounded bg-[#2b2c34] text-white border border-lime-400 focus:outline-none"
              placeholder="Write your message here…"
            />
          </div>

          {/* Centrera knappen */}
          <div className="flex justify-center">
            <button
              type="submit"
              disabled={loading}
              className="bg-lime-500 text-[#1e1f25] font-semibold py-3 px-6 rounded hover:bg-lime-400 transition disabled:opacity-50"
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </div>
        </form>

        {/* Ikoner istället för e-post */}
        <div className="mt-10 text-center">
          <p className="text-gray-400">Or reach out to me on:</p>
          <div className="mt-4 flex justify-center gap-6 text-lime-400 text-2xl">
            <a
              href="https://www.linkedin.com/in/simon-gebru-80b21b1b8"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/SimonGebru"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;