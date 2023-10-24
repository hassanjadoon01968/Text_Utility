import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'


const Nav = (props) => {
  return (
    <div>
      <nav className={`navbar navbar-expand-lg bg-${props.mode}`}>
        <div className="container-fluid">
          <Link className={`navbar-brand text-${props.mode === 'light'?'dark':'light'}`} to="/">{props.logoTitle}</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className={`nav-link active text-${props.mode === 'light'?'dark':'light'}`} aria-current="page" to="/home">Home</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link active text-${props.mode === 'light'?'dark':'light'}`} to="/about">{props.about}</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link active text-${props.mode === 'light'?'dark':'light'}`} to="/contact">Contact Us</Link>
              </li>
              {/* <li className="nav-item dropdown">
                <a className={`nav-link active text-${props.mode === 'light'?'dark':'light'}`} href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Services
                </a>
                <ul className={`dropdown-menu bg-${props.mode}`}>
                  <li><a className={`dropdown-item bg-${props.mode} text-${props.mode === 'light'?'dark':'light'} `} href="/">Action</a></li>
                  <li><a className={`dropdown-item bg-${props.mode} text-${props.mode === 'light'?'dark':'light'} `} href="/">Another action</a></li>
                  <li><a className={`dropdown-item bg-${props.mode} text-${props.mode === 'light'?'dark':'light'} `} href="/">Something else here</a></li>
                </ul>
              </li> */}

            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>

            <div className={`form-check form-switch mx-2 text-${props.mode === 'light'?'dark':'light'}`}>
              <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.modeChange} />
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Mode</label>
            </div> 
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Nav

Nav.propTypes = {
  logoTitle: PropTypes.string,
  about: PropTypes.string
}

Nav.defaultProps = {
  logoTitle: 'Set Logo Title',
  about: 'About'
} 