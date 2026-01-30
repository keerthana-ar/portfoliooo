"use client";

import { GlassCard } from "@/components/ui/GlassCard";
import { ExternalLink, Github } from "lucide-react";

const projects = [
    {
        title: "DormBuddy",
        description: "AI-powered college life assistant chatbot helping students with timetables, tasks, and social guidance. Features personality modes and context-aware prompting.",
        tags: ["FastAPI", "OpenRouter API", "Python", "HTML"],
        links: { demo: "https://dormbuddyyy.netlify.app/", git: "https://github.com/keerthana-ar/dormbuddy" },
    },
    {
        title: "MindLens",
        description: "AI-powered journaling eco-system with emotion analysis. Uses OpenAI to analyze moods, secure authentication with Clerk, and real-time data sync via Neon DB.",
        tags: ["Next.js", "Neon DB", "Clerk Auth", "OpenAI API"],
        links: { demo: "https://mindlens-ten.vercel.app/", git: "https://github.com/keerthana-ar/mindlens" },
    },
    {
        title: "Python Automation Tool",
        description: "Automated bulk WhatsApp messaging tool using Selenium. Integrates with Google Sheets to extract contacts and sends personalized messages automatically.",
        tags: ["Python", "Selenium", "Google Apps Script"],
        links: { demo: "#", git: "https://github.com/keerthana-ar/python-automation-tool" },
    },
    {
        title: "Same.dev",
        description: "A UI cloning website dedicated to analyzing and recreating modern web interfaces. Focuses on pixel-perfect implementations and component breakdown.",
        tags: ["JavaScript", "TypeScript", "CSS"],
        links: { demo: "#", git: "https://github.com/keerthana-ar/same.dev" },
        isOngoing: true,
    },
];

export const Projects = () => {
    return (
        <section id="projects" className="py-20 px-4 max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 flex items-center gap-2">
                <span className="text-terminal-green">02.</span> Projects
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project, index) => (
                    <GlassCard key={index} className="p-6 h-full group relative overflow-hidden" hoverEffect={true}>
                        {project.isOngoing && (
                            <div className="absolute bottom-4 right-4 px-2 py-1 bg-yellow-500/10 border border-yellow-500/50 rounded text-[10px] font-mono text-yellow-500 uppercase tracking-wider z-10">
                                Ongoing
                            </div>
                        )}
                        <div className="flex flex-col h-full">
                            <div className="flex justify-between items-start mb-4">
                                {/* Folder Icon Placeholder */}
                                <div className="p-3 bg-terminal-green/10 rounded-lg text-terminal-green group-hover:text-white group-hover:bg-terminal-green transition-colors">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 2H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z" /></svg>
                                </div>
                                <div className="flex gap-4 text-gray-400">
                                    <a href={project.links.git} target="_blank" rel="noopener noreferrer" className="hover:text-terminal-green transition-colors"><Github size={20} /></a>
                                    <a href={project.links.demo} target="_blank" rel="noopener noreferrer" className="hover:text-terminal-green transition-colors"><ExternalLink size={20} /></a>
                                </div>
                            </div>

                            <h3 className="text-xl font-bold mb-3 text-white group-hover:text-terminal-green transition-colors">{project.title}</h3>
                            <p className="text-gray-400 text-sm mb-6 flex-grow leading-relaxed">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mt-auto">
                                {project.tags.map(tag => (
                                    <span key={tag} className="text-xs font-bold text-terminal-cyan tracking-wide">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </GlassCard>
                ))}
            </div>
        </section>
    );
};
