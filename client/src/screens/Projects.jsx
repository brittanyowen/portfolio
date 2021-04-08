import React from 'react';
import Card from "../components/Card"

function Projects(props) {
  const { projects } = props; 
  return (
    <div className="project-container">
      {projects.map((project) => (
        <Card project={project}/>
      ))}
    </div>
  );
}

export default Projects;