import React from 'react'

import PropTypes from 'prop-types'

import './footer.css'

const Footer = (props) => {
  return (
    <div className="footer-footer">
      <div className="footer-heading">
        <span className="footer-text">{props.text1}</span>
        <a
          href={props.link_text}
          src="mailto:entropylabsindia@gmail.com"
          target="_blank"
          rel="noreferrer noopener"
          className="footer-link"
        >
          {props.mailLink}
        </a>
      </div>
      <span className="footer-text1">{props.text}</span>
    </div>
  )
}

Footer.defaultProps = {
  text2: 'entropylabsindia@gmail.com',
  text1: 'Send your feedback to',
  text: '© 2022 Entropy Labs. All Rights Reserved.',
  text3: 'Link',
  link_text: 'https://example.com',
  mailLink: 'entropylabsindia@gmail.com',
}

Footer.propTypes = {
  text2: PropTypes.string,
  text1: PropTypes.string,
  text: PropTypes.string,
  text3: PropTypes.string,
  link_text: PropTypes.string,
  mailLink: PropTypes.string,
}

export default Footer
