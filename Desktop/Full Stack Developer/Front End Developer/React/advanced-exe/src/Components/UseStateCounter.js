import React, { useState } from 'react';

const UseStateCounter = () => {
    const [value, setValue] = useState(0);

    const reset = () => {
        setValue(0);
      };
    
  return (
      <div>
    <h2>Regular Counter</h2>
    <br/>
    <h1>{value}</h1>
    <br/>
    <button onClick={reset}>Reset</button>
    <button onClick={()=> setValue(value+1)}>Increase</button>
    <button onClick={()=> setValue(value-1)}>Decrease</button>

    </div>

  );
}

export default UseStateCounter;