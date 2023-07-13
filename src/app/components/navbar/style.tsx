import styled from "styled-components";

export const NavbarWrapper = styled.div`
    font-family: 'Mukta', sans-serif;
    position: relative;
    height: 0px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    column-gap: 80px;
    width: 100%;
    padding: 40px 0px 0px 35px;
    max-width: 1520px;
    margin: 0 auto;
    z-index: 2;
    cursor: pointer;
`

export const NavLink = styled.a`
    text-decoration: none;
    font-size: 18px;
    color: #f2f2f2;
    cursor: pointer;
    opacity: .5;
    transition: all ease 1s;

    &:hover {
        opacity: 1;
    }
`
