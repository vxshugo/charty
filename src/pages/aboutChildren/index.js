import {Link, useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
import {data} from "../../data/data";
import TopNav from "../../component/topNav";
import OwlCarousel from "react-owl-carousel";
import Footer from "../../component/footer";

const AboutChildren = () => {
    const location = useLocation()
    const id = location.pathname.split("/")[1];


    const Options = {
        option: {
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                    dots: false,
                    nav: false,
                },
                550: {
                    items: 1,
                    center: false,
                    margin: 10,
                    dots: false,
                    nav: false
                },
                992: {
                    items: 1,
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
        <main>
            <TopNav/>
            <section id="cause-single" className="section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <div className="cause-detail post">
                                <OwlCarousel className='owl-theme owl-post' {...Options.option}>
                                    {data[id].img?.map((item, key) => (
                                        <div className="item" id={key}>
                                            <div className="post-img">
                                                <img src={item} alt=""/>
                                            </div>
                                        </div>
                                    ))}
                                </OwlCarousel>

                                <div className="post-info d-flex w-100 justify-content-between">
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
                                            <span><i className="fa-solid fa-calendar-days me-1"></i>{data[id].date}</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="cause-tab">
                                    <ul className="nav nav-tabs">
                                        <li className="nav-item ">
                                            <a className="nav-link active shadow mb-3" aria-current="page"
                                               data-bs-toggle="tab"
                                               href="#Description">Описание</a>
                                        </li>
                                    </ul>
                                </div>
                                <div class="cause-tab-text m-0">
                                    <div className="tab-content">
                                        <div id="Description" className="tab-pane active border-0 p-0">
                                            <div className="row">
                                                <div className="col-12">
                                                    <div className="case-content">
                                                        <div className="case-text-top">
                                                            <h2>{data[id].title}</h2>
                                                            <div className="progress mt-5 mb-4">
                                                                <div className="progress-bar bg-warning"
                                                                     role="progressbar"
                                                                     style={{width: `${procentFunction(data[id].Raised, data[id].Goal)}%`}}
                                                                     aria-valuenow="25"
                                                                     aria-valuemin="0"
                                                                     aria-valuemax="100">{procentFunction(data[id].Raised, data[id].Goal)}%
                                                            </div>
                                                        </div>
                                                        <div className="raise-goal d-flex justify-content-between">
                                                            <div className="raise">
                                                                <span>Собрано:</span>
                                                                KZT {data[id].Raised}
                                                            </div>
                                                            <div className="goal">
                                                                <span>Нужно:</span>
                                                                KZT {data[id].Goal}
                                                            </div>
                                                        </div>
                                                        <div className="case-text-content">
                                                            <p className="mb-4"><span className="desc-information">{data[id].desc}</span></p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    <Footer/>
</main>
)
}

export default AboutChildren;