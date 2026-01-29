"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface TerminalWindowProps {
    children: React.ReactNode;
    title?: string;
    className?: string;
}

export const TerminalWindow = ({ children, title = "terminal", className }: TerminalWindowProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className={cn(
                "overflow-hidden rounded-lg border border-white/20 bg-[#0c0c0c] shadow-2xl",
                className
            )}
        >
            {/* Terminal Header */}
            <div className="flex items-center justify-between border-b border-white/10 bg-[#1a1a1a] px-4 py-2">
                <div className="flex gap-2">
                    <div className="h-3 w-3 rounded-full bg-[#ff5f56]" />
                    <div className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
                    <div className="h-3 w-3 rounded-full bg-[#27ca3f]" />
                </div>
                <div className="text-sm text-gray-400 font-mono tracking-wide flex items-center gap-2">
                    <span className="text-xs">🏠</span> {title}
                </div>
                <div className="w-12" /> {/* Spacer for centering */}
            </div>

            {/* Terminal Content */}
            <div className="p-4 font-mono text-sm text-gray-300">
                {children}
            </div>
        </motion.div>
    );
};
