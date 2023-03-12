import React from "react";

export default function Projects() {
  return (
    <div className="Projects">
      <h2>Projects</h2>
      <div className="project-container">
        <div className="projects-img">
          <img src="https://picsum.photos/id/1/360/360" alt="projects-1-img" />
        </div>
        <div className="project-right">
          <h3>Workintech</h3>
          <p>
            A simple, customizable, minimal setup cookie plugin that allows your
            users to select which cookies to accept or decline. This was created
            with vanilla JS, SCSS and Parcel Bundler and is available as a NPM
            package and the git repository makes any type of customization to
            code and themes possible.
          </p>
          <div className="buttons">
            <button>React</button>
            <button>Redux</button>
            <button>Vercel</button>
          </div>
          <div className="anchors">
            <a href="https://www.wikipedia.org/">Visit Site</a>
            <a href="https://www.wikipedia.org/">Github</a>
          </div>
        </div>
      </div>
      <div className="project-container">
        <div className="projects-img">
          <img src="https://picsum.photos/id/1/360/360" alt="projects-1-img" />
        </div>
        <div className="project-right">
          <h3>Journey</h3>
          <p>
            A simple, customizable, minimal setup cookie plugin that allows your
            users to select which cookies to accept or decline. This was created
            with vanilla JS, SCSS and Parcel Bundler and is available as a NPM
            package and the git repository makes any type of customization to
            code and themes possible.
          </p>
          <div className="buttons">
            <button>React</button>
            <button>Redux</button>
            <button>Vercel</button>
          </div>
          <div className="anchors">
            <a href="https://www.wikipedia.org/">Visit Site</a>
            <a href="https://www.wikipedia.org/">Github</a>
          </div>
        </div>
      </div>
    </div>
  );
}
