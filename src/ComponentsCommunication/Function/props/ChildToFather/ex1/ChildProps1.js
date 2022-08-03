import React from 'react'

function ChildProps1(props) {
  const { list, deleteList } = props;

  return (
    <ul>
      {list.map((name, index) => {
        return (
          <li key={index}>
            {name}
            <span
              style={{
                marginLeft: "30px",
                textDecoration: "underline",
                cursor: "pointer"
              }}
              onClick={() => {
                deleteList(index);
              }}
            >
              删除
            </span>
          </li>
        );
      })}
    </ul>
  );
}

export default ChildProps1
