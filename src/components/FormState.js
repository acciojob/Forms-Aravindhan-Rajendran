// src/FormState.js
import React, { useState } from 'react';

const FormState = () => {
  const [formState, setFormState] = useState({
    fullName: '',
    email: '',
    password: '',
    passwordConfirmation: '',
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formState);
  };

  return (
    <form id="info-form" onSubmit={handleSubmit}>
      <label htmlFor="full_name">Full Name:</label>
      <input
        type="text"
        id="full_name"
        value={formState.fullName}
        onChange={handleChange}
      />

      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        value={formState.email}
        onChange={handleChange}
      />

      <label htmlFor="password">Password:</label>
      <input
        type="password"
        id="password"
        value={formState.password}
        onChange={handleChange}
      />

      <label htmlFor="password_confirmation">Confirm Password:</label>
      <input
        type="password"
        id="password_confirmation"
        value={formState.passwordConfirmation}
        onChange={handleChange}
      />

      <button type="submit">Submit</button>
    </form>
  );
};

export default FormState;
