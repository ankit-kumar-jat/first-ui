import React from 'react'
import PropTypes from 'prop-types';

function Paper() {
  return (
    <div>Paper</div>
  )
}

export default Paper

Paper.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.string,
  disabled: PropTypes.bool,
}