import React, { Component } from 'react';
import './Hero.css';

export class Hero extends Component {
    render() {
        return (
            <div>
                {/* ======= Hero Section ======= */}
                <section id="hero" className="d-flex align-items-center">
                    <div className="container-fluid" data-aos="fade-up">
                        <div className="row justify-content-center">
                            <div className="col-xl-5 col-lg-6 pt-3 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center">
                                <h1>Agencia digital para el desarrollo de sitios web</h1>
                                <h2>Te ayudaremos a crear un sitio web con una solución perfecta</h2>
                                <div><a href="#about" className="btn-get-started scrollto">Empezar Proyecto</a></div>
                            </div>
                            <div className="col-xl-4 col-lg-6 order-1 order-lg-2 hero-img" data-aos="zoom-in" data-aos-delay={150}>
                                <img src="assets/img/hero-img.png" className="img-fluid animated" alt="" />
                            </div>
                        </div>
                    </div>
                </section>{/* End Hero */}
            </div>
        )
    }
}

export default Hero
