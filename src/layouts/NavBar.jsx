import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import Headroom from 'react-headroom';
import logo from '../../static/logo/cosb.png';

const StyledLink = styled(Link)`
  display: flex;
  font-weight: 700;
  align-items: center;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: flex-end;
  font-family: ${props => props.theme.fontFamily.body};
  font-weight: 500;
  font-size: 1.1rem;
  align-items: center;
`;

const NavBar = () => (
  <div>
    {/* <Headroom style={{ marginBottom: '2rem' }}> */}
    <StyledLink style={{ position: 'fixed' }} to="/">
      <img
        style={{ width: '10rem', zIndex: '10' }}
        src={logo}
        alt="Santa Barbara Logo"
      />
    </StyledLink>
    <Nav>
      <Link to="/">Home</Link>
      <Link to="/blog">Blog</Link>
      <Link to="/about">About</Link>
    </Nav>
    {/* </Headroom> */}
  </div>
);

export default NavBar;
