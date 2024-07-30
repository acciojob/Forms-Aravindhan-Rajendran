// Form.js
import React from 'react';

function Form() {
    return (
        <div>
            <h1>Form Layout</h1>
            <form id="info-form">
                <label htmlFor="full_name">Full Name:</label>
                <input type="text" id="full_name" name="full_name" />
                <br />
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" />
                <br />
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" />
                <br />
                <label htmlFor="password_confirmation">Confirm Password:</label>
                <input type="password" id="password_confirmation" name="password_confirmation" />
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Form;
