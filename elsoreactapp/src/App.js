import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [clickCount, setClickCount] = useState(0);
  return (
    <div className='card w-25'>
      Num of clicks: {clickCount}
      <button
      className='btn btn-primary'
      onClick = {{} => {
        setClickCount((elozo) => elozo + 1);
      }}
      >

      </button>
    </div>
  );
}
function BoxComponent(props) {
  return(
    <div className='p-2 m-5 rounded'>
    </div>
  );
}

export default App;
