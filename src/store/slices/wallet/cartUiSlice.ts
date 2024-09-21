import { createSlice } from '@reduxjs/toolkit'

export type CartUIState = {
    isOpen: boolean
}

const initialState: CartUIState = {
    isOpen: false,
}

const cartUISlice = createSlice({
    name: `${'SHOPPING'}/cartUI`,
    initialState,
    reducers: {
        openCart(state) {
            state.isOpen = true
        },
        closeCart(state) {
            state.isOpen = false
        },
        toggleCart(state) {
            state.isOpen = !state.isOpen
        },
    },
})

export const { openCart, closeCart, toggleCart } = cartUISlice.actions
export default cartUISlice.reducer
