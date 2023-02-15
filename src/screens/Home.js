import React, { useState, useEffect } from "react";
import axios from "axios";

import Home from "../components/Home";
import About from "../components/About";
import Resume from "../components/Resume";
import Portfolio from "../components/Portfolio";
import Contact from "../components/Contact";

const HomeScreen = () => {
  const [home, setHome] = useState(true);
  const [about, setAbout] = useState(false);
  const [resume, setResume] = useState(false);
  const [portfolio, setPortfolio] = useState(false);
  const [contact, setContact] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [address, setAddress] = useState("");
  const [description, setDescription] = useState("");
  const [resumeURL, setResumeURL] = useState("");
  const [pictureURL, setPictureURL] = useState("");
  const [linkedIn, setLinkedIn] = useState("");
  const [github, setGithub] = useState("");
  const [instagram, setInstagram] = useState("");
  const [skills, setSkills] = useState([]);
  const [education, setEducation] = useState([]);
  const [experience, setExperience] = useState([]);

  useEffect(() => {
    axios
      .get("https://prateekabbi-backend.herokuapp.com/aboutApi/aboutDetails")
      .then((data) => {
        setName(data.data.name);
        setEmail(data.data.email);
        setNumber(data.data.number);
        setAddress(data.data.address);
        setDescription(data.data.description);
        setPictureURL(data.data.profilePictureURL);
        setResumeURL(data.data.resumeURL);
        setSkills(data.data.skills);
      });

    axios
      .get("https://prateekabbi-backend.herokuapp.com/resumeApi/resumeDetails")
      .then((data) => {
        setEducation(data.data.education);
        setExperience(data.data.experience);
      });

    axios
      .get(
        "https://prateekabbi-backend.herokuapp.com/socialMediaApi/socialMediaLinksDetails"
      )
      .then((data) => {
        setLinkedIn(data.data.linkedIn);
        setGithub(data.data.github);
        setInstagram(data.data.instagram);
      });
  }, []);

  const homeTrue = () => {
    setHome(true);
    setAbout(false);
    setResume(false);
    setPortfolio(false);
    setContact(false);
  };

  const aboutTrue = () => {
    setHome(false);
    setAbout(true);
    setResume(false);
    setPortfolio(false);
    setContact(false);
  };

  const resumeTrue = () => {
    setHome(false);
    setAbout(false);
    setResume(true);
    setPortfolio(false);
    setContact(false);
  };

  const portfolioTrue = () => {
    setHome(false);
    setAbout(false);
    setResume(false);
    setPortfolio(true);
    setContact(false);
  };

  const contactTrue = () => {
    setHome(false);
    setAbout(false);
    setResume(false);
    setPortfolio(false);
    setContact(true);
  };

  return (
    <>
      {/* PRELOADER */}
      <div className="preloader">
        <div className="status">
          <div className="spinner">
            <div className="dot1"></div>
            <div className="dot2"></div>
          </div>
        </div>
      </div>

      {/* NAVBAR */}
      <div className="vertical-nav">
        <a className="logo" href="/">
          P<span>a</span>
        </a>
        <button className="toggle-menu">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
        <div className="mini-menu">
          <ul className="list-unstyled">
            <li>
              <div
                className={home ? "active" : null}
                style={
                  home
                    ? {
                        display: "block",
                        width: "75px",
                        height: "80px",
                        lineHeight: "80px",
                        textAlign: "center",
                        color: "#f9c828",
                        cursor: "pointer",
                      }
                    : {
                        display: "block",
                        width: "75px",
                        height: "80px",
                        lineHeight: "80px",
                        textAlign: "center",
                        color: "#ffffff",
                        cursor: "pointer",
                      }
                }
                onClick={homeTrue}
              >
                <i className="flaticon-door" style={{ marginRight: 20 }}></i>
              </div>
            </li>
            <li>
              <div
                className={about ? "active" : null}
                style={
                  about
                    ? {
                        display: "block",
                        width: "75px",
                        height: "80px",
                        lineHeight: "80px",
                        textAlign: "center",
                        color: "#f9c828",
                        cursor: "pointer",
                      }
                    : {
                        display: "block",
                        width: "75px",
                        height: "80px",
                        lineHeight: "80px",
                        textAlign: "center",
                        color: "#ffffff",
                        cursor: "pointer",
                      }
                }
                onClick={aboutTrue}
              >
                <i className="flaticon-icon" style={{ marginRight: 20 }}></i>
              </div>
            </li>
            <li>
              <div
                className={resume ? "active" : null}
                style={
                  resume
                    ? {
                        display: "block",
                        width: "75px",
                        height: "80px",
                        lineHeight: "80px",
                        textAlign: "center",
                        color: "#f9c828",
                        cursor: "pointer",
                      }
                    : {
                        display: "block",
                        width: "75px",
                        height: "80px",
                        lineHeight: "80px",
                        textAlign: "center",
                        color: "#ffffff",
                        cursor: "pointer",
                      }
                }
                onClick={resumeTrue}
              >
                <i className="flaticon-leaf" style={{ marginRight: 20 }}></i>
              </div>
            </li>
            {/* <li>
              <div
                className={portfolio ? "active" : null}
                style={
                  portfolio
                    ? {
                        display: "block",
                        width: "75px",
                        height: "80px",
                        lineHeight: "80px",
                        textAlign: "center",
                        color: "#f9c828",
                        cursor: "pointer",
                      }
                    : {
                        display: "block",
                        width: "75px",
                        height: "80px",
                        lineHeight: "80px",
                        textAlign: "center",
                        color: "#ffffff",
                        cursor: "pointer",
                      }
                }
                onClick={portfolioTrue}
              >
                <i className="flaticon-squares" style={{ marginRight: 20 }}></i>
              </div>
            </li> */}
            <li>
              <div
                className={contact ? "active" : null}
                style={
                  contact
                    ? {
                        display: "block",
                        width: "75px",
                        height: "80px",
                        lineHeight: "80px",
                        textAlign: "center",
                        color: "#f9c828",
                        cursor: "pointer",
                      }
                    : {
                        display: "block",
                        width: "75px",
                        height: "80px",
                        lineHeight: "80px",
                        textAlign: "center",
                        color: "#ffffff",
                        cursor: "pointer",
                      }
                }
                onClick={contactTrue}
              >
                <i
                  className="flaticon-headphones"
                  style={{ marginRight: 20 }}
                ></i>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="page-content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-4 d-none d-lg-block no-padding">
              <div className="main-img">
                <img
                  className="img-fluid"
                  src={pictureURL}
                  alt=""
                  style={{ height: "100%" }}
                />
              </div>
            </div>
            <div className="col-lg-8 no-padding">
              <Home home={home} name={name} resumeURL={resumeURL} />
              <About
                about={about}
                name={name}
                email={email}
                number={number}
                address={address}
                description={description}
                pictureURL={pictureURL}
                resumeURL={resumeURL}
                skills={skills}
              />
              <Resume
                resume={resume}
                education={education}
                experience={experience}
              />
              <Portfolio portfolio={portfolio} />
              <Contact
                contact={contact}
                email={email}
                number={number}
                address={address}
                linkedIn={linkedIn}
                github={github}
                instagram={instagram}
              />
            </div>
          </div>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="copyright d-none d-md-block">
        <a href="/">PrateekAbbi</a> &copy; 2022
        <i className="fa fa-heart"></i>
      </div>
    </>
  );
};

export default HomeScreen;
