import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/fontawesome-free-brands";

export default function Header({header}) {
  return (
    <header>
      <div className="container">
        <h1>{header.hOne}</h1>
        <div className="child">
          <h2>
          {header.hTwoFirstPart}
            <br />
            {header.hTwoSecondPart}
          </h2>
          <p>
          {header.p}
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
