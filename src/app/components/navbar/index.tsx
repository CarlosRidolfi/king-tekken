import '../../../app/globals.css'
import React from 'react'
import { NavbarWrapper } from './style'
import Image from 'next/image'
import Logo1 from '../../../assets/logo.webp'
import Logo2 from '../../../assets/logo2.png'


export default function Navbar() {
    return (
        <NavbarWrapper>
            <Image 
                src={Logo1}
                alt='logo'
                width={300}
            />
            <Image 
                src={Logo2}
                alt='logo'
                width={200}
            />
        </NavbarWrapper>
    )
}
