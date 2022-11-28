import React from 'react'

export default function Step2(props) {
  const { currentStep, password, setPassword } = props;

  if (currentStep !== 2) {
    return null;
  }

  return (
    <div>
      <div>
        <label htmlFor='password'>Password: </label>
        <input
          id='password'
          name='password'
          type='text'
          placeholder='Enter password'
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
      </div>
    </div>
  )
}
