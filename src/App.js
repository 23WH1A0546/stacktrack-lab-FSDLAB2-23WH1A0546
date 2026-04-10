import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import QuestionPage from './pages/QuestionPage';

function App() {
  return (
    <Router>
      <Routes>
        {/* ✅ Home Page */}
        <Route path="/" element={<Home />} />

        {/* ✅ Question Page */}
        <Route path="/question" element={<QuestionPage />} />

        {/* ✅ Tasks Page (for redirect after delete) */}
        <Route path="/tasks" element={<div>Tasks Page</div>} />
      </Routes>
    </Router>
  );
}

export default App;