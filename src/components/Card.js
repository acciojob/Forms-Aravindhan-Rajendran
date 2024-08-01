// src/Card.js
import React from 'react';

const Card = ({ children }) => {
  return (
    <div style={{
      border: '1px solid #ddd',
      borderRadius: '8px',
      padding: '16px',
      maxWidth: '500px',
      margin: '20px auto',
      boxShadow: '0 0 10px rgba(0,0,0,0.1)'
    }}>
      {children}
    </div>
  );
};

export default Card;
