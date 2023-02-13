import React, { useReducer } from 'react';

function UseReducerHooks() {
  const initialState = {
    count:0,
    count2:0
  }

  const reducer = (state=initialState, action)=>{
    console.log("action taken");
    switch(action.type){
      case "increment":
         return {...state, count: state.count + action.payload};

      case "increment2":
         return {...state, count2: state.count2 + action.payload};   
      
      case "decrement":
        return {...state, count: state.count - 1};

      default:
        return {...state};
    }

  }
  const [state,dispatch] = useReducer(reducer, initialState);
  return (
    <div>
        <h1>Learning useReducerHook</h1><br/>
      <h3>Count - {state?.count}</h3><br/>
      <h3>Count - {state?.count2}</h3>
      <div>
       <button
         className="btn btn-success me-3"
         onClick={()=>dispatch({type: "increment",payload: 10})}>Increment</button>
     
     <button
         className="btn btn-info me-3"
         onClick={()=>dispatch({type: "increment2",payload: 5})}>Increment2</button>
   

       <button
         className="btn btn-danger"
         onClick={()=>dispatch({type: "decrement"})}>Decrement</button>
                
      </div>
    </div>
  )
}

export default UseReducerHooks;