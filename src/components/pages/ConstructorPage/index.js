import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import {
  PageTemplate,
  Header,
  Footer,
  Restaurants,
  ToastMasters,
  ShowProgram,
  PhotoVideo,
} from 'components'

const style = {
  tablist: {

  },
  tabs: {
    display: 'inline',
  },
  tabRestaurants: {
    display: 'inline-block',
    height: '45px',
    backgroundColor: '#fff678',
  },
}

const ConstructorPage = () => {
  return (
    <PageTemplate header={<Header />} footer={<Footer />}>
      <Tabs>
        <TabList className="row">
          <Tab style={style.tabRestaurants} className="col-xs-3">
            Рестораны
          </Tab>
          <Tab style={style.tabs} className="col-xs-3">
            Ведущие
          </Tab>
          <Tab style={style.tabs} className="col-xs-3">
            Шоу программа
          </Tab>
          <Tab style={style.tabs} className="col-xs-3">
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
