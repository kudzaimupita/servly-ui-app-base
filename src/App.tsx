import { Provider, useSelector, useDispatch } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { PersistGate } from 'redux-persist/integration/react'
import store, { persistor, RootState } from './store'
import Theme from '@/components/template/Theme'
import Layout from '@/components/layouts'
import './locales'
import { Dialog } from './components/ui'
import Cart from './views/marketplace/components/Cart'
import { closeCart } from './store/slices/wallet/cartUiSlice'

function AppContent() {
    const isCartOpen = useSelector(
        (state: RootState) => state.cart?.cartUi?.isOpen,
    )
    const dispatch = useDispatch()
    return (
        <>
            <Dialog
                bodyOpenClassName={'bg-black overflow-auto'}
                contentClassName={'bg-[#14181C] '}
                isOpen={isCartOpen}
                onRequestClose={() => dispatch(closeCart())}
                onClose={() => dispatch(closeCart())}
            >
                <Cart />
            </Dialog>
            <Layout />
        </>
    )
}

function App() {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <BrowserRouter>
                    <Theme>
                        <AppContent />
                    </Theme>
                </BrowserRouter>
            </PersistGate>
        </Provider>
    )
}

export default App
