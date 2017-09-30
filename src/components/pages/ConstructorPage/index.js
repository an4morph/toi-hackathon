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

const ConstructorPage = () => {
  return (
    <PageTemplate header={<Header />} footer={<Footer />}>
      <div className="row">
        <div className="col-xs-12">
          тут конструируем той
          <Tabs>
            <TabList>
              <Tab>Рестораны</Tab>
              <Tab>Ведущие</Tab>
              <Tab>Шоу программа</Tab>
              <Tab>Фото\видео</Tab>
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
        </div>
      </div>
    </PageTemplate>
  )
}

ConstructorPage.propTypes = {}

export default ConstructorPage
