import React from "react";

export default function Skills({skills}) {
  return (
    <section className="Skills">
      <div className="container">
        <h2>{skills.hTwo}</h2>
        <div className="child">
          {skills.allSkills.map(
            skill => (
              <div className="card" key={skill.name}>
              <img src={skill.img} alt={skill.name} />
              <p>{skill.name}</p>
            </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
