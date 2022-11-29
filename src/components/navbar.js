import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './navbar.css'

const Navbar = (props) => {
  return (
    <nav className={`navbar-navbar ${props.rootClassName} `}>
      <div className="navbar-links">
        <Link to="/" className="navbar-link link">
          {props.Link_1}
        </Link>
        <Link to="/privacy-policy" className="navbar-link1 link">
          {props.Link_11}
        </Link>
      </div>
    </nav>
  )
}

Navbar.defaultProps = {
  Link_11: 'Privacy Policy',
  Link_1: 'Entropy Labs',
  rootClassName: '',
}

Navbar.propTypes = {
  Link_11: PropTypes.string,
  Link_1: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Navbar
