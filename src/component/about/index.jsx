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
                              <span>Что мы делаем?</span>
                              <h2>Мы выполняем миссию по оказанию помощи беспомощным людям</h2>
                          </div>
                          <p className="mb-4">
                              Сплотить народ в нашей общей цели. Показать доступность благотворительности. Абсолютно каждый человек может внести вклад в улучшение жизни детей,которым необходима наша помощь.
                          </p>
                          <div className="site-btns">
                              <a href="#" className="btn btn-warning">Подробнее</a>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>
  )
}

export default About