import React from 'react';
import PrismRender from '../../../../../components/Prism/PrismRender';

const code = `
import React, { createContext, useContext } from "react";

const colorContext = createContext("gray");

function Bar() {
  const color = useContext(colorContext);
  return (
    <div className='example-container'>
      {color}
    </div>
  )
}

function Foo() {
  return <Bar />;
}

function WithUseContext() {
  return (
    <colorContext.Provider value={"red"}>
      <Foo />
    </colorContext.Provider>
  );
}

export default WithUseContext;
`.trim();

const sample = () => {

  return (
    <>
      <PrismRender code={code} />
    </>
  )
}

export default sample;