import React, { memo } from 'react'

const ChildComponent = () => {

      console.log('hello');

   
  return (
    <div>
        <h1>this is child component</h1>
      
    </div>
  )
}

export default memo(ChildComponent)
