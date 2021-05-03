import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'

const Navbar = () => {
    return (
        <NavContainer>
            <NavWrapper>
                <NavLink to='/'>Launches</NavLink>
            </NavWrapper>

            <NavWrapper>
                <NavLink to='/ships'>Ships</NavLink>
            </NavWrapper>

            <NavWrapper>
                <NavLink to='/crew'>Crew</NavLink>
            </NavWrapper>
        </NavContainer>
    )
}

export default Navbar

export const NavContainer = styled.nav`
    height: 4rem;
    width: 100%;
    background: rgba(0,0,0,0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    z-index: 5;
`

export const NavWrapper = styled.div`
    padding: 0 2rem;
`

export const NavLink = styled(Link)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    &:hover {
        border-bottom: 3px solid #FEF9EF;
    }
`