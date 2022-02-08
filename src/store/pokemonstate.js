import { createSlice } from '@reduxjs/toolkit'

const initialState = { 
showCompleted: false,
completePokemon: [] 
}

const pokemonSlice = createSlice({
    name: 'pokemonManager',
    initialState,
    reducers: {
        
        add(state, action){
        state.completePokemon.push(action.payload);
        },
        remove(state, action){
        state.completePokemon.splice(state.completePokemon.indexOf(action.payload), 1);
        },
        reset(state){
        state.completePokemon = []
        },
    },
})

export const { add, remove, reset } = pokemonSlice.actions
export default pokemonSlice.reducer