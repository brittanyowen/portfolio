import React from 'react';
import Card from "../components/Card"

function Projects(props) {
  const { projects } = props; 
  return (
    <div className="project-container">
      {projects.map((project) => (
        <div key={project.title}>
        <Card project={project}/>
        </div>
      ))}
    </div>
  );
}

export default Projects;