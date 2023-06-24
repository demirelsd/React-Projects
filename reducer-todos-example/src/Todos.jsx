import React from "react";
import TodosItems from "./TodosItems";

const Todos = ({ todos, dispatch }) => {
  return (
    <div>
      <ul>
        {todos?.map((item) => (
          <TodosItems key={item?.id} dispatch={dispatch} item={item} />
        ))}
      </ul>
    </div>
  );
};

export default Todos;
