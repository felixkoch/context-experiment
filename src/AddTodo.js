import React, { useContext, useState } from "react";
import AppContext from "./AppContext";

const AddTodo = () => {
  const { state, dispatch } = useContext(AppContext);
  const [todo, setTodo] = useState();

  const handleChange = e => setTodo(e.target.value);
  const handleClick = () => {
    dispatch({ todos: [...state.todos, todo] });
  };

  return (
    <div>
      <input type="text" onChange={handleChange} />
      <button onClick={handleClick}>Add</button>
    </div>
  );
};

export default AddTodo;
