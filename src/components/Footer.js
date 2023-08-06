import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/footer.css";

import React from "react";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer>
      <div className="abouttheclub">
        <h2 style={{ marginBottom: 10 }}>About the Club</h2>
        <p>
          With an untiring motive of pervading the knowledge of Robotics among
          the students, the robotics club conducts various workshops and courses
          throughout the year. Further, internship opportunities are provided
          for excelling candidates.
        </p>
      </div>
      <div className="divider"> </div>
      <div className="contact">
        <h2>Contact Us</h2>
        <div className="phone">Phone: +91 9489800128</div>
        <div className="email">Email: roboclubofceg@gmail.com</div>
        <div className="social">
          <a
            href="https://www.instagram.com/robotics_club_ceg/"
            target="_blank"
          >
            <FontAwesomeIcon icon={faInstagram} size="2x" color="#fff" />
          </a>
          <a href="">
            <FontAwesomeIcon icon={faFacebook} size="2x" color="#fff" />
          </a>
          <a
            href="https://www.linkedin.com/company/roboticsclubofceg/mycompany/"
            target="_blank"
          >
            <FontAwesomeIcon icon={faLinkedin} size="2x" color="#fff" />
          </a>
          <a
            href="https://www.youtube.com/@roboticsclubofceg1444"
            target="_blank"
          >
            <FontAwesomeIcon icon={faYoutube} size="2x" color="#fff" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
