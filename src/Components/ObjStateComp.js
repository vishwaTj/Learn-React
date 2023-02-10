import React, { useState } from 'react'

export const ObjStateComp = () => {
    const [Object,UpdateObject] = useState({
        name:'',
        email:''
    });
  return (
    <div>
        <label>Name: </label>
        <input 
          type='text'
          placeholder='name'
          onChange={(event) => UpdateObject({ name: event.target.value})}> 
          </input><br />
        <label>Email: </label>  
        <input
          type="text"
          placeholder='email'
          onChange={(event)=> UpdateObject({ email: event.target.value})}>

        </input>
        <div>
            <p>Name-{Object.name} &nbsp;
            Email-{Object.email}</p>
         </div>
         <div>
            <h5>You have to always ovewrite an object before updating,<br/>
                because it only updates one component and makes the other blank<br /> 
                if not overwriiten. Meaning it creates a fresh object every time <br />
                so it wont hold the values of other componetns which are not being updated<br />
                so it fils them blank<br />
                this does not does not happen with class Components
                </h5>
         </div>
         
         <div>
         <label>Name: </label>
        <input 
          type='text'
          placeholder='name'
          onChange={(event) => UpdateObject({ ...Object, name: event.target.value})}> 
          </input><br />
        <label>Email: </label>  
        <input
          type="text"
          placeholder='email'
          onChange={(event)=> UpdateObject((prevState)=> ({
            ...prevState ,
             email: event.target.value}))}>

        </input>
         </div>
         <div>
            <h5>Used spread operator to copy old component before updating a component</h5>
            <p>Name-{Object.name} &nbsp;
               Email-{Object.email}</p>
         </div>

    </div>
  )
}
