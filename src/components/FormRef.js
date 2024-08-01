import React, { useRef } from 'react';

const FormRef = () => {
  const fullNameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const passwordConfirmationRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Full Name:', fullNameRef.current.value);
    console.log('Email:', emailRef.current.value);
    console.log('Password:', passwordRef.current.value);
    console.log('Password Confirmation:', passwordConfirmationRef.current.value);
  };

  return (
    <form id="info-form" onSubmit={handleSubmit}>
      <h2>Form with useRef</h2>
      <div>
        <label htmlFor="full_name_ref">Full Name:</label>
        <input type="text" id="full_name_ref" ref={fullNameRef} />
      </div>
      <div>
        <label htmlFor="email_ref">Email:</label>
        <input type="email" id="email_ref" ref={emailRef} />
      </div>
      <div>
        <label htmlFor="password_ref">Password:</label>
        <input type="password" id="password_ref" ref={passwordRef} />
      </div>
      <div>
        <label htmlFor="password_confirmation_ref">Confirm Password:</label>
        <input type="password" id="password_confirmation_ref" ref={passwordConfirmationRef} />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default FormRef;
