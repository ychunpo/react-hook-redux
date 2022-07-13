import React from 'react';

// const Greeting = ({ name }) => {
//   console.log('Greeting component render');
//   return <h1>Hello, {name}</h1>;
// };

const Greeting = React.memo(({ name }) => {
  console.log('Greeting component render');
  return <h1>Hello, {name}</h1>;
});

export default Greeting;