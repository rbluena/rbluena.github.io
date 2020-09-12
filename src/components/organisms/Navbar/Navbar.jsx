import React, { useState } from "react";
import styled from "styled-components";
import Link from "@app-components/atoms/Link";
import Text from "@app-components/assets/Typography";
import Logo from "@app-components/assets/images/Logo";
import navItems from "@app-data/main-nav.json";
import { FiMenu } from "react-icons/fi";

const StyledNavbar = styled.nav`
  padding: ${props => props.theme.spacing.sm}px
    ${props => props.theme.spacing.large}px;
  border-bottom: 1px solid ${props => props.theme.color.monochrome[700]};
  background-color: ${props => props.theme.color.monochrome[900]};
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
    opacity: 0.95;
    box-shadow: ${props => props.theme.elevation.default};
    display: ${props => (props.toggler ? "block" : "none")};
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

  @media ${props => props.theme.devices.max_tablet} {
    display: block;
  }
`;

const Navbar = () => {
  const [toggler, setToggler] = useState(false);

  return (
    <StyledNavbar>
      <Container>
        <Brand>
          <BrandLink to="/" aria-label="brand logo">
            <Logo />
          </BrandLink>
        </Brand>

        <Menu toggler={toggler}>
          <MobileMenuHeading>
            <Text size="large">Navigation</Text>
          </MobileMenuHeading>

          {navItems.map(item => (
            <MenuLink key={item.label} to={item.url} external={item.external}>
              {item.label}
            </MenuLink>
          ))}
        </Menu>

        <Toggler onClick={() => setToggler(!toggler)} aria-label="Menu">
          <FiMenu />
        </Toggler>
      </Container>
    </StyledNavbar>
  );
};

export default Navbar;
