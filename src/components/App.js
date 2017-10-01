import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Helmet from 'react-helmet'
import { injectGlobal } from 'styled-components'
import 'flexboxgrid/dist/flexboxgrid.min.css'
import { HomePage, ConstructorPage, RestaurantCard, ToastMasterCard } from 'components'

injectGlobal`
  html,body{
    overflow-x:hidden;
    margin:0;
    font-family: 'PT Serif', sans-serif;
  }
`

const App = () => {
  return (
    <div>
      <Helmet titleTemplate="ARc - %s">
        <title>Atomic React</title>
        <meta name="description" content="React starter kit based on Atomic Design with React Router v4, Webpack, Redux, Server Side Rendering and more." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:site_name" content="ARc" />
        <meta property="og:image" content="https://arc.js.org/thumbnail.png" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <link rel="icon" href="https://arc.js.org/icon.png" />
        <link href="https://fonts.googleapis.com/css?family=PT+Serif:400i&amp;subset=cyrillic" rel="stylesheet" type="text/css" />
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
      </Helmet>
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/construct" component={ConstructorPage} exact />
        <Route path="/resPage" component={RestaurantCard} exact />
        <Route path="/toastPage" component={ToastMasterCard} exact />
      </Switch>
    </div>
  )
}

export default App
