import { createSlice } from '@reduxjs/toolkit'

const initialState = { 
    showCompleted: false,
    showWarframe: true,
    showPrimary: true,
    showSecondary: true,
    showMelee: true,
    acquiredItems: [] 
}

const itemSlice = createSlice({
  name: 'itemManager',
  initialState,
  reducers: {
    add(state, action){
        state.acquiredItems.push(action.payload);
    },
    remove(state, action){
        state.acquiredItems.splice(state.acquiredItems.indexOf(action.payload), 1);
    },
    reset(state){
        state.acquiredItems = []
    },
  },
})

export const { showAll, tComplete, tWarframe, tPrimary, tSecondary, tMelee, add, remove, reset } = itemSlice.actions
export default itemSlice.reducer