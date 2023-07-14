import styled from "styled-components";

export const NavbarWrapper = styled.div`
    font-family: 'Mukta', sans-serif;
    position: relative;
    height: 0px;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    column-gap: 80px;
    width: 100%;
    padding: 30px 35px 0px 35px;
    max-width: 1520px;
    margin: 0 auto;
    z-index: 15;
    cursor: pointer;
`

export const NavLink = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    cursor: pointer;

    img {
        @media screen and (max-width: 992px){
            max-width: 100px;
            height: 70px;
        }
    }
`
