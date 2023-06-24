import { useReducer, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Header from "./Header";
import Form from "./Form";
import { reducer, initialState } from "./reducer";
import "./App.css"

function App() {

  const [state, dispatch] = useReducer(reducer, initialState); 
  
  return (
    <div>
      <Header />
      <Form        
        dispatch={ dispatch }
        state={state}
      />
      
    </div>
  );
}
export default App;
