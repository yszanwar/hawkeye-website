import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import * as firebase from 'firebase';


ReactDOM.render(<App />, document.getElementById('root'));

var config = {
    apiKey: "AIzaSyAffXVE7wv7os49tFIwgRDF5ISf8wzxEgE",
    authDomain: "hawkeye-website.firebaseapp.com",
    databaseURL: "https://hawkeye-website.firebaseio.com",
    projectId: "hawkeye-website",
    storageBucket: "hawkeye-website.appspot.com",
    messagingSenderId: "915403961740"
  };
  firebase.initializeApp(config);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

document.getElementById('text_button').addEventListener("click", function(){


    var email = document.getElementById('text_field').value;
    console.log(email);
  if(email.length && email.includes("@") && email.includes(".")){
  var newRef= firebase.database().ref('early_emails').push();
  var details={
    email: email,
    timestamp: Date()
  };
  newRef.set(details);
  
  document.getElementById('text_field').value='';
  alert("Thank you for subscribing! See you in your inbox soon.")
  }
  else{
    error_email();
  }
  
  function error_email(){
  alert("Please make sure you have entered correct email id.")
  }
  
  });