import React from 'react';
import './App.css';
import UseStateObject from './Components/UseState/UseState';
import Components from './Components/UseState/UseState';
import UseStateCounter from './Components/UseStateCounter';
import Mapping from './Components/Mapping/Mapping';
import State from './Components/State';
// import lifeCycle from './Components/lifeCycle';
import Fetch from './Components/Fetch';
import Form from './Components/Form'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <UseStateObject/> */}
        {/* <UseStateCounter/> */}
        {/* <Mapping/> */}
        <State/>
        <Fetch/>
        <Form/>
        
      </header>
    </div>
  );
}

export default App;
