import React, { useState, useEffect, useRef } from 'react';
import Form from './Form';
import FormRef from './FormRef';
import FormState from './FormState';
import Card from './Card';

const App = () => {
  const [activeSection, setActiveSection] = useState('form');
  const formRef = useRef(null);

  useEffect(() => {
    const path = window.location.pathname.replace('/', '');
    if (path) {
      setActiveSection(path);
    }
  }, []);

  useEffect(() => {
    window.history.replaceState(null, '', `/${activeSection}`);
  }, [activeSection]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (formRef.current) {
      formRef.current.handleSubmit();
    }
  };

  const renderFormSection = () => {
    switch (activeSection) {
      case 'form':
        return <Form ref={formRef} />;
      case 'form-ref':
        return <FormRef ref={formRef} />;
      case 'form-state':
        return <FormState ref={formRef} />;
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
      <button type="submit" onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default App;
