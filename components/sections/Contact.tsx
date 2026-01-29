"use client";

import { GlassCard } from "@/components/ui/GlassCard";
import { Mail, Github, Linkedin } from "lucide-react";

export const Contact = () => {
    return (
        <section className="py-20 px-4 max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8 text-white">
                <span className="text-terminal-green">05.</span> Initialize Connection_
            </h2>

            <p className="text-gray-400 mb-10 text-lg">
                Currently open to new opportunities. Whether you have a question or just want to say hi, my inbox is always open.
            </p>

            <GlassCard className="p-6 mx-auto w-fit mb-10" hoverEffect={false}>
                <div className="flex items-center gap-8">
                    <a href="https://github.com/keerthana-ar" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-terminal-green transition-all hover:scale-110">
                        <Github size={32} />
                    </a>
                    <a href="https://www.linkedin.com/in/keerthana-a-r/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-terminal-cyan transition-all hover:scale-110">
                        <Linkedin size={32} />
                    </a>
                    <a href="mailto:keerthanaar0608@gmail.com" className="text-gray-400 hover:text-orange-400 transition-all hover:scale-110">
                        <Mail size={32} />
                    </a>
                </div>
            </GlassCard>

            <a
                href="mailto:keerthanaar0608@gmail.com"
                className="inline-block border border-terminal-green text-terminal-green px-8 py-3 rounded font-mono hover:bg-terminal-green/10 transition-colors"
            >
                Say Hello
            </a>

            <div className="mt-20 text-gray-600 text-sm font-mono">
                <p>Built with Next.js & Tailwind CSS</p>
                <p>© 2026 Keerthana A R</p>
            </div>
        </section>
    );
};
