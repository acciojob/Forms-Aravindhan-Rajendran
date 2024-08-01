import React from 'react';

const Form = () => {
  return (
    <div id="info-form">
      <h2>Form Layout</h2>
      <form>
        <label htmlFor="full_name">Full Name:</label>
        <input type="text" id="full_name" />
        <br />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" />
        <br />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" />
        <br />
        <label htmlFor="password_confirmation">Confirm Password:</label>
        <input type="password" id="password_confirmation" />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
