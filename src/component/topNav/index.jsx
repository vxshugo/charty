import React from "react";
import {Link} from "react-router-dom";

const TopNav = () => {
  return(
      <header className="site-header header-style">
          <div className="topbar border-bottom">
              <div className="container">
                  <div className="row justify-content-center">
                      <div className="col-md-6 col-sm-7 col-12 d-md-flex justify-content-start">
                          <div className="contact-intro d-flex justify-content-center">
                              <div className="intro-phone border-end d-flex align-items-center p-3 ps-0">
                                <a href="tel:+77056308025" className="text-secondary d-sm-flex align-items-center"><i
                                    className="fa-solid fa-phone text-warning me-1"></i>+77056308025</a>
                              </div>
                              <div className="intro-mail d-flex align-items-center p-3">
                                <a href="mailto:info@pathmercy.com" className="text-secondary d-sm-flex align-items-center"><i
                                    className="fa-solid fa-envelope text-warning me-1"></i> info@pathmercy.com</a>
                              </div>
                          </div>
                      </div>
                      <div className="col-md-6 col-sm-7 col-12 d-md-flex justify-content-end">
                          <div className="d-flex align-items-center justify-content-center">
                              <a href="https://instagram.com/thepathofmercy?igshid=YmMyMTA2M2Y=" target={"_blank"} class="top-login-register text-decoration-none p-3 text-secondary">
                              <i class="fa-brands fa-instagram"></i>
                              </a>
                              <Link to={"/donate"} className="btn btn-warning">Пожертвовать сейчас</Link>
                          </div>
                      </div>
                  </div>
              </div>
          </div>

          <nav className="navigation navbar navbar-expand-lg navbar-light bg-white">
              <div className="container">
                  <Link className="navbar-brand p-md-3 mt-1" to={"/"}>
                      <img src="./assets/images/logo-2.png" width="126px" height="auto" alt=""/>
                  </Link>
                  <button className="navbar-toggler" type="button">
                      <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse justify-content-end navbar-collapse" id="navbarSupportedContent">
                      <ul className="navbar-nav mb-2 mb-lg-0">
                          <li className="nav-item">
                              <Link className="nav-link" aria-current="page" to={"/"}>Домой</Link>
                          </li>
                          <li className="nav-item">
                              <a className="nav-link" href="#about">О нас</a>
                          </li>
                          <li className="nav-item">
                              <a className="nav-link" href="#causes">Кейсы</a>
                          </li>
                          <li className="nav-item">
                              <a className="nav-link me-5" href="#contact">Контакты</a>
                          </li>
                      </ul>

                  </div>
              </div>

              <div className="side-bar position-fixed">
                  <div className="close-btn position-absolute"><i
                      className="fa-solid fa-circle-xmark text-warning fs-1"></i>
                  </div>
                  <ul className="small-nav">
                      <li className="small-nav-item">
                          <Link className="small-nav-link" aria-current="page" to={"/"}>Домой</Link>
                      </li>
                      <li className="small-nav-item">
                          <a className="small-nav-link" href="#about">О нас</a>
                      </li>
                      <li className="small-nav-item">
                          <a className="small-nav-link" href="#causes">Кейсы</a>
                      </li>
                      <li className="small-nav-item">
                          <a className="small-nav-link" href="#contact">Контакты</a>
                      </li>
                  </ul>
              </div>
          </nav>
      </header>
  )
}

export default TopNav;