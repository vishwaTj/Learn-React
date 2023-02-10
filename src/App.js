import { useState } from 'react';
import './App.css';
import ClassComponent from './Components/ClassComponent';
import FirstComponent from './Components/FirstComponent';
import Functionalcomponent from './Components/Functionalcomponent';
import HomeWork from './Components/HomeWork';
import { ObjStateComp } from './Components/ObjStateComp';
import PropComp from './Components/PropComp';
import { createContext } from 'react';
import ContextCompA from './Components/ContextCompA';


const number=28;
const array=[" S1mple"," Shroud"," Doc"];
 
export const messageContext = createContext(null);
function App() {

  // Backdropping sending data back from component to app.js
  //  const [dataFromChild,setdata]=useState(null);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Hey, Started Learning React</h1>
        {/* <FirstComponent />
        <Functionalcomponent />
        <ClassComponent />
        <HomeWork /> */}
        {/* <ObjStateComp /> */}
        {/* <PropComp name={"allen"}
                  Number={number}
                  arr={array.join(',')}
                  setdata={setdata}>

         This is passed in App.js inside PropComp tags           
        </PropComp> */}
        {/* <h1>{dataFromChild}</h1> */}
        <messageContext.Provider value={"Sending data from APP.js as a context"}>
          <ContextCompA />
        </messageContext.Provider>

      </header>
    </div>
  );
}

export default App;
