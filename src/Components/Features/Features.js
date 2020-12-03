import React, { Component } from 'react';
import './Features.css';
import 'boxicons/css/boxicons.min.css';
import FeaturesImg from './features.svg';

export class Features extends Component {
    render() {
        return (
            <div>
                {/* ======= Features Section ======= */}
                <section id="features" className="features">
                    <div className="container" data-aos="fade-up">
                        <div className="section-title">
                            <h2>Caracteristicas</h2>
                            <p>Nos especializamos en diseño de páginas web y posicionamiento web, tiendas virtuales, desarrollo de sistemas de administración de contenidos, marketing digital, creación de sitios web.</p>
                        </div>
                        <div className="row">
                            <div className="col-lg-6 order-2 order-lg-1 d-flex flex-column align-items-lg-center">
                                <div className="icon-box mt-5 mt-lg-0" data-aos="fade-up" data-aos-delay={100}>
                                    <i className="bx bx-receipt" />
                                    <h4>Plan de diseño de páginas</h4>
                                    <p>Nuestro equipo de diseñadores tienen una vasta experiencia en diseño web. Contamos con paquetes de diseño de paginas web a su medida.</p>
                                </div>
                                <div className="icon-box mt-5" data-aos="fade-up" data-aos-delay={200}>
                                    <i className="bx bx-cube-alt" />
                                    <h4>Mejorar la usabilidad del sitio</h4>
                                    <p>El objetivo de un nuevo diseño web será facilitar la navegación a tus clientes potenciales para que así se sientas más comodos dentro de nuestra web.</p>
                                </div>
                                <div className="icon-box mt-5" data-aos="fade-up" data-aos-delay={300}>
                                    <i className="bx bx-images" />
                                    <h4>Organización de contenidos</h4>
                                    <p>Creamos diseños completamente adaptables a todos los dispositivos móviles tipo tablet o smartphone. Esto logra una mejor experiencia de navegación para el usuario final.</p>
                                </div>
                                <div className="icon-box mt-5" data-aos="fade-up" data-aos-delay={400}>
                                    <i className="bx bx-shield" />
                                    <h4>Aumentar la confianza para promocionarte</h4>
                                    <p>Si tienes un web bien diseñada y bonita la gente tendrá más confianza en la marca y en el sitio web, mas del 85% de los usuarios juzgan una web solo por el diseño y no por el contenido.</p>
                                </div>
                            </div>
                            <div className="image col-lg-6 order-1 order-lg-2 " data-aos="zoom-in" data-aos-delay={100}>
                                <img src={FeaturesImg} alt="" className="img-fluid" />
                            </div>
                        </div>
                    </div>
                </section>{/* End Features Section */}
            </div>
        )
    }
}

export default Features
