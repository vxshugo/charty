import React from "react";

const Footer = () => {
  return(
      <footer id="contact" className="footer-59391">
          <div className="container">
              <div className="row">
                  <div className="col-lg-3 col-md-6 col-xs-12 mb-3">
                      <div className="row mb-5">
                          <div className="col-md-4">
                              <div className="site-logo">
                                  <a href="#"><img src="./assets/images/logo-2.png" width="226px" height="auto" alt=""/></a>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-xs-12 mb-3">
                      <div className="widget-title">
                          <h3 style={{color: "gray"}}>Полезные ссылки</h3>
                      </div>
                      <div className="row mb-5">
                          <div className="col-md-6 text-md-right">
                              <ul className="nav-links list-unstyled nav-right">
                                  <li><a href="#">Домой</a></li>
                                  <li><a href="#">Кейсы</a></li>
                                  <li><a href="#">О нас</a></li>
                                  <li><a href="#">Контакты</a></li>
                              </ul>
                          </div>
                      </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-xs-12 mb-3" style={{color: "gray"}}>
                      <div className="widget contact-widget">
                          <div className="widget-title">
                              <h3 style={{color: "gray"}}>Контакты</h3>
                          </div>
                          <p className="fs-6" style={{color: "gray"}}>Благотворительный фонд: Путь милосердия</p>
                          <ul className="widget-list">
                              {/*<li className="widget-list-item d-flex align-items-center mb-2">*/}
                              {/*    <i className="fa-solid fa-location-dot me-3"></i> <span style={{color: "gray"}}>28 Street, New York City,*/}
                              {/*              USA</span>*/}
                              {/*</li>*/}
                              <li className="widget-list-item d-flex align-items-center mb-2">
                                  <i className="fa-solid fa-phone me-3"></i> <a href="tel:+77053011142" style={{color: "gray"}}>+7 705 301 1142</a>
                              </li>
                              <li className="widget-list-item d-flex align-items-center mb-2">
                                  <i className="fa-solid fa-envelope me-3"></i> <a href="mailto:yankepchoop@gmail.com" style={{color: "gray"}}>yankepchoop@gmail.com</a>
                              </li>
                          </ul>
                      </div>
                  </div>
              </div>
              <div className="row">
                  <div className="col ">
                      <div className="copyright">
                          <p><small>Copyright 2022. Все права защишены. Сайт разработан <a href="mailto:vxshugo@gmail.com">vxshugo</a></small></p>
                      </div>
                  </div>
              </div>
          </div>
      </footer>
  )
}

export default Footer