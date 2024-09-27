import React, {useState} from 'react';
export default function Counter () {
    const [count, setCount] = useState (0)
    
    const addFiveCount = () => {
        setCount(c => c + 5)
    }
    const incrementCount = () => {
        setCount(c => c + 1)
    }

    const decrementCount = () => {
        setCount(c => c - 1)
    }

    const random = () => {
        if (count > 0){
            setCount(c => c = Math.floor(Math.random() * -100));
        } else if (count < 0){
            setCount(c => c = Math.floor(Math.random() * 100));
        } else {
            setCount(c => c = Math.floor(Math.random() * 100));
        }
    };
    
    const resetCount = () => {
        setCount(c => c = 0)
    }

    const minusFiveCount = () => {
        setCount(c => c - 5)
    }
    return (
        <div className="container">
            <p className='counter-container'>
                Counter: <br /> {count}
            </p>
            &nbsp;

            <button className="container-button-addFiveCount" onClick = {addFiveCount}>+5</button>
            <button className="container-button-increment" onClick = {incrementCount}>increment</button>
            <button className="container-button-random" onClick = {random}>random</button>
            <button className="container-button-reset" onClick = {resetCount}>reset</button>       
            <button className="container-button-decrement" onClick = {decrementCount}>decrement</button>
            <button className="container-button-minusFiveCount" onClick = {minusFiveCount}>-5</button>

        </div>
    )
}