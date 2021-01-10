import React from 'react'
import Widget from './Widget';

const Groups: React.FC<{index: number}> = ({index}) => {
  return (
    <Widget index={index}>
      Aquesta eina estarà disponible en la propera versió de DiverTeach. <br />{' '}
      Hi estem treballant i tenim moltes ganes que la provis quan estigui
      a punt!
    </Widget>
  );
};

export default React.memo(Groups);
