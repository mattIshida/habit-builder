import { createSlice } from '@reduxjs/toolkit'

const initialState = { value: '' }

const flowSlice = createSlice({
    name: 'flow',
    initialState: initialState,

    // immer lib lets us write state change as mutation, but clones state an replace with new state
    reducers: {
        updateFlow(state, action) {
            state.value = action.payload
        },
        resetFlow(state){
            state.value = initialState
        }
    }
})

export const { updateFlow, resetFlow } = flowSlice.actions
export default flowSlice.reducer