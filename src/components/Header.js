import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/fontawesome-free-brands";

export default function Header() {
  return (
    <header>
      <div className="container">
        <h1>bertan</h1>
        <div className="child">
          <h2>
            I am a Fronted
            <br />
            Developer...
          </h2>
          <p>
            ...who likes to craft solid and scalable frontend products with
            great user experiences.
          </p>
          <div className="buttons">
            <button>
              <FontAwesomeIcon icon={faGithub} /> Github
            </button>
            <button>
              <FontAwesomeIcon icon={faLinkedin} /> Linkedin
            </button>
          </div>
        </div>
        <img src="https://picsum.photos/id/1/500/500" alt="cv-img" />
      </div>
    </header>
  );
}
