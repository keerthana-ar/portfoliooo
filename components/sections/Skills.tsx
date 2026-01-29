"use client";

import { TerminalWindow } from "@/components/ui/TerminalWindow";

const skills = {
    frontend: ["React.js", "Next.js", "JavaScript", "HTML/CSS", "Framer Motion"],
    backend: ["Python", "TensorFlow", "Keras", "MySQL", "Selenium", "Java", "C"],
    tools: ["Git", "Linux", "WSL", "LaTeX", "Figma"]
};

export const Skills = () => {
    return (
        <section className="py-20 px-4 max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 flex items-center gap-2">
                <span className="text-terminal-green">04.</span> Skills
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
                {/* Animated Visual Representation */}
                <div className="space-y-6">
                    <h3 className="text-xl font-bold mb-4 font-mono text-gray-300">&gt; Tech Stack_</h3>

                    <div className="space-y-4">
                        <div>
                            <div className="flex justify-between text-sm mb-1 text-terminal-cyan">
                                <span>Frontend</span>
                                <span>95%</span>
                            </div>
                            <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                                <div className="h-full bg-terminal-cyan w-[95%]"></div>
                            </div>
                        </div>

                        <div>
                            <div className="flex justify-between text-sm mb-1 text-terminal-purple">
                                <span>Backend</span>
                                <span>80%</span>
                            </div>
                            <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                                <div className="h-full bg-terminal-purple w-[80%]"></div>
                            </div>
                        </div>

                        <div>
                            <div className="flex justify-between text-sm mb-1 text-orange-400">
                                <span>DevOps</span>
                                <span>60%</span>
                            </div>
                            <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                                <div className="h-full bg-orange-400 w-[60%]"></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Terminal Output Representation */}
                <TerminalWindow title="skills.json">
                    <div className="space-y-2 text-sm">
                        <p>&#123;</p>
                        <div className="pl-4">
                            <p><span className="text-terminal-cyan">&quot;frontend&quot;</span>: [</p>
                            <p className="pl-4 text-orange-300">
                                {skills.frontend.map(s => `"${s}"`).join(", ")}
                            </p>
                            <p>],</p>
                        </div>
                        <div className="pl-4">
                            <p><span className="text-terminal-purple">&quot;backend&quot;</span>: [</p>
                            <p className="pl-4 text-orange-300">
                                {skills.backend.map(s => `"${s}"`).join(", ")}
                            </p>
                            <p>],</p>
                        </div>
                        <div className="pl-4">
                            <p><span className="text-terminal-green">&quot;tools&quot;</span>: [</p>
                            <p className="pl-4 text-orange-300">
                                {skills.tools.map(s => `"${s}"`).join(", ")}
                            </p>
                            <p>]</p>
                        </div>
                        <p>&#125;</p>
                    </div>
                </TerminalWindow>
            </div>
        </section>
    );
};
