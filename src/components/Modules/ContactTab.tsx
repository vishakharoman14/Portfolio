"use client";

import { useState } from "react";
import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setSent(true);
    form.reset();
  }

  return (
    <main className="min-h-screen bg-white pb-24 pt-32 dark:bg-neutral-900">

      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-72 bg-gradient-to-tr from-teal-300 via-purple-400 to-fuchsia-500 opacity-20 blur-3xl dark:opacity-40" />

      <section className="mx-auto w-full max-w-5xl px-6">
        {/* heading */}
        <motion.header
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12 text-center"
        >
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
            Get in&nbsp;Touch
          </h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Have a question or just want to say hi? Fill in the form
            below&nbsp;— I’ll reply within 24 hours.
          </p>
        </motion.header>

        {/* contact card */}
        <div className="grid gap-10 md:grid-cols-2">
          {/* left — info */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6 rounded-3xl bg-gradient-to-br from-white/60 to-white/30 p-10 shadow-2xl backdrop-blur-lg dark:from-neutral-800/60 dark:to-neutral-800/40"
          >
            <h2 className="mb-2 text-2xl font-semibold text-gray-800 dark:text-gray-100">
              Contact details
            </h2>

            <div className="flex items-start gap-4">
              <MapPin className="mt-1 shrink-0" />
              <span className="text-gray-700 dark:text-gray-300">
                Pune, Maharashtra<br />
                India 411057
              </span>
            </div>

            <div className="flex items-start gap-4">
              <Phone className="mt-1 shrink-0" />
              <span className="text-gray-700 dark:text-gray-300">
                +91-
              </span>
            </div>

            <div className="flex items-start gap-4">
              <Mail className="mt-1 shrink-0" />
              <span className="text-gray-700 dark:text-gray-300">
                vishakharoman14@gmail.com
              </span>
            </div>

            <Image
              src="/contact-illustration.svg"
              alt=""
              width={400}
              height={300}
              className="mx-auto mt-4 w-72 md:w-80"
            />
          </motion.div>

          {/* right — form */}
          <motion.form
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            onSubmit={handleSubmit}
            className="flex flex-col gap-6 rounded-3xl bg-white/70 p-10 shadow-2xl backdrop-blur-lg dark:bg-neutral-800/70"
          >
            <label className="flex flex-col gap-1">
              <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
                Name
              </span>
              <input
                required
                name="name"
                type="text"
                placeholder="Your full name"
                className="rounded-lg border border-neutral-300 bg-white/80 px-4 py-2 text-neutral-900 placeholder:text-neutral-500 focus:border-teal-500 focus:outline-none dark:border-neutral-600 dark:bg-neutral-700/60 dark:text-neutral-100 dark:placeholder:text-neutral-400"
              />
            </label>

            <label className="flex flex-col gap-1">
              <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
                Email
              </span>
              <input
                required
                name="email"
                type="email"
                placeholder="you@example.com"
                className="rounded-lg border border-neutral-300 bg-white/80 px-4 py-2 text-neutral-900 placeholder:text-neutral-500 focus:border-teal-500 focus:outline-none dark:border-neutral-600 dark:bg-neutral-700/60 dark:text-neutral-100 dark:placeholder:text-neutral-400"
              />
            </label>

            <label className="flex flex-col gap-1">
              <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
                Message
              </span>
              <textarea
                required
                name="message"
                rows={5}
                placeholder="Tell me about your project or just say hi …"
                className="rounded-lg border border-neutral-300 bg-white/80 px-4 py-2 text-neutral-900 placeholder:text-neutral-500 focus:border-teal-500 focus:outline-none dark:border-neutral-600 dark:bg-neutral-700/60 dark:text-neutral-100 dark:placeholder:text-neutral-400"
              />
            </label>

            <button
              type="submit"
              disabled={sent}
              className="inline-flex items-center justify-center rounded-lg bg-teal-600 px-6 py-3 font-medium text-white transition-all hover:bg-teal-700 disabled:opacity-60"
            >
              {sent ? "Message sent ✔" : "Send message"}
            </button>
          </motion.form>
        </div>
      </section>
    </main>
  );
}
