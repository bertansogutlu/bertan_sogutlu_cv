import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faTwitter,
} from "@fortawesome/fontawesome-free-brands";
import { faAt } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <div className="Footer">
      <h2>Send me a message!</h2>
      <p>Got a question or proposal, or just want to say hello? Go ahead.</p>
      <a href="https://www.wikipedia.org/">almilasucode@gmail.com</a>
      <div className="icons">
        <FontAwesomeIcon icon={faTwitter} />
        <FontAwesomeIcon icon={faGithub} />
        <FontAwesomeIcon icon={faAt} />
        <FontAwesomeIcon icon={faInstagram} />
      </div>
    </div>
  );
}
