import React from 'react'
import Widget from './Widget';

const Whiteboard: React.FC<{index: number}> = ({index}) => {
  return <Widget index={index}>I am the whiteboard!</Widget>;
};

export default React.memo(Whiteboard);
