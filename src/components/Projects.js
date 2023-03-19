import React from "react";

export default function Projects({ projects }) {
  return (
    <section className="Projects">
      <div className="container">
        <h2>{projects.hTwo}</h2>
        {projects.allProjects.map((project) => (
          <div className="child" key={project.name}>
            <img src={project.img} alt={project.name} />
            <div className="text">
              <h3>{project.name}</h3>
              <p>{project.text}</p>
              <div className="buttons">
                {project.buttons.map((button) => (
                  <button key={button}>{button}</button>
                ))}
              </div>
              <div className="anchors">
                {project.anchors.map((anchor) => (
                  <a href={anchor.link} key={anchor.name}>
                    {anchor.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
