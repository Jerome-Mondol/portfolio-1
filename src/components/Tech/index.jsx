import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { tech } from '../../data/me';
import Technologies from './Technologies';

const Tech = () => {
  const [section, setSection] = useState("Frontend");

  return (
    <div>
      <h1 className="text-dark text-3xl mt-10 font-bold underline">Tech Stack</h1>

      {/* Tabs */}
      <div className="flex gap-5 justify-center items-center mt-5 bg-light py-2 w-fit mx-auto px-3 rounded-lg relative">
        {tech.map(({ category }) => {
          const isActive = section === category;
          return (
            <motion.h1
              key={category}
              className={`
                text-secondary py-2 px-4 rounded-lg text-sm cursor-pointer
                font-semibold duration-150 relative
                hover:!text-light
                ${isActive ? "!text-light" : ""}
              `}
              onClick={() => setSection(category)}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
            >
              {category}

              {/* Smooth animated border when active */}
              {isActive && (
                <motion.div
                  layoutId="active-border"
                  className="absolute inset-0 rounded-lg border border-[#69615f]"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{
                    duration: 0.25,
                    ease: "easeInOut",
                  }}
                />
              )}
            </motion.h1>
          );
        })}
      </div>

      {/* Smooth content transition */}
      {/* Smooth content transition */}
<div className="mt-5">
  <AnimatePresence mode="wait">
    <motion.div
      key={section}
      initial={{ opacity: 0, scale: 0.98, y: 15 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.98, y: -15 }}
      transition={{
        duration: 0.22, // 🧊 slightly faster
        ease: [0.45, 0, 0.2, 1],
      }}
    >
      <Technologies domain={section} />
    </motion.div>
  </AnimatePresence>
</div>

    </div>
  );
};

export default Tech;
