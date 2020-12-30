import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Content, Container } from 'components/Core'
import Header from 'components/Header'
import 'normalize.css'
import './App.css'

import RouterViews from './Router'

const App = () => {
  return (
    <>
      <Helmet>
        <title>Vote Now</title>
      </Helmet>

      <Header />
      <Content>
        <Container>
          {/* pages goes here... */}
          <RouterViews />
        </Container>
      </Content>
    </>
  )
}

export default App
