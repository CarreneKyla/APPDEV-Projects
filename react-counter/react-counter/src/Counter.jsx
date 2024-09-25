import React, {useState} from 'react';
export default function Counter () {
    const [count, setCount] = useState (0)

    const incrementCount = () => {
        setCount(c => c + 1)
    }

    const decrementCount = () => {
        setCount(c => c - 1)
    }

    const resetCount = () => {
        setCount(c => c = 0)
    }
    return (
        <div className="container">
            <p className='counter-container'>
                Counter: <br /> {count}
            </p>
            &nbsp;
            <button className="container-button-increment" onClick = {incrementCount}>increment</button>

            <button className="container-button-reset" onClick = {resetCount}>reset</button>
        
            <button className="container-button-decrement" onClick = {decrementCount}>decrement</button>

        </div>
    )
}