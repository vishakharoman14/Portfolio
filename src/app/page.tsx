"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import FluidCursor from "@/components/FluidCursor";
import { Button } from "@/components/ui/button";
import {
  BriefcaseBusiness,
  Laugh,
  Layers,
  PartyPopper,
  UserRoundSearch,
} from "lucide-react";
import Aboutme from "@/components/Modules/Aboutme";
import ProjectsTab from "@/components/Modules/ProjectsTab";
import SkillsTab from "@/components/Modules/SkillsTab";
import ContactTab from "@/components/Modules/ContactTab";

const questionConfig = [
  { key: "Me", color: "#329696", icon: Laugh },
  { key: "Projects", color: "#3E9858", icon: BriefcaseBusiness },
  { key: "Skills", color: "#856ED9", icon: Layers },
  { key: "Fun", color: "#B95F9D", icon: PartyPopper },
  { key: "Contact", color: "#C19433", icon: UserRoundSearch },
] as const;


export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 pb-10 md:pb-20 dark">
      <div className="pointer-events-none absolute inset-x-0 bottom-0 flex justify-center overflow-hidden">
        <div
          className="hidden bg-gradient-to-b from-neutral-500/10 to-neutral-500/0 bg-clip-text text-[10rem] leading-none font-black text-transparent select-none sm:block lg:text-[16rem]"
          style={{ marginBottom: "-2.5rem" }}
        >
          Vishakha
        </div>
      </div>
      <motion.div
        className="z-1 mt-24 mb-8 flex flex-col items-center text-center md:mt-4 md:mb-12"
        initial="hidden"
        animate="visible"
      >
          <Image
        src="/cherry-blossom-svgrepo-com.svg"
        width={100}
        height={100}
        alt="Logo"
        className="w-6 md:w-8"
      />
        <h2 className="text-secondary-foreground mt-1 text-xl font-semibold md:text-2xl">
          Hey, I'm Vishakha 🐼
        </h2>
        <h4 className="text-lg sm:text-xl md:text-1xl lg:text-1xl">
          Frontend Developer specializing in the MERN stack.
        </h4>
      </motion.div>

      <div className="relative z-10 h-72 w-72 overflow-hidden rounded-full">
        <Image
          src="/landing-image.png"
          alt="Hero memoji"
          width={2000}
          height={2000}
          priority
          className="w-full h-full object-cover"
        />
      </div>

      <div className="mt-4 grid w-full max-w-2xl grid-cols-1 gap-3 sm:grid-cols-3 md:grid-cols-5">
        {questionConfig.map(({ key, color, icon: Icon }) => (
          <Button
            key={key}
            // onClick={handleTabChange}
            variant="outline"
            className="border-border hover:bg-border/30 aspect-square w-full cursor-pointer rounded-2xl border bg-white/30 py-8 shadow-none backdrop-blur-lg active:scale-95 md:p-10"
          >
            <div className="flex h-full flex-col items-center justify-center gap-1 text-gray-700">
              <Icon size={22} strokeWidth={2} color={color} />
              <span className="text-xs font-medium sm:text-sm">{key}</span>
            </div>
          </Button>
        ))}
      </div>
     
      <FluidCursor />
       <Aboutme/>
      <ProjectsTab/>
      <SkillsTab/>
      <ContactTab/>
    </div>
    
  );
}
