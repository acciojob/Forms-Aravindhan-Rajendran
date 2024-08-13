import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

// Your component code
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
