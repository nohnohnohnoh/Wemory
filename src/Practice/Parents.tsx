import React, { useState } from 'react'
import Props from './Props'

const Parents = () => {
  const [test, setTest] = useState(true)
  return (
    <div>
      <Props test={test} setTest={setTest} bgColor="teal" />
    </div>
  )
}

export default Parents
