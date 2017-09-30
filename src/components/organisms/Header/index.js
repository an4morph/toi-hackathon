import React from 'react'
// import {  Header } from 'components'

const style = {
  header: {
    backgroundColor: '#FF8C00',
    height:'400px',
    alignItems: 'center',
    display: 'flex'
  },
  text: {
    flex:'1 0 auto',
    textAlign: 'center'
  }
}

const Header = () => {
  return (
    <div style={style.header}>
      <div style={style.text}>
        <h1>toipoi</h1>
      </div>
    </div>
  )
}

Header.propTypes = {}

export default Header
