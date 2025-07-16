"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  ArrowDownToLine,
  Code,
  PenTool,
  Users,
} from "lucide-react";
import Link from "next/link";

export default function AboutMePage() {
  /* simple fade / slide variants */
  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0, transition: { duration: 0.6, delay } },
    viewport: { once: true },
  });

  return (
    <main className="min-h-screen bg-white pb-24 pt-32 dark:bg-neutral-900">
      {/* decorative gradient behind header */}
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-80 bg-gradient-to-tr from-cyan-300 via-purple-400 to-fuchsia-500 opacity-20 blur-3xl dark:opacity-40" />

      <section className="mx-auto w-full max-w-5xl px-6">
        {/* header */}
        <motion.header {...fadeUp()}>
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
            Hello&nbsp;— I’m Vishakha
          </h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Front‑end developer crafting delightful MERN experiences and
            pixel‑perfect interfaces.
          </p>
        </motion.header>

        {/* photo + quick facts */}
        <div className="mt-12 grid gap-10 md:grid-cols-[220px_1fr]">
          {/* portrait */}
          <motion.div {...fadeUp(0.15)} className="mx-auto w-52 md:mx-0">
            <Image
              src="/Myself.jpg" // replace with your portrait
              alt="Vishakha portrait"
              width={600}
              height={800}
              className="h-auto w-full rounded-3xl object-cover shadow-xl"
              priority
            />
          </motion.div>

          {/* bio card */}
          <motion.div
            {...fadeUp(0.25)}
            className="flex flex-col gap-6 rounded-3xl bg-white/70 p-8 backdrop-blur-lg dark:bg-neutral-800/70"
          >
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
              About&nbsp;me
            </h2>
            <p className="leading-relaxed text-gray-700 dark:text-gray-300">
              I’m a self‑driven developer with&nbsp;3 years of experience
              building scalable web apps using React, Next.js and the MERN
              stack. I love turning complex problems into simple,
              beautiful&nbsp;UI and pushing pixels until they sing. Off screen
              you’ll find me knitting, sipping chai or chasing the perfect
              sunset shot.
            </p>

            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-3">
                <MapPin className="shrink-0 text-teal-600 dark:text-teal-400" />
                <span>Pune, India</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="shrink-0 text-teal-600 dark:text-teal-400" />
                <Link
                  href="mailto:vishakharoman14@gmail.com"
                  className="hover:underline"
                >
                  vishakharoman14@gmail.com
                </Link>
              </li>
              <li className="flex items-center gap-3">
                <Github className="shrink-0 text-teal-600 dark:text-teal-400" />
                <Link
                  href="https://github.com/vishakharoman14"
                  target="_blank"
                  className="hover:underline"
                >
                  GitHub
                </Link>
              </li>
              <li className="flex items-center gap-3">
                <Linkedin className="shrink-0 text-teal-600 dark:text-teal-400" />
                <Link
                  href="https://www.linkedin.com/in/vishakha-roman-16973a171/"
                  target="_blank"
                  className="hover:underline"
                >
                  LinkedIn
                </Link>
              </li>
            </ul>
            <Link
              href="/Vishakha_Roman-Exp3-5.pdf" 
              className="mt-4 inline-flex w-max items-center gap-2 rounded-lg bg-teal-600 px-5 py-2.5 font-medium text-white shadow-lg ring-teal-700/20 transition-all hover:bg-teal-700 active:scale-95"
            >
              <ArrowDownToLine size={18} /> Download Resume
            </Link>
          </motion.div>
        </div>

        {/* skills grid */}
        <motion.section
          {...fadeUp(0.35)}
          className="mt-20 rounded-3xl bg-white/60 p-8 backdrop-blur-lg dark:bg-neutral-800/60"
        >
          <h2 className="mb-6 text-2xl font-semibold text-gray-800 dark:text-gray-100">
            What I bring
          </h2>

          <div className="grid gap-6 sm:grid-cols-3">
            <article className="flex flex-col gap-3">
              <Code
                size={32}
                className="text-purple-600 dark:text-purple-400"
              />
              <h3 className="text-lg font-medium">Clean Code</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Modular, maintainable components, exhaustive testing and a keen
                eye for performance.
              </p>
            </article>

            <article className="flex flex-col gap-3">
              <PenTool
                size={32}
                className="text-pink-600 dark:text-pink-400"
              />
              <h3 className="text-lg font-medium">Pixel Craft</h3>
              <p className="text-gray-600 dark:text-gray-400">
                From Figma mock‑ups to live CSS — getting the details just
                right is my happy place.
              </p>
            </article>

            <article className="flex flex-col gap-3">
              <Users
                size={32}
                className="text-emerald-600 dark:text-emerald-400"
              />
              <h3 className="text-lg font-medium">Team Player</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Clear communication, thoughtful code reviews and mentorship are
                part of my&nbsp;DNA.
              </p>
            </article>
          </div>
        </motion.section>
      </section>
    </main>
  );
}
