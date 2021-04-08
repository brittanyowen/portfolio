import React from 'react';

function Card(props) {
  const { project } = props;
  return (
    <div className="card">
      {project?.image}
      <h1>{project?.title}</h1>
      <p>{project?.description}</p>
      <p>{project?.languages}</p>
      <div className="links">
      <a href={project?.deployed_link} target="_blank" rel="noreferrer">SITE</a>
      <a href={project?.repo_link} target="_blank" rel="noreferrer">CODE</a>

      </div>
    </div>
  );
}

export default Card;