import React from 'react'
import { Link } from 'react-router-dom'
import { Spacer, Button } from 'components/Core'

interface Props {}

const NotFound: React.FC<Props> = () => {
  return (
    <>
      <h2>404 Page not found</h2>
      <p>The page you are looking for are not found.</p>

      <Spacer level={1} />
      <Link to="/">
        <Button color="primary">Return Home</Button>
      </Link>
    </>
  )
}

export default NotFound
