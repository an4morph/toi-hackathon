import React from 'react'
import { injectGlobal } from 'styled-components'
// import PropTypes from 'prop-types'

injectGlobal`

`

const RestarauntResult = ({ ...props }) => {
  return (
    <div>
      {
        props.data.map(item => <div>{item}</div>)
      }
    </div>
  )
}

RestarauntResult.propTypes = {}

export default RestarauntResult
