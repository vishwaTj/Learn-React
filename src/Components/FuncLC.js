import React, { useEffect,useState } from 'react'

function FuncLC() {
    const [count,setCount] = useState(0);
    const onIncrement = () =>{
        setCount(count+1);
    }
  
   // state variables added in array call the function every time a state changes 
    useEffect(()=>{
        console.log('UseEffect called');
    },[count])

  return (
    <div>
      {console.log("render")}
      <h3>Count = {count}</h3>
      <div>
        <button onClick={onIncrement}>Inc</button> 
       </div>    
    </div>
  )
}

export default FuncLC;