import React, { Suspense, lazy } from 'react'
import { Helmet } from 'react-helmet-async'

import Preloader from 'components/PagePreloader'

const NotFound = lazy(() => import('./NotFound'))

interface Props {
  //
}

const NotFoundWithPreloader: React.FC<Props> = (props) => {
  return (
    <>
      <Helmet>
        <meta name="prerender-status-code" content="404" />
        <title>404 Page not found</title>
      </Helmet>

      <Suspense fallback={<Preloader />}>
        <NotFound {...props} />
      </Suspense>
    </>
  )
}

export default NotFoundWithPreloader
