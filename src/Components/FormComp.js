import React, { useState } from 'react'

function FormComp() {
  const [UserData,setUserData] = useState({
    firstName:"",
    LastName:"",
    password:""
  });

  const [checkData,setCheckData] = useState(true);

  // here you cannot give Key but you have to give [key] else it will think it is a string
 const ChangeHandler = (event,key)=>{
    setUserData({...UserData, [key] : event.target.value})
}
 
const onChangeHandler = (event)=>{
    setUserData({...UserData, [event.target.name] : event.target.value})
}

const checked = (event) =>{
   setCheckData(!checkData);
   console.log(checkData);
} 
  return (
    <div className='mt-4'>
      <form action="" className='d-flex flex-column align-items-center'>
        <input
         className='form-cntrol w-50 my-2'
         type="text"
         placeholder='firstname'
         onChange={(event)=>ChangeHandler(event,"firstName")}>
        </input>

        <input
         className='form-cntrol w-50 my-2'
         type="text"
         placeholder='Lastname'
         name="LastName"
         onChange={(event)=>onChangeHandler(event)}>
        </input>

        <input
         className='form-cntrol w-50 my-2'
         type="password"
         placeholder='Password'
         onChange={(event)=>setUserData({...UserData, password: event.target.value})}>
        </input>

        <input 
         type="checkbox"
         onChange={(event)=> checked(event)}></input>
        <label>{checkData}</label>
      </form>
    </div>
  )
}

export default FormComp;