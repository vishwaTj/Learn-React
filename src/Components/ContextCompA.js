import React from 'react';
import ContextCompB from './ContextCompB';

function ContextCompA() {
  return (
    <div>ContextCompA<br/>
     {<ContextCompB />}
     </div>
  )
}

export default ContextCompA