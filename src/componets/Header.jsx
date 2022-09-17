import React from 'react'
import { NavLink } from 'react-router-dom';
import Navbar from './Navbar';
import styled from "styled-components";

const Header = () => {
  return (
    <MainHeader>
        <NavLink to="/home">
            <img src='./images/logo.png' alt="logo" className='logo'/>
        </NavLink>
        <Navbar/>
    </MainHeader>
  )
}
const MainHeader = styled.header`
padding: 0 4.8rem;
height: 8rem;
background-color: ${({ theme }) => theme.colors.bg};
display: flex;
justify-content: space-between;
align-items: center;
position: fixed;
    z-index: 11;
    width: 100%;
.logo {
  height: auto;
  max-width: 20%;
}`;
export default Header;