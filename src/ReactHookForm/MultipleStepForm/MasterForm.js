import React, { useState } from 'react';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';

export default function MasterForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [currentStep, setCurrentStep] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Your registration detail: \n
        Username: ${username} \n
        Password: ${password} \n
        Email: ${email}
        `);
  }

  const handleNext = () => {
    let step = currentStep >= 2 ? 3 : currentStep + 1;
    console.log('Next: ', step)
    setCurrentStep(step);
  }

  const handlePrevious = () => {
    let step = currentStep <= 1 ? 1 : currentStep - 1;
    console.log('Previous: ', step)
    setCurrentStep(step);
  }

  const nextButton = () => {
    if (currentStep < 3) {
      return (<button type="button" onClick={handleNext}>
        Next
      </button>)
    } else {
      return null;
    }
  }

  const previousButton = () => {
    if (currentStep > 1) {
      return (<button type="button" onClick={handlePrevious}>
        Previous
      </button>)
    } else {
      return null;
    }
  }

  return (
    <>
      <h1>Form with multiple steps</h1>
      <p>Step {currentStep}</p>
      <form onSubmit={handleSubmit}>
        <Step1 currentStep={currentStep}
          username={username}
          setUsername={setUsername} />
        <Step2 currentStep={currentStep}
          password={password}
          setPassword={setPassword} />
        <Step3 currentStep={currentStep}
          email={email}
          setEmail={setEmail} />
        {previousButton()}
        {nextButton()}
        <button type="submit">Submit</button>
      </form>
    </>
  )
}
