import React from "react";
import javascript from "../svg/javascript.svg";
import react from "../svg/react.svg";
import redux from "../svg/redux.svg";
import nodejs from "../svg/nodejs.svg";
import vscode from "../svg/vscode.svg";
import figma from "../svg/figma.svg";

export default function Skills({skills}) {
  return (
    <section className="Skills">
      <div className="container">
        <h2>{skills.hTwo}</h2>
        <div className="child">
          <div className="card">
            <img src={skills.skill[0].img} alt={skills.skill[0].name} />
            <p>{skills.skill[0].name}</p>
          </div>
          <div className="card">
            <img src={nodejs} alt="nodejs" />
            <p>NODE</p>
          </div>
          <div className="card">
            <img src={react} alt="react" />
            <p>REACT</p>
          </div>
          <div className="card">
            <img src={vscode} alt="vscode" />
            <p>VS CODE</p>
          </div>
          <div className="card">
            <img src={redux} alt="redux" />
            <p>REDUX</p>
          </div>
          <div className="card">
            <img src={figma} alt="figma" />
            <p>FIGMA</p>
          </div>
        </div>
      </div>
    </section>
  );
}
