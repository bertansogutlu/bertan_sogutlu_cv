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
          {header.text}
          </p>
          <div className="buttons">
            <button onClick={() => window.open('https://www.wikipedia.org/', '_blank')}>
              <FontAwesomeIcon icon={faGithub} /> Github
            </button>
            <button>
              <FontAwesomeIcon icon={faLinkedin} /> Linkedin
            </button>
          </div>
        </div>
        <img src={header.img.src} alt={header.img.name} />
      </div>
    </header>
  );
}
