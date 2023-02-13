import React, { useCallback, useEffect } from 'react';
import { useState } from 'react';

const set = new Set();

export const UseCallBackHook = () => {
  const [num,setNum] = useState(1);
  const [count,setCount] = useState(0);

  const onIncrementCount = () =>{
    setCount(count + 1);
  }

  const onIncrementNumber= useCallback(() => {
    setNum(num + 1);
  },[num]);

   //Set always takes unique values,
   //but when you console log set you can see everytime the function is getting added to it
   //it is because very time the reference of the function is changing
//    set.add(onIncrementNumber)
//    console.log(set);

  //useEffect gets called whenever the dependecy changes here the dependency is a func
  //all though there is no functionality change useEffect here gets called again and again
  // this is because the reference of the func is changing every time the state changes so
  useEffect(()=>{
    console.log('useEffect called');
  },[onIncrementNumber])

  return (
    <div><h2>UseCallBackHook</h2>
    
    <div>
        <h3>Count - {count}</h3>
        <h3>Number = {num}</h3>
    </div>

    <button className='btn btn-primary me-3' onClick={()=> onIncrementCount()}>Increment Count</button>
    <button className='btn btn-secondary' onClick={()=> onIncrementNumber()}>Increment Num</button>

    </div>
    
  )
}
