"use client";

import { motion } from "framer-motion";


export const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden px-4">
            {/* Background Matrix Effect (Simplified) */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-terminal-green/5 via-black to-black z-0 pointer-events-none" />

            <div className="z-10 text-center max-w-3xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-terminal-green/30 bg-terminal-green/10 text-terminal-green font-mono text-sm mb-6"
                >
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-terminal-green opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-terminal-green"></span>
                    </span>
                    System Online
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-5xl md:text-7xl font-bold tracking-tight mb-4 text-white"
                >
                    hello, i&apos;m <span className="text-transparent bg-clip-text bg-gradient-to-r from-terminal-green to-terminal-cyan">keerthana</span>
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="text-xl md:text-2xl text-gray-400 font-mono mb-8 h-[30px]"
                >
                    <span className="border-r-2 border-terminal-green pr-1 animate-pulse">
                        &gt; Full Stack Developer_
                    </span>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="text-gray-400 max-w-lg mx-auto mb-10 text-lg leading-relaxed"
                >
                    Building digital experiences with modern web technologies. Focus on performance, aesthetics, and clean code.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center"
                >
                    <a href="#projects" className="px-8 py-3 rounded-lg bg-terminal-green text-black hover:bg-terminal-green/90 transition-colors">
                        view projects
                    </a>
                    <a href="#contact" className="px-8 py-3 rounded-lg border border-white/20 text-white hover:bg-white/5 transition-colors flex items-center gap-2 justify-center">
                        <span className="font-bold">&gt;_</span> contact me
                    </a>
                </motion.div>
            </div>
        </section>
    );
};
