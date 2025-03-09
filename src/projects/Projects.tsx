import "./Projects.css";
import projectsData from "../data/projects.json";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Project } from "../types";

export default function Projects() {
  const [projectsList, setProjectsList] = useState<Project[]>(projectsData);

  return (
    <div id="projects">
      <ul>
        {projectsList.map((project) => (
          <li key={project.id}>
            <Link to={`/projects/${project.id}`}>{project.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
