import React from 'react'
import { Container } from '../banner/style'
import styled from "styled-components";
import Image from 'next/image';
import Logo from '../../../assets/logo.webp'

const KingInfo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 10px;
    row-gap: 40px;
    padding: 20px;

    img {
        width: 100%;
        max-width: 600px;
        height: 150px;
    }

    iframe {
        width: 100%;
        max-width: 1060px;
        height: 600px;
    }
`

export default function Info() {
    return (
        <Container>
            <KingInfo>
                <Image 
                    src={Logo}
                    alt='king2'
                />
                <iframe src="https://www.youtube.com/embed/rTZhyVpmvxA" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
            </KingInfo>
        </Container>
    )
}
