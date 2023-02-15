import React from "react";
import Typed from "react-typed";

const Home = ({ home, name, resumeURL }) => {
  return (
    <section className={home === true ? "home  active" : "home "} id="home">
      <div className="container-fluid area-bg">
        <div id="particles-js"></div>
        <div className="home-intro d-flex h-100 align-items-center">
          <div className="home-info">
            <h3>Hey, My name is</h3>
            <h1>{name}</h1>
            <p>
              <Typed
                strings={[
                  "Web App Developer",
                  "Programmer",
                  "Android App Developer",
                ]}
                typeSpeed={80}
                backSpeed={50}
                loop={Infinity}
              />
            </p>
            <a
              href={resumeURL}
              className="main-btn"
              style={{ padding: 16 }}
              target="_blank"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
