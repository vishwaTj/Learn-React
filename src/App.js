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
import FuncLC from './Components/FuncLC';
import ApiComp from './Components/ApiComp';
import FormComp from './Components/FormComp';
import { Form } from 'react-bootstrap';
import ThemeToggle from './Components/ThemeToggle';
import UseReducerHooks from './Advanced Hooks/UseReducerHooks';
import UseMemoHook from './Advanced Hooks/UseMemoHook';
import { UseCallBackHook } from './Advanced Hooks/UseCallBackHook';

const number=28;
const array=[" S1mple"," Shroud"," Doc"];
 
export const messageContext = createContext(null);
function App() {

  const [mount,setMount] = useState(true);
  
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
        {/* <messageContext.Provider value={"Sending data from APP.js as a context"}>
          <ContextCompA />
        </messageContext.Provider> */}

        {/* <button onClick={()=> setMount(!mount)}>Mount/Unmount</button>
        {mount && <FuncLC />} */}

        {/* <ApiComp /> */}
        {/* <FormComp /> */}
        {/* <ThemeToggle /> */}
        {/* <UseReducerHooks/> */}
        {/* <UseMemoHook/> */}
        <UseCallBackHook/>
      </header>
    </div>
  );
}

export default App;
