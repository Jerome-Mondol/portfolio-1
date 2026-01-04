import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { tech } from "../../data/me.js";

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

const Technologies = ({ domain }) => {
  return (
    <AnimatePresence mode="popLayout">
      <motion.div
        layout
        transition={{
          layout: { duration: 0.3, ease: "easeInOut" },
        }}
        className="flex justify-center items-center gap-3 sm:gap-5 flex-wrap w-full"
      >
        {tech
          .filter(({ category }) => domain === category)
          .flatMap(({ items }) =>
            items.map(({ name, icon }, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                transition={{ duration: 0.25 }}
                layout
                className="flex py-2 px-3 sm:px-4 justify-center items-center gap-2 rounded-lg shadow-sm bg-light/20 hover:bg-light/30 transition-all duration-200"
              >
                <img src={icon} alt={name} className="w-6 h-6 sm:w-8 sm:h-8" />
                <h1 className="text-sm sm:text-base font-medium">{name}</h1>
              </motion.div>
            ))
          )}
      </motion.div>
    </AnimatePresence>
  );
};

export default Technologies;
