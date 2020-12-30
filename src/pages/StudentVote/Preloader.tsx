import React from 'react'
import Skeleton from 'react-loading-skeleton'
import Spacer from 'components/Core/Spacer'

interface Props {}

const Preloader: React.FC<Props> = () => {
  return (
    <>
      <h1>
        <Skeleton height={70} />
      </h1>
      <Spacer level={3} />

      <h2>
        <Skeleton height={50} />
      </h2>
      <Spacer level={1} />
      <Skeleton height={315} width="50%" />
      <Skeleton height={315} width="50%" />
      <Spacer level={3} />

      <h2>
        <Skeleton height={50} />
      </h2>
      <Spacer level={1} />
      <Skeleton height={315} width="50%" />
      <Skeleton height={315} width="50%" />
      <Spacer level={3} />

      <h2>
        <Skeleton height={50} />
      </h2>
      <Spacer level={1} />
      <Skeleton height={315} width="50%" />
      <Skeleton height={315} width="50%" />
      <Spacer level={3} />
    </>
  )
}

export default Preloader
