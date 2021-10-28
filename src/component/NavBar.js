import React from 'react'
import { Fragment } from 'react/cjs/react.production.min'
import PropTypes from 'prop-types';
function NavBar(props) {
  return (
    <Fragment>

      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="/">Navbar</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">{props.title}</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">{props.about}</a>
              </li>
            </ul>
            {/* <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
            <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
              < input className="form-check-input" type="checkbox" onClick={props.toggleMode} id="flexSwitchCheckDefault" />
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable to Dark Mode</label>
            </div>

          </div>
        </div>
      </nav>
    </Fragment>

  );
}

export default NavBar

NavBar.prototype = {
  title: PropTypes.string.isRequired
}