import React from 'react'

const style = {
  header: {
    backgroundColor: 'transparent',
    height:'300px',
    alignItems: 'center',
  },
  text: {
    flex:'1 0 auto',
    textAlign: 'center'
  },
  content: {
    margin: '0 auto',
    border: 'solid 1px #111',
    height: '300px',
    width: '1500px',
    display: '-ms-flexbox',
    display: '-webkit-flex',
    display: 'flex',
  },
  card: {
    border: 'solid 1px #111',
    maxHeight: '340px',
    width: '300px',
    margin: '8px',
    textAlign: 'center'
  }
}

const Slider = ({onClickNext, onClickPrev}) => {
  return (
    <div style={style.header}>
      <div style={style.text}>
        <h2>Популярное</h2>
      </div>
      <div style={style.content}>
        <div onClick={e => {
          e.preventDefault()
          onClickPrev()
        }}>{'<'}</div>
        <div style={style.card}>
          <p>Популярное</p>
        </div>
        <div style={style.card}>
          <p>Популярное</p>
        </div>
        <div style={style.card}>
          <p>Популярное</p>
        </div>
        <div style={style.card}>
          <p>Популярное</p>
        </div>
        <div style={style.card}>
          <p>Популярное</p>
        </div>
        <div onClick={e =>{
          e.preventDefault()
          onClickPrev()
        }}>{'>'}</div>
      </div>
    </div>
  )
}

Slider.propTypes = {}

export default Slider
