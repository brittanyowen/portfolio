import React from "react";
import SimpleImageSlider from "react-simple-image-slider"

function Card(props) {
  const { project } = props;
  const images = project?.image

  return (
    <div className="card">
      <SimpleImageSlider
        width="80vw"
        height="min(calc(80vw * .68), 475px)"
        images={images}
        navStyle={1}
        navMargin={0}
        slideDuration={0.5}
        showNavs={true}
        navSize={40}
      />
      <h2>{project?.title}</h2>
      <p>{project?.description}</p>
      <p>
        <span className="languages">Languages and Frameworks: </span>
        {project?.languages}
      </p>
      <div className="links">
        <a href={project?.deployed_link} target="_blank" rel="noreferrer">
          <button>Deployed Site</button>
        </a>
        |
        <a href={project?.repo_link} target="_blank" rel="noreferrer">
          <button>Code</button>
        </a>
      </div>
    </div>
  );
}

export default Card;
