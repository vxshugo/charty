import React from "react";
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import OwlCarousel from 'react-owl-carousel';
import {data} from "../../data/data";
import {Link} from "react-router-dom";


const Case = () => {
    const Options = {
        option: {
            margin: 30,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                    dots: true,
                    nav: false,
                },
                550: {
                    items: 2,
                    center: false,
                    margin: 10,
                    dots: true,
                    nav: false
                },
                992: {
                    items: 3,
                    nav: true,
                    dots: false,
                }
            }
        },
    }

    const procentFunction = (x,y) => {
        return 100 * x / y
    }

  return(
      <section id="causes" className="section-padding">
          <div className="container">
              <div className="row">
                  <div className="section-title text-center">
                      <span>Нуждаются в помощи</span>
                      <h2>Дети нуждающиеся в помощи</h2>
                  </div>
              </div>
              <div className="row">
                  <OwlCarousel className='owl-theme'  {...Options.option}>
                      {data.map((item, index) => (
                          <div className="item" key={index}>
                              <div className="cause-card post shadow-sm p-0">
                                  <div className="post-img">
                                      <img src={item.img[0]} alt=""/>
                                  </div>
                                  <div className="cause-content post-info w-100">
                                      <div className="post-content">
                                          <h3 className="fs-4">{item.title}</h3>
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
                                              <span><i className="fa-solid fa-calendar-days me-1"></i>{item.date}</span>
                                          </div>
                                      </div>
                                      <div className="progress mt-5 mb-4">
                                          <div className="progress-bar bg-warning" role="progressbar" style={{width: `${procentFunction(item.Raised, item.Goal)}%` }}
                                               aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">{procentFunction(item.Raised, item.Goal)}%
                                          </div>
                                      </div>
                                      <div className="raise-goal d-flex justify-content-between">
                                          <div className="raise">
                                              <span>Собрано:</span>
                                              KZT {item.Raised}
                                          </div>
                                          <div className="goal">
                                              <span>Нужно:</span>
                                              KZT {item.Goal}
                                          </div>
                                      </div>
                                  </div>
                                  <div className="cause-btns d-flex">
                                      <a href="#" className="btn">
                                          <Link to={`/${item.id}`}>
                                              Подробнее
                                          </Link>
                                      </a>
                                      <a href="#" className="btn">
                                          <Link to={`/donate}`}>
                                              Пожертвовать
                                          </Link>
                                      </a>
                                  </div>
                              </div>
                          </div>
                      ))}
                  </OwlCarousel>
              </div>
          </div>
      </section>
  )
}

export default Case