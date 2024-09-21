import { createSlice } from '@reduxjs/toolkit'

export type walletState = {
    isConnected: boolean
}

const initialState: walletState = {
    isConnected: false,
}

const walletSlice = createSlice({
    name: `${'SHOPPING'}/wallet`,
    initialState,
    reducers: {
        connectWallet(state) {
            state.isConnected = true
        },
        disconnectWallet(state) {
            state.isConnected = false
        },
    },
})

export const { connectWallet, disconnectWallet } = walletSlice.actions
export default walletSlice.reducer
