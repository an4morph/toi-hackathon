import React from 'react'
import PropTypes from 'prop-types'
import { Header, Footer } from 'components'

const PageTemplate = ({ header, children, footer, ...props }) => {
  return (
    <div {...props}>
      <Header>{header}</Header>
      {children}
      <Footer>{footer}</Footer>
    </div>
  )
}

PageTemplate.propTypes = {
  header: PropTypes.node.isRequired,
  children: PropTypes.any.isRequired,
  footer: PropTypes.node.isRequired,
}

export default PageTemplate
