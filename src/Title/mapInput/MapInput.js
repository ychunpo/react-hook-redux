import React, { useState } from 'react'

const info = [
  {
    id: 1,
    name: "john",
    gender: "m",
  },
  {
    id: 2,
    name: "mary",
    gender: "f",
  },
]

const MapInput = () => {
  const [data, setData] = useState(info);

  const updateFieldChanged = (index) => (e) => {
    console.log('index:', index)
    console.log('e:', e)
    const newArr = data.map((item, i) => {
      if (index === i) {
        return { ...item, [e.target.name]: e.target.value };
      } else {
        return item;
      }
    });
    setData(newArr);
  };

  return (
    <>
      <ul>
        {
          data.map((datum, index) => {
            console.log('datum', datum)
            return (
              <li key={datum.name}>
                <input
                  type="text"
                  name="name"
                  value={datum.name}
                  onChange={updateFieldChanged(index)}
                />
              </li>
            )
          })
        }
      </ul>
    </>
  );
}

export default MapInput;
