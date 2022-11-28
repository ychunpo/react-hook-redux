import React from 'react'

export default function Step1(props) {
  const { currentStep, username, setUsername } = props;

  if (currentStep !== 1) {
    return null;
  }

  return (
    <div>
      <label htmlFor='username'>Username: </label>
      <input
        id='username'
        name='username'
        type='text'
        placeholder='Enter username'
        value={username}
        onChange={e => setUsername(e.target.value)}
      />
    </div>
  )
}
