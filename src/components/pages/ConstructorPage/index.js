import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import { injectGlobal } from 'styled-components'
import {
  PageTemplate,
  Header,
  Footer,
  Restaurants,
  ToastMasters,
  ShowProgram,
  PhotoVideo,
} from 'components'

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
          <ToastMasters />
        </TabPanel>
        <TabPanel>
          <ShowProgram />
        </TabPanel>
        <TabPanel>
          <PhotoVideo />
        </TabPanel>
      </Tabs>
    </PageTemplate>
  )
}

ConstructorPage.propTypes = {}

export default ConstructorPage
