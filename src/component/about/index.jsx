import React from "react";

const About = () => {
  return(
      <section id="about" className="section-padding">
          <div className="container">
              <div className="row">
                  <div className="col-lg-7 col-12">
                      <div className="about-img">
                          <img src="./assets/images/about2.png" alt=""/>
                      </div>
                  </div>
                  <div className="col-lg-5 col-12">
                      <div className="about-content">
                          <div className="section-title m-0 mb-4">
                              <span>What We Do?</span>
                              <h2>We Are In A Mission To Help The Helpless</h2>
                          </div>
                          <p className="mb-4">There are many variations of passages of Lorem Ipsum available, but the
                              majority have suffered alteration in some form, by injected humour, or randomised words
                              which don't look even slightly believable. If you are going to use a passage of Lorem
                              Ipsum, you need to be sure there.</p>
                          <p>Thing embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the
                              Internet tend to repeat predefined chunks as necessary, </p>
                          <div className="site-btns">
                              <a href="#" className="btn btn-warning">Know More</a>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>
  )
}

export default About