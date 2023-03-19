import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faTwitter,
} from "@fortawesome/fontawesome-free-brands";
import { faAt } from "@fortawesome/free-solid-svg-icons";

export default function Footer({footer}) {
  return (
    <div className="Footer">
      <h2>{footer.hTwo}</h2>
      <p>{footer.text}</p>
      <a href = {`mailto: ${footer.email}`}>{footer.email}</a>
      <div className="icons">
        <FontAwesomeIcon icon={faTwitter} />
        <FontAwesomeIcon icon={faGithub} />
        <FontAwesomeIcon icon={faAt} />
        <FontAwesomeIcon icon={faInstagram} />
      </div>
    </div>
  );
}
