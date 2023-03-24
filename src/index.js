import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import * as Survey from 'survey-react';
import App from './App';
import reportWebVitals from './reportWebVitals';
import json from './components/surveys/questionsOne';

const root = ReactDOM.createRoot(document.getElementById('root'));
Survey.StylesManager.applyTheme("defaultV2");


function sendDataToServer(survey) {
  //send Ajax request to your web server
  alert("The results are: " + JSON.stringify(survey.data));
}

root.render(
 <Survey.Survey json={json} onComplete={ sendDataToServer } />, document.getElementById("surveyContainer")>
 <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
