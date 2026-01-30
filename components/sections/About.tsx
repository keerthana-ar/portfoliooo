"use client";

import { GlassCard } from "@/components/ui/GlassCard";
import { TerminalWindow } from "@/components/ui/TerminalWindow";

export const About = () => {
    return (
        <section id="about" className="py-20 px-4 max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
                        <span className="text-terminal-green">01.</span> About Me
                    </h2>
                    <div className="space-y-4 text-gray-400 leading-relaxed text-lg">
                        <p>
                            I&apos;m a Computer Science undergraduate at <span className="text-terminal-green">LBS Institute of Technology for Women</span>, passionate about building impactful software products and exploring AI-driven technologies.
                        </p>
                        <p>
                            I was selected as a <span className="text-terminal-cyan">Google-supported Women Engineers (WE) Scholar</span>, placing in the top 1% among 30,000+ applicants, where I strengthened my problem-solving abilities and gained exposure to industry-level development practices.
                        </p>
                        <p>
                            I enjoy building things end-to-end. From AI-powered applications and full-stack projects to experimenting with new technologies and ideas.
                        </p>
                        <p>
                            Previously, I served as the Campus Lead at <span className="text-orange-400">TinkerHub LBSITW</span>, where I led technical initiatives, mentored students, and organized workshops and hackathons to foster a strong developer community on campus.
                        </p>
                    </div>
                </div>

                <div className="relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-terminal-green to-terminal-cyan opacity-20 blur-xl rounded-lg"></div>
                    <TerminalWindow title="biography.txt" className="relative">
                        <div className="space-y-2 font-vt323 text-xl tracking-wide text-gray-300">
                            <p><span className="text-terminal-purple">const</span> <span className="text-terminal-cyan">developer</span> = &#123;</p>
                            <p className="pl-4">name: <span className="text-orange-400">&quot;Keerthana A R&quot;</span>,</p>
                            <p className="pl-4">role: <span className="text-orange-400">&quot;CS Undergrad & Dev&quot;</span>,</p>
                            <p className="pl-4">focus: [<span className="text-orange-400">&quot;AI/ML&quot;</span>, <span className="text-orange-400">&quot;Full Stack&quot;</span>],</p>
                            <p className="pl-4">mission: <span className="text-orange-400">&quot;Turning ideas into reliable systems.&quot;</span></p>
                            <p>&#125;;</p>
                        </div>
                    </TerminalWindow>
                </div>
            </div>
        </section>
    );
};
