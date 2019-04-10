import React, { useContext } from "react";
import AppContext from "./AppContext";

const Todos = () => {
  const { state, dispatch } = useContext(AppContext);

  return (
    <React.Fragment>
      {state.todos.map((todo, idx) => (
        <div key={idx}>{todo}</div>
      ))}
    </React.Fragment>
  );
};

export default Todos