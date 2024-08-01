import React, { useRef } from 'react';

const FormRef = () => {
  const fullNameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const passwordConfirmationRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission using refs
    console.log('Full Name:', fullNameRef.current.value);
    console.log('Email:', emailRef.current.value);
    console.log('Password:', passwordRef.current.value);
    console.log('Password Confirmation:', passwordConfirmationRef.current.value);
  };

  return (
    <div id="info-form">
      <h2>Form with useRef</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="full_name">Full Name:</label>
        <input type="text" id="full_name" ref={fullNameRef} />
        <br />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" ref={emailRef} />
        <br />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" ref={passwordRef} />
        <br />
        <label htmlFor="password_confirmation">Confirm Password:</label>
        <input type="password" id="password_confirmation" ref={passwordConfirmationRef} />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormRef;
