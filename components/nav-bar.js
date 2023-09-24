// components/Navbar.js

import React, { useState } from 'react';
import styled from 'styled-components';

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 10px;
  }
`;

const Logo = styled.h1`
  font-size: 1.5rem;
  margin: 0;

  @media (max-width: 768px) {
    margin-bottom: 10px;
  }
`;

const NavLinks = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  align-items: center;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const NavLink = styled.li`
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <NavbarContainer>
      <Logo>ArtZen</Logo>
      <button onClick={toggleMenu}>Menu</button>
      {isOpen && (
        <NavLinks>
          <NavLink>Home</NavLink>
          <NavLink>About</NavLink>
          <NavLink>Gallery</NavLink>
          <NavLink>Contact</NavLink>
        </NavLinks>
      )}
    </NavbarContainer>
  );
};

export default Navbar;
