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
                            I am a passionate developer with a knack for building robust and scalable web applications. My journey started with a curiosity for how things work on the internet, which quickly turned into a career obsession.
                        </p>
                        <p>
                            I specialize in the <span className="text-terminal-cyan">React ecosystem</span>, creating fluid user interfaces and efficient backend systems. I believe in code that is not only functional but also clean and maintainable.
                        </p>
                        <p>
                            When I'm not coding, you can find me exploring new tech stacks, contributing to open-source, or optimizing my development setup.
                        </p>
                    </div>
                </div>

                <div className="relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-terminal-green to-terminal-cyan opacity-20 blur-xl rounded-lg"></div>
                    <TerminalWindow title="biography.txt" className="relative">
                        <div className="space-y-2">
                            <p><span className="text-terminal-purple">const</span> <span className="text-terminal-cyan">developer</span> = &#123;</p>
                            <p className="pl-4">name: <span className="text-orange-400">"Keerthana"</span>,</p>
                            <p className="pl-4">role: <span className="text-orange-400">"Full Stack Dev"</span>,</p>
                            <p className="pl-4">traits: [<span className="text-orange-400">"Curious"</span>, <span className="text-orange-400">"Detail-oriented"</span>],</p>
                            <p className="pl-4">loves: <span className="text-orange-400">"Coffee & Code"</span></p>
                            <p>&#125;;</p>
                        </div>
                    </TerminalWindow>
                </div>
            </div>
        </section>
    );
};
