import React, { useState } from "react";
import styled from "styled-components";
import Link from "@app-components/atoms/Link";
import Text from "@app-components/assets/Typography";
import Logo from "@app-components/assets/Logo";
import navItems from "@app-data/main-nav.json";
import { FiMenu } from "react-icons/fi";
import { motion } from "framer-motion";

const StyledNavbar = styled.nav`
  position: static;
  display: flex;
  justify-content: flex-end;
  top: 0px;
  left: 0;
  padding: ${props => props.theme.spacing.sm}px
    ${props => props.theme.spacing.large}px;
  border-bottom: 1px solid ${props => props.theme.color.monochrome[700]};
  background-color: ${props => props.theme.color.monochrome[900]};
`;

const Brand = styled.div`
  display: inline-block;
  margin-right: auto;
`;

const BrandLink = styled(Link)`
  padding: 0px;
`;

const Menu = styled(motion.div)`
  @media ${props => props.theme.devices.max_tablet} {
    text-align: center;
    width: 100%;
    position: absolute;
    overflow-y: scroll;
    right: 0px;
    background-color: ${props => props.theme.color.monochrome[900]};
    height: 100vh;
    top: 64px;
    box-shadow: ${props => props.theme.elevation.default};
    display: ${props => (props.toggler ? "block" : "none")};
  }
`;

const MenuLink = styled(Link)`
  display: inline-block;
  text-transform: uppercase;
  padding: ${props => props.theme.spacing.xs}px
    ${props => props.theme.spacing.sm}px;

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
      <Brand>
        <BrandLink to="/">
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
    </StyledNavbar>
  );
};

export default Navbar;
