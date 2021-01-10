import React from 'react';

import './MenuItem.css';

interface Props {
  icon: string,
  description: string
  onClick?: any,
}

const MenuItem:React.FC<Props> = ({icon, description, onClick}) => {
  return (
    <div className="menu-item">
      <button onClick={onClick} className="menu-item__icon-container">
        <h2 className="menu-item__icon">{icon}</h2>
      </button>
      <p className="menu-item__description">{description}</p>
    </div>
  );
};
export default MenuItem;
