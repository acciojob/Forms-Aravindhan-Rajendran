// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Form from './Form';
import FormRef from './FormRef';
import FormState from './FormState';
import Card from './Card'; // Assuming Card component is for styling

function App() {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/form" id="form-link">Form Layout</Link>
                        </li>
                        <li>
                            <Link to="/form-ref" id="form-ref-link">Form with useRef</Link>
                        </li>
                        <li>
                            <Link to="/form-state" id="form-state-link">Form with useState</Link>
                        </li>
                    </ul>
                </nav>
                <Routes>
                    <Route path="/form" element={<Card><Form /></Card>} />
                    <Route path="/form-ref" element={<Card><FormRef /></Card>} />
                    <Route path="/form-state" element={<Card><FormState /></Card>} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
