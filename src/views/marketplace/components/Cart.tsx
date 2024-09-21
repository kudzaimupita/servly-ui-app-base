import { Avatar } from '@/components/ui'
import { removeFromCart } from '@/store'
import { BsTrash } from 'react-icons/bs'
import { FaBitcoin } from 'react-icons/fa'
import { useSelector, useDispatch } from 'react-redux'
import LazyLoad from 'react-lazyload'

const Cart = () => {
    const cart = useSelector((state) => state.cart.cart)
    const dispatch = useDispatch()

    const calculateTotalBitcoin = () => {
        return cart.reduce((acc, item) => acc + item.totalBitcoin, 0)
    }

    const calculateTotalPrice = () => {
        return cart.reduce((acc, item) => acc + item.price, 0)
    }

    const taxRate = 0.05
    const totalBitcoin = calculateTotalBitcoin()
    const taxAmount = totalBitcoin * taxRate
    const grandTotal = totalBitcoin + taxAmount
    const totalPrice = calculateTotalPrice()

    return (
        <div className="p-3">
            <p className="text-2xl text-white">My Basket</p>
            <div className="flex items-center justify-between px-1 md:items-start bg-neutral-900 mt-2 rounded-lg mt-5">
                <div className="my-3">
                    <div className="py-2 px-3 flex items-center gap-2">
                        <Avatar
                            shape="circle"
                            className="bg-orange-500"
                            icon={<FaBitcoin />}
                        />
                        <div>
                            <div className="font-bold text-gray-900 dark:text-gray-100">
                                BTC
                            </div>
                            <div className="text-xs">Available</div>
                        </div>
                    </div>      <div
                        className="absolute right-12 top-32
                         transform -translate-y-1/2 p-2 text-white hover:text-red-800"
                    >
                     0.00312414 BTC
                    </div>
                </div>
          
            </div>

            {cart?.map((cartItem) => (
                <div
                    key={cartItem.id}
                    className="flex items-center justify-between px-1 md:items-start border border-neutral-600 mt-1 rounded-lg mt-2 relative"
                >
                    <div className="my-3 flex-1">
                        <div className="py-2 px-2 flex items-center gap-2">
                            <LazyLoad height={80} offset={100} once>
                                <div
                                    className="relative h-20 w-20 bg-cover bg-center rounded-lg"
                                    style={{
                                        backgroundImage: `url(${cartItem.bg})`,
                                    }}
                                >
                                    <img
                                        src={cartItem.nft}
                                        className="absolute inset-0 m-auto h-1/2 w-1/2 object-cover rounded-lg"
                                        alt={cartItem.name}
                                    />
                                </div>
                            </LazyLoad>
                            <div>
                                <div className="font-bold text-gray-900 dark:text-gray-100">
                                    {cartItem.name}: {cartItem.count}
                                </div>
                                <div className="text-xs">
                                    {cartItem.totalBitcoin} <span>BTC</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 text-red-600 hover:text-red-800"
                        onClick={() => dispatch(removeFromCart(cartItem.id))}
                    >
                        <BsTrash className="text-2xl text-orange-400" />
                    </button>
                </div>
            ))}

            <div className="mt-4 p-4 bg-neutral-900 rounded-lg">
                <div className="flex justify-between text-white">
                    <span>Tx Fee</span>
                    <span>
                        14,035 sats
                        <span className="text-gray-400">| $ 9.35</span>
                    </span>
                </div>
                <div className="flex justify-between text-white mt-2">
                    <span>Fee Savings</span>
                    <span>
                        5,035 sats
                        <span className="text-gray-400">| $ 3.35</span>
                    </span>
                </div>
                <div className="flex justify-between text-white mt-2">
                    <span>Time Estimate</span>
                    <span>30 minutes</span>
                </div>
                <div className="flex justify-between text-white mt-2 font-medium border-t border-gray-700">
                    <span className="text-xl">EXPECTED TOTAL</span>
                    <span className="text-md mt-1 font-medium">
                        {grandTotal.toFixed(4)}{' '}
                        <span className="text-orange-500">BTC </span>| ${' '}
                        {totalPrice.toFixed(2)}
                    </span>
                </div>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-4">
                <button className="relative h-12 w-full overflow-hidden border-2 border-orange-200 shadow-2xl before:absolute before:left-0 before:-ml-2 before:h-48 before:w-48 before:origin-top-right before:-translate-x-full before:translate-y-12 before:-rotate-90 before:bg-gray-900 before:transition-all before:duration-300 hover:text-white hover:shadow-black hover:before:-rotate-180">
                    <span className="relative z-10 font-medium text-orange-200">
                        ADD ANOTHER
                    </span>
                </button>
                <button className="relative h-12 w-full overflow-hidden border-2 border-orange-500 shadow-2xl before:absolute before:left-0 before:-ml-2 before:h-48 before:w-48 before:origin-top-right before:-translate-x-full before:translate-y-12 before:-rotate-90 before:bg-gray-900 before:transition-all before:duration-300 hover:text-white hover:shadow-black hover:before:-rotate-180">
                    <span className="relative z-10 font-medium text-orange-500">
                        CHECKOUT
                    </span>
                </button>
            </div>
        </div>
    )
}

export default Cart
