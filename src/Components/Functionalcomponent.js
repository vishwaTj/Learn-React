import React from 'react'
const increaseNumber = () =>{
    console.log("function called");
}


function Functionalcomponent() {
  return (
    <div>Functionalcomponent
        <button onClick={increaseNumber}>10</button>
    </div>
  )
}

export default Functionalcomponent;
