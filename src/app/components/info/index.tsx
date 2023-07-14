import React from 'react'
import Image from 'next/image';
import KingImage1 from '../../../assets/king3.gif'
import KingImage2 from '../../../assets/king4.gif'
import { InfosWrapper, FirstRow, RowsText, SecondRow } from './style'

export default function Info() {
    return (
        <InfosWrapper>
            <FirstRow>
                <Image 
                    src={KingImage1}
                    alt='kingimage1'
                />
                <RowsText>King is a prominent character in the Tekken fighting game series, created by the Japanese company Bandai Namco Entertainment. The character has appeared in every main installment of the Tekken series since the first game&apos;s release in 1994. However, it&apos;s important to note that Tekken is an ongoing franchise, and the information provided here is accurate up until September 2021.</RowsText>
            </FirstRow>
            <SecondRow>
            <Image 
                src={KingImage2}
                alt='kingimage2'
            />
            <RowsText>The character of King is known for his imposing appearance, strength, and acrobatic wrestling techniques. He has a muscular build, and his fighting style primarily revolves around powerful throws, grapples, and strikes. King&apos;s moveset incorporates various wrestling moves inspired by real-life professional wrestling and lucha libre styles, making him a unique and visually exciting character to play.</RowsText>
            </SecondRow>
        </InfosWrapper>
    )
}
