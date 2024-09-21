
import { Container } from '@/components/shared';
import { useEffect, useState } from 'react';
import NFTCard from './components/NftCard';
import sampleData from '../nftData.json';

const MarketPlace = () => {
    const [nftData, setNftData] = useState([]);
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [animateCart, setAnimateCart] = useState(false);

    useEffect(() => {
        const fetchData = () => {
            setTimeout(() => {
                setNftData(sampleData);
            }, 500);
        };

        fetchData();
    }, []);

    return (
        <Container className="">
            <div className="grid w-full sm:grid-cols-2 xl:grid-cols-4 gap-2 mx-84">
                {nftData.map((nft, i) => (
                    <NFTCard
                        key={i}
                        nft={nft}
                        index={i}
                        hoveredIndex={hoveredIndex}
                        setHoveredIndex={setHoveredIndex}
                        animateCart={animateCart}
                        setAnimateCart={setAnimateCart}
                    />
                ))}
            </div>
        </Container>
    );
};

export default MarketPlace;
