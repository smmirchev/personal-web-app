import React, { Component } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

class Footer extends Component {
  render() {
    return (
      <footer className="app-footer">
          <p>
            Content, design and layout: Stefan Mirchev <br></br>Projects' code
            and photos: Stefan Mirchev
          </p>
          <a href="https://github.com/">
            <FaGithub className="fa-icons" size={20} /> GitHub
          </a>
          <a href="https://www.linkedin.com/">
            <FaLinkedin className="fa-icons" size={20} /> LinkedIn
          </a>
      </footer>
    );
  }
}

export default Footer;
