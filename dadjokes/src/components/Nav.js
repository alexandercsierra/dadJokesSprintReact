import React from 'react'
import {NavLink} from 'react-router-dom'
import styled from 'styled-components'

const Nav = () => {

    const signout = () =>{
        localStorage.clear();
    }

    return (
        <NavBar>
            <Links to='/' exact={true}>home</Links>
            <Links to='/login'>login</Links>
            <Links to='/signup'>signup</Links>
            <Links to='/jokes'>jokes</Links>
            <Links to='/' exact={true} onClick={signout}>Signout</Links>
        </NavBar>
    )
}

export default Nav

const NavBar = styled.nav`
    margin: 0 auto;
    padding: 1% 30%;
    display: flex;
    justify-content: space-around;
    background: black;
`;
const Links = styled(NavLink)`
    color: dodgerblue;
    font-weight: 900;
    font-size: 1.2rem;
    text-decoration: none;

    &:hover{
        color: #f1f1f1;
    }
`;