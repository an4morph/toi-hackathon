import React from 'react'
import { injectGlobal} from 'styled-components'

injectGlobal`
.header{
  background-color: #FF8C00;
  height:350px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
}
img{
  height:160px;
  width:700px;
}
.header-text{
  width: 700px;
}
.header img{
  height:100px;
  width:400px;
  font-family:open-sans
}
`
const Banner = () => {
  return (
    <div className='header'>
      <div className='header-text'>
        <img src="logo.svg" alt="" />
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,
           sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
           Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
           ut aliquip ex ea commodo consequat Duis aute irure dolor in reprehenderit
           in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
           Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
           officia deserunt mollit anim id est laborum.</p>
      </div>
    </div>
  )
}

Banner.propTypes = {}

export default Banner
