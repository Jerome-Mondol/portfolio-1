import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { demoProjects } from "../data/me.js";
import { FaArrowLeft, FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const ProjectDetails = () => {
  const { name } = useParams();
  const navigate = useNavigate();
  const project = demoProjects.find(
    (p) => p.name.replace(/\s+/g, "-").toLowerCase() === name
  );

  if (!project) return <div className="text-center text-red-500 mt-10">Project not found.</div>;

  return (
    <div className="max-w-2xl mx-auto bg-semilight rounded-2xl shadow-lg p-6 mt-16 mb-10">
      <button
        className="flex items-center gap-2 text-light hover:text-secondary mb-6"
        onClick={() => navigate(-1)}
      >
        <FaArrowLeft /> Back
      </button>
      <img
        src={project.image}
        alt={project.name}
        className="w-full h-56 object-cover rounded-xl mb-6 shadow"
      />
      <h1 className="text-dark text-2xl font-bold mb-2">{project.name}</h1>
      <p className="text-light mb-4">{project.description}</p>
      <div className="mb-4">
        <h2 className="text-lg font-semibold text-dark mb-1">Tech Stack</h2>
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech, i) => (
            <span key={i} className="px-3 py-1 bg-light/20 rounded-md text-sm font-mono">
              {tech}
            </span>
          ))}
        </div>
      </div>
      <div className="flex gap-4 mb-4">
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 bg-dark text-light px-4 py-2 rounded-lg hover:bg-light hover:text-dark transition-colors"
          >
            <FaExternalLinkAlt /> Live Demo
          </a>
        )}
        <a
          href={project.githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 bg-dark text-light px-4 py-2 rounded-lg hover:bg-light hover:text-dark transition-colors"
        >
          <FaGithub /> GitHub
        </a>
      </div>
      <div className="mb-4">
        <h2 className="text-lg font-semibold text-dark mb-1">Challenges Faced</h2>
        <p className="text-light/90">{project.challenges}</p>
      </div>
      <div>
        <h2 className="text-lg font-semibold text-dark mb-1">Potential Improvements</h2>
        <p className="text-light/90">{project.improvements}</p>
      </div>
    </div>
  );
};

export default ProjectDetails;
