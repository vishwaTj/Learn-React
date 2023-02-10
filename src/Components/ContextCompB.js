import React, { useContext } from 'react'
import { messageContext } from '../App';


function ContextCompB() {
    const message = useContext(messageContext);
  return (
    <div>ContextCompB <br />
    
    {/* <messageContext.Consumer>
        {(value)=> <h4>{value}</h4>}

    </messageContext.Consumer> */}
     <h4>{message}</h4>
    </div>
  )
}

export default ContextCompB