// Card.js
import React from 'react';
import '../styles/Card.css'; // Make sure this file exists and has styling

function Card({ children }) {
    return (
        <div className="card">
            {children}
        </div>
    );
}

export default Card;
