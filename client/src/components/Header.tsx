import React from "react";
import logoImage from "../assets/logo.png";

const Header: React.FC = () => {
    const navLinks = document.querySelectorAll('.navmenu a');

    navLinks.forEach(link => {
        const currentpage = window.location.pathname.split('/').pop();
        if (link.getAttribute('href') === currentpage) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    })
    
    return (
        <header id="header" className="header d-flex align-items-center sticky-top">
            <div className="container position-relative d-flex align-items-center">

                <a href="/" className="logo d-flex align-items-center me-auto">
                    <img src={logoImage} style={{ backgroundColor: "white", borderRadius: "50%" }} alt="" />
                    <h1 className="sitename">Stage Corps</h1>
                </a>

                <nav id="navmenu" className="navmenu">
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li className="dropdown"><a href="/about"><span>About</span> <i
                            className="bi bi-chevron-down toggle-dropdown"></i></a>
                            <ul>
                                <li><a href="/team">Team</a></li>
                                <li><a href="/testimonials">Testimonials</a></li>
                            </ul>
                        </li>
                        <li className="dropdown"><a href="/services"><span>Services</span> <i
                            className="bi bi-chevron-down toggle-dropdown"></i></a>
                            <ul>
                                <li><a href="/light-design">Light Design</a></li>
                                <li><a href="/scenic-design">Scenic Design</a></li>
                                <li><a href="/labor">Labor</a></li>
                                <li><a href="/rentals">Rentals</a></li>
                                <li><a href="/sales">Sales</a></li>
                            </ul>
                        </li>
                        <li><a href="/portfolio">Portfolio</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                    <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
                </nav>

                <div className="header-social-links">
                    <a href="https://www.facebook.com/StageCorps" className="facebook"><i className="bi bi-facebook"></i></a>
                    <a href="https://www.instagram.com/stagecorps/" className="instagram"><i className="bi bi-instagram"></i></a>
                    <a href="https://www.linkedin.com/company/stage-corps-llc/" className="linkedin"><i className="bi bi-linkedin"></i></a>
                    <a href="tel:2145753750" className="phone"><i className="bi bi-telephone"></i></a>
                </div>

            </div>
        </header>
    )
};

export default Header;