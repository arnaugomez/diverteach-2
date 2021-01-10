import React from 'react';

import './Whiteboard.css';
import Widget from './Widget';


const Whiteboard = ({index}) => {
  

  return (
    <Widget className="whiteboard" fixedPosition index={index}>
      <iframe
        className="whiteboard__iframe"
        src="https://react-drawing-board-demo.dilidili.now.sh/"
        title="drawing board"
      ></iframe>
    </Widget>
  );
};

export default React.memo(Whiteboard);
