import { useState } from 'react';

function Counter() {
    // count is the value, setCount is the function to change it
    const [count, setCount] = useState(0);

    return (
        <div style={{ textAlign: 'center', margin: '20px' }}>
            <p>Current Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
            <button onClick={() => setCount(0)}>Reset</button>
        </div>
    );
}

export default Counter;