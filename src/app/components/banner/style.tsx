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
    max-width: 900px;
    z-index: 9;
    margin: 0 auto;
    position: relative;

    h1 {
        font-family: 'wild' !important;
        font-size: 250px;
        font-weight: 300;
        color: red;
        position: absolute;
        pointer-events: none;
    }

    #king {
        margin-top: 100px;
        object-fit: cover;
        width: 100%;
        height: 1000px;
    }

    #arrowdown {
        position: absolute;
        margin-top: 600px;
        margin-left: 80px;
        cursor: pointer;
        animation: bounce 1s ease infinite;

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