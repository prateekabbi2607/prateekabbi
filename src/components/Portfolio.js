import React from "react";

const Portfolio = ({ portfolio }) => {
  return (
    <section
      className={
        portfolio === true ? "portfolio area-bg active" : "portfolio area-bg"
      }
      id="portfolio"
    >
      {/* <div className="container">
        <div className="main-title">
          <h3>Recent Works</h3>
          <h2>My Portfolio</h2>
        </div>
        <div className="portfolio-content">
          <div className="row">
            <div className="col-xl-4 col-lg-6 col-sm-6">
              <div className="item">
                <img
                  className="img-fluid"
                  src="images/portfolio/item-1.jpg"
                  alt=""
                />
                <div className="overlay">
                  <h4 className="item-title">Project Title</h4>
                  <a className="icon-img" href="images/portfolio/item-1.jpg">
                    <i className="fa fa-search-plus"></i>
                  </a>
                  <div className="item-category">
                    <span>Front End</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-sm-6">
              <div className="item">
                <img
                  className="img-fluid"
                  src="images/portfolio/item-2.jpg"
                  alt=""
                />
                <div className="overlay">
                  <h4 className="item-title">Project Title</h4>
                  <a className="icon-img" href="images/portfolio/item-2.jpg">
                    <i className="fa fa-search-plus"></i>
                  </a>
                  <div className="item-category">
                    <span>Back End</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-sm-6">
              <div className="item">
                <img
                  className="img-fluid"
                  src="images/portfolio/item-3.jpg"
                  alt=""
                />
                <div className="overlay">
                  <h4 className="item-title">Project Title</h4>
                  <a className="icon-img" href="images/portfolio/item-3.jpg">
                    <i className="fa fa-search-plus"></i>
                  </a>
                  <div className="item-category">
                    <span>Graphic Design</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-sm-6">
              <div className="item">
                <img
                  className="img-fluid"
                  src="images/portfolio/item-4.jpg"
                  alt=""
                />
                <div className="overlay">
                  <h4 className="item-title">Project Title</h4>
                  <a className="icon-img" href="images/portfolio/item-4.jpg">
                    <i className="fa fa-search-plus"></i>
                  </a>
                  <div className="item-category">
                    <span>Front End</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-sm-6">
              <div className="item">
                <img
                  className="img-fluid"
                  src="images/portfolio/item-5.jpg"
                  alt=""
                />
                <div className="overlay">
                  <h4 className="item-title">Project Title</h4>
                  <a className="icon-img" href="images/portfolio/item-5.jpg">
                    <i className="fa fa-search-plus"></i>
                  </a>
                  <div className="item-category">
                    <span>Back End</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-sm-6">
              <div className="item">
                <img
                  className="img-fluid"
                  src="images/portfolio/item-6.jpg"
                  alt=""
                />
                <div className="overlay">
                  <h4 className="item-title">Project Title</h4>
                  <a className="icon-img" href="images/portfolio/item-6.jpg">
                    <i className="fa fa-search-plus"></i>
                  </a>
                  <div className="item-category">
                    <span>Graphic Design</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </section>
  );
};

export default Portfolio;
