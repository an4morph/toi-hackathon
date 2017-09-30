import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import { injectGlobal } from 'styled-components'
import {
  PageTemplate,
  Header,
  Footer,
} from 'components'

import {
  Restaurants,
  ToastMasters,
  ShowProgram,
  PhotoVideo
 } from 'containers'

injectGlobal`
  .tab {
    padding: 20px;
    height: 45px;
  }
  .tab:hover {
    cursor: pointer;
  }
  ul{
    padding: 0;
    margin: 0;
  }
  li {
    list-style: none;
  }
  .active-tab {
    background-color: #ff5e4b;
  }
`

const ConstructorPage = () => {
  return (
    <PageTemplate header={<Header />} footer={<Footer />}>
      <Tabs selectedTabClassName="active-tab">
        <TabList className="row">
          <Tab className="col-xs-3 tab">
            Рестораны
          </Tab>
          <Tab className="col-xs-3 tab">
            Ведущие
          </Tab>
          <Tab className="col-xs-3 tab">
            Шоу программа
          </Tab>
          <Tab className="col-xs-3 tab">
            Фото Видео
          </Tab>
        </TabList>

        <TabPanel>
          <Restaurants />
        </TabPanel>
        <TabPanel>
          <ToastMasters toastmasters={[{ name: 'lafdfdla' }, { name: 'fdsfdfdf' }]} />
        </TabPanel>
        <TabPanel>
          <ShowProgram showProgramms={[{ name: 'fdsfdf' }, { name: '2121' }]} />
        </TabPanel>
        <TabPanel>
          <PhotoVideo photoVideos={[{ name: '45345' }, { name: 'fdsfbbbbbb' }]} />
        </TabPanel>
      </Tabs>
    </PageTemplate>
  )
}

ConstructorPage.propTypes = {}

export default ConstructorPage
