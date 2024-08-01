// src/FormRef.js
import React, { useRef } from 'react';

const FormRef = () => {
  const fullNameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const passwordConfirmationRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      fullName: fullNameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
      passwordConfirmation: passwordConfirmationRef.current.value,
    });
  };

  return (
    <form id="info-form" onSubmit={handleSubmit}>
      <label htmlFor="full_name">Full Name:</label>
      <input type="text" id="full_name" ref={fullNameRef} />

      <label htmlFor="email">Email:</label>
      <input type="email" id="email" ref={emailRef} />

      <label htmlFor="password">Password:</label>
      <input type="password" id="password" ref={passwordRef} />

      <label htmlFor="password_confirmation">Confirm Password:</label>
      <input type="password" id="password_confirmation" ref={passwordConfirmationRef} />

      <button type="submit">Submit</button>
    </form>
  );
};

export default FormRef;
