import React, { useState } from 'react';

function HomeWork() {
  const [number,setNumber] = useState(4);

  const multiply = (multiplier)=>{
     setNumber(number * multiplier);
  }

  const divide = (divisor)=>{
    setNumber((prevState)=>{
      return prevState / divisor ; 
    })
  }
  return (
    <div>
        <h3>Home Work</h3>
        <button onClick={()=>{multiply(2)}}> multiply</button>
        <button disabled={number===1} onClick={()=>(divide(2))}>divide</button>
        <h4>{number}</h4>
    </div>
  )
}

export default HomeWork