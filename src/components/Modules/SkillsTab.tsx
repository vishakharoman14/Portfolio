"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const coreSkills = [
  { name: "React", color: "#61DAFB", logo: "/react.svg" },
  { name: "JavaScript", color: "#F7DF1E", logo: "/javascript.svg" },
  { name: "TypeScript", color: "#3178C6", logo: "/typescript.svg" },
  { name: "HTML 5", color: "#E34F26", logo: "/html5.svg" },
  { name: "CSS 3", color: "#1572B6", logo: "/css.svg" },
  { name: "Next.js", color: "#000000", logo: "/nextdotjs.svg" },
  { name: "Git", color: "#F05032", logo: "/git.svg" },
] as const;

const tools = [
  { name: "VS Code", logo: "/vscode.svg" },
  { name: "GitHub", logo: "/github.svg" },
  { name: "Jira", logo: "/jira.svg" },
  { name: "Postman", logo: "/postman.svg" },
  { name: "Eclipse", logo: "/eclipseide.svg" },
] as const;

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0, transition: { duration: 0.6, delay } },
  viewport: { once: true },
});

export default function SkillsPage() {
  return (
    <main className="min-h-screen bg-white pb-24 pt-32 dark:bg-neutral-900">
      {/* decorative gradient */}
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-80 bg-gradient-to-tr from-teal-300 via-indigo-400 to-fuchsia-500 opacity-20 blur-3xl dark:opacity-40" />

      <section className="mx-auto w-full max-w-6xl px-6">
        {/* ===== Heading ===== */}
        <motion.header {...fade()}>
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
            Skills & Tools
          </h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Technologies I work with every day and the tools that power my
            workflow.
          </p>
        </motion.header>

        {/* ===== Core skills grid ===== */}
        <motion.section
          {...fade(0.1)}
          className="mt-14 rounded-3xl bg-white/70 p-8 backdrop-blur-lg dark:bg-neutral-800/70"
        >
          <h2 className="mb-8 text-2xl font-semibold text-gray-800 dark:text-gray-100">
            Core Stack
          </h2>

          <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {coreSkills.map(({ name, color, logo }) => (
              <li key={name}>
                <motion.div
                  whileHover={{ y: -4, boxShadow: "0 8px 32px rgba(0,0,0,.15)" }}
                  className="flex items-center gap-4 rounded-2xl bg-white/60 p-5 backdrop-blur-lg dark:bg-neutral-800/60"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/80 p-2 dark:bg-neutral-700/70">
                    <Image
                      src={logo}
                      alt={name + " logo"}
                      width={40}
                      height={40}
                      className="h-8 w-8 object-contain"
                    />
                  </div>
                  <span
                    className="text-lg font-medium dark:text-gray-100"
                    style={{ color }}
                  >
                    {name}
                  </span>
                </motion.div>
              </li>
            ))}
          </ul>
        </motion.section>

        {/* ===== Tools grid ===== */}
        <motion.section
          {...fade(0.2)}
          className="mt-16 rounded-3xl bg-white/70 p-8 backdrop-blur-lg dark:bg-neutral-800/70"
        >
          <h2 className="mb-8 text-2xl font-semibold text-gray-800 dark:text-gray-100">
            Tool Belt
          </h2>

          <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {tools.map(({ name, logo }) => (
              <li key={name}>
                <motion.div
                  whileHover={{ y: -4, boxShadow: "0 8px 32px rgba(0,0,0,.15)" }}
                  className="flex items-center gap-4 rounded-2xl bg-white/60 p-5 backdrop-blur-lg dark:bg-neutral-800/60"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/80 p-2 dark:bg-neutral-700/70">
                    <Image
                      src={logo}
                      alt={name + " logo"}
                      width={40}
                      height={40}
                      className="h-8 w-8 object-contain"
                    />
                  </div>
                  <span className="text-lg font-medium text-gray-800 dark:text-gray-100">
                    {name}
                  </span>
                </motion.div>
              </li>
            ))}
          </ul>
        </motion.section>
      </section>
    </main>
  );
}
