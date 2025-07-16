"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react";


const projects = [
  {
    title: "Task Forge",
    description:
      "Full‑stack productivity app where teams can create, assign and track tasks in real time.",
    stack: ["Next.js 14", "Tailwind CSS", "PostgreSQL", "tRPC"],
    // img: "/projects/taskforge.jpg", // put in /public/projects/
    repo: "https://github.com/youruser/taskforge",
    demo: "https://taskforge.vercel.app",
  },
  {
    title: "SnapShot AI",
    description:
      "Generate photorealistic images from text prompts using the latest Stable Diffusion models.",
    stack: ["React", "Typescript", "Flask", "Stable Diffusion XL"],
    // img: "/projects/snapshot-ai.jpg",
    repo: "https://github.com/youruser/snapshot-ai",
    demo: "https://snapshotai.app",
  },
  {
    title: "Chai Commerce",
    description:
      "E‑commerce template with headless Stripe checkout, admin dashboard and CMS integration.",
    stack: ["Next.js", "Stripe", "Prisma", "Shadcn UI"],
    // img: "/projects/chaicommerce.jpg",
    repo: "https://github.com/youruser/chai-commerce",
    demo: "https://chai-commerce.shop",
  },
  {
    title: "Chai Commerce",
    description:
      "E‑commerce template with headless Stripe checkout, admin dashboard and CMS integration.",
    stack: ["Next.js", "Stripe", "Prisma", "Shadcn UI"],
    // img: "/projects/chaicommerce.jpg",
    repo: "https://github.com/youruser/chai-commerce",
    demo: "https://chai-commerce.shop",
  },
  {
    title: "Chai Commerce",
    description:
      "E‑commerce template with headless Stripe checkout, admin dashboard and CMS integration.",
    stack: ["Next.js", "Stripe", "Prisma", "Shadcn UI"],
    // img: "/projects/chaicommerce.jpg",
    repo: "https://github.com/youruser/chai-commerce",
    demo: "https://chai-commerce.shop",
  },
] as const;

/* constants */
const ITEMS_PER_PAGE = 3;
const totalPages = Math.ceil(projects.length / ITEMS_PER_PAGE);

/* helper for fade/slide‑up */
const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, delay } },
  exit: { opacity: 0, y: -60, transition: { duration: 0.4 } },
});

export default function ProjectsPage() {
  const [page, setPage] = useState(0); // 0‑based page index

  /* slice the data for this page */
  const visible = projects.slice(
    page * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE + ITEMS_PER_PAGE
  );

  return (
    <main className="min-h-screen bg-white pb-24 pt-32 dark:bg-neutral-900">
      {/* decorative gradient */}
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-80 bg-gradient-to-tr from-amber-300 via-pink-400 to-purple-500 opacity-20 blur-3xl dark:opacity-40" />

      <section className="mx-auto w-full max-w-6xl px-6">
        {/* heading */}
        <motion.header {...fade()}>
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
            Featured Projects
          </h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Browse a selection of my work. Use the arrows to page through.
          </p>
        </motion.header>

        {/* grid (AnimatePresence for smooth page change) */}
        <div className="relative mt-14">
          <AnimatePresence mode="wait">
            <motion.ul
              key={page} // crucial for AnimatePresence
              {...fade(0.1)}
              className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3"
            >
              {visible.map(({ title, description, stack, repo, demo }) => (
                <li key={title}>
                  <article className="flex h-full flex-col overflow-hidden rounded-3xl bg-white/70 backdrop-blur-lg dark:bg-neutral-800/70 shadow-lg">
                    {/* fallback gradient banner if you have no image */}
                    <div className="h-48 w-full bg-gradient-to-tr from-teal-400 via-purple-400 to-fuchsia-600 sm:h-40" />

                    {/* body */}
                    <div className="flex flex-1 flex-col gap-4 p-6">
                      <header className="flex items-start justify-between">
                        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
                          {title}
                        </h2>
                        <div className="flex gap-2">
                          <Link
                            href={repo}
                            target="_blank"
                            className="rounded-md p-1 text-gray-600 transition-colors hover:bg-gray-200 dark:text-gray-300 dark:hover:bg-neutral-700"
                            aria-label="GitHub repository"
                          >
                            <Github size={18} />
                          </Link>
                          <Link
                            href={demo}
                            target="_blank"
                            className="rounded-md p-1 text-gray-600 transition-colors hover:bg-gray-200 dark:text-gray-300 dark:hover:bg-neutral-700"
                            aria-label="Live demo"
                          >
                            <ExternalLink size={18} />
                          </Link>
                        </div>
                      </header>

                      <p className="flex-1 text-sm leading-relaxed text-gray-700 dark:text-gray-300">
                        {description}
                      </p>

                      <ul className="flex flex-wrap gap-2">
                        {stack.map((tech) => (
                          <li
                            key={tech}
                            className="rounded bg-teal-600/10 px-2 py-0.5 text-xs text-teal-700 dark:bg-teal-500/20 dark:text-teal-200"
                          >
                            {tech}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </article>
                </li>
              ))}
            </motion.ul>
          </AnimatePresence>

          {/* pagination controls */}
          <div className="mt-10 flex items-center justify-center gap-6">
            <button
              onClick={() => setPage((p) => p - 1)}
              disabled={page === 0}
              className="inline-flex items-center gap-2 rounded-lg border px-4 py-2 text-sm font-medium text-gray-700 transition-all hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-40 dark:border-neutral-700 dark:text-gray-200 dark:hover:bg-neutral-800"
            >
              <ChevronLeft size={18} />
              Previous
            </button>

            <span className="text-sm text-gray-600 dark:text-gray-400">
              Page {page + 1} of {totalPages}
            </span>

            <button
              onClick={() => setPage((p) => p + 1)}
              disabled={page >= totalPages - 1}
              className="inline-flex items-center gap-2 rounded-lg border px-4 py-2 text-sm font-medium text-gray-700 transition-all hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-40 dark:border-neutral-700 dark:text-gray-200 dark:hover:bg-neutral-800"
            >
              Next
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
