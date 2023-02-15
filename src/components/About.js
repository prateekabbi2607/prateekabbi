import React from "react";

import {
  CircularProgressbar,
  buildStyles,
  CircularProgressbarWithChildren,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const About = ({
  about,
  name,
  email,
  number,
  address,
  description,
  pictureURL,
  resumeURL,
  skills,
}) => {
  return (
    <section
      className={about === true ? "about area-bg active" : "about area-bg"}
      id="about"
    >
      <div className="about-me container">
        <div className="main-title">
          <h3>Discover</h3>
          <h2>About Me</h2>
        </div>
        <div className="row">
          <div className="col-md-5 d-block d-lg-none">
            <div className="about-image">
              <img className="img-fluid" src={pictureURL} alt="" />
            </div>
          </div>
          <div className="col-lg-12 col-md-7">
            <div className="about-info">
              <h3>Hello! I am {name}</h3>
              <p>{description}</p>
              <ul className="personal-info list-unstyled">
                <li className="about-item">
                  <h4>Name</h4>
                  <span>{name}</span>
                </li>
                <li className="about-item">
                  <h4>Phone</h4>
                  <a href={`tel:${number}`}>
                    <span>{number}</span>
                  </a>
                </li>
                <li className="about-item">
                  <h4>Email</h4>
                  <span>
                    <a
                      href={`mailto:${email}`}
                      className="__cf_email__"
                      data-cfemail="a1cbc9cecfe1c8cfc7ced28fc2cecc"
                    >
                      {email}
                    </a>
                  </span>
                </li>
                <li className="about-item">
                  <h4>Address</h4>
                  <span>{address}</span>
                </li>
                <li className="about-item">
                  <h4>Freelance</h4>
                  <span>Available</span>
                </li>
              </ul>
              <div className="my-btn">
                <a href={resumeURL} className="main-btn" target="_blank">
                  Download CV
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="skills container">
        <div className="main-title">
          <h2>My Skills</h2>
        </div>
        <div className="row">
          {skills.map((skill) => {
            return (
              <div className="col-xl-3 col-sm-4">
                <div className="box">
                  <div className="chart2">
                    <CircularProgressbarWithChildren
                      value={skill.percentage}
                      text={`${skill.percentage}%`}
                      strokeWidth={1.5}
                      styles={buildStyles({
                        pathColor: "#354252",
                        trailColor: "#2a3748",
                        strokeLinecap: "round",
                        textColor: "#f9c828",
                        textSize: "16",
                      })}
                    />
                  </div>
                  <h4>{skill.name}</h4>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
