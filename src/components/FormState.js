import React, { useState } from 'react';
import Card from './Card';

function FormState() {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ fullName, email, password, passwordConfirm });
    };

    return (
        <Card>
            <form id="info-form" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="full_name">Full Name:</label>
                    <input
                        type="text"
                        id="full_name"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="password_confirmation">Confirm Password:</label>
                    <input
                        type="password"
                        id="password_confirmation"
                        value={passwordConfirm}
                        onChange={(e) => setPasswordConfirm(e.target.value)}
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
        </Card>
    );
}

export default FormState;
