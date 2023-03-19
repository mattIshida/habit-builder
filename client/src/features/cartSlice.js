import { createSlice } from '@reduxjs/toolkit'

const initialState = { cart: [] }

const cartSlice = createSlice({
    name: 'cart',
    initialState: initialState,

    // immer lib lets us write state change as mutation, but clones state an replace with new state
    reducers: {
        // addTen(state) {
        //     state.value += 10
        // },
        // subtractAmount(state, action) {
        //     state.value -= action.payload
        // },
        updateCart(state, action){
            console.log("action.payload", action.payload)
            state.cart = [action.payload]
        }
    }
})

export const { updateCart } = cartSlice.actions
export default cartSlice.reducer