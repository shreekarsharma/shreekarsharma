import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    toast.loading("Sending...", { id: "send-status" });

    emailjs
      .sendForm(
        "service_zdv3srf",   // replace
        "template_ut69msq",  // replace
        form.current,
        "--3KDKAyic54hYhvb"    // replace
      )
      .then(
        () => {
          toast.success("Message sent successfully ✅", {
            id: "send-status",
          });
          form.current.reset();
        },
        () => {
          toast.error("Failed to send message ❌", {
            id: "send-status",
          });
        }
      );
  };

  return (
    <section
      id="contact"
      className="py-20 px-6 bg-white dark:bg-gray-950 text-gray-800 dark:text-gray-200"
    >
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8">Contact Me</h2>
        <p className="mb-6 text-gray-600 dark:text-gray-400">
          Got a question, project idea, or just want to say hi? Fill the form
          below or email me at{" "}
          <a
            href="mailto:shreekarsharma4512@gmail.com"
            className="text-blue-600 hover:underline"
          >
            shreekarsharma4512@gmail.com
          </a>
        </p>

        <form ref={form} onSubmit={sendEmail} className="space-y-4 text-left">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full px-4 py-2 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full px-4 py-2 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100"
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            required
            className="w-full px-4 py-2 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            Send Message
          </button>
          {status && (
            <p className="text-sm mt-2 text-center text-green-500 dark:text-green-400">
              {status}
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
