// src/App.js
import React, { useState } from 'react';
import Form from './Form';
import FormRef from './FormRef';
import FormState from './FormState';
import Card from './Card';

const App = () => {
  const [activeSection, setActiveSection] = useState('form');

  const renderFormSection = () => {
    switch (activeSection) {
      case 'form':
        return <Form />;
      case 'form-ref':
        return <FormRef />;
      case 'form-state':
        return <FormState />;
      default:
        return <Form />;
    }
  };

  return (
    <div>
      <nav>
        <ul>
          <li>
            <button onClick={() => setActiveSection('form')}>Form Layout</button>
          </li>
          <li>
            <button onClick={() => setActiveSection('form-ref')}>Form with useRef</button>
          </li>
          <li>
            <button onClick={() => setActiveSection('form-state')}>Form with useState</button>
          </li>
        </ul>
      </nav>
      <Card>
        {renderFormSection()}
      </Card>
    </div>
  );
};

export default App;
