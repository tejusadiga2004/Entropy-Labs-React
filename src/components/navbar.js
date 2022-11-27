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
      <div id="mobile-menu" className="navbar-mobile">
        <div className="navbar-top">
          <img
            alt={props.image_alt}
            src={props.image_src}
            className="navbar-image"
          />
          <svg
            id="close-mobile-menu"
            viewBox="0 0 1024 1024"
            className="navbar-icon"
          >
            <path
              d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"
              className=""
            ></path>
          </svg>
        </div>
        <div className="navbar-links1">
          <Link to="/" className="navbar-navlink">
            {props.text1}
          </Link>
          <Link to="/" className="navbar-navlink1">
            {props.text11}
          </Link>
          <Link to="/" className="navbar-navlink2">
            {props.text12}
          </Link>
          <Link to="/" className="navbar-navlink3">
            {props.text13}
          </Link>
          <div className="navbar-buttons">
            <Link to="/" className="navbar-navlink4">
              <div className="navbar-btn">
                <span className="navbar-text">{props.text131}</span>
              </div>
            </Link>
            <Link to="/" className="navbar-navlink5">
              <div className="navbar-btn1">
                <span className="navbar-text1">{props.text1311}</span>
              </div>
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
  text1: 'Features',
  text12: 'Prices',
  Link_1: 'Entropy Labs',
  text131: 'Log in',
  image_alt: 'image',
  pastedImage_src:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/4a46e3f6-a2fb-4002-a0ce-bb246bd8698d/191f70d5-9a02-4b3a-a398-d21659aa57d0?org_if_sml=1195',
  text1311: 'Sign up',
  text13: 'Contact',
  pastedImage_alt: 'pastedImage',
  image_src: 'https://play.teleporthq.io/static/svg/placeholders/no-image.svg',
  rootClassName: '',
  text11: 'How it works',
}

Navbar.propTypes = {
  text1: PropTypes.string,
  text12: PropTypes.string,
  Link_1: PropTypes.string,
  text131: PropTypes.string,
  image_alt: PropTypes.string,
  pastedImage_src: PropTypes.string,
  text1311: PropTypes.string,
  text13: PropTypes.string,
  pastedImage_alt: PropTypes.string,
  image_src: PropTypes.string,
  rootClassName: PropTypes.string,
  text11: PropTypes.string,
}

export default Navbar
