"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const naxs = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Achievements", href: "#achievements" },
    { name: "Education", href: "#education" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        if (href === "#") return;
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4 flex justify-center items-center text-sm font-mono",
                scrolled ? "bg-black/80 backdrop-blur-md border-b border-white/10" : "bg-transparent"
            )}
        >
            <ul className="flex flex-wrap justify-center gap-6 sm:gap-8">
                {naxs.map((link) => (
                    <li key={link.name}>
                        <a
                            href={link.href}
                            onClick={(e) => scrollToSection(e, link.href)}
                            className="text-gray-400 hover:text-terminal-green transition-colors cursor-pointer"
                        >
                            {link.name}
                        </a>
                    </li>
                ))}
            </ul>
        </motion.nav>
    );
};
