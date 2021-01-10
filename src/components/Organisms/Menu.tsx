import React from 'react';
import {motion} from 'framer-motion';

import './Menu.css';

const Menu: React.FC<{children: React.ReactNode}> = ({children}) => {
  return (
    <motion.nav
      initial={{y: 150, x: '-50%'}}
      animate={{y: 0, x: '-50%', transition: {delay: 1}}}
      className="menu"
    >
      {children}
    </motion.nav>
  );
};

export default Menu;
