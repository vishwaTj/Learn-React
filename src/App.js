import './App.css';
import ClassComponent from './Components/ClassComponent';
import FirstComponent from './Components/FirstComponent';
import Functionalcomponent from './Components/Functionalcomponent';
import HomeWork from './Components/HomeWork';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hey, Started Learning React</h1>
        <FirstComponent />
        <Functionalcomponent />
        <ClassComponent />
        <HomeWork />
      </header>
    </div>
  );
}

export default App;
