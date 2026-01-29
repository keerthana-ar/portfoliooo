"use client";

import { GlassCard } from "@/components/ui/GlassCard";
import { TerminalWindow } from "@/components/ui/TerminalWindow";

export const About = () => {
    return (
        <section className="py-20 px-4 max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
                        <span className="text-terminal-green">01.</span> About Me
                    </h2>
                    <div className="space-y-4 text-gray-400 leading-relaxed text-lg">
                        <p>
                            I am a Computer Science undergraduate at <span className="text-terminal-green">LBS Institute of Technology for Women</span>, passionate about building AI-powered applications and automation tools.
                        </p>
                        <p>
                            Selected as a <span className="text-terminal-cyan">Google-supported WE Scholar</span> (Top 1% of 30k+ applicants), I specialize in the <span className="text-terminal-purple">Python & React ecosystem</span>. I love solving real-world problems through code, from AI chatbots to bulk automation scripts.
                        </p>
                        <p>
                            Beyond coding, I lead the <span className="text-orange-400">TinkerHub</span> community on campus, mentoring students and organizing tech workshops.
                        </p>
                    </div>
                </div>

                <div className="relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-terminal-green to-terminal-cyan opacity-20 blur-xl rounded-lg"></div>
                    <TerminalWindow title="biography.txt" className="relative">
                        <div className="space-y-2">
                            <p><span className="text-terminal-purple">const</span> <span className="text-terminal-cyan">developer</span> = &#123;</p>
                            <p className="pl-4">name: <span className="text-orange-400">&quot;Keerthana A R&quot;</span>,</p>
                            <p className="pl-4">role: <span className="text-orange-400">&quot;CS Undergrad & Dev&quot;</span>,</p>
                            <p className="pl-4">focus: [<span className="text-orange-400">&quot;AI/ML&quot;</span>, <span className="text-orange-400">&quot;Full Stack&quot;</span>],</p>
                            <p className="pl-4">community: <span className="text-orange-400">&quot;TinkerHub Campus Lead&quot;</span></p>
                            <p>&#125;;</p>
                        </div>
                    </TerminalWindow>
                </div>
            </div>
        </section>
    );
};
