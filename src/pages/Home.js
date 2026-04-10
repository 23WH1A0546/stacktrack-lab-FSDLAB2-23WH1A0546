import React from 'react';
import QuestionComponent from '../components/question/QuestionComponent';

// ✅ Define properly
const STUDENT_ID = '23WH1A0546';
const LAB_ID = 'FSD_LAB';

function Home() {
  return (
    <div>
      <h1>Stack Track Lab</h1>

      <p>Student ID: {STUDENT_ID}</p>
      <p>Lab ID: {LAB_ID}</p>

      {/* ✅ Your Question Component */}
      <QuestionComponent />
    </div>
  );
}

export default Home;