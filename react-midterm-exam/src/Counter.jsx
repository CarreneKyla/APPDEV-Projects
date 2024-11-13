import React, { useState } from 'react';

export default function Counter() {
    const [count, setCount] = useState(0);

    const incrementByTwo = () => {
        setCount(count + 2);
    };

    const decrementByTwo = () => {
        setCount(count - 2);
    };

    return (
        <div>
            <p>Counter: {count}</p>
            <button onClick = {incrementByTwo}>Increment By 2</button>
            <button onClick = {decrementByTwo}>Decrement By 2</button>
        </div>
    );
}
