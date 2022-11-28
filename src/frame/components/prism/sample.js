import React from 'react';
import PrismRender from '../../../../../components/Prism/PrismRender';

const code = `

`.trim();

const sample = () => {

  return (
    <>
      <PrismRender code={code} />
    </>
  )
}

export default sample;