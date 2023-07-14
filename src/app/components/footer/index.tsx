import React from 'react'
import styled from "styled-components";
import Linkedin from '../../../assets/linkedin.svg'
import Github from '../../../assets/github.svg'
import Image from 'next/image';

const FooterWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 30px;
    padding: 15px;

    h2 {
        font-family: Arial, Helvetica, sans-serif;
        font-size: 14px;
        color: white;
    }

    a {
        text-decoration: none;
    }
`



export default function Footer() {
    return (
        <FooterWrapper>
            <h2>All rights of ©BandaiNamco - Made by Carlos Ridolfi</h2>
            <a href='https://www.linkedin.com/in/carlos-ridolfi/' target='_blank'>
                <Image
                    src={Linkedin}
                    alt='linkedin'
                    width={30}
                    height={30}
                />
            </a>
            <a href='https://github.com/CarlosRidolfi' target='_blank'>
                <Image
                    src={Github}
                    alt='github'
                    width={30}
                    height={30}
                />
            </a>
        </FooterWrapper>
    )
}
