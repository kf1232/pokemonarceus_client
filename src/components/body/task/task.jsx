import './task.css'
import React from 'react';


function Task({ task: { id, s1, s2, s3, s4, s5 } }){
    return(
        <tr>
            <td> {id} </td>
            <td> {s1 ? <button class='taskCounter'>{s1}</button> : null} </td>
            <td> {s2 ? <button class='taskCounter'>{s2}</button> : null} </td>
            <td> {s3 ? <button class='taskCounter'>{s3}</button> : null} </td>
            <td> {s4 ? <button class='taskCounter'>{s4}</button> : null} </td>
            <td> {s5 ? <button class='taskCounter'>{s5}</button> : null} </td>
        </tr>
    )
}

export default Task