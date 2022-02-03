import './body.css'
import React from 'react';

import {pkmnList} from '../../resources/pokedex'

import Pokemon from './pokemon/pokemon'

function Body() {
    return (
        <div class='body'>
            Body
            {pkmnList.sort((a,b)=> a.id > b.id ? 1 : -1)
                     .map((obj)=><Pokemon key={obj.id} pokemon={obj}/>)}.
        </div> 
    )
}

export default Body

/* Graveyard

{ useState }

import CoreLoader from './itemGroup/coreLoader.jsx'
import { useSelector } from 'react-redux';

const Items = require('warframe-items')

const wfState = useSelector( state => state.item.showWarframe);
const pmState = useSelector( state => state.item.showPrimary);
const seState = useSelector( state => state.item.showSecondary);
const meState = useSelector( state => state.item.showMelee);

var dataPull = new Items({ category: ['Warframes', 'Primary', 'Secondary', 'Melee'] });


var warframeList  = useState(dataPull.filter(i => i.category === 'Warframes'));
var primaryList   = useState(dataPull.filter(i => i.category === 'Primary'));
var secondaryList = useState(dataPull.filter(i => i.category === 'Secondary'));
var meleeList     = useState(dataPull.filter(i => i.category === 'Melee'));

<div>
    {wfState ? <CoreLoader list={warframeList}/> : null}
    {pmState ? <CoreLoader list={primaryList}/> : null}
    {seState ? <CoreLoader list={secondaryList}/> : null}
    {meState ? <CoreLoader list={meleeList}/> : null}
</div>
*/