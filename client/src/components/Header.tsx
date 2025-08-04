import { FC, MouseEvent } from "react";
import logoImage from "../assets/logo.png";

const Header: FC = () => {
    const handleMobileNavToggle = (e: MouseEvent) => {
        document.querySelector('body')?.classList.toggle('mobile-nav-active');
        const target = e.target as HTMLElement;
        target.classList.toggle('active');
    }

    const handleDropdownToggle = (e: MouseEvent) => {
        e.preventDefault();
        const target = e.target as HTMLElement;
        target.classList.toggle('active');
        const dropdown = target.parentNode?.parentNode?.childNodes[1] as HTMLElement | undefined;
        dropdown?.classList.toggle('dropdown-active');
        e.stopPropagation();
    }

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
                        <li className="dropdown">
                            <a href="/team">
                                <span>About</span>
                                <i className="bi bi-chevron-down toggle-dropdown" onClick={handleDropdownToggle}></i>
                            </a>
                            <ul>
                                <li><a href="/team">Team</a></li>
                                <li><a href="/testimonials">Testimonials</a></li>
                            </ul>
                        </li>
                        <li className="dropdown">
                            <a href="/services/light-design">
                                <span>Services</span>
                                <i className="bi bi-chevron-down toggle-dropdown" onClick={handleDropdownToggle}></i>
                            </a>
                            <ul>
                                <li><a href="/services/light-design">Light Design</a></li>
                                <li><a href="/services/scenic-design">Scenic Design</a></li>
                                <li><a href="/services/labor">Labor</a></li>
                                <li><a href="/services/rentals">Rentals</a></li>
                                <li><a href="/services/sales">Sales</a></li>
                            </ul>
                        </li>
                        <li><a href="/portfolio">Portfolio</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                    <i className="mobile-nav-toggle d-xl-none bi bi-list" onClick={handleMobileNavToggle}></i>
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