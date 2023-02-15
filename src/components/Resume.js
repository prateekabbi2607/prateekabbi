import React from "react";

const Resume = ({ resume, education, experience }) => {
  return (
    <section
      className={resume === true ? "resume area-bg active" : "resume area-bg"}
      id="resume"
    >
      <div className="container">
        <div className="main-title">
          <h3>Experience &amp; Education</h3>
          <h2>Resume</h2>
        </div>
        <div className="resume-content">
          <div className="row">
            <div className="col-md-12">
              <div className="education">
                {education.map((ele) => {
                  return (
                    <div className="resume-item">
                      <div className="resume-date">
                        {ele.year}
                        <i className="fa fa-graduation-cap"></i>
                      </div>
                      <span>{ele.title}</span>
                      <h4>{ele.organization}</h4>
                      <p>{ele.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="col-md-12">
              <div className="experience">
                {experience.map((ele) => {
                  return (
                    <div className="resume-item">
                      <div className="resume-date">
                        {ele.year}
                        <i className="fa fa-suitcase"></i>
                      </div>
                      <span>{ele.title}</span>
                      <h4>{ele.organization}</h4>
                      <p>{ele.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
