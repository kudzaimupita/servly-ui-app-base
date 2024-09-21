import { combineReducers } from '@reduxjs/toolkit'
import cart from './cartSlice'
import cartUi from './cartUiSlice'
import wallet from './walletSlice'

const reducer = combineReducers({
    cartUi,
    cart,
    wallet,
})

export * from './cartSlice'

export default reducer
