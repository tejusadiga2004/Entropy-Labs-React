import React from 'react'

import PropTypes from 'prop-types'

import './footer.css'

const Footer = (props) => {
  return (
    <div className="footer-footer">
      <div className="footer-content">
        <div className="footer-information">
          <div className="footer-heading">
            <span className="footer-text">{props.text1}</span>
            <span className="footer-text1">{props.text2}</span>
          </div>
        </div>
      </div>
      <span className="footer-text2">{props.text}</span>
    </div>
  )
}

Footer.defaultProps = {
  text2: 'entropylabsindia@gmail.com',
  text1: 'Send your feedback to',
  text: '© 2022 Entropy Labs. All Rights Reserved.',
}

Footer.propTypes = {
  text2: PropTypes.string,
  text1: PropTypes.string,
  text: PropTypes.string,
}

export default Footer
