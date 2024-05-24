// src/App.js
import React from 'react';
import './App.css';
import JobPostings from './components/JobPostings.js';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <JobPostings />
      </header>
    </div>
  );
}

export default App;
