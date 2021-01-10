import React from 'react';
import {motion} from 'framer-motion';
import {connect} from 'react-redux';

import {
  removeWidget,
  updateWidgetPosition,
} from '../../redux/actions/widgetList';
import './Widget.css';

interface Props {
  index: number;
  className?: string;
  positionX?: number;
  positionY?: number;
  children: React.ReactNode;
  removeWidget?: any;
  updateWidgetPosition?: any;
}

const Widget: React.FC<Props> = ({
  index,
  className,
  positionX,
  positionY,
  children,
  removeWidget,
  updateWidgetPosition,
}) => {
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;

  if (windowWidth > 800) {
    return (
      <motion.article
        drag
        initial={{
          x: positionX,
          y: positionY,
        }}
        dragConstraints={{
          top: 50,
          bottom: windowHeight - 200,
          left: 100,
          right: windowWidth - 200,
        }}
        onDragEnd={(event, info) => {
          updateWidgetPosition(index, info.point.x, info.point.y);
        }}
        dragMomentum={false}
        className={'widget ' + className}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="widget__move-icon widget__icon"
          width="44"
          height="44"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <polyline points="8 9 12 5 16 9" />
          <polyline points="16 15 12 19 8 15" />
        </svg>
        <svg
          onClick={() => removeWidget(index)}
          xmlns="http://www.w3.org/2000/svg"
          className="widget__close-icon widget__icon"
          width="44"
          height="44"
          viewBox="0 -5 24 34"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>

        {children}
      </motion.article>
    );
  } else
    return (
      <article className={'widget ' + className}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="widget__move-icon widget__icon"
          width="44"
          height="44"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <polyline points="8 9 12 5 16 9" />
          <polyline points="16 15 12 19 8 15" />
        </svg>
        <svg
          onClick={() => removeWidget(index)}
          xmlns="http://www.w3.org/2000/svg"
          className="widget__close-icon widget__icon"
          width="44"
          height="44"
          viewBox="0 -5 24 34"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
        {children}
      </article>
    );
};

const mapStateToProps = (state: any, ownProps: Props) => ({
  positionX: state.widgetList[ownProps.index].positionX,
  positionY: state.widgetList[ownProps.index].positionY,
});

export default connect(mapStateToProps, {removeWidget, updateWidgetPosition})(
  Widget
);
