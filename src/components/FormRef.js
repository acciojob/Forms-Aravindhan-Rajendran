import React, { useRef } from 'react';
import Card from './Card';

function FormRef() {
    const fullNameRef = useRef(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const passwordConfirmRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        const fullName = fullNameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        const passwordConfirm = passwordConfirmRef.current.value;

        console.log({ fullName, email, password, passwordConfirm });
    };

    return (
        <Card>
            <form id="info-form" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="full_name">Full Name:</label>
                    <input type="text" id="full_name" ref={fullNameRef} />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" ref={emailRef} />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" ref={passwordRef} />
                </div>
                <div>
                    <label htmlFor="password_confirmation">Confirm Password:</label>
                    <input type="password" id="password_confirmation" ref={passwordConfirmRef} />
                </div>
                <button type="submit">Submit</button>
            </form>
        </Card>
    );
}

export default FormRef;
