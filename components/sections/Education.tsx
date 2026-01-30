"use client";

import { GlassCard } from "@/components/ui/GlassCard";

const education = [
    {
        school: "LBS Institute of Technology for Women",
        degree: "B. Tech. in Computer Science and Engineering",
        duration: "July 2023 - July 2027",
        location: "Thiruvananthapuram, India",
        score: "CGPA: 8.23/10.00"
    },
    {
        school: "St. Thomas Central School",
        degree: "12th Standard (CBSE)",
        duration: "2021 - 2023",
        location: "Thiruvananthapuram, India",
        score: "Percentage: 84.8%"
    },
    {
        school: "Jawahar Vidyalaya Senior Secondary School",
        degree: "10th Standard (CBSE)",
        duration: "2012 - 2021",
        location: "Chennai, India",
        score: "Percentage: 89.8%"
    }
];

export const Education = () => {
    return (
        <section id="education" className="py-20 px-4 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 flex items-center gap-2">
                <span className="text-terminal-green">04.</span> Education
            </h2>

            <div className="space-y-6">
                {education.map((item, index) => (
                    <GlassCard key={index} className="p-6 group relative overflow-hidden" hoverEffect={false}>
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2 mb-2">
                            <h3 className="text-xl font-bold text-white group-hover:text-terminal-green transition-colors">
                                {item.school}
                            </h3>
                            <span className="text-xs font-mono text-gray-500 border border-gray-700 px-2 py-1 rounded">
                                {item.duration}
                            </span>
                        </div>

                        <div className="text-gray-400 font-medium mb-1">
                            {item.degree}
                        </div>

                        <div className="flex justify-between items-end mt-2">
                            <span className="text-sm text-gray-500">{item.location}</span>
                            <span className="text-sm font-mono text-terminal-cyan font-bold">{item.score}</span>
                        </div>
                    </GlassCard>
                ))}
            </div>
        </section>
    );
};
