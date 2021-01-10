import React from 'react'

import './Section.css'

const Section:React.FC<{children: React.ReactNode}> = ({children}) => {
  return (
    <section className="section">
      {children}
    </section>
  )
}

export default Section
