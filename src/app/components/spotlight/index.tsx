import React from 'react'
import { KingInfo, BuyNow, Platforms } from './style'
import Image from 'next/image';
import Logo from '../../../assets/logo.webp'
import TekkenPs5 from '../../../assets/tekkenps5.webp'

export default function Spotlight() {
    return (
        <>
            <KingInfo>
                <Image 
                    src={Logo}
                    alt='king2'
                />
                <iframe src="https://www.youtube.com/embed/rTZhyVpmvxA" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
            </KingInfo>
            <BuyNow>
                <h2>PRE-ORDER NOW</h2>
                <Platforms>
                    <Image 
                        src={TekkenPs5}
                        alt='ps5'
                    />
                </Platforms>
            </BuyNow>
        </>
    )
}
