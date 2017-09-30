// https://github.com/diegohaz/arc/wiki/Atomic-Design
import React from 'react'
import { Link } from 'react-router-dom'
import { PageTemplate, Footer, Banner} from 'components'

const HomePage = () => {
  return (
    <PageTemplate header={<Banner />} footer={<Footer />}>
      <div className="row">
        <div className="col-xs-12">
          <div className="center">
            Начните собирать свой праздник
          </div>
          <Link to={'/construct'}>
            <button>go to construct</button>
          </Link>
        </div>
      </div>
    </PageTemplate>
  )
}

HomePage.propTypes = {}

export default HomePage
