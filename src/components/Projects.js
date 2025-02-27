// src/components/Projects.js
import React from 'react';

const projects = [
  {
    title: 'Project One',
    description: 'A brief description of Project One.',
    image: '/img2.jfif',
    link: 'https://www.google.com',
  },
  {
    title: 'Project Two',
    description: 'A brief description of Project Two.',
    image: '/img1.png',
    link: 'https://www.google.com',
  },
  {
    title: 'Project Three',
    description: 'A brief description of Project Three.',
    image: '/download.jfif',
    link: 'https://www.google.com',
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative flex items-center justify-center min-h-screen bg-cover bg-center text-white"
      style={{ backgroundColor: 'lightcyan' }}
    >
      <div className="bg-black bg-no-repeat bg-opacity-55 p-6 md:p-10 lg:p-20 rounded-lg">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-center">Projects</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="bg-white text-black rounded-lg overflow-hidden shadow-lg">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-4">{project.title}</h2>
                <p className="text-base md:text-lg lg:text-xl mb-4">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-700"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
