"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TerminalWindow } from "@/components/ui/TerminalWindow";
import { cn } from "@/lib/utils";

// Fully Exhaustive Data Structure (Mapped from Resume)
const skillCategories = [
    {
        id: "frontend",
        label: "Frontend",
        skills: [
            { name: "React.js", level: 95 },
            { name: "Next.js", level: 90 },
            { name: "TypeScript", level: 85 },
            { name: "JavaScript", level: 90 },
            { name: "HTML/CSS", level: 95 },
            { name: "Tailwind CSS", level: 95 },
        ]
    },
    {
        id: "backend",
        label: "Backend & Core",
        skills: [
            { name: "Python", level: 95 },
            { name: "Java", level: 80 },
            { name: "C", level: 75 },
            { name: "FastAPI", level: 85 },
            { name: "Prisma", level: 80 },
            { name: "Lua", level: 70 },
        ]
    },
    {
        id: "ai-data",
        label: "AI & Automation",
        skills: [
            { name: "TensorFlow", level: 85 },
            { name: "Keras", level: 80 },
            { name: "Pandas", level: 90 },
            { name: "NumPy", level: 90 },
            { name: "Scikit-learn", level: 85 },
            { name: "Selenium", level: 85 },
        ]
    },
    {
        id: "tools",
        label: "Tools & DB",
        skills: [
            { name: "Git", level: 90 },
            { name: "Linux", level: 85 },
            { name: "Windows/WSL", level: 90 },
            { name: "MySQL", level: 85 },
            { name: "PostgreSQL", level: 80 },
            { name: "Clerk Auth", level: 90 },
            { name: "LaTeX", level: 75 },
        ]
    },
    {
        id: "soft",
        label: "Soft Skills",
        skills: [
            { name: "Leadership", level: 95 },
            { name: "Public Speaking", level: 90 },
            { name: "Time Management", level: 85 },
            { name: "Teamwork", level: 100 },
            { name: "Communication", level: 95 },
            { name: "Mentoring", level: 90 },
        ]
    }
];

