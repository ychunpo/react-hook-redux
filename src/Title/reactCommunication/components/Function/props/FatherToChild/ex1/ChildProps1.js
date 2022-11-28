import React from 'react';

function ChildProps1(props) {
  const { list } = props;
  return (
    <>
      <ul>
        {list.map((item) => {
          const { id, name } = item;
          return <li key={id}>{name}</li>;
        })}
      </ul>
    </>
  );
}

export default ChildProps1;
