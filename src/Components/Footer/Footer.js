import React, { Component } from 'react';
import './Footer.css';
import Icofont from 'react-icofont';

export class Footer extends Component {
    render() {
        return (
            <div>
                {/* ======= Footer ======= */}
                <footer id="footer">
                    <div className="footer-top">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-3 col-md-6 footer-contact">
                                    <h3>Drowebsites</h3>
                                    <p>
                                        A108 Adam Street <br />
                                        New York, NY 535022<br />
                                        United States <br /><br />
                                        <strong>Phone:</strong> +1 5589 55488 55<br />
                                        <strong>Email:</strong> info@example.com<br />
                                    </p>
                                </div>
                                <div className="col-lg-2 col-md-6 footer-links">
                                    <h4>Enlaces útiles</h4>
                                    <ul>
                                        <li><Icofont icon="icofont-check-alt"/>  <a href="#home">Inicio</a></li>
                                        <li><Icofont icon="icofont-check-alt"/>  <a href="#about">Sobre Nosotros</a></li>
                                        <li><Icofont icon="icofont-check-alt"/>  <a href="#services">Servicios</a></li>
                                        <li><Icofont icon="icofont-check-alt"/>  <a href="#terms">Términos del servicio</a></li>
                                        <li><Icofont icon="icofont-check-alt"/>  <a href="#privacy">Privacidad y políticas</a></li>
                                    </ul>
                                </div>
                                <div className="col-lg-3 col-md-6 footer-links">
                                    <h4>Nuestros Servicios</h4>
                                    <ul>
                                        <li><Icofont icon="icofont-check-alt"/> <a href="#design">Diseño web</a></li>
                                        <li><Icofont icon="icofont-check-alt"/>  <a href="#web">Desarrollo Web</a></li>
                                        <li><Icofont icon="icofont-check-alt"/>  <a href="#product">Gestion de producto</a></li>
                                        <li><Icofont icon="icofont-check-alt"/>  <a href="#marketing">Marketing</a></li>
                                        <li><Icofont icon="icofont-check-alt"/>  <a href="#graphic">Diseño gráfico</a></li>
                                    </ul>
                                </div>
                                <div className="col-lg-4 col-md-6 footer-newsletter">
                                    <h4>Suscríbase a nuestro boletín</h4>
                                    <p>Entérese de novedades y noticias sobre nuestro trabajo</p>
                                    <form action method="post">
                                        <input type="email" name="email" /><input type="submit" defaultValue="Subscribe" />
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="copyright-wrap d-md-flex py-4">
                            <div className="mr-md-auto text-center text-md-left">
                                <div className="copyright">
                                    © Copyright <strong><span>Drowebsites</span></strong>. Todos los derechos reservados
        </div>
                                <div className="credits">
                                    Desarrollado por <a href="https://github.com/StyvenSoft">Styvensoft</a>
                                </div>
                            </div>
                            <div className="social-links text-center text-md-right pt-3 pt-md-0">
                                <a href="#twitter" className="twitter"><Icofont icon="icofont-twitter"/></a>
                                <a href="#facebook" className="facebook"><Icofont icon="icofont-facebook"/></a>
                                <a href="#instragram" className="instagram"><Icofont icon="icofont-instagram"/></a>
                            </div>
                        </div>
                    </div>
                </footer>{/* End Footer */}
            </div>
        )
    }
}

export default Footer
