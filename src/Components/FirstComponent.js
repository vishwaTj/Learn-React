import React from "react";
// rendering variables in react

const variable = 10;

const array = [1,2,3,4,5];

const obj={
    name:"React",
    version:18.0
}

const FirstComponent = () =>{
   return <div>First component Rendered
    rendering bvariables <br />

    variable: {variable}<br />

    array: {array.join(',')}<br />

    {/* obj: {obj} //never render obj drectly it will give error */}

    obj: {obj.name}
    obj: {obj.version}

   </div>
}

export default FirstComponent;