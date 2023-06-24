import React from 'react'
import Todos from './Todos';
import { v4 as uuidv4 } from "uuid";

const Form = ({ dispatch, state }) => {
  const { todo, todos } = state;
   const handleSubmit = (e) => {
     e.preventDefault();
     dispatch({ type: "SUBMIT", payload: todo });
  };
  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          autoFocus
          value={todo.mytodo}
          onChange={(e) =>
            dispatch({ type: "SET", payload: e.target.value, id: uuidv4() })
          }
        />
        <button type="submit" disabled={!todo.mytodo}>
          Add
        </button>
      </form>
      <Todos todos={todos} dispatch={dispatch} />
    </div>
  );
}

export default Form