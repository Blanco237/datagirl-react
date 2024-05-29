import React, { useEffect, useState } from 'react'
import globals from '../components/components.module.css'
import Input from '../components/input/Input';

async function fetchUsers () {
    const something = await fetch('https://jsonplaceholder.typicode.com/users');  
    const data = await something.json()
    console.log(data)
}

function Counter() {
    const [count, setCount] = useState(0)
    const [factor, setFactor] = useState(1);

    useEffect(function () {
        console.log('Counter Mounted');
        fetchUsers();
    }, [])

    useEffect(function () {
        console.log('Count changed to', count)

        return function () {
            console.log('Counter Unmounted')
        }
    }, [count, factor])

    function add() {
       const newValue = count + factor;
       setCount(newValue)
    }

    function subtract() {
        const newValue = count - factor;
        setCount(newValue)
    }

    function handleChange(e) {
        
        const value = parseInt(e.target.value);
        setFactor(value);
    }

  return (
    <div>
        <h1>Counter</h1>
        <div className={globals.flex} style={{gap: '2rem'}}>
            <button onClick={subtract}>Subtract</button>
            <h3>{count}</h3>
            <button onClick={add}>Add</button>
        </div>
        <div className={globals.flex} style={{gap: '1.5rem', marginTop: '1rem'}}>
            <label>Add/Subtract By:</label>
            <input type='number' value={factor} onChange={handleChange} />
        </div>
    </div>
  )
}

export default Counter