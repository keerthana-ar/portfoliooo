"use client";

import { GlassCard } from "@/components/ui/GlassCard";
import { Mail, Github, Linkedin, Twitter } from "lucide-react";

export const Contact = () => {
    return (
        <section className="py-20 px-4 max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8 text-white">
                <span className="text-terminal-green">05.</span> Initialize Connection_
            </h2>

            <p className="text-gray-400 mb-10 text-lg">
                Currently open to new opportunities. Whether you have a question or just want to say hi, my inbox is always open.
            </p>

            <GlassCard className="inline-flex gap-8 p-6 mx-auto justify-center mb-10" hoverEffect={false}>
                <a href="#" className="text-gray-400 hover:text-terminal-green transition-all hover:scale-110">
                    <Github size={32} />
                </a>
                <a href="#" className="text-gray-400 hover:text-terminal-cyan transition-all hover:scale-110">
                    <Linkedin size={32} />
                </a>
                <a href="#" className="text-gray-400 hover:text-terminal-purple transition-all hover:scale-110">
                    <Twitter size={32} />
                </a>
                <a href="#" className="text-gray-400 hover:text-orange-400 transition-all hover:scale-110">
                    <Mail size={32} />
                </a>
            </GlassCard>

            <a
                href="mailto:hello@example.com"
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
