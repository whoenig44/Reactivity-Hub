import React from 'react';

function Portfolio() {
  const projects = [
    { title: 'Project 1', link: 'https://project1.com', repo: 'https://github.com/project1' },
    // Add more projects here
  ];

  return (
    <section>
      <h2>Portfolio</h2>
      <div className="projects">
        {projects.map((project, index) => (
          <div key={index} className="project">
            <h3>{project.title}</h3>
            <a href={project.link}>Deployed Application</a>
            <a href={project.repo}>GitHub Repository</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;