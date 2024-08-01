import React from 'react';

const Form = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted');
  };

  return (
    <form id="info-form" onSubmit={handleSubmit}>
      <h2>Form Layout</h2>
      <div>
        <label htmlFor="full_name">Full Name:</label>
        <input type="text" id="full_name" />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" />
      </div>
      <div>
        <label htmlFor="password_confirmation">Confirm Password:</label>
        <input type="password" id="password_confirmation" />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
