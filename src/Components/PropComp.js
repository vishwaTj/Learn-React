import React from 'react';
import PropTypes from 'prop-types';


function PropComp(props) {
  const{name,Number,arr,children, setdata} = props;
   return (
    <div>PropComp

     <div>
      {name} 
      <br/>
       {children}
      <br />
      {Number}  
      <br />
      {arr}
     </div>
     <br /> 
     <h4>Updating data from child</h4>  
     <div> 
        <h4>Using backdropping to set number in App.js from func component using props</h4>
         <button onClick={()=>{setdata("Data from Child " + Math.random() )}}>Update
         </button>
        </div>
    </div>
  )
}

PropComp.propTypes = {}

export default PropComp
