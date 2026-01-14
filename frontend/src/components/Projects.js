import React, { useState } from 'react';
import './Projects.css';
import Modal from './Modal';

const projects = [
  {
    id: 1,
    title: 'Blog-Website',
    description: 'A personal programming blog website focused on sharing knowledge about HTML, CSS, and JavaScript ',
    image: './images/p1.png',
    link: 'https://blog-website-green-three.vercel.app/'
  },
  {
    id: 2,
    title: 'Gas-Agency',
    description: 'An online Gas Agency Management System that allows users to easily book gas cylinders from home.The website provides secure registration and login features for customers to manage bookings efficiently and conveniently.',
    image: './images/p2.png',
    link: 'https://gas-agency-ten.vercel.app/'
  },
  {
    id: 3,
    title: 'ENK-Book',
    description: 'A Student–Teacher Appointment Booking System that allows students to book, track, and manage appointments with teachers online.The dashboard displays appointment status (pending, approved, rejected) and enables easy communication through messaging features.',
    image: './images/p3.png',
    link: 'https://student-teacher-shym.vercel.app/'
  },
  {
    id: 4,
    title: 'Civic-Portal',
    description: 'A Civic Issue Reporting Platform that enables citizens to report local problems like potholes, garbage, and water leakage online.Users can track issue status in real time, helping improve city cleanliness, safety, and civic engagement.',
    image: './images/p4.png',
    link: 'https://civic-issues-portal.vercel.app/'
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
              <p><a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a></p>
            </div>
          ))}
        </div>
        <Modal project={selectedProject} onClose={closeModal} />
      </div>
    </section>
  );
}

export default Projects;
