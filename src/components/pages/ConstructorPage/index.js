import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import { injectGlobal } from 'styled-components'
import {
  PageTemplate,
  Header,
  Footer,
} from 'components'
import { Link } from 'react-router-dom'

import {
  Restaurants,
  ToastMasters,
  ShowProgram,
  PhotoVideo,
 } from 'containers'

injectGlobal`
  .tab {
    width:auto;
    height:auto;
    max-width:220px;
    min-width:100px;
    text-align:center;
    padding-top:40px;
  }
  .tab:hover {
    cursor: pointer;
  }
  .rows{
    padding:0;
    padding-bottom:100px;
    height:125px;
    display:flex;
  }
  .tab img{
    height:30px;
    padding:10px;
  }
  ul{
    padding: 0;
    margin: 0;
  }
  li {
    list-style: none;
  }
  .active-tab {
    border-bottom:4px solid #ff7a49;
    transition:all 0.6s;
  }
  .logo img{
    padding:7px;
    width:auto;
    height:100px;
  }
  .logo{
    text-align:center;
    background-color:#ff7a49;
    max-width:300px;
    min-width:300px;
    height:125px;
  }
`

class ConstructorPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = { select: 0 }
  }

  render() {
    // console.log(this.state, this.props.location.state)
    return (
      <PageTemplate footer={<Footer />}>
        <Tabs selectedTabClassName="active-tab" defaultIndex={this.props.location.state || 0}>
          <TabList className="rows">
            <div className="col-xs-3 logo">
              <Link to="/"><img src="toimaster_small.svg" alt="" /></Link>
            </div>
            <Tab className="col-xs-3 tab">
              <p>Рестораны</p>
              <img src="restaurants_icon.svg" alt="" />
            </Tab>
            <Tab className="col-xs-3 tab">
              <p>Ведущие</p>
              <img src="showmen_icon.svg" alt="" />
            </Tab>
            <Tab className="col-xs-3 tab">
              <p>Шоу-программа</p>
              <img src="shows_icon.svg" alt="" />
            </Tab>
            <Tab className="col-xs-3 tab">
              <p>Фото/Видеосьемка</p>
              <img src="videos_icon.svg" alt="" />
            </Tab>
            <Tab className="col-xs-3 tab">
              <p>Прочее</p>
              <img src="other_icon.svg" alt="" />
            </Tab>
          </TabList>


          <TabPanel>
            <Restaurants />
          </TabPanel>
          <TabPanel>
            <ToastMasters />
          </TabPanel>
          <TabPanel>
            <ShowProgram />
          </TabPanel>
          <TabPanel>
            <PhotoVideo />
          </TabPanel>
          <TabPanel>
            <div>Тут пока пусто</div>
          </TabPanel>
        </Tabs>
      </PageTemplate>
    )
  }
}

ConstructorPage.propTypes = {}

export default ConstructorPage
