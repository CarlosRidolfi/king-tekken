
import '../../../app/globals.css'
import React from 'react'
import Image from 'next/image'
import { Container, BannerWrapper} from './style'
import Navbar from '../navbar'
import King from '../../../assets/king.webp'
import ArrowDown from '../../../assets/arrowdown.png'

export default function Banner() {
    return (
        <Container>
            <video src={"/kingvideo.mp4"} autoPlay muted loop></video>
            <Navbar />
            <BannerWrapper>
                <Image 
                    src={King}
                    alt='king'
                    id='king'
                />
                <h1>King</h1>
                <Image 
                    src={ArrowDown}
                    alt='arrow'
                    id='arrowdown'
                    onClick={() => window.scroll({
                        top: 1000,
                        behavior: "smooth",
                    })}
                />
            </BannerWrapper>
        </Container>
    )
}
