import React, { useState } from 'react';

const NavBar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleToggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg bg-primary mb-4">
      <div className="container">
        <button
          className="navbar-toggler"
          type="button"
          onClick={handleToggleNav}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`collapse navbar-collapse ${isNavOpen ? 'show' : ''}`}
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav ml-auto font-bold">
            <ul className="nav nav-tabs" role="tablist">
              <li className="nav-item" role="presentation">
                <a
                  className="nav-link"
                  data-bs-toggle="tab"
                  href="#About_me"
                  aria-selected="false"
                  role="tab"
                  tabIndex="-1"
                >
                  About me
                </a>
              </li>
              <li className="nav-item" role="presentation">
                <a
                  className="nav-link"
                  data-bs-toggle="tab"
                  href="#projects"
                  aria-selected="false"
                  role="tab"
                  tabIndex="-1"
                >
                  Projects
                </a>
              </li>
              <li className="nav-item" role="presentation">
                <a
                  className="nav-link"
                  data-bs-toggle="tab"
                  href="#contact_me"
                  aria-selected="false"
                  role="tab"
                  tabIndex="-1"
                >
                  Contact me
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* <div className="ml-auto">
          <a href="ruta-a-tu-cv.pdf" download="nombre-de-tu-cv.pdf">
            <button type="button" className="btn btn-warning">Download CV</button>
          </a>
        </div> */}
      </div>
    </nav>
  );
};

export default NavBar;
