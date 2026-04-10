import React from 'react';
import QuestionComponent from '../components/question/QuestionComponent';

// ✅ Define properly
const STUDENT_ID = '23WH1A0546';
const LAB_ID = 'FSD_LAB';

function Home() {
  return (
    <div>
      <h1 style={{ color: 'blue' }}>Stack Track Lab</h1>

      {/* ✅ New change */}
      <h3>Welcome to Task Management System</h3>

      <p><b>Student ID:</b> {STUDENT_ID}</p>
      <p><b>Lab ID:</b> {LAB_ID}</p>

      {/* ✅ Your Question Component */}
      <QuestionComponent />
    </div>
  );
}

export default Home;