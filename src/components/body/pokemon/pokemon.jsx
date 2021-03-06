import './pokemon.css'
import React from 'react';

import Task from '../task/task.jsx'

function Pokemon({ pokemon: { id, name, tasks } }){
    return(
        <table class='pokemon'>
            <h2>{id} {name}  <button> press me </button> </h2>
            {tasks.map((obj)=><Task key={obj.id} task={obj} pid={name}/>)}
        </table>
    )
}

export default Pokemon

/* Graveyard

import { useDispatch, useSelector } from 'react-redux';
import { add, remove } from '../../../store/itemstate';

    const dispatch = useDispatch();
    const itemArray = useSelector( state => state.item.acquiredItems );

    const completed = itemArray.indexOf(uniqueName) !== -1

    const onClick = (itemState) => {
        if(itemState)
            dispatch(add(uniqueName))
        else
            dispatch(remove(uniqueName))
    }


!completed ? 
    <div className='item'>
        <button onClick={() => onClick(!completed)}> X </button>
        <img src={`https://cdn.warframestat.us/img/${imageName}`} 
                alt={imageName} />

        <div className='infoBox'>
            {masteryReq} {name}
        </div>        
    </div>

: null
*/