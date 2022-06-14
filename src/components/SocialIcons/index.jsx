import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faDiscord,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons"
import "./index.scss"

const SocialIcons = () => (
  <div className="social-icons_wrapper">
    <ul>
      <li>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/kasper-kosecki-1b128a239/"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </li>
      <li>
        <a target="_blank" rel="noreferrer" href="https://github.com/Kasperone">
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </li>
      <li>
        <a target="_blank" rel="noreferrer" href="https://github.com/Kasperone">
          <FontAwesomeIcon icon={faDiscord} />
        </a>
      </li>
    </ul>
  </div>
)

export default SocialIcons
