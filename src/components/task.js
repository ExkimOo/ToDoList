import React, { useState } from 'react';
import './task.css' 

const Task = (props) => {

    const [state, setState] = useState('unchecked')

    function toggleTask() {
        state === 'unchecked' ? setState('checked') : setState('unchecked');
    }

        return(
        <li className={state} onClick={toggleTask}>
            {props.message}
            <span className="close">x</span>
        </li>
        );
}

export default Task;