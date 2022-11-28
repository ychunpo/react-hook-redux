import React, { createContext } from "react";

const { Provider, Consumer } = createContext(null);

function Bar() {
  return (
    <Consumer>
      {color =>
        <div className='example-container'>
          {color}
        </div>}
    </Consumer>
  )
}

function Foo() {
  return <Bar />;
}

function WithoutUseContext() {
  return (
    <Provider value={"grey"}>
      <Foo />
    </Provider>
  );
}

export default WithoutUseContext;
