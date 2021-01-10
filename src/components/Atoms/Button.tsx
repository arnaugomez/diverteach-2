import React from 'react';
import {Link} from 'react-router-dom'

import './Button.css';

interface Props {
  children: any,
  link?: string,
  type?: string,
  href?: string,
  onClick?: any,
}

const Button: React.FC<Props> = ({children, link, type, href, onClick}) => {
  if (link) return (
    <Link to={link}>
      <button
        className={`button ${type && `button--${type}`}`}
        onClick={onClick}
      >
        {children}
      </button>
    </Link>
  );
  if (href)
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
      >
        <button
          className={`button ${type && `button--${type}`}`}
          onClick={onClick}
        >
          {children}
        </button>
      </a>
    );
  else
    return (
      <button
        className={`button ${type && `button--${type}`}`}
        onClick={onClick}
      >
        {children}
      </button>
    );
};

export default Button;
