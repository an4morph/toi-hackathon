// https://github.com/diegohaz/arc/wiki/Atomic-Design
import React from 'react'
import { Link } from 'react-router-dom'
import { PageTemplate, Footer, Banner, Service, SimpleSlider, Reviews } from 'components'
import { injectGlobal } from 'styled-components'

injectGlobal`
  .center button {
    background: -moz-linear-gradient(359deg, #FF913D 0%, #ff5e4b 100%); /* ff3.6+ */
    background: -webkit-gradient(linear, left top, right top, color-stop(0%, #FF913D), color-stop(100%, #ff5e4b)); /* safari4+,chrome */
    background: -webkit-linear-gradient(359deg, #FF913D 0%, #ff5e4b 100%); /* safari5.1+,chrome10+ */
    background: -o-linear-gradient(359deg, #FF913D 0%, #ff5e4b 100%); /* opera 11.10+ */
    background: -ms-linear-gradient(359deg, #FF913D 0%, #ff5e4b 100%); /* ie10+ */
    background: linear-gradient(91deg, #FF913D 0%, #ff5e4b 100%); /* w3c */
    border: none;
    color: #fff;
    font-size: 20px;
    margin-top: 30px;
    font-family: Verdana;
    padding: 20px;
  }
  .center button:focus {
    outline: none
  }
  .center button:hover {
    transform: scale(1.01);
    cursor: pointer;
  }
`

const HomePage = () => {
  return (
    <PageTemplate header={<Banner />} footer={<Footer />}>
      <div className="row">
        <div className="col-xs-12 col-lg-12 col-md-12">
          <SimpleSlider />
          <div className="center">
            <Link to={'/construct'}>
              <button>Начните собирать свой праздник</button>
            </Link>
          </div>
          <Service />
          <Reviews />
        </div>
      </div>
    </PageTemplate>
  )
}

HomePage.propTypes = {}

export default HomePage
