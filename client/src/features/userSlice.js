import { createSlice } from '@reduxjs/toolkit'

const initialState = { value: 100 }

const userSlice = createSlice({
    name: 'user',
    initialState: false,

    // immer lib lets us write state change as mutation, but clones state an replace with new state
    reducers: {
        addTen(state) {
            state.value += 10
        },
        subtractAmount(state, action) {
            state.value -= action.payload
        },
        clearUser: (state) => initialState 
    }
})

export const { addTen, subtractAmount, clearUser } = userSlice.actions
export default userSlice.reducer