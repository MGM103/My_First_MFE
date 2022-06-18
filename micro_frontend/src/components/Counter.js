import React from 'react';
import { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
        <h3> Count is: {count} </h3>
        <button onClick={() => setCount(count + 1)}> 
            Increase 
        </button>
        <button onClick={() => setCount(count - 1)}> 
            Decrease 
        </button>
    </div>
  )
}

export default Counter;