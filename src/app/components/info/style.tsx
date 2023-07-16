import styled from "styled-components";
import BgInfo from '../../../assets/bginfo.jpg'

export const InfosWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 80px;
    row-gap: 80px;
    font-family: 'Tektur', cursive;
    background: url(${BgInfo.src});
    background-size: cover;
    -webkit-box-shadow: -1px 11px 12px -5px rgba(0,0,0,0.75);
    -moz-box-shadow: -1px 11px 12px -5px rgba(0,0,0,0.75);
    box-shadow: -1px 11px 12px -5px rgba(0,0,0,0.75);

    @media screen and (max-width: 900px){
        padding: 30px;
    }
`

export const FirstRow = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row-reverse;
    column-gap: 80px;

    
    @media screen and (max-width: 992px){
        max-width: 475px;
        flex-direction: column;
        row-gap: 80px;
    }

    img {
        width: 100%;
        height: 350px;
        border: 2px solid yellow;
        -webkit-box-shadow: -1px -1px 16px 4px rgba(217,235,82,1);
        -moz-box-shadow: -1px -1px 16px 4px rgba(217,235,82,1);
        box-shadow: -1px -1px 16px 4px rgba(217,235,82,1);

        @media screen and (max-width: 1360px){
            max-width: 500px;
            height: 300px;
        }
    }
`

export const SecondRow = styled(FirstRow)`
    flex-direction: row;

    @media screen and (max-width: 992px){
        flex-direction: column;
        row-gap: 80px;
    }
`

export const RowsText = styled.h3`
    font-size: 24px;
    font-size: 300;
    color: #f1cd7f;
    max-width: 600px;

    @media screen and (max-width: 1360px){
        font-size: 18px;
    }
`
