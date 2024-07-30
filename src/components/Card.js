import React from 'react';
import './Card.css'; // Assuming you have a Card.css for styling

function Card({ children }) {
    return (
        <div className="card">
            {children}
        </div>
    );
}

export default Card;
