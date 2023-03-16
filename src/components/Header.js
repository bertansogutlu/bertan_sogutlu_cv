import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/fontawesome-free-brands";

export default function Header() {
  return (
    <header>
      <div>
        <h1>bertan</h1>
        <div className="container">
          <div className="text">
            <h2>
              I am a Fronted
              <br />
              Developer...
            </h2>
            <p>
              ...who likes to craft solid and scalable frontend products with
              great user experiences.
            </p>
            <div>
              <button>
                <FontAwesomeIcon icon={faGithub} /> Github
              </button>
              <button>
                <FontAwesomeIcon icon={faLinkedin} /> Linkedin
              </button>
            </div>
          </div>
          <img src="https://picsum.photos/id/1/350/375" alt="cv-img" />
        </div>
      </div>
    </header>
  );
}
