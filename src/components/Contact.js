import React, { useState } from "react";
import axios from "axios";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = ({
  contact,
  email,
  number,
  address,
  linkedIn,
  github,
  instagram,
}) => {
  const [clientName, setClientName] = useState();
  const [clientEmail, setClientEmail] = useState();
  const [clientSubject, setClientSubject] = useState();
  const [clientMessage, setClientMessage] = useState();

  const handleSubmit = () => {
    axios
      .post(
        "https://prateekabbi-backend.herokuapp.com/messagesApi/newMessage",
        {
          name: clientName,
          email: clientEmail,
          subject: clientSubject,
          message: clientMessage,
        }
      )
      .then((data) => {
        if (data.data) {
          console.log(data.data);
          toast(`Message sent successfully!`, {
            // position: "top-right",
            autoClose: 10000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            type: "success",
          });
        }
      });
  };

  return (
    <section
      className={
        contact === true ? "contact area-bg active" : "contact area-bg"
      }
      id="contact"
    >
      <div className="container">
        <div className="main-title">
          <h3>Get In Touch</h3>
          <h2>Contact Me</h2>
        </div>
        <div className="row">
          <div className="col-xl-5 col-lg-12">
            <div className="contact-boxes">
              <div className="contact-box">
                <h4 className="title-box">Location</h4>
                <div className="content-box">
                  <p>
                    <i className="fa fa-home"></i>
                    {address}
                  </p>
                </div>
              </div>
              <div className="contact-box two">
                <h4 className="title-box">Email</h4>
                <div className="content-box">
                  <p>
                    <i className="fa fa-envelope"></i>
                    <a
                      href={`mailto:${email}`}
                      className="__cf_email__"
                      data-cfemail="d7bdbfb8b997beb9b1b8a4f9b4b8ba"
                    >
                      {email}
                    </a>
                  </p>
                </div>
              </div>
              <div className="contact-box">
                <h4 className="title-box">Phone</h4>
                <div className="content-box">
                  <p>
                    <i className="fa fa-phone"></i>
                    <a href={`tel:${number}`}>{number}</a>
                  </p>
                </div>
              </div>
              <div className="contact-box">
                <h4 className="title-box">LinkedIn</h4>
                <div className="content-box">
                  <p>
                    <i className="fa fa-linkedin"></i>
                    <a href={linkedIn}>{linkedIn}</a>
                  </p>
                </div>
              </div>
              <div className="contact-box">
                <h4 className="title-box">Github</h4>
                <div className="content-box">
                  <p>
                    <i className="fa fa-github"></i>
                    <a href={github}>{github}</a>
                  </p>
                </div>
              </div>
              <div className="contact-box">
                <h4 className="title-box">Instagram</h4>
                <div className="content-box">
                  <p>
                    <i className="fa fa-instagram"></i>
                    <a href={instagram}>{instagram}</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-7 col-lg-12">
            <div
              className="contact-form"
              // action="https://hasnaanajmi.com/env/ozod/mail.php"
              // method="post"
            >
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  onChange={(event) => setClientName(event.target.value)}
                  value={clientName}
                  required
                />
                <label htmlFor="name">Name</label>
                <span className="input-border"></span>
              </div>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  onChange={(event) => setClientEmail(event.target.value)}
                  value={clientEmail}
                  required
                />
                <label htmlFor="email">Email</label>
                <span className="input-border"></span>
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  onChange={(event) => setClientSubject(event.target.value)}
                  value={clientSubject}
                  required
                />
                <label htmlFor="subject">Subject</label>
                <span className="input-border"></span>
              </div>
              <div className="form-group">
                <textarea
                  className="form-control"
                  onChange={(event) => setClientMessage(event.target.value)}
                  value={clientMessage}
                  required
                ></textarea>
                <label htmlFor="message">Your Message</label>
                <span className="input-border"></span>
              </div>
              <button
                className="contact-btn main-btn btn btn-block"
                // name="send"
                onClick={handleSubmit}
              >
                Send Message
              </button>
              <div className="form-message text-center">
                <span></span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
};

export default Contact;
