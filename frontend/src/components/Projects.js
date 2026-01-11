import React, { useState } from 'react';
import './Projects.css';
import Modal from './Modal';

const projects = [
  {
    id: 1,
    title: 'Project One',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: 'https://via.placeholder.com/300x200'
  },
  {
    id: 2,
    title: 'Project Two',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: 'https://via.placeholder.com/300x200'
  },
  {
    id: 3,
    title: 'Project Three',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: 'https://via.placeholder.com/300x200'
  }
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <section className="projects">
      <div className="container">
        <h2>My Projects</h2>
        <div className="project-grid">
          {projects.map(project => (
            <div className="project-card" key={project.id} onClick={() => openModal(project)}>
              <img src={project.image} alt={project.title} />
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          ))}
        </div>
        <Modal project={selectedProject} onClose={closeModal} />
      </div>
    </section>
  );
}

export default Projects;
