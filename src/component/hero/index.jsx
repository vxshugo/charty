import React from "react";

const Hero = () => {
  return(
      <section id="hero" className="pt-5">
          <div className="container">
              <div className="row">
                  <div className="col-lg-6 col-md-12 d-flex flex-column justify-content-center">
                      <div className="site-title">
                          <h2>Давайте встанем на путь добра,
                              <span>Путь Милосердия</span>
                          </h2>

                      </div>
                      <div className="site-btns d-flex ">
                          <a href="#" className="btn btn-warning ms-4">Пожертвовать сейчас</a>
                          <a href="#" className="btn border-secondary ms-3">Подробнее</a>
                      </div>
                  </div>
                  <div className="col-lg-6 d-none d-lg-block">
                      <div className="site-img position-relative">
                          <img src="./assets/images/slider/img-3.png" className="position-absolute" alt=""/>
                          <img src="./assets/images/slider/img-2.png" className="position-relative" alt=""/>
                      </div>
                  </div>
              </div>
          </div>
      </section>
  )
}

export default Hero;