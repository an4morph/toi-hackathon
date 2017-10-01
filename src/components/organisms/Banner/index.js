import React from 'react'
import { injectGlobal} from 'styled-components'

injectGlobal`
.header{
  background: -moz-linear-gradient(359deg, #FF913D 0%, #ff5e4b 100%); /* ff3.6+ */
  background: -webkit-gradient(linear, left top, right top, color-stop(0%, #FF913D), color-stop(100%, #ff5e4b)); /* safari4+,chrome */
  background: -webkit-linear-gradient(359deg, #FF913D 0%, #ff5e4b 100%); /* safari5.1+,chrome10+ */
  background: -o-linear-gradient(359deg, #FF913D 0%, #ff5e4b 100%); /* opera 11.10+ */
  background: -ms-linear-gradient(359deg, #FF913D 0%, #ff5e4b 100%); /* ie10+ */
  background: linear-gradient(91deg, #FF913D 0%, #ff5e4b 100%); /* w3c */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#FF913D', endColorstr='#ff5e4b',GradientType=1 ); /* ie6-9 */
  height:350px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  color:#fff;
}
img{
  height:160px;
  width:700px;
}
.header-text{
  width: 700px;
}
.header-text p{
  padding-top:20px;
  font-size:19px;
}
.header img{
  height:100px;
  width:600px;
  font-family:open-sans
}
`
const Banner = () => {
  return (
    <div className='header container-fluid'>
      <div className='header-text center'>
        <img src="toimaster_raw.svg" alt="" />
        <p>Устрой свой идеальный праздник!</p>
      </div>
    </div>
  )
}

Banner.propTypes = {}

export default Banner
