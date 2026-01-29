"use client";

import { GlassCard } from "@/components/ui/GlassCard";

const achievements = [
    {
        title: "WE Scholar (TalentSprint & Google)",
        desc: "Selected as Top 1% out of 30,000+ applicants. Awarded 100% scholarship and Rs. 1 Lakh stipend.",
        year: "2024",
        type: "Award"
    },
    {
        title: "Campus Lead, TinkerHub",
        desc: "Spearheading tech initiatives, mentoring students, and organizing hackathons and workshops on campus.",
        year: "2024",
        type: "Leadership"
    },
    {
        title: "B.Tech CSE - LBSITW",
        desc: "Pursuing Computer Science Engineering with 8.23 CGPA. Active in technical societies.",
        year: "2023",
        type: "Education"
    }
];

export const Achievements = () => {
    return (
        <section className="py-20 px-4 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 flex items-center gap-2">
                <span className="text-terminal-green">03.</span> Achievements
            </h2>

            <div className="space-y-4">
                {achievements.map((item, index) => (
                    <GlassCard key={index} className="p-4 group" hoverEffect={false}>
                        <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
                            <div className="text-terminal-green font-mono text-xl font-bold min-w-[50px] text-center">
                                ✓
                            </div>
                            <div className="flex-grow">
                                <h3 className="text-lg font-bold text-white group-hover:text-terminal-green transition-colors">
                                    {item.title}
                                </h3>
                                <p className="text-gray-400 text-sm">
                                    {item.desc}
                                </p>
                            </div>
                            <div className="flex flex-col items-end gap-1 min-w-[100px]">
                                <span className="text-xs font-mono text-gray-500 border border-gray-700 px-2 py-1 rounded">
                                    {item.year}
                                </span>
                                <span className="text-xs text-terminal-cyan">
                                    {item.type}
                                </span>
                            </div>
                        </div>
                    </GlassCard>
                ))}
            </div>
        </section>
    );
};
