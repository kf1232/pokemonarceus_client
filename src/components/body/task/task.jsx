import './task.css'
import React from 'react';


function Task({ task: { id, s1, s2, s3, s4, s5 } }){
    return(
        <div>
            <button>{id}</button>
            {s1 ? <button>{s1}</button> : null}
            {s2 ? <button>{s2}</button> : null}
            {s3 ? <button>{s3}</button> : null}
            {s4 ? <button>{s4}</button> : null}
            {s5 ? <button>{s5}</button> : null}
        </div>
    )
}

export default Task