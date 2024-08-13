import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Form from './Form'; // Adjust the import path as needed
import FormRef from './FormRef'; // Adjust the import path as needed
import FormState from './FormState'; // Adjust the import path as needed

const App = () => {
  return (
    <Router>
      <div>
        <Link to='/form' id='form-link'>section 1</Link><br/>
        <Link to='/form-ref' id='form-ref-link'>section 2</Link><br/>
        <Link to='/form-state' id='form-state-link'>section 3</Link><br/>
        <Routes>
          <Route path='/form' element={<Form />} />
          <Route path='/form-ref' element={<FormRef />} />
          <Route path='/form-state' element={<FormState />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
