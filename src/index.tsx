import React from 'react'
import { render, hydrate } from 'react-dom'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { BrowserRouter as Router } from 'react-router-dom'

import { StoreProvider } from './store'
import ScrollToTop from './components/ScrollToTop'
import App from './App'

import * as serviceWorker from './serviceWorker'

const AppMain = () => (
  <React.StrictMode>
    <HelmetProvider>
      <Helmet
        titleTemplate="%s | Central Student Council - Voting App"
        defaultTitle="Central Student Council - Voting App"
      />

      <StoreProvider>
        <Router>
          <ScrollToTop />
          <App />
        </Router>
      </StoreProvider>
    </HelmetProvider>
  </React.StrictMode>
)

const rootElement = document.getElementById('root')

if (rootElement?.hasChildNodes()) {
  hydrate(<AppMain />, rootElement)
} else {
  render(<AppMain />, rootElement)
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
