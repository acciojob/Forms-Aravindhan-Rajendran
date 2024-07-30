import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Form from './Form';
import FormRef from './FormRef';
import FormState from './FormState';

function App() {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/form">Form Layout</Link>
                        </li>
                        <li>
                            <Link to="/form-ref">Form with useRef</Link>
                        </li>
                        <li>
                            <Link to="/form-state">Form with useState</Link>
                        </li>
                    </ul>
                </nav>
                <Routes>
                    <Route path="/form" element={<Form />} />
                    <Route path="/form-ref" element={<FormRef />} />
                    <Route path="/form-state" element={<FormState />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
