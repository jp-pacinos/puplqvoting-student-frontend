import React from 'react'
import ReactDOM from 'react-dom'
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

ReactDOM.render(<AppMain />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