export const Skills = () => {
    const [activeTab, setActiveTab] = useState(skillCategories[0]);
    const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

    // Radar Chart Logic
    const config = {
        size: 340,
        radius: 140,
        levels: 4,
    };

    // Dynamic Data Points based on active skills length
    const totalPoints = activeTab.skills.length;
    const dataPoints = activeTab.skills.map((skill, i) => {
        const angle = (Math.PI * 2 * i) / totalPoints - Math.PI / 2;
        const value = skill.level / 100;
        const x = config.size / 2 + Math.cos(angle) * config.radius * value;
        const y = config.size / 2 + Math.sin(angle) * config.radius * value;
        return { x, y, skill };
    });

    const polygonPoints = dataPoints.map(p => `${p.x},${p.y}`).join(" ");

    return (
        <section id="skills" className="py-24 px-4 max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 flex items-center gap-2">
                <span className="text-terminal-green">05.</span> Skills
            </h2>

            <div className="flex flex-col items-center mb-16">
                <div className="flex flex-wrap justify-center gap-2">
                    {skillCategories.map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => setActiveTab(cat)}
                            className={cn(
                                "px-4 py-2 rounded-full text-sm font-bold tracking-wider transition-all border",
                                activeTab.id === cat.id
                                    ? "bg-white/10 border-terminal-green text-terminal-green shadow-[0_0_10px_rgba(34,197,94,0.3)]"
                                    : "bg-transparent border-white/10 text-gray-400 hover:border-white/30 hover:text-white"
                            )}
                        >
                            {cat.label}
                        </button>
                    ))}
                </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Visualizer Column (Radar Chart) */}
                <div className="relative flex justify-center items-center h-[450px]">

                    {/* Hover Tooltip (Central Overlay) */}
                    <AnimatePresence>
                        {hoveredSkill && (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 10 }}
                                className="absolute top-0 bg-black/90 border border-terminal-green text-terminal-green px-3 py-1 rounded text-sm font-vt323 z-20 pointer-events-none"
                            >
                                {hoveredSkill}
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* SVG Chart */}
                    <svg width={config.size} height={config.size} className="overflow-visible">

                        {/* Background Grid (Concentric Circles) */}
                        {[...Array(config.levels)].map((_, i) => {
                            const radius = (config.radius / config.levels) * (i + 1);
                            return (
                                <circle
                                    key={`grid-${i}`}
                                    cx={config.size / 2}
                                    cy={config.size / 2}
                                    r={radius}
                                    fill="none"
                                    stroke="rgba(255,255,255,0.05)"
                                />
                            );
                        })}

                        {/* Axis Lines */}
                        {[...Array(totalPoints)].map((_, i) => {
                            const angle = (Math.PI * 2 * i) / totalPoints - Math.PI / 2;
                            const x = config.size / 2 + Math.cos(angle) * config.radius;
                            const y = config.size / 2 + Math.sin(angle) * config.radius;
                            return (
                                <line
                                    key={`axis-${i}`}
                                    x1={config.size / 2}
                                    y1={config.size / 2}
                                    x2={x}
                                    y2={y}
                                    stroke="rgba(255,255,255,0.1)"
                                />
                            );
                        })}

                        {/* Animated Data Polygon */}
                        <motion.polygon
                            points={polygonPoints}
                            fill="rgba(34, 197, 94, 0.1)"
                            stroke="#22c55e"
                            strokeWidth="2"
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1, points: polygonPoints }}
                            transition={{ duration: 0.5, ease: "backOut" }}
                            className="drop-shadow-[0_0_8px_rgba(34,197,94,0.4)]"
                        />

                        {/* Interactive Nodes */}
                        {dataPoints.map((p, i) => (
                            <g key={`node-${i}`}>
                                {/* Hit Area (Invisible larger circle for easier hover) */}
                                <circle
                                    cx={p.x} cy={p.y} r="12" fill="transparent"
                                    onMouseEnter={() => setHoveredSkill(`${p.skill.name}: ${p.skill.level}%`)}
                                    onMouseLeave={() => setHoveredSkill(null)}
                                    className="cursor-pointer"
                                />

                                {/* Visible Node */}
                                <motion.circle
                                    cx={p.x}
                                    cy={p.y}
                                    r={hoveredSkill?.includes(p.skill.name) ? "6" : "4"}
                                    fill="#000"
                                    stroke="#22c55e"
                                    strokeWidth="2"
                                    animate={{ cx: p.x, cy: p.y }}
                                    transition={{ duration: 0.5 }}
                                    className="pointer-events-none"
                                />
                            </g>
                        ))}
                    </svg>
                    {/* Orbital Icons (Decorative) */}
                    <div className="absolute inset-0 animate-[spin_10s_linear_infinite] pointer-events-none">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-4 w-2 h-2 bg-terminal-cyan rounded-full shadow-[0_0_10px_#06b6d4]"></div>
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-4 w-2 h-2 bg-terminal-purple rounded-full shadow-[0_0_10px_#a855f7]"></div>
                    </div>
                </div>

                {/* Terminal List Column */}
                <div>
                    <TerminalWindow title={`~/skills/${activeTab.id}`} className="h-full">
                        <div className="space-y-5 max-h-[400px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeTab.id}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    {activeTab.skills.map((skill, index) => (
                                        <div
                                            key={index}
                                            className="mb-4 last:mb-0 group"
                                            onMouseEnter={() => setHoveredSkill(`${skill.name}: ${skill.level}%`)}
                                            onMouseLeave={() => setHoveredSkill(null)}
                                        >
                                            <div className="flex justify-between text-base mb-1 font-vt323 tracking-wide">
                                                <span className={cn(
                                                    "transition-colors",
                                                    hoveredSkill?.includes(skill.name) ? "text-terminal-green" : "text-gray-300"
                                                )}>
                                                    <span className="text-terminal-green mr-2">&gt;</span>
                                                    {skill.name}
                                                </span>
                                                <span className="text-gray-600">{skill.level}%</span>
                                            </div>
                                            <div className="h-1.5 bg-gray-900 rounded-sm overflow-hidden border border-white/5">
                                                <motion.div
                                                    initial={{ width: 0 }}
                                                    animate={{ width: `${skill.level}%` }}
                                                    transition={{ duration: 0.8, delay: index * 0.05 }}
                                                    className={cn(
                                                        "h-full shadow-[0_0_8px_currentColor] transition-colors",
                                                        hoveredSkill?.includes(skill.name)
                                                            ? "bg-white text-white"
                                                            : index % 2 === 0 ? "bg-terminal-green text-terminal-green" : "bg-terminal-cyan text-terminal-cyan"
                                                    )}
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </TerminalWindow>
                </div>
            </div>
        </section>
    );
};
