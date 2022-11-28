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
            <Link to="/" className="navbar-link1 link">
              {props.Link_11}
            </Link>
          </div>
        </div>
        <div className="navbar-quick-actions">
          <img
            id="open-mobile-menu"
            alt={props.pastedImage_alt}
            src={props.pastedImage_src}
            className="navbar-hamburger-menu"
          />
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
  Link_1: 'Entropy Labs',
  pastedImage_src:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/4a46e3f6-a2fb-4002-a0ce-bb246bd8698d/191f70d5-9a02-4b3a-a398-d21659aa57d0?org_if_sml=1195',
  pastedImage_alt: 'pastedImage',
  rootClassName: '',
  Link_11: 'Privacy Policy',
}

Navbar.propTypes = {
  Link_1: PropTypes.string,
  pastedImage_src: PropTypes.string,
  pastedImage_alt: PropTypes.string,
  rootClassName: PropTypes.string,
  Link_11: PropTypes.string,
}

export default Navbar
