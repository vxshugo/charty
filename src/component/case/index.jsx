import React from "react";

const Case = () => {
  return(
      <section id="causes" className="section-padding">
          <div className="container">
              <div className="row">
                  <div className="section-title text-center">
                      <span>Our Causes</span>
                      <h2>Popular Causes What You Should Know</h2>
                  </div>
              </div>
              <div className="row">
                  <div className="owl-index owl-theme owl-carousel">
                      <div className="item">
                          <div className="cause-card post shadow-sm p-0">
                              <div className="post-img">
                                  <img src="./assets/images/blog/img-1.jpg" alt=""/>
                              </div>
                              <div className="cause-content post-info w-100">
                                  <div className="post-content">
                                      <h3 className="fs-4">They are waiting for your help.</h3>
                                  </div>
                                  <div className="d-flex">
                                      <div className="post-info-user d-flex">
                                          <div className="user-img">
                                              <img src="./assets/images/blog/admin.jpg" alt=""/>
                                          </div>
                                          <div className="user-name ms-2">
                                              <a href="">By Admin</a>
                                          </div>
                                      </div>
                                      <div className="post-date ms-3 d-flex align-items-center justify-content-between">
                                          <span><i className="fa-solid fa-calendar-days me-1"></i> Sep 25,2020</span>
                                      </div>
                                  </div>
                                  <div className="progress mt-5 mb-4">
                                      <div className="progress-bar bg-warning" role="progressbar" style={{width: "25%"}}
                                           aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%
                                      </div>
                                  </div>
                                  <div className="raise-goal d-flex justify-content-between">
                                      <div className="raise">
                                          <span>Raised:</span>
                                          $7,000.00
                                      </div>
                                      <div className="goal">
                                          <span>Goal:</span>
                                          $8,000.00
                                      </div>
                                  </div>
                              </div>
                              <div className="cause-btns d-flex">
                                  <a href="#" className="btn">Learn More</a>
                                  <a href="#" className="btn">Donate Now</a>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>
  )
}

export default Case