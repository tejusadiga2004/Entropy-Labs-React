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
  text: '© 2022 Entropy Labs. All Rights Reserved.',
  text1: 'Send your feedback to',
  text2: 'entropylabsindia@gmail.com',
}

Footer.propTypes = {
  text: PropTypes.string,
  text1: PropTypes.string,
  text2: PropTypes.string,
}

export default Footer
