import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const initialState = {
  results: null
};

function saveToLocalStorage(state) {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("state", serializedState);
  } catch(e) {
    console.log(e);
  };
};

function loadfromLocalStorage() {
  try {
    const serializedState = localStorage.getItem("state");
    if (serializedState === null) {
      return initialState;
    };
    return JSON.parse(serializedState);
  } catch(e) {
    console.log(e);
    return initialState;
  };
};

function reducer(state = initialState, action) {
  switch(action.type) {
    case "SET":
      return {results: action.data};
    default:
      return loadfromLocalStorage();
  };
};

const store = createStore(reducer);
store.subscribe(() => saveToLocalStorage(store.getState()));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
