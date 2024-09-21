
import { useState } from 'react';
import { FaCartPlus } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import LazyLoad from 'react-lazyload';
import { Spinner } from '@/components/ui';
import { addToCart } from '@/store';

const NFTCard = ({ nft, index, hoveredIndex, setHoveredIndex, animateCart, setAnimateCart }) => {
    const dispatch = useDispatch();
    const isWalletConnected = useSelector((state) => state.cart.wallet.isConnected);

    const handleAddToCart = (nft) => {
        if (!isWalletConnected) {
            alert('Please connect wallet');
            return;
        }
        setAnimateCart(true);
        dispatch(addToCart(nft));
        setTimeout(() => {
            setAnimateCart(false);
        }, 200);
    };

    return (
        <div
            className="border rounded-[10px] relative border-neutral-800"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
        >
            <div className="relative flex flex-col rounded-[10px] bg-clip-border p-2">
                <LazyLoad height={256} offset={100} once>
                    <div
                        className="relative w-full h-64 bg-cover bg-center rounded-lg"
                        style={{ backgroundImage: `url(${nft.bg})` }}
                    >
                        <img
                            src={nft.nft}
                            className="absolute inset-0 m-auto h-1/2 w-1/2 object-cover rounded-lg"
                            alt=""
                        />
                        {hoveredIndex === index && (
                            <button
                                className={`absolute top-3 right-3 p-2 bg-black bg-opacity-70 rounded-full cursor-pointer transition-transform duration-300`}
                                onClick={() => handleAddToCart(nft)}
                            >
                                {animateCart ? (
                                    <Spinner />
                                ) : (
                                    <FaCartPlus size={24} />
                                )}
                            </button>
                        )}
                        <button className="absolute top-3 left-3 flex items-center justify-center rounded-full bg-opacity-70 bg-black p-2">
                            <div className="flex h-full w-full items-center justify-center rounded-full text-sm">
                                {nft.bitcoin.toFixed(6)}
                                <span className="ml-1 text-orange-500"> BTC </span>
                                <span className="mx-2 text-gray-600">|</span>
                                $ {nft.price.toFixed(2)}
                            </div>
                        </button>
                    </div>
                </LazyLoad>
                <div className="flex items-center justify-between px-1 md:items-start bg-neutral-900 mt-2 rounded-lg">
                    <div className="m-2">
                        <p className="mt-1 text-sm font-medium text-gray-300 md:mt-2">
                            {nft.date}
                        </p>
                        <p className="text-xl font-medium text-white mt-2">
                            {nft.name}
                        </p>
                        <p className="text-lg font-medium text-orange-500 mt-1">
                            QTY: {nft.quantity}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NFTCard;
