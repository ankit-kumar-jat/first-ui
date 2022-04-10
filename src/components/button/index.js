import React from 'react'
import PropTypes from 'prop-types';

function Button({ children, onClick }) {
  return (
    <button>Button</button>
  )
}

export default Button;

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.string,
  disabled: PropTypes.bool,
  style: PropTypes.object,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  shape: PropTypes.oneOf(['default', 'circle', 'round']),
  icon: PropTypes.string,
  loading: PropTypes.bool,
}