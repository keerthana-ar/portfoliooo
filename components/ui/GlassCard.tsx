"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlassCardProps extends HTMLMotionProps<"div"> {
    children: React.ReactNode;
    hoverEffect?: boolean;
}

export const GlassCard = ({
    children,
    className,
    hoverEffect = true,
    ...props
}: GlassCardProps) => {
    return (
        <motion.div
            className={cn(
                "relative overflow-hidden rounded-xl border border-white/10 bg-black/50 backdrop-blur-md",
                "shadow-lg transition-all duration-300",
                hoverEffect && "hover:border-terminal-green/50 hover:shadow-terminal-green/10 hover:-translate-y-1",
                className
            )}
            {...props}
        >
            <div className="relative z-10">{children}</div>
            {/* Subtle Grid Background */}
            <div className="absolute inset-0 z-0 opacity-20"
                style={{ backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)', backgroundSize: '30px 30px' }}
            />
        </motion.div>
    );
};
