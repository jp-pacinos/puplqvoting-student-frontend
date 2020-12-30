import React from 'react'
import { RouteComponentProps } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

import useAppReset from './useAppReset'
import Home from './Home'

interface Props extends RouteComponentProps {
  //
}

const HomeMain: React.FC<Props> = () => {
  useAppReset()

  return (
    <>
      <Helmet>
        <title>Welcome</title>
      </Helmet>

      <Home />
    </>
  )
}

export default HomeMain
