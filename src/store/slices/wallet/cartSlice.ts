import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type CartItem = {
    id: string
    name: string
    bitcoin: number
    price: number
    count: number
    nft: string
    bg: string
}

const initialState: CartItem[] = []

const cartSlice = createSlice({
    name: `${'SHOPPING'}/cart`,
    initialState,
    reducers: {
        addToCart(state, action: PayloadAction<CartItem>) {
            const item = action.payload
            const existingItem = state.find(
                (cartItem) => cartItem.id === item.id,
            )

            if (existingItem) {
                existingItem.count += 1
                existingItem.totalPrice =
                    existingItem.price * existingItem.count
                existingItem.totalBitcoin =
                    existingItem.bitcoin * existingItem.count
            } else {
                state.push({
                    ...item,
                    count: 1,
                    totalPrice: item.price,
                    totalBitcoin: item.bitcoin,
                })
            }
        },
        removeFromCart(state, action: PayloadAction<string>) {
            const itemId = action.payload
            const itemIndex = state.findIndex((item) => item.id === itemId)

            if (itemIndex !== -1) {
                const item = state[itemIndex]

                if (item.count > 1) {
                    item.count -= 1
                    item.totalPrice = item.price * item.count
                    item.totalBitcoin = item.bitcoin * item.count
                } else {
                    state.splice(itemIndex, 1)
                }
            }
        },
    },
})

export const { addToCart, removeFromCart } = cartSlice.actions
export default cartSlice.reducer
