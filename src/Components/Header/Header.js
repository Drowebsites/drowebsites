import React, { Component } from 'react';
import './Header.css';
import $ from 'jquery';

export class Header extends Component {

    componentDidMount() {
        // Mobile Navigation
        if ($('.nav-menu').length) {
            var $mobile_nav = $('.nav-menu').clone().prop({
                class: 'mobile-nav d-lg-none'
            });
            $('body').append($mobile_nav);
            $('body').prepend('<button type="button" class="mobile-nav-toggle d-lg-none"><i class="icofont-navigation-menu"></i></button>');
            $('body').append('<div class="mobile-nav-overly"></div>');

            $(document).on('click', '.mobile-nav-toggle, .mobile-nav a', function (e) {
                $('body').toggleClass('mobile-nav-active');
                $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
                $('.mobile-nav-overly').toggle();
            });
        }
    }

    render() {
        return (
            <div>
                {/* ======= Header ======= */}
                <header id="header" className="fixed-top">
                    <div className="container-fluid">
                        <div className="row justify-content-center">
                            <div className="col-xl-9 d-flex align-items-center">
                                <h1 className="logo mr-auto"><a href="index.html">Drowebs</a></h1>
                                {/* Uncomment below if you prefer to use an image logo */}
                                {/* <a href="index.html" class="logo mr-auto"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>*/}
                                <nav className="nav-menu d-none d-lg-block">
                                    <ul>
                                        <li className="active"><a href="index.html">Inicio</a></li>
                                        <li><a href="#about">Sobre Nosotros</a></li>
                                        <li><a href="#services">Servicios</a></li>
                                        <li><a href="#portfolio">Portafolio</a></li>
                                        <li><a href="#pricing">Precios</a></li>
                                        <li><a href="#contact">Contacto</a></li>
                                    </ul>
                                </nav>{/* .nav-menu */}
                                <a href="#about" className="get-started-btn scrollto text-decoration-none">Empezar</a>
                            </div>
                        </div>
                    </div>
                </header>{/* End Header */}

            </div>
        )
    }
}

export default Header
