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
          </div>
        </div>
      </div>
      <span className="footer-text1">{props.text}</span>
    </div>
  )
}

Footer.defaultProps = {
  text1: 'Send your feedback to entropylabsindia@gmail.com',
  text: '© 2022 Entropy Labs. All Rights Reserved.',
}

Footer.propTypes = {
  text1: PropTypes.string,
  text: PropTypes.string,
}

export default Footer
