import React, { Component } from 'react';
import './Pricing.css';

export default class Pricing extends Component {
    render() {
        return (
            <div>
                <section id="pricing" className="pricing section-bg">
                    <div className="container" data-aos="fade-up">
                        <div className="section-title">
                            <h2>Tipos de planes</h2>
                            <p>Paga exclusivamente por aquello que necesitas ahora. Nuestros planes te facilitarán evolucionar cuando lo necesites.</p>
                        </div>
                        <div className="row">
                            <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay={100}>
                                <div className="box">
                                    <h3>Básico</h3>
                                    <h4><span>Anual / Mensual</span></h4>
                                    <ul>
                                        <li>Hosting y dominio</li>
                                        <li>Diseño web personalizado</li>
                                        <li>Compatible con dispositivos</li>
                                        <li className="na">Posicionamiento en buscadores</li>
                                        <li className="na">Informes de analítica web</li>
                                        <li className="na">botones redes sociales o chat</li>
                                        <li className="na">Soporte prioritario</li>
                                    </ul>
                                    <div className="btn-wrap">
                                        <a href="mailto:drowebsites@gmail.com" className="btn-buy">Cotizar</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 mt-4 mt-md-0" data-aos="fade-up" data-aos-delay={200}>
                                <div className="box featured">
                                    <h3>Estandar</h3>
                                    <h4><span>Anual / Mensual</span></h4>
                                    <ul>
                                        <li>Hosting y dominio</li>
                                        <li>Diseño web personalizado</li>
                                        <li>Compatible con dispositivos</li>
                                        <li>Posicionamiento en buscadores</li>
                                        <li className="na">Informes de analítica web</li>
                                        <li className="na">botones redes sociales o chat</li>
                                        <li className="na">Soporte prioritario</li>
                                    </ul>
                                    <div className="btn-wrap">
                                        <a href="mailto:drowebsites@gmail.com" className="btn-buy">Cotizar</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 mt-4 mt-lg-0" data-aos="fade-up" data-aos-delay={300}>
                                <div className="box">
                                    <h3>Profesional</h3>
                                    <h4><span>Anual / Mensual</span></h4>
                                    <ul>
                                        <li>Hosting y dominio</li>
                                        <li>Diseño web personalizado</li>
                                        <li>Compatible con dispositivos</li>
                                        <li>Posicionamiento en buscadores</li>
                                        <li>Informes de analítica web</li>
                                        <li className="na">botones redes sociales o chat</li>
                                        <li className="na">Soporte prioritario</li>
                                    </ul>
                                    <div className="btn-wrap">
                                        <a href="mailto:drowebsites@gmail.com" className="btn-buy">Cotizar</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 mt-4 mt-lg-0" data-aos="fade-up" data-aos-delay={400}>
                                <div className="box">
                                    <span className="advanced">Avanzado</span>
                                    <h3>Premium</h3>
                                    <h4><span>Anual / Mensual</span></h4>
                                    <ul>
                                        <li>Hosting y dominio</li>
                                        <li>Diseño web personalizado</li>
                                        <li>Compatible con dispositivos</li>
                                        <li>Posicionamiento en buscadores</li>
                                        <li>Informes de analítica web</li>
                                        <li>botones redes sociales o chat</li>
                                        <li>Soporte prioritario</li>
                                    </ul>
                                    <div className="btn-wrap">
                                        <a href="mailto:drowebsites@gmail.com" className="btn-buy">Cotizar</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        )
    }
}
