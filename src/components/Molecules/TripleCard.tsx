import React from 'react'

import './TripleCard.css'

interface Props {
  children: React.ReactNode
}

const TripleCard:React.FC<Props> = ({children}) => {
  return (
    <section className="triple-card__container">
      {children}
    </section>
  );
}

export default TripleCard
