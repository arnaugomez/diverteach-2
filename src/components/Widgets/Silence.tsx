import React from 'react'
import Widget from './Widget';

const Silence: React.FC<{index: number}> = ({index}) => {
  return <Widget index={index}>I am the silence!</Widget>;
};

export default React.memo(Silence);
