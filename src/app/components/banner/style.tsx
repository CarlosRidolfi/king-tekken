import styled from "styled-components";

export const Container = styled.div`
    position: relative;
    height: 100vh;
    overflow: hidden;

    video {
        pointer-events: none;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 0;
        object-fit: cover;
        opacity: 0.4;
    }
`

export const BannerWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    row-gap: 30px;
    max-width: 100%;
    height: 100vh;
    z-index: 9;
    margin-inline: auto;
    position: relative;
    margin-top: 130px;

    h1 {
        font-family: 'wild' !important;
        font-size: 250px;
        font-weight: 300;
        color: red;
        position: absolute;
        pointer-events: none;
    }

    #king {
        width: 100%;
        max-width: 1000px;
        object-fit: cover;

        @media screen and (max-height: 900px){
            max-width: 800px;
        }

        @media screen and (min-height: 1300px){
            max-width: 1500px;
        }
    }

    #arrowdown {
        position: absolute;
        margin-top: 600px;
        margin-bottom: 100px;
        margin-left: 80px;
        cursor: pointer;
        animation: bounce 1s ease infinite;

        @media screen and (max-height: 900px){
            margin-top: 400px;
        }

        @keyframes bounce {
            0% {
                transform: translateY(-10px);
            }
            50% {
                transform: translateY(0px);
            }
            100% {
                transform: translateY(-10px);
            }
        }
    }
`