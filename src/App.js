import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const reducer = (oldState = {}, newState) => {
  return {...oldState, newState}
}

const createStore = (reducer) => {
  let state;
  
  const getState = () => state

  const dispatch = (action) => {
    state = reducer(state, action)
  }

  return {getState, dispatch}
}

const store = createStore();

const StoreContext =  React.createContext({});

class App extends Component {
  render() {
    return (
      <div className="App">
        <StoreContext.Provider value={store}>
          Hallo
        </StoreContext.Provider>
      </div>
    );
  }
}

export default App;
