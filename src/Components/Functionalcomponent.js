import React,{useState} from 'react'

function Functionalcomponent() {
    const [number,setNumber] = useState(0);

    const [name,setName] = useState("Aman");
    // let num = 0;
    
    const increaseNumber = (num) =>{
        console.log("function called");
        num=30;
    }

    const IncreaseValue=(num) =>{
        console.log(`The initial state was : ${number}`);
        setNumber((prevState)=>{
            console.log(prevState);
            return prevState + num;
        });
        console.log(`state has been changed`)
    } 

    const DecreaseValue=(num) =>{
        console.log(`The initial state was : ${number}`);
        setNumber(number - num);
        console.log(`state has been changed`)
    } 

    return (
    <div>Functionalcomponent
        <button onClick={increaseNumber(30)}>10</button><br />
        whenever you pass a paramenter the function in onlcick gets<br/>
        rendered directly and does not work on click so pass it as<br/>
        arrow in such case<br />

        <button onClick={()=>IncreaseValue(2)}>Inc</button>
        <button disabled={number<=0}  onClick={()=>DecreaseValue(1)}>Dec</button> 
        <h5>{number}</h5> <br />

        <h4>{name}</h4>
        <button onClick={()=>{
            setName("Ricky Monty")
        }}>Change State</button>


    </div>
  )
}

export default Functionalcomponent;
