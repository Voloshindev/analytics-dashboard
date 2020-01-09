import React from 'react'
import PropTypes from 'prop-types'

const Monitor = ({ data = { title: '', value: '' } }) => (
  <div>
    <h3>{data.value}</h3>
    <h2>{data.title}</h2>
  </div>
)

Monitor.propTypes = {
  data: PropTypes.exact({
    title: PropTypes.string,
    value: PropTypes.string,
  }),
}

export default Monitor
