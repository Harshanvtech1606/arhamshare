import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import menu from "../images/menu.jpg";
import "../css/Navbar.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Header() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <div>
        <div className={`header__bottom ${isSticky ? 'sticky-header' : ''}`}>
          <div className="container">
            <div className="header__bottom__inner">
              {/* Main Navigation */}
              <nav
                id="main-navigation"
                className="header__menu main-navigation d-none d-lg-flex"
              >
                <ul>
                  <li>
                    <Link to="/about">ABOUT</Link>
                  </li>
                  <li>
                    <a to="/">
                      SERVICES
                      <i class="fas fa-angle-down"></i>
                    </a>
                    <ul className="sub-menu">
                      <li>
                        <Link to="index.html">Equity & Derivatives</Link>
                      </li>
                      <li>
                        <Link to="index-2.html">IPO Trading</Link>
                      </li>
                      <li>
                        <Link to="index-with-content-slider.html">
                          Commodity Trading
                        </Link>
                      </li>
                      <li>
                        <Link to="index-3.html">Currency Trading</Link>
                      </li>

                      <li>
                        <Link to="index-with-single-banner.html">
                          Homepage Single Banner
                        </Link>
                      </li>
                      <li>
                        <Link to="index-boxed-layout.html">
                          Insurance Services
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a to="#">
                      Investor Charter
                      <i class="fas fa-angle-down"></i>
                    </a>
                    <ul class="sub-menu">
                      <li>
                        <Link to="about-us.html">Stock Broker</Link>
                      </li>
                      <li>
                        <Link to="about-us.html">
                          Stock Broker- Commodity
                        </Link>
                      </li>
                      <li>
                        <Link to="about-us.html">Depository</Link>
                      </li>
                      <li>
                        <Link to="about-us.html">Details of AP</Link>
                      </li>
                    </ul>
                  </li>
                  <li className="header__logo">
                    <Link to="index.html">
                      <img
                        src="assets/image/Arham_Logo_New.png"
                        alt="header logo"
                      />
                    </Link>
                  </li>
                  <li>
                    <a to="blog.html">
                      MARKET
                      <i class="fas fa-angle-down"></i>
                    </a>
                    <ul className="sub-menu">
                      <li>
                        <Link to="blog.html">EQUITY</Link>
                      </li>
                      <li>
                        <Link to="blog-with-right-sidebar.html">IPO</Link>
                      </li>
                      <li>
                        <Link to="blog-with-left-sidebar.html">
                          MUTUAL FUND
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                   <Link to="/contact">Contact</Link>
                  </li>
                  <li>
                    <button className="header-btn">
                      <span>Open An Account!</span>
                    </button>
                  </li>
                </ul>
              </nav>
              {/*// Main Navigation */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
