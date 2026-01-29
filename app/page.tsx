"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { TerminalLoader } from "@/components/stats/TerminalLoader";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Projects } from "@/components/sections/Projects";
import { Achievements } from "@/components/sections/Achievements";
import { Skills } from "@/components/sections/Skills";
import { Contact } from "@/components/sections/Contact";

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
            {/* Fixed Navigation / Status Bar */}
            <header className="fixed top-0 left-0 right-0 z-40 border-b border-white/10 bg-black/80 backdrop-blur-md px-6 py-4 flex justify-between items-center text-xs font-mono text-gray-400">
              <div>Keerthana.dev</div>
              <div className="flex gap-4">
                <span className="hidden sm:inline">Context: production</span>
                <span className="text-terminal-green">Running...</span>
              </div>
            </header>

            <Hero />
            <About />
            <Projects />
            <Achievements />
            <Skills />
            <Contact />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
