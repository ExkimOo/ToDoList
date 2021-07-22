import React from 'react';

const Task = (props) => {
    console.log('123');
        return(
        <li>
            {props.message}
        </li>
        );
}

export default Task;