import React, { Component } from 'react';
import './About.css';
import '../../App.css';
import Icofont from 'react-icofont';

export class About extends Component {
    render() {
        return (
            <div>
                {/* ======= About Section ======= */}
                <section id="about" className="about">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 order-1 order-lg-2" data-aos="zoom-in" data-aos-delay={150}>
                                <img src="assets/img/about.jpg" className="img-fluid" alt="" />
                            </div>
                            <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content" data-aos="fade-right">
                                <h3>Diseño de páginas web profesionales</h3>
                                <p className="font-italic">
                                para empresas que deseen crear un sitio web sólido, práctico, funcional y que te ayude a potenciar su negocio en Internet.
                                </p>
                                <ul>
                                    <li><Icofont icon="icofont-check-circled"/> Diseño de páginas web.</li>
                                    <li><Icofont icon="icofont-check-circled"/>Posicionamiento web en Google (SEO)</li>
                                    <li><Icofont icon="icofont-check-circled"/> Marketing digital, Administración, Publicidad en Redes Sociales</li>
                                </ul>
                                <a href="#pricing" className="read-more" >Leer más <i className="icofont-long-arrow-right" /></a>
                            </div>
                        </div>
                    </div>
                </section>{/* End About Section */}

            </div>
        )
    }
}

export default About
