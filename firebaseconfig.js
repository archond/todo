import * as firebase from 'firebase';
import React, { Component } from 'react';
export default class fireConf extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyBAWnCo1rSFF8iiAOhpKyvG5mim3RC7iCI",
      authDomain: "tasker-2b086.firebaseapp.com",
      databaseURL: "https://tasker-2b086.firebaseio.com",
      projectId: "tasker-2b086",
      storageBucket: "tasker-2b086.appspot.com",
      messagingSenderId: "1043972591749"
    });
  const firebaseDbh = firebase.database();
  }
}