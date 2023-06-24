
export const initialState = { todos: [], todo: {mytodo:'', id: '', done:false},  };

export const reducer = (state, action) => {
  switch (action.type) {
      case "SET": {
         return { ...state, todo: {...state.todo, mytodo:action.payload, id:action.id} }; 
    }
      

      case "SUBMIT": {
          return {
            todo: { ...state.todo, mytodo: "", id: "" },
            todos: [...state.todos, action.payload],
          };
    }
      case "DELETE": {
          return {...state,  todos: state.todos.filter((item)=>item.id!==action.id) };
    }
      case "DONE": {
          return {  ...state, todos:state.todos.map((item)=>item.id===action.id ? {...item, done:true} : item)};
    }
      

    default:
      break;
  }
};
