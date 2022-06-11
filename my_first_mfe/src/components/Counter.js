import React from 'react';
import { useState } from 'react';

const Counter = () => {
  const [count, setCount]  = useState(0);

  return (
    <div>
        <p> Current count: {count} </p>
        <button onClick={() => setCount(count + 1)}>
            Increase count
        </button>
        <button onClick={() => setCount(count - 1)}>
            Decrease count
        </button>
    </div>
  )
}

export default Counter;