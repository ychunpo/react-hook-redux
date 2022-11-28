import React from 'react';
import PrismRender from '../../../../../frame/components/prism/PrismRender';

const code = `

`.trim();

const ExCode2 = () => {
  return (
    <>
      <PrismRender code={code} />
    </>
  )
}

export default ExCode2;