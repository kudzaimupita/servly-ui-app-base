import classNames from 'classnames'
import { SidePanelContentProps } from './SidePanelContent'
import withHeaderItem from '@/utils/hoc/withHeaderItem'
import { useAppDispatch } from '@/store'
import type { CommonProps } from '@/@types/common'
import { openCart } from '@/store/slices/wallet/cartUiSlice'
import { BsBell, BsCart2 } from 'react-icons/bs'
import { Avatar, Button } from '@/components/ui'
import { FaBitcoin } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import { GrConnect } from 'react-icons/gr'
import { connectWallet } from '@/store/slices/wallet/walletSlice'

type SidePanelProps = SidePanelContentProps & CommonProps

const _SidePanel = (props: SidePanelProps) => {
    const dispatch = useAppDispatch()

    const { className, ...rest } = props

    const openPanel = () => {
        dispatch(openCart())
    }

    const isWalletConnected = useSelector(
        (state) => state.cart.wallet.isConnected,
    )

    return (
        <>
            {isWalletConnected ? (
                <div>
                    <div
                        className={classNames(
                            'flex rounded-3xl border border-neutral-700',
                            className,
                        )}
                    >
                        <div className="flex items-center justify-between px-1 md:items-start   rounded-3xl ">
                            <div className="">
                                <div className=" px-3 flex items-center gap-2">
                                    <Avatar
                                        shape="circle"
                                        size={25}
                                        className="bg-orange-500"
                                        icon={<FaBitcoin />}
                                    />
                                    <div>
                                        <div className="font-bold text-gray-900 dark:text-gray-100 mt-1">
                                            0.012 BTC
                                        </div>
                                        {/* <div className="text-xs">Available</div> */}
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center justify-between px-1 md:items-start   rounded-3xl border border-neutral-700 ">
                                <div className="p-0.5">
                                    <div className=" px-3 flex items-center gap-2">
                                        <Avatar
                                            shape="circle"
                                            size={25}
                                            className="bg-yellow-500"
                                        />
                                        <div>
                                            <div className="font-bold text-gray-900 dark:text-gray-100">
                                                xfsdg...sdafas
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <Button onClick={()=>dispatch(disconnectWallet())} size='sm' variant='plain'  icon={<GrConnect  />} className='flex bg-black'>Disconnect Wallet</Button> */}
                </div>
            ) : (
                <Button
                    size="sm"
                    variant="plain"
                    icon={<GrConnect />}
                    className="flex bg-black"
                    onClick={() => dispatch(connectWallet())}
                >
                    Connect Wallet
                </Button>
            )}
            <div className={classNames('text-2xl', className)}>
                <BsBell />
            </div>
            <div
                className={classNames('text-2xl', className)}
                onClick={openPanel}
                {...rest}
            >
                <BsCart2 />
            </div>
        </>
    )
}

const SidePanel = withHeaderItem(_SidePanel)

export default SidePanel
