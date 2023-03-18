import { createSlice } from '@reduxjs/toolkit'

const initialState = { active: false, expired: false }

const timerSlice = createSlice({
    name: 'timer',
    initialState,

    // immer lib lets us write state change as mutation, but clones state an replace with new state
    reducers: {
        toggleActive(state) {
            state.active = !state.active
        },
        expireTimer(state){
            state.expired = true
        }
        // ,
        // subtractAmount(state, action) {
        //     state.value -= action.payload
        // }
    }
})

export const { toggleActive, expireTimer } = timerSlice.actions
export default timerSlice.reducer