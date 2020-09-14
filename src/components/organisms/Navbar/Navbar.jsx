import React, { useState } from "react";
import styled from "styled-components";
import { Text, MenuIcon, Link } from "@app-components";
import Logo from "@app-components/assets/images/Logo";
import navItems from "@app-data/main-nav.json";

const StyledNavbar = styled.nav`
  background-color: ${props => props.theme.color.monochrome[900]};
  border-bottom: 1px solid ${props => props.theme.color.monochrome[700]};
  padding: ${props => props.theme.spacing.sm}px 0;
  position: fixed;
  width: 100%;
  box-shadow: ${props => props.scrolling && props.theme.shadow.sm};
  transition: box-shadow 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
`;

const Container = styled.div`
  max-width: 1224px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Brand = styled.div`
  margin-right: auto;
`;

const BrandLink = styled(Link)`
  padding: 0px;
`;

const Menu = styled.div`
  @media ${props => props.theme.devices.max_tablet} {
    text-align: center;
    width: 100%;
    position: absolute;
    overflow-y: scroll;
    background-color: ${props => props.theme.color.monochrome[900]};
    top: 64px;
    height: 100vh;
    z-index: 1;
    box-shadow: ${props => props.theme.elevation.default};
    opacity: 0;
    visibility: hidden;
    transform: scale(0.85);
    transition: all 300ms;
    overflow: hidden;

    ${props =>
      props.toggle &&
      `
      opacity: 1;
      visibility: visible;
      transform: scale(1);
    `}
  }
`;

const MenuLink = styled(Link)`
  padding: ${props => props.theme.spacing.xs}px
    ${props => props.theme.spacing.sm}px;
  display: inline-block;
  text-transform: uppercase;
  &:hover,
  &:active {
    border: 0px;
    outline: none !important;
  }

  /* Tablet and above */
  @media screen and (max-width: ${props => props.theme.mediaQuery.tablet}) {
    display: block;
    padding: ${props => props.theme.spacing.medium}px 0;
  }
`;

const MobileMenuHeading = styled.div`
  color: ${props => props.theme.color.monochrome[200]};
  padding: ${props => props.theme.spacing["xl"]}px 0;
  letter-spacing: 2px;
  display: none;

  @media ${props => props.theme.devices.max_tablet} {
    display: block;
  }
`;

const Toggler = styled.button`
  font-size: ${props => props.theme.typography.size.h6}px;
  border: none;
  cursor: pointer;
  height: 32px;
  display: none;
  background: transparent;

  @media ${props => props.theme.devices.max_tablet} {
    display: block;
  }
`;

const Navbar = ({ scrolling }) => {
  const [toggle, setToggle] = useState(false);

  return (
    <StyledNavbar scrolling={scrolling}>
      <Container>
        <Brand>
          <BrandLink to="/" aria-label="brand logo">
            <Logo />
          </BrandLink>
        </Brand>

        <Menu toggle={toggle}>
          <MobileMenuHeading>
            <Text size="large">Navigation</Text>
          </MobileMenuHeading>

          {navItems.map(item => (
            <MenuLink key={item.label} to={item.url} external={item.external}>
              {item.label}
            </MenuLink>
          ))}
        </Menu>

        <Toggler onClick={() => setToggle(!toggle)} aria-label="Menu">
          <MenuIcon toggle={toggle} />
          {/* <FiMenu /> */}
        </Toggler>
      </Container>
    </StyledNavbar>
  );
};

export default Navbar;
