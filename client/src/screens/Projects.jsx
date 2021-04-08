import React from 'react';
import Card from "../components/Card"

function Projects(props) {
  const { projects } = props; 
  return (
    <div className="project-container">
      Projects
      {projects.map((project) => (
        <Card project={project}/>
      ))}
    </div>
  );
}

export default Projects;