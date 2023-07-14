import '../../../app/globals.css'
import React from 'react'
import { NavLink, NavbarWrapper } from './style'
import Image from 'next/image'
import Logo1 from '../../../assets/logo.webp'
import Logo2 from '../../../assets/logo2.png'


export default function Navbar() {
    return (
        <NavbarWrapper>
            <NavLink href='https://en.bandainamcoent.eu/tekken/tekken-8' target='_blank'>
                <Image 
                    src={Logo1}
                    alt='logo'
                    width={300}
                />
            </NavLink>
            <NavLink href='https://www.bandainamcoent.com/pt_br' target='_blank'>
                <Image 
                    src={Logo2}
                    alt='logo'
                    width={100}
                />
            </NavLink>
        </NavbarWrapper>
    )
}
