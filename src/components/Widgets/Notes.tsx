import React from 'react'
import Widget from './Widget';

const Notes: React.FC<{index: number}> = ({index}) => {
  return <Widget index={index}>I am the notes!</Widget>;
};

export default React.memo(Notes);
