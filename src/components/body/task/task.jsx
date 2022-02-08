import './task.css'
import React from 'react';


function Task({ task: { id, s1, s2, s3, s4, s5 }, pID}){
    return(
       <div>
           <label for={id}>{id}</label>
           {s1 ? <input class='test' type="button" id={id} name={id} value={s1}></input> : null }
           {s2 ? <input type="button" id={id} name={id} value={s2}></input> : null }
           {s3 ? <input type="button" id={id} name={id} value={s3}></input> : null }
           {s4 ? <input type="button" id={id} name={id} value={s4}></input> : null }
           {s5 ? <input type="button" id={id} name={id} value={s5}></input> : null }
       </div>
        
    )
}

export default Task


/*

    <td> {s1 ? <button type='radio' class=''>{s1}</button> : null} </td>
    <td> {s2 ? <button type='radio' class=''>{s2}</button> : null} </td>
    <td> {s3 ? <button type='radio' class=''>{s3}</button> : null} </td>
    <td> {s4 ? <button type='radio' class=''>{s4}</button> : null} </td>
    <td> {s5 ? <button type='radio' class=''>{s5}</button> : null} </td>

*/