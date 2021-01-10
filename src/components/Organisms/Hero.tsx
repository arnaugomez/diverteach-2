import React from 'react'

import './Hero.css'

interface Props {
  children: React.ReactNode,
  columns?: boolean,
}

const Hero:React.FC<Props> = ({children, columns}) => {
  return (
    <section className={`hero-section ${columns&&'hero-section--columns'}`}>
      {children}
    </section>
  )
}

export default Hero
