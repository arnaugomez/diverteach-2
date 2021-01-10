import React from 'react'
import Widget from './Widget';

const Groups: React.FC<{index: number}> = ({index}) => {
  return <Widget index={index}>I am the groups!</Widget>;
};

export default React.memo(Groups);
