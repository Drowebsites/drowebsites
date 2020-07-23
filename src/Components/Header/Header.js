import React, { Component } from 'react';
import './Header.css';

export class Header extends Component {
    render() {
        return (
            <div>
                {/* ======= Header ======= */}
                <header id="header" className="fixed-top ">
                    <div className="container-fluid">
                        <div className="row justify-content-center">
                            <div className="col-xl-9 d-flex align-items-center">
                                <h1 className="logo mr-auto"><a href="index.html">Drowebsites</a></h1>
                                {/* Uncomment below if you prefer to use an image logo */}
                                {/* <a href="index.html" class="logo mr-auto"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>*/}
                                <nav className="nav-menu d-none d-lg-block">
                                    <ul>
                                        <li className="active"><a href="index.html">Inicio</a></li>
                                        <li><a href="#about">Sobre Nosotros</a></li>
                                        <li><a href="#services">Servicios</a></li>
                                        <li><a href="#portfolio">Portafolio</a></li>
                                        <li><a href="#team">Equipo</a></li>
                                        <li><a href="#contact">Contacto</a></li>
                                    </ul>
                                </nav>{/* .nav-menu */}
                                <a href="#about" className="get-started-btn scrollto">Empezar</a>
                            </div>
                        </div>
                    </div>
                </header>{/* End Header */}

            </div>
        )
    }
}

export default Header
