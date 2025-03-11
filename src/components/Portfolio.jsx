import React from 'react';

function Portfolio() {
  const projects = [
    { title: 'Project 1', link: 'https://whoenig44.github.io/bootcamp-project-1/', repo: 'https://github.com/whoenig44/bootcamp-project-1' },
    { title: 'Project 2', link: 'https://syntax-surfers-project-2-deployment.onrender.com', repo: 'https://github.com/whoenig44/syntax-surfers-project-2' },
    { title: 'Project 3', link: 'https://syntax-surfers-project-3.onrender.com/', repo: 'https://github.com/whoenig44/syntax-surfers-project-3' },
    { title: 'Child-Safe Outlet Cover', link: 'https://www.instructables.com/Child-Safe-Outlet-Cover/', repo: 'https://www.instructables.com/Child-Safe-Outlet-Cover/' },
    // Add more projects here as needed
  ];

  return (
    <section>
      <h2>Portfolio</h2>
      <div className="projects">
        {projects.map((project, index) => (
          <div key={index} className="project">
            <h3>{project.title}</h3>
            <a href={project.link}>Deployed Application</a>
            <br />
            <a href={project.repo}>GitHub Repository</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;