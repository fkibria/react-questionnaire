import React from 'react';
import SurveyOne from './components/surveyTypes/surveyTypeOne';
import './App.css';

function App() {
  return (
    <div className="App">
      <main>
        <div id="surveyContainer">
          <SurveyOne/>
        </div>
      </main>
    </div>
  );
}

export default App;
