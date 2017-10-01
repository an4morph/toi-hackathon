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
    height:250px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    color:#fff;
  }
  .numbers{
    padding:10px;
    text-align:left;
  }
  .map{
    padding:10px;
    text-align:left;
  }
  .map a{
    display:block;
  }
  .access{
    padding-left:200px;
    padding-right:200px;
    background-color:#e1e1e1;
    color:black;
  }
`
const Service = () => {
  return (
      <div className='footer'>
        <div className='container'>
          <div className='row'>
          <div className='numbers col-lg-4'>
            <p>О Toimaster</p>
            <p>Сотрудничество</p>
          </div>
          <div className='map col-lg-4'>
            <a href='/'>Главная</a>
            <a href='/construct'>Конструктор</a>
          </div>
          <div className='numbers col-lg-4'>
            <p>Контакты</p>
            <p>0555872497</p>
          </div>
        </div>
      </div>
    </div>
  )
}

Service.propTypes = {}

export default Service

{/* <p>Keker man +4616135487181641</p>
<p>Keker girl+4616135487181641</p>
<p>Keker dev+4616135487181641</p>
<p>Keker lol kek+4616135487181641</p>
<p>Ketrin kek+4616135487181641</p>
<p>Loler kek+4616135487181641</p>
<p>Keker Keker+4616135487181641</p>


<a href='/'>kekkekekekke</a>
<a href='/'>kekkekekekkekekek</a>
<a href='/'>kekkekekekekke</a>
<a href='/'>kekkekekekekkekekek</a>
<a href='/'>kekekekekkekekk</a>
<a href='/'>kkekekkekekek</a>
<a href='/'>kekekekekkekekekkekek</a>

<p>Keker man +4616135487181641</p>
<p>Keker girl+4616135487181641</p>
<p>Keker dev+4616135487181641</p>
<p>Keker lol kek+4616135487181641</p>
<p>Ketrin kek+4616135487181641</p>
<p>Loler kek+4616135487181641</p>
<p>Keker Keker+4616135487181641</p> */}
