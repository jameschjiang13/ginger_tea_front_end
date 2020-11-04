import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import firebase from 'firebase/app';
import 'firebase/firestore';



const firebaseConfig = {
  apiKey: "AIzaSyDLXLnOydfzUqRl9B2_q3KfWpI7ew3DjTI",
  authDomain: "jojo-s-online-coffee-shop.firebaseapp.com",
  databaseURL: "https://jojo-s-online-coffee-shop.firebaseio.com",
  projectId: "jojo-s-online-coffee-shop",
  storageBucket: "jojo-s-online-coffee-shop.appspot.com",
  messagingSenderId: "287163918894",
  appId: "1:287163918894:web:f9622d6fe6668a88604dbf",
  measurementId: "G-6VGM5QRQ3N"
}
firebase.initializeApp(firebaseConfig);

// const database = firebase.database();
// console.log(database)

let foodInitialState = {
  food: []
}


const foodReducer = (state = foodInitialState, action) => {
  switch(action.type) {
    case "SET_ALL_FOOD": 
      return {...state, food: action.payload}
    default: 
      return state
  }
}


let theStoreObj = createStore(
  foodReducer, 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )

  ReactDOM.render(
      <Provider store = {theStoreObj}>
        <BrowserRouter>
            <App />
        </BrowserRouter> 
      </Provider>,
    document.getElementById('root')
  );
