"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TerminalWindow } from "@/components/ui/TerminalWindow";
import { Check, Terminal, Loader2 } from "lucide-react";

interface TerminalLoaderProps {
    onComplete: () => void;
}

const steps = [
    { text: "npm run build", delay: 500, type: "command" },
    { text: "Creating an optimized production build...", delay: 1000, type: "log" },
    { text: "Compiling client components...", delay: 800, type: "log" },
    { text: "Minifying assets...", delay: 600, type: "log" },
    { text: "Optimizing images...", delay: 600, type: "log" },
    { text: "Build successful!", delay: 500, type: "success" },
    { text: "Starting application...", delay: 800, type: "log" },
];

export const TerminalLoader = ({ onComplete }: TerminalLoaderProps) => {
    const [currentStep, setCurrentStep] = useState(0);

    useEffect(() => {
        let timeout: NodeJS.Timeout;

        if (currentStep < steps.length) {
            timeout = setTimeout(() => {
                setCurrentStep((prev) => prev + 1);
            }, steps[currentStep].delay);
        } else {
            timeout = setTimeout(() => {
                onComplete();
            }, 500);
        }

        return () => clearTimeout(timeout);
    }, [currentStep, onComplete]);

    return (
        <div className="flex h-screen w-screen items-center justify-center bg-black p-4">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="w-full max-w-lg"
            >
                <TerminalWindow title="build-process" className="min-h-[300px]">
                    <div className="flex flex-col gap-2">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{
                                    opacity: currentStep >= index ? 1 : 0,
                                    x: currentStep >= index ? 0 : -10,
                                }}
                                className={`flex items-center gap-2 ${step.type === "command"
                                        ? "text-white font-bold"
                                        : step.type === "success"
                                            ? "text-terminal-green"
                                            : "text-gray-400"
                                    }`}
                            >
                                {step.type === "command" && <span className="text-terminal-green">$</span>}
                                {step.type === "success" && <Check className="h-3 w-3" />}
                                {step.type === "log" && index === currentStep && <Loader2 className="h-3 w-3 animate-spin" />}
                                <span>{step.text}</span>
                            </motion.div>
                        ))}

                        {currentStep >= steps.length && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="text-terminal-green mt-2 font-bold animate-pulse"
                            >
                                _
                            </motion.div>
                        )}
                    </div>
                </TerminalWindow>
            </motion.div>
        </div>
    );
};
