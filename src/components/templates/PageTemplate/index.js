import React from 'react'
import PropTypes from 'prop-types'
import { Header, Footer } from 'components'

const PageTemplate = ({ header, children, footer, ...props }) => {
  return (
    <div {...props}>
      {header}
      {children}
      <Footer>{footer}</Footer>
    </div>
  )
}

PageTemplate.propTypes = {
  header: PropTypes.node,
  children: PropTypes.any.isRequired,
  footer: PropTypes.node,
}

export default PageTemplate
