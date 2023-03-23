import { createSlice } from '@reduxjs/toolkit'

const initialState = { active: false, expired: false, seconds:0, started:false }

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
        },
        setTimer(state, action){
            state.seconds=action.payload
        }
        ,decrementTimer(state){
            state.seconds -=1
        },
        startTimer(state){
            state.started = true
        }, 
        resetTimer(state){
            state.expired = false
        }
        // ,
        // subtractAmount(state, action) {
        //     state.value -= action.payload
        // }
    }
})

export const { toggleActive, expireTimer, setTimer, decrementTimer, startTimer, resetTimer } = timerSlice.actions
export default timerSlice.reducer