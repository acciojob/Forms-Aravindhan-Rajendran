import React, { useState, useEffect } from 'react';
import Form from './Form';
import FormRef from './FormRef';
import FormState from './FormState';
import Card from './Card';

const App = () => {
  const [activeSection, setActiveSection] = useState('form');

  useEffect(() => {
    const path = window.location.pathname.replace('/', '');
    if (path) {
      setActiveSection(path);
    }
  }, []);

  useEffect(() => {
    window.history.replaceState(null, '', `/${activeSection}`);
  }, [activeSection]);

const renderFormSection = () => {
  switch (activeSection) {
    case 'form':
      return <Form />;
    case 'form-ref':
      return <FormRef />;
    case 'form-state':
      return <FormState />;
    default:
      return null; // return null when activeSection doesn't match any form section
  }
};


  return (
    <div>
      <nav>
        <ul>
          <li>
            <button onClick={() => setActiveSection('form')} id="form-link">Form Layout</button>
          </li>
          <li>
            <button onClick={() => setActiveSection('form-ref')} id="form-ref-link">Form with useRef</button>
          </li>
          <li>
            <button onClick={() => setActiveSection('form-state')} id="form-state-link">Form with useState</button>
          </li>
        </ul>
      </nav>
      <Card key={activeSection}>
        {renderFormSection()}
      </Card>
    </div>
  );
};

export default App;
