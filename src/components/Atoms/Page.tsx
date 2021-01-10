import React from 'react'

import {motion} from 'framer-motion'

const Page:React.FC<{children: React.ReactNode, className?: string}> = ({children, className}) => {
  return (
    <motion.main
      initial={{x: -1000}}
      animate={{x: 0}}
      exit={{x: 1000}}
      className={className}
    >
      {children}
    </motion.main>
  )
}

export default Page
