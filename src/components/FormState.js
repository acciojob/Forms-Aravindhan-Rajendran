import React, { useState } from 'react';

const FormState = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Full Name:', fullName);
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Password Confirmation:', passwordConfirmation);
  };

  return (
    <form id="info-form" onSubmit={handleSubmit}>
      <h2>Form with useState</h2>
      <div>
        <label htmlFor="full_name_state">Full Name:</label>
        <input
          type="text"
          id="full_name_state"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="email_state">Email:</label>
        <input
          type="email"
          id="email_state"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password_state">Password:</label>
        <input
          type="password"
          id="password_state"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password_confirmation_state">Confirm Password:</label>
        <input
          type="password"
          id="password_confirmation_state"
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default FormState;
