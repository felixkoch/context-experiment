import React, { useReducer } from "react";
import AppContext from "./AppContext";
import Todos from "./Todos";
import AddTodo from "./AddTodo";
import "./App.css";

const reducer = (oldState = {}, newState) => {
  console.log(oldState);
  return { ...oldState, ...newState };
};

const App = () => {
  const initialState = { todos: [] };
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <Todos />
      <AddTodo />
    </AppContext.Provider>
  );
};

export default App;
