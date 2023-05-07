import React, { useState } from 'react';
import './App.css';

function App() {
  const [mobile, setMobile] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleMobileChange = (event) => {
    setMobile(event.target.value);
  };

  const handleGenerateOTP = async () => {
    try {
      const response = await fetch('https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ mobile: parseInt(mobile) }),
      });

      if (!response.ok) {
        const { error } = await response.json();
        setErrorMessage(error);
        return;
      }

      setErrorMessage('');
      setMobile('');
    } catch (error) {
      console.error(error);
      setErrorMessage('An error occurred while generating OTP.');
    }
  };

  return (
    <div className="App">
      <h1>Generate OTP</h1>
      <p>Enter your 10-digit mobile number:</p>
      <input type="tel" value={mobile} onChange={handleMobileChange} pattern="[0-9]{10}" required />
      <button onClick={handleGenerateOTP}>Generate OTP</button>
      {errorMessage && <p className="error">{errorMessage}</p>}
    </div>
  );
}

export default App;
