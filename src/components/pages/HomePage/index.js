// https://github.com/diegohaz/arc/wiki/Atomic-Design
import React from 'react'
import { Link } from 'react-router-dom'
import { PageTemplate, Footer, Banner, Service, SimpleSlider} from 'components'

const HomePage = () => {
  return (
    <PageTemplate header={<Banner />} footer={<Footer />}>
      <div className="row">
        <div className="col-xs-12">
          <SimpleSlider />
          <div className="center">
            Начните собирать свой праздник
          </div>
          <Link to={'/construct'}>
            <button>go to construct</button>
          </Link>
          <Service />
        </div>
      </div>
    </PageTemplate>
  )
}

HomePage.propTypes = {}

export default HomePage
