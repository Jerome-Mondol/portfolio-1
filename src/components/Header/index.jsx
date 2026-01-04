    import React, { useState, useEffect } from "react";
    import { FaHome, FaUser, FaProjectDiagram, FaEnvelope } from "react-icons/fa";
    import { motion } from "framer-motion";

    const sections = [
    { name: "Home", icon: <FaHome className="text-blue-400" />, id: "hero" },
    { name: "About", icon: <FaUser className="text-pink-400" />, id: "about" },
    { name: "Projects", icon: <FaProjectDiagram className="text-green-400" />, id: "projects" },
    { name: "Contact", icon: <FaEnvelope className="text-yellow-400" />, id: "contact" },
    ];

    const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
        const headerHeight = 80;
        const y = el.getBoundingClientRect().top + window.pageYOffset - headerHeight;
        window.scrollTo({ top: y, behavior: "smooth" });
    }
    };

    const Header = () => {
    const [active, setActive] = useState("hero");
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
        setScrolled(window.scrollY > 20);

        const scrollPosition = window.scrollY + 100;
        for (let i = sections.length - 1; i >= 0; i--) {
            const section = document.getElementById(sections[i].id);
            if (section && section.offsetTop <= scrollPosition) {
            setActive(sections[i].id);
            break;
            }
        }
        };

        handleScroll();
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className="fixed top-0 left-0 right-0 z-[100] bg-black">
        {/* Background matching your design - adjust colors as needed */}
        <div className="absolute inset-0  to-transparent backdrop-blur-[2px]"></div>
        
        {/* Content wrapper with padding */}
        <div className="relative pt-4 pb-5 px-4">
            <div className="mx-auto max-w-7xl">
            <div 
                className={`
                mx-auto w-fit px-4 py-1 rounded-2xl 
                bg-gradient-to-r from-gray-800/60 to-gray-900/60 
                backdrop-blur-lg border border-gray-700/50 
                flex gap-2 sm:gap-4 min-h-[44px] items-center
                transition-all duration-300 ease-out
                ${scrolled ? 'shadow-xl shadow-black/30' : 'shadow-lg shadow-black/20'}
                `}
            >
                {sections.map((section) => (
                <button
                    key={section.id}
                    className="relative flex items-center gap-1 px-3 py-1.5 rounded-lg font-medium text-xs sm:text-sm text-gray-100 hover:text-white transition-colors duration-200"
                    onClick={() => {
                    setActive(section.id);
                    scrollToSection(section.id);
                    }}
                    style={{ outline: "none" }}
                >
                    {section.icon}
                    <span>{section.name}</span>
                    {active === section.id && (
                    <motion.div
                        layoutId="active-header"
                        className="absolute inset-0 rounded-lg border-2 pointer-events-none"
                        style={{ 
                        borderColor: section.id === 'hero' ? '#60a5fa' : 
                                    section.id === 'about' ? '#f472b6' : 
                                    section.id === 'projects' ? '#4ade80' : 
                                    '#fbbf24'
                        }}
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                    )}
                </button>
                ))}
            </div>
            </div>
        </div>
        </header>
    );
    };

    export default Header;