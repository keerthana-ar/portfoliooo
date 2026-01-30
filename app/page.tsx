"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { TerminalLoader } from "@/components/stats/TerminalLoader";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Projects } from "@/components/sections/Projects";
import { Achievements } from "@/components/sections/Achievements";
import { Education } from "@/components/sections/Education";
import { Skills } from "@/components/sections/Skills";
import { Contact } from "@/components/sections/Contact";

import { Navbar } from "@/components/ui/Navbar";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <main className="min-h-screen bg-black text-white selection:bg-terminal-green selection:text-black">
      <AnimatePresence mode="wait">
        {isLoading ? (
          <motion.div key="loader" exit={{ opacity: 0 }} className="fixed inset-0 z-50">
            <TerminalLoader onComplete={() => setIsLoading(false)} />
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Navbar />

            <Hero />
            <About />
            <Projects />
            <Achievements />
            <Education />
            <Skills />
            <Contact />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
