/* eslint-disable react/no-danger */
import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'


const style = {
  wrap: {
    overflowX: 'hidden',
  },
  wrapb: {
    margin: '0',
  },
}
const Html = ({ styles, assets, state, content }) => {
  const helmet = Helmet.renderStatic()
  const htmlAttrs = helmet.htmlAttributes.toComponent()
  const bodyAttrs = helmet.bodyAttributes.toComponent()

  return (
    <html lang="en" style={style.wrap}{...htmlAttrs}>
      <head>
        {helmet.title.toComponent()}
        {helmet.meta.toComponent()}
        {helmet.link.toComponent()}
        {assets.css.map(path => <link rel="stylesheet" type="text/css" key={path} href={path} />)}
        {styles}
      </head>
      <body style={style.wrapb} {...bodyAttrs}>
        <main id="app" dangerouslySetInnerHTML={{ __html: content }} />
        <script dangerouslySetInnerHTML={{ __html: state }} />
        {assets.js.map(path => <script key={path} src={path} />)}
      </body>
    </html>
  )
}

Html.propTypes = {
  styles: PropTypes.node.isRequired,
  assets: PropTypes.shape({
    css: PropTypes.array.isRequired,
    js: PropTypes.array.isRequired,
  }).isRequired,
  state: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
}

export default Html
