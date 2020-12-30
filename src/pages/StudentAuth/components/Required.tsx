import React from 'react'

const style = { color: 'red' }

interface Props {
  //
}

const Required: React.FC<Props> = () => {
  return <span style={style}>*</span>
}

export default Required
