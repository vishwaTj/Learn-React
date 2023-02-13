import React, { useState,useMemo } from 'react'

const slowfunc = (n) =>{
    for(let i=0;i<10000000; i++){}
    return n*3;
  }

const UseMemoHook = ()=> {
  const [num,setNum] = useState(1);
  const [count,setCount] = useState(0);
 
  //this is a norma call in which all the state variables are called again
//   const multiplicationVal = slowfunc(num);


  // if you define state variable here then only one state
//    variable changesupon update not both saving time
  const multiplicationVal = useMemo(()=>{
    return slowfunc(num);
  },[num]) 
  return (
    <div>
     <div>
     <h2>UseMemoHook</h2>
     </div>
    
    <div>
        <h3>Count - {count}</h3>
        <h3>{num}*2 = {multiplicationVal}</h3>
    </div>

    <button className='btn btn-primary me-3' onClick={()=> setCount(count+1)}>Increment Count</button>
    <button className='btn btn-secondary' onClick={()=> setNum(num+1)}>Increment Num</button>

    </div>
  )
}

export default UseMemoHook;