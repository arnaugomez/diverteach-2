import React from 'react'

import './Tag.css'

const Tag:React.FC<{children: React.ReactNode, type: string}> = ({children, type}) => {
  return (
    <strong className={`tag tag--${type}`}>
      {children}
    </strong>
  )
}

export default Tag
