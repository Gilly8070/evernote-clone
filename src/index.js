import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const firebase = require('firebase/app').default;
require('firebase/firestore');

  const firebaseConfig = {
  apiKey: "AIzaSyBLAYYD60xtZUOjDgWFZRo6vFQhlfyvarM",
  authDomain: "evernote-clone-88334.firebaseapp.com",
  databaseURL: "https://evernote-clone-88334-default-rtdb.firebaseio.com",
  projectId: "evernote-clone-88334",
  storageBucket: "evernote-clone-88334.appspot.com",
  messagingSenderId: "138242618492",
  appId: "1:138242618492:web:b4fec5194db8bc398c05f9",
  measurementId: "G-Z56SWVSEPY"
  };
  
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
}
// const firebaseApp = firebase.initializeApp(firebaseConfig);
// const db = firebaseApp.firestore();


ReactDOM.render(
    <App />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
