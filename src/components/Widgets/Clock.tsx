import React, {useState} from 'react'
import Widget from './Widget';

const Clock:React.FC<{index: number}> = ({index}) => {

  return (
    <Widget index={index}>
      I am the clock!
    </Widget>
  )
}

export default React.memo(Clock)
