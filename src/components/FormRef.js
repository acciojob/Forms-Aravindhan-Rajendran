// FormRef.js
import React, { useRef } from 'react';

function FormRef() {
    const fullNameRef = useRef(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const passwordConfirmationRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Full Name:', fullNameRef.current.value);
        console.log('Email:', emailRef.current.value);
        console.log('Password:', passwordRef.current.value);
        console.log('Password Confirmation:', passwordConfirmationRef.current.value);
    };

    return (
        <div>
            <h1>Form with useRef</h1>
            <form id="info-form" onSubmit={handleSubmit}>
                <label htmlFor="full_name">Full Name:</label>
                <input type="text" id="full_name" name="full_name" ref={fullNameRef} />
                <br />
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" ref={emailRef} />
                <br />
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" ref={passwordRef} />
                <br />
                <label htmlFor="password_confirmation">Confirm Password:</label>
                <input type="password" id="password_confirmation" name="password_confirmation" ref={passwordConfirmationRef} />
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default FormRef;
