import React from 'react'


const TodosItems = ({dispatch, item}) => {
     const handleDelete = (id) => {
       dispatch({ type: "DELETE", id: id });
    };
     const handleDone = (id) => {
         dispatch({ type: "DONE", id: id });
         
    };
   
  return (
        <li onDoubleClick={ ()=>handleDone(item.id) }  className={item?.done ? 'done ': 'listItem' } >
       {item?.mytodo}
        
        <button
          style={{ marginLeft: "1rem" }}
          onClick={() => handleDelete(item.id)}
        >
          Delete
        </button>
     
    </li>
  );
}

export default TodosItems