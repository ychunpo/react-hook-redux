import React from 'react'

export default function Step3(props) {
  const { currentStep, email, setEmail } = props;

  if (currentStep !== 3) {
    return null;
  }

  return (
    <div>
      <div>
        <label htmlFor='email'>Email: </label>
        <input
          id='email'
          name='email'
          type='text'
          placeholder='Enter email'
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
      </div>
    </div>
  )
}
