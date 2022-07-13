import React from 'react'
import ChildProps from './ParentToChildProps'

const Parent = () => {
  const state = { name: 'zach' }

  return (
    <div>
      <ChildProps name={state.name} />
    </div>

  )
}

export default Parent
