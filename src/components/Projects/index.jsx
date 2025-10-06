import React from "react";
import { FaArrowUpRightFromSquare, FaGithub } from "react-icons/fa6";
import { motion } from "framer-motion";
import { demoProjects } from "../../data/me";

const Projects = () => {
  return (
    <div className="mt-10">
      <h1 className="text-dark text-2xl font-bold underline mb-6 ">
        Personal Projects
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6  mx-auto">
        {demoProjects.map(
          ({ name, description, techStack, image, link, githubLink }, index) => (
            <motion.div
              key={index}
              className="relative group bg-light backdrop-blur-md rounded-2xl overflow-hidden shadow-md border border-[#2f2f2f] hover:border-[#69615f] transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
            >
              <a href={githubLink} target="_blank" rel="noopener noreferrer">
                <div className="relative overflow-hidden">
                  <img
                    src={image}
                    alt={name}
                    className="w-full h-48 object-cover rounded-t-2xl transition-transform duration-300 group-hover:scale-105"
                  />
                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute top-3 right-3 bg-dark/70 text-light p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    <FaArrowUpRightFromSquare className="text-sm" />
                  </a>
                </div>
              </a>

              <div className="p-4 flex flex-col justify-between h-44">
                <div className="flex justify-between items-center">
                  <h2 className="text-lg font-semibold text-dark group-hover:text-light transition-colors duration-200">
                    {name}
                  </h2>
                  <a href={githubLink} target="_blank" rel="noopener noreferrer" className="text-dark hover:text-light">
                    <FaGithub className="text-xl" />
                  </a>
                </div>
                <p className="text-sm text-light/70 mt-2">{description}</p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-xs border border-gray-500 rounded-md text-light/80 bg-light/5 backdrop-blur-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          )
        )}
      </div>
    </div>
  );
};

export default Projects;
