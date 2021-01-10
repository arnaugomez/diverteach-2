import React from 'react';

import './MiddleHero.css';
import Section from './Section';

const MiddleHero:React.FC<{children: React.ReactNode}> = ({children}) => {
  return (
    <article className="middle-hero">
      <svg
        className="middle-hero__svg"
        viewBox="0 0 1400 180"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          className="middle-hero__svg__fill"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M60 37.073l-60 15V185h1440V52.073l-60 29c-2.19 1.021-4.45 2.082-6.8 3.178-61.95 28.984-177.57 83.078-293.2 89.822-120 7-240-36-360-79s-240-86-360-94C243.162-5.742 126.324 21.57 64.867 35.936c-1.663.39-3.286.768-4.867 1.137z"
        />
      </svg>
      <article className="middle-hero__container">
        <Section>{children}</Section>
      </article>
      <svg
        className="middle-hero__svg"
        viewBox="0 0 1400 200"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          className="middle-hero__svg__fill"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 0v138l60-29c2.187-1.021 4.455-2.081 6.799-3.178C128.75 76.839 244.375 22.745 360 16c120-7 240 36 360 79s240 86 360 94c116.84 6.816 233.68-20.497 295.13-34.863L1380 153l60-15V0H0z"
        />
      </svg>
    </article>
  );
};

export default MiddleHero;
