import './App.css';
import React, { useState } from 'react'

function App() {
  return (
    <div className="border">
      Dobozok - App
      <BoxComponent bgColor="green" boxWidth="120px" boxHeight="120px" counter={0} clicked="false"/>
      <BoxComponent bgColor="green" boxWidth="200px" boxHeight="300px" counter={2} clicked="false"/>
      <BoxComponent bgColor="green" boxWidth="300px" boxHeight="200px" counter={4} clicked="false"/>
    </div>
  );
}

function BoxComponent(props) {
    const [actualValue, newActualValue] = useState(props.counter);
  return(
    <div
    style={{
      width: props.boxWidth,
      height: props.boxHeight,
      backgroundColor: props.bgColor
    }}
    className="p-2 m-5 rounded text-center"
    onClick = {() => {
      
    }}>
    <h1>{actualValue}</h1>
    </div>
  );
}
export default App;
