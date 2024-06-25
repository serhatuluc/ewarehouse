// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import '../css/style.css';
import { Link, useLocation } from "react-router-dom"; // Use this if you are using React Router

function Header() {
  const location = useLocation();

  return (
    <div className="site-navbar py-2">
      <div className="search-wrap">
        <div className="container">
          <a href="#" className="search-close js-search-close">
            <span className="icon-close2"></span>
          </a>
          <form action="#" method="post">
            <input
              type="text"
              className="form-control"
              placeholder="Search keyword and hit enter..."
            />
          </form>
        </div>
      </div>

      <div className="container">
        <div className="d-flex align-items-center justify-content-between">
          <div className="logo">
            <div className="site-logo">
              <Link to="/" className="js-logo-clone">
                <strong className="text-primary">Pharma</strong>tive
              </Link>
            </div>
          </div>
          <div className="main-nav d-none d-lg-block">
            <nav
              className="site-navigation text-right text-md-center"
              role="navigation"
            >
              <ul className="site-menu js-clone-nav d-none d-lg-block">
                <li className={location.pathname === "/" ? "active" : ""}>
                  <Link to="/">Ana Sayfa</Link>
                </li>
                <li className={location.pathname === "/store" ? "active" : ""}>
                  <Link to="/store">İlaçlar</Link>
                </li>
                {/* <li className="has-children">
                  <a href="#">Products</a>
                  <ul className="dropdown">
                    <li><a href="#">Supplements</a></li>
                    <li className="has-children">
                      <a href="#">Vitamins</a>
                      <ul className="dropdown">
                        <li><a href="#">Supplements</a></li>
                        <li><a href="#">Vitamins</a></li>
                        <li><a href="#">Diet &amp; Nutrition</a></li>
                        <li><a href="#">Tea &amp; Coffee</a></li>
                      </ul>
                    </li>
                    <li><a href="#">Diet &amp; Nutrition</a></li>
                    <li><a href="#">Tea &amp; Coffee</a></li>
                  </ul>
                </li> */}
                <li>
                  <Link to="/about">Hakkımızda</Link>
                </li>
                <li>
                  <Link to="/contact">İletişim</Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="icons">
            <a href="#" className="icons-btn d-inline-block js-search-open">
              <span className="icon-search"></span>
            </a>
            <Link to="/cart" className="icons-btn d-inline-block bag">
              <span className="icon-shopping-bag"></span>
              <span className="number">2</span>
            </Link>
            <a
              href="#"
              className="site-menu-toggle js-menu-toggle ml-3 d-inline-block d-lg-none"
            >
              <span className="icon-menu"></span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
