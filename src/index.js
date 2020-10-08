import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

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
