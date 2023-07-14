import styled from "styled-components";

export const KingInfo = styled.div`
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

export const BuyNow = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 100px;
    justify-content: center;
    align-items: center;
    margin-bottom: 50px;
    row-gap: 30px;
    padding: 30px;

    h2 {
        font-family: 'Tektur', cursive;
        color: #f1cd7f;
        font-size: 60px;
        text-align: center;
    }

    img {
        max-width: 450px;
        height: 450px;
        animation: zoom 2.5s ease infinite;

        @keyframes zoom {
            0% {
                transform: scale(1);
            }
            50% {
                transform: scale(1.1);
            }
            100% {
                transform: scale(1);
            }
        }
    }
`

export const Platforms = styled.div`
    display: flex;
    column-gap: 30px;
`