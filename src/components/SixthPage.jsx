import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SixthPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("message", message);

    try {
      const response = await fetch("https://formspree.io/f/mrbgoawp", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });

      if (response.ok) {
        // On success, show success message
        setIsSubmitting(false);
        setIsSubmitted(true);
        setName("");
        setEmail("");
        setMessage("");

        // Reset submission status after 3 seconds
        setTimeout(() => setIsSubmitted(false), 3000);
      } else {
        // Handle error if not successful
        setIsSubmitting(false);
        setError("There was an issue sending your message. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setIsSubmitting(false);
      setError("There was an issue sending your message. Please try again.");
    }
  };

  return (
    <section
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8  transition-all"
      id="contact"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full space-y-8 bg-gray-800 bg-opacity-25 backdrop-filter backdrop-blur-lg p-10 rounded-xl shadow-2xl"
      >
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-white josefin-sans">
            Get in Touch
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-md space-y-6"
          >
            <div className="relative">
              <input
                id="name"
                name="name"
                type="text"
                required
                className="peer w-full px-4 py-3 border-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors bg-transparent rounded-xl"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <label
                htmlFor="name"
                className="absolute left-4 -top-5 text-sm text-gray-200 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-5 peer-focus:text-sm peer-focus:text-emerald-600"
              >
                Your Name
              </label>
            </div>
            <div className="relative">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="peer w-full px-4 py-3 border-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors bg-transparent rounded-xl"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label
                htmlFor="email"
                className="absolute left-4 -top-5 text-sm text-gray-200 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-5 peer-focus:text-sm peer-focus:text-emerald-600"
              >
                Email address
              </label>
            </div>
            <div className="relative">
              <textarea
                id="message"
                name="message"
                required
                className="peer w-full px-4 py-3 border-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors bg-transparent resize-none rounded-xl"
                placeholder="Your message"
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
              <label
                htmlFor="message"
                className="absolute left-4 -top-5 text-sm text-gray-200 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-5 peer-focus:text-sm peer-focus:text-emerald-600"
              >
                Your message
              </label>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <button
              type="submit"
              className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 transition-colors duration-300 ease-in-out transform hover:scale-105"
              disabled={isSubmitting}
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                <svg
                  className="h-5 w-5 text-emerald-500 group-hover:text-emerald-400 transition-colors duration-300 ease-in-out"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </motion.div>
        </form>
        <AnimatePresence>
          {isSubmitted && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="mt-4 text-center text-white bg-green-500 bg-opacity-80 backdrop-filter backdrop-blur-sm p-3 rounded-md"
            >
              Thank you for your message! I'll get back to you soon.
            </motion.div>
          )}
        </AnimatePresence>
        {error && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="mt-4 text-center text-white bg-red-500 bg-opacity-80 backdrop-filter backdrop-blur-sm p-3 rounded-md"
          >
            {error}
          </motion.div>
        )}
      </motion.div>
    </section>
  );
};

export default SixthPage;
