import React from 'react'
import { Link } from 'react-router-dom'

import DangerousHTML from 'dangerous-html/react'
import PropTypes from 'prop-types'

import './navbar.css'

const Navbar = (props) => {
  return (
    <nav className={`navbar-navbar ${props.rootClassName} `}>
      <div className="navbar-desktop">
        <div className="navbar-main">
          <div className="navbar-links">
            <Link to="/" className="navbar-link link">
              {props.Link_1}
            </Link>
            <Link to="/privacy-policy" className="navbar-link1 link">
              {props.Link_11}
            </Link>
          </div>
        </div>
      </div>
      <div className="">
        <DangerousHTML
          html={`<script>
/*
Mobile menu - Code Embed
*/

// Mobile menu
const mobileMenu = document.querySelector("#mobile-menu")

// Buttons
const closeButton = document.querySelector("#close-mobile-menu")
const openButton = document.querySelector("#open-mobile-menu")

// On openButton click, set the mobileMenu position left to -100vw
openButton.addEventListener("click", function() {
    mobileMenu.style.transform = "translateX(0%)"
})

// On closeButton click, set the mobileMenu position to 0vw
closeButton.addEventListener("click", function() {
    mobileMenu.style.transform = "translateX(100%)"
})
</script>`}
          className=""
        ></DangerousHTML>
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
