import React, { useState } from 'react';
import './header.css'

const Header = () => {
    const [value, setValue] = useState('');

    function handleChange(event) {
        setValue(event.target.value);
    }

    let listArray = []

    return (
        <header>
            <div>
                <h1>
                    To Do List
                </h1>
            </div>
            <div>
                <input
                    type='text' 
                    placeholder='Type...'
                    value={value}
                    onChange={handleChange}/>
                <button onClick={listArray += value}>
                    Add
                </button>
            </div>
        </header>
    )
}

export default Header;