import React from 'react'
import { injectGlobal} from 'styled-components'

injectGlobal`
  .footer{
    background: -moz-linear-gradient(359deg, #FF913D 0%, #ff5e4b 100%); /* ff3.6+ */
    background: -webkit-gradient(linear, left top, right top, color-stop(0%, #FF913D), color-stop(100%, #ff5e4b)); /* safari4+,chrome */
    background: -webkit-linear-gradient(359deg, #FF913D 0%, #ff5e4b 100%); /* safari5.1+,chrome10+ */
    background: -o-linear-gradient(359deg, #FF913D 0%, #ff5e4b 100%); /* opera 11.10+ */
    background: -ms-linear-gradient(359deg, #FF913D 0%, #ff5e4b 100%); /* ie10+ */
    background: linear-gradient(91deg, #FF913D 0%, #ff5e4b 100%); /* w3c */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#FF913D', endColorstr='#ff5e4b',GradientType=1 ); /* ie6-9 */
    height:200px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    color:#fff;
  }
`
const Service = () => {
  return (
    <div className='footer'>
      <div className='numbers'>
        <p>+4616135487181641</p>
        <p>+4616135487181641</p>
        <p>+4616135487181641</p>
        <p>+4616135487181641</p>
        <p>+4616135487181641</p>
        <p>+4616135487181641</p>
        <p>+4616135487181641</p>
        <p>+4616135487181641</p>
      </div>
      <div className='map'>
        <a href='/'>kek</a>
        <a href='/'>kek</a>
        <a href='/'>kek</a>
        <a href='/'>kek</a>
        <a href='/'>kek</a>
        <a href='/'>kek</a>
        <a href='/'>kek</a>
        <a href='/'>kek</a>
      </div>
      <div className='access'>
        <p className='left'>@copyright</p>
        <p className='right'></p>
      </div>
    </div>
  )
}

Service.propTypes = {}

export default Service
