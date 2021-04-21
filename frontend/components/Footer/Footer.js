import React from "react";
import { SiAngellist, SiLinkedin, SiGithub } from "react-icons/si";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="Skills">
        <nav>
          <ul>
            <li>Frontend Skills</li>
            <li>Javascript</li>
            <li>React</li>
            <li>Redux</li>
            <li>HTML5</li>
            <li>CSS3/SCSS</li>
          </ul>
          <ul>
            <li>Backend Skills</li>
            <li>Ruby on Rails</li>
            <li>PostgreSQL</li>
            <li>MongoDB</li>
            <li>NodeJS</li>
            <li>ExpressJS</li>
          </ul>
          <ul>
            <li>Hobbies</li>
            <li>League of Legends</li>
            <li>Snowboarding</li>
            <li>Running</li>
          </ul>
          <ul>
            <li>Contact</li>
            <li>
              <a
                href="https://www.linkedin.com/in/rogerhu1989/"
                target="_blank"
                rel="noreferrer"
              >
                <SiLinkedin />
              </a>
              <a
                href="https://github.com/caroger"
                target="_blank"
                rel="noreferrer"
              >
                <SiGithub />
              </a>
              <a
                href="https://angel.co/u/roger-hu-6"
                target="_blank"
                rel="noreferrer"
              >
                <SiAngellist></SiAngellist>
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="About">
        <div className="container">
          <p>
            <span> United States | English (US) | $ (USD)</span>
          </p>
          <p>
            <span>© 2021 Etsy, Inc.</span>
            <span>
              Product Photos Credit - https://merch.riotgames.com/en-us/
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
